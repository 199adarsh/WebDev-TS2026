"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ShaderBackgroundProps {
  className?: string
}

export function ShaderBackground({ className }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: false, // Disable antialiasing for performance
      alpha: true,
      powerPreference: "high-performance" // Request high performance GPU
    })
    
    // Set pure black background
    renderer.setClearColor(0x000000, 1.0)
    
    // Set lower pixel ratio for better performance
    const pixelRatio = Math.min(window.devicePixelRatio, 1.5)
    renderer.setPixelRatio(pixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;

        #define NUM_OCTAVES 1

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u*u*(3.0-2.0*u);

          float res = mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
          return res * res;
        }

        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.5;
          vec2 shift = vec2(100);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec2 p = ((gl_FragCoord.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(3.0, -2.0, 2.0, 3.0);
          vec2 v;
          vec4 o = vec4(0.0);

          // More dynamic animation with multiple time scales
          float f = 1.2 + fbm(p + vec2(iTime * 1.5, iTime * 0.8)) * 0.3;
          
          // Add flowing movement
          vec2 flow = vec2(sin(iTime * 0.7) * 0.1, cos(iTime * 0.5) * 0.1);
          p += flow;

          // Keep 10 iterations but make them more dynamic
          for (float i = 0.0; i < 10.0; i++) {
            // More complex movement patterns
            float timeOffset = iTime * (0.8 + i * 0.05);
            v = p + cos(i * i + (timeOffset + p.x * 0.04) * 0.02 + i * vec2(8.0, 6.0)) * (2.0 + sin(timeOffset) * 0.5);
            
            // Dynamic tail effect
            float tailNoise = fbm(v + vec2(iTime * 0.3, i * 0.1)) * 0.2 * (1.0 - (i / 10.0));
            
            // More animated intensity with multiple frequencies
            float intensity = 0.5 + 0.4 * sin(i * 0.15 + timeOffset) + 0.2 * cos(i * 0.25 - timeOffset * 1.5);
            intensity = clamp(intensity, 0.2, 1.0);
            
            // Enhanced blue color with more visibility
            vec4 auroraColor = vec4(
              0.1 + intensity * 0.15, // Enhanced red tint
              0.4 + intensity * 0.3, // Enhanced green
              0.7 + intensity * 0.4, // Enhanced blue
              1.0
            );
            
            // More dynamic contribution calculation
            float dynamicFactor = 1.2 + sin(timeOffset * 2.0) * 0.4;
            vec4 currentContribution = auroraColor * intensity * dynamicFactor * exp(sin(i * i + timeOffset * 0.4)) / length(max(v, vec2(v.x * f * 0.01, v.y * 1.2)));
            
            // Enhanced thinness
            float thinnessFactor = smoothstep(0.0, 1.0, i / 10.0) * (0.4 + 0.3 * sin(timeOffset));
            o += currentContribution * (1.0 + tailNoise * 0.5) * thinnessFactor;
          }

          // Enhanced pulsing effect
          float pulse = 0.9 + 0.3 * sin(iTime * 1.2);
          o = tanh(pow(o / 40.0, vec4(1.4))) * pulse;
          gl_FragColor = o;
        }
      `
    })

    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    let frameId: number
    let lastTime = performance.now()
    
    const animate = () => {
      const currentTime = performance.now()
      const deltaTime = (currentTime - lastTime) / 1000
      lastTime = currentTime
      
      // Cap delta time to prevent large jumps
      const cappedDeltaTime = Math.min(deltaTime, 0.1)
      
      material.uniforms.iTime.value += cappedDeltaTime
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight)
    }
    
    // Debounce resize events
    let resizeTimeout: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(handleResize, 100)
    }
    
    window.addEventListener('resize', debouncedResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', debouncedResize)
      clearTimeout(resizeTimeout)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className={className} />
  )
}
