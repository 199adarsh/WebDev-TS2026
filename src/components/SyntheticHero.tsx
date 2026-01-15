"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

import { Button } from "../components/ui/button";

gsap.registerPlugin(SplitText, useGSAP);

interface ShaderPlaneProps {
	vertexShader: string;
	fragmentShader: string;
	uniforms: { [key: string]: { value: unknown } };
}

const ShaderPlane = ({
	vertexShader,
	fragmentShader,
	uniforms,
}: ShaderPlaneProps) => {
	const meshRef = useRef<THREE.Mesh>(null);
	const { size } = useThree();

	useFrame((state) => {
		if (meshRef.current) {
			const material = meshRef.current.material as THREE.ShaderMaterial;
			material.uniforms.u_time.value = state.clock.elapsedTime * 0.5;
			material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);
		}
	});

	return (
		<mesh ref={meshRef}>
			<planeGeometry args={[2, 2]} />
			<shaderMaterial
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				uniforms={uniforms}
				side={THREE.FrontSide}
				depthTest={false}
				depthWrite={false}
			/>
		</mesh>
	);
};

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  varying vec2 vUv;
  uniform float u_time;
  uniform vec3 u_resolution;
  uniform sampler2D u_channel0;

  vec2 toPolar(vec2 p) {
      float r = length(p);
      float a = atan(p.y, p.x);
      return vec2(r, a);
  }

  vec2 fromPolar(vec2 polar) {
      return vec2(cos(polar.y), sin(polar.y)) * polar.x;
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
      vec2 p = 6.0 * ((fragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y);

      vec2 polar = toPolar(p);
      float r = polar.x;
      float a = polar.y;

      vec2 i = p;
      float c = 0.0;
      float rot = r + u_time + p.x * 0.100;
      for (float n = 0.0; n < 4.0; n++) {
          float rr = r + 0.15 * sin(u_time*0.7 + float(n) + r*2.0);
          p *= mat2(
              cos(rot - sin(u_time / 10.0)), sin(rot),
              -sin(cos(rot) - u_time / 10.0), cos(rot)
          ) * -0.25;

          float t = r - u_time / (n + 30.0);
          i -= p + sin(t - i.y) + rr;

          c += 2.2 / length(vec2(
              (sin(i.x + t) / 0.15),
              (cos(i.y + t) / 0.15)
          ));
      }

      c /= 8.0;

      vec3 baseColor = vec3(0.15, 0.45, 0.8);
      vec3 finalColor = baseColor * smoothstep(0.0, 1.0, c * 0.7);

      fragColor = vec4(finalColor, 1.0);
  }

  void main() {
      vec4 fragColor;
      vec2 fragCoord = vUv * u_resolution.xy;
      mainImage(fragColor, fragCoord);
      gl_FragColor = fragColor;
  }
`;

interface HeroProps {
	title: string;
	description: string;
	badgeText?: string;
	badgeLabel?: string;
	ctaButtons?: Array<{ text: string; href?: string; primary?: boolean }>;
	microDetails?: Array<string>;
}

const SyntheticHero = ({
	title = "An experiment in light, motion, and the quiet chaos between.",
	description = "Experience a new dimension of interaction — fluid, tactile, and alive. Designed for creators who see beauty in motion.",
	badgeText = "2026",
	badgeLabel = "TECH SYMPOSIUM",
	ctaButtons = [
		{ text: "Explore the Canvas", href: "#explore", primary: true },
		{ text: "Learn More", href: "#learn-more" },
	],
	microDetails = [
		"National-level competitions",
		"Cross-domain challenges",
		"Industry-aligned problem statements",
	],
}: HeroProps) => {
	const sectionRef = useRef<HTMLElement | null>(null);
	const badgeWrapperRef = useRef<HTMLDivElement | null>(null);
	const headingRef = useRef<HTMLHeadingElement | null>(null);
	const paragraphRef = useRef<HTMLParagraphElement | null>(null);
	const ctaRef = useRef<HTMLDivElement | null>(null);
	const microRef = useRef<HTMLUListElement | null>(null);
	const shaderUniforms = useMemo(
		() => ({
			u_time: { value: 0 },
			u_resolution: { value: new THREE.Vector3(1, 1, 1) },
		}),
		[],
	);

	useGSAP(
		() => {
			if (!headingRef.current) return;

			document.fonts.ready.then(() => {
				const split = new SplitText(headingRef.current!, {
					type: "lines",
					wordsClass: "hero-lines",
				});

				gsap.set(split.lines, {
					filter: "blur(16px)",
					yPercent: 24,
					autoAlpha: 0,
					scale: 1.04,
					transformOrigin: "50% 100%",
				});

				if (badgeWrapperRef.current) {
					gsap.set(badgeWrapperRef.current, { autoAlpha: 0, y: -8 });
				}
				if (paragraphRef.current) {
					gsap.set(paragraphRef.current, { autoAlpha: 0, y: 8 });
				}
				if (ctaRef.current) {
					gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
				}

				const microItems = microRef.current
					? Array.from(microRef.current.querySelectorAll("li"))
					: [];
				if (microItems.length > 0) {
					gsap.set(microItems, { autoAlpha: 0, y: 6 });
				}

				const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

				if (badgeWrapperRef.current) {
					tl.to(
						badgeWrapperRef.current,
						{ autoAlpha: 1, y: 0, duration: 0.5 },
						0,
					);
				}

				tl.to(
					split.lines,
					{
						filter: "blur(0px)",
						yPercent: 0,
						autoAlpha: 1,
						scale: 1,
						duration: 0.9,
						stagger: 0.12,
					},
					0.1,
				);

				if (paragraphRef.current) {
					tl.to(
						paragraphRef.current,
						{ autoAlpha: 1, y: 0, duration: 0.5 },
						"-=0.55",
					);
				}

				if (ctaRef.current) {
					tl.to(
						ctaRef.current,
						{ autoAlpha: 1, y: 0, duration: 0.5 },
						"-=0.35",
					);
				}

				if (microItems.length > 0) {
					tl.to(
						microItems,
						{ autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 },
						"-=0.25",
					);
				}
			});
		},
		{ scope: sectionRef },
	);

	return (
		<section
			ref={sectionRef}
			className="relative flex items-center justify-center min-h-screen md:min-h-screen overflow-hidden"
		>
			<div className="absolute inset-0 z-0">
				<Canvas>
					<ShaderPlane
						vertexShader={vertexShader}
						fragmentShader={fragmentShader}
						uniforms={shaderUniforms}
					/>
				</Canvas>
			</div>

				<div className="relative z-10 flex flex-col items-center text-center px-6">
					<div ref={badgeWrapperRef} className="mb-6">
						<div className="apple-glass-badge inline-flex items-center gap-3 px-[14px] py-[6px] rounded-full">
							<span className="text-[10px] font-medium tracking-[0.12em] text-sky-100/60 uppercase">
								{badgeLabel}
							</span>
							<span className="h-1 w-1 rounded-full bg-sky-400/40" />
							<span className="text-[11px] font-medium tracking-tight text-sky-200/70">
								{badgeText}
							</span>
						</div>
					</div>

					<h1
						ref={headingRef}
						className="text-4xl md:text-5xl lg:text-6xl max-w-5xl font-light tracking-[-0.02em] text-white mb-2 leading-[1.05] text-balance mx-auto"
						style={{
							fontVariationSettings: '"wght" 700',
							fontWeight: 700,
						}}
					>
						{title}
					</h1>

					<p
						ref={paragraphRef}
						className="text-sky-50 text-sm md:text-lg max-w-3xl mx-auto mt-2 mb-8 font-normal leading-[1.6] text-balance"
						style={{
							fontVariationSettings: '"wght" 400',
							opacity: 0.8,
						}}
					>
						{description}
					</p>

					<div
						ref={ctaRef}
						className="flex flex-wrap items-center justify-center gap-6"
					>
						{ctaButtons.map((button, index) => {
							const isPrimary = button.primary ?? index === 0;
							const classes = isPrimary
								? "apple-glass-button px-[20px] py-[10px] rounded-full text-[15px] font-medium text-white"
								: "apple-glass-button px-[20px] py-[10px] rounded-full text-[15px] font-medium text-sky-100 hover:text-white";

							// Only show first button on mobile
							if (index === 0) {
								if (button.href) {
									return (
										<Button
											key={index}
											variant={isPrimary ? undefined : "outline"}
											className={classes}
											asChild
										>
											<a href={button.href}>{button.text}</a>
										</Button>
									);
								}

								return (
									<Button
										key={index}
										variant={isPrimary ? undefined : "outline"}
										className={classes}
									>
										{button.text}
									</Button>
								);
							}
							return null;
						})}
					</div>

					{microDetails.length > 0 && (
						<ul
							ref={microRef}
							className="hidden md:flex mt-16 flex-wrap justify-center gap-12 text-[13px] font-normal tracking-tight text-sky-100/60 leading-[1.4]"
						>
							{microDetails.map((detail, index) => (
								<li key={index} className="flex items-center gap-2">
									<span className="h-1 w-1 rounded-full bg-sky-400/60" />
									<span style={{ fontVariationSettings: '"wght" 400', opacity: 0.7 }}>
										{detail}
									</span>
								</li>
							))}
						</ul>
					)}
				</div>
			
		</section>
	);
};

export default SyntheticHero;