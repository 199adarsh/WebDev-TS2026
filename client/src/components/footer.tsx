import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook as FacebookIcon,
  Github as GithubIcon,
  Calendar as CalendarIcon,
  Instagram as InstagramIcon,
  Linkedin as LinkedinIcon,
  Twitter as TwitterIcon,
  Youtube as YoutubeIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon
} from 'lucide-react';

export function MinimalFooter() {
  const year = new Date().getFullYear();

  const company: Array<{ title: string; href: string }> = [
    // No team links available since developers page was removed
  ];

  const resources = [
    {
      title: 'Events',
      href: '/events',
    },
    {
      title: 'Sponsors',
      href: '/sponsors',
    },
    {
      title: 'Home',
      href: '/',
    },
  ];

  const socialLinks = [
    {
      icon: <FacebookIcon className="size-4" />,
      link: '#',
    },
    {
      icon: <GithubIcon className="size-4" />,
      link: '#',
    },
    {
      icon: <InstagramIcon className="size-4" />,
      link: '#',
    },
    {
      icon: <LinkedinIcon className="size-4" />,
      link: '#',
    },
    {
      icon: <TwitterIcon className="size-4" />,
      link: '#',
    },
    {
      icon: <YoutubeIcon className="size-4" />,
      link: '#',
    },
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="col-span-1 lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <CalendarIcon className="size-8 text-red-600" />
                <span className="text-xl font-bold text-white">Tech Symposium</span>
              </Link>
              <p className="text-gray-400 max-w-md mb-6">
                DKTE's National Level Technical Symposium - Where innovation meets narrative. 
                Join us for cutting-edge competitions, workshops, and networking opportunities.
              </p>
            
            </div>

            {/* Resources Section */}
            <div className="col-span-1">
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {resources.map(({ href, title }, i) => (
                  <Link
                    key={i}
                    className="block text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    to={href}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Section - Hidden since no team page available */}
            {company.length > 0 && (
              <div className="col-span-1">
                <h3 className="text-white font-semibold mb-4">Team</h3>
                <div className="space-y-2">
                  {company.map(({ href, title }, i) => (
                    <Link
                      key={i}
                      className="block text-gray-400 hover:text-white text-sm transition-colors duration-200"
                      to={href}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MailIcon className="size-5 text-red-600" />
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <p className="text-gray-400 text-sm">info@techsymposium.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="size-5 text-red-600" />
                <div>
                  <p className="text-white text-sm font-medium">Phone</p>
                  <p className="text-gray-400 text-sm">+91 12345 67890</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="size-5 text-red-600" />
                <div>
                  <p className="text-white text-sm font-medium">Venue</p>
                  <p className="text-gray-400 text-sm">DKTE Campus, Ichalkaranji</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {year} Tech Symposium. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
