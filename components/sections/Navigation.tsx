"use client";

import { useState } from 'react';
import { Brain, Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface NavigationProps {
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
}

const navigationItems = [
  { id: 'home', label: 'Home', href: '/' },
  { 
    id: 'services', 
    label: 'Services', 
    href: '/#services',
    dropdown: [
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'Natural Language Processing', href: '/services/natural-language-processing' },
      { label: 'Computer Vision', href: '/services/computer-vision' },
      { label: 'Data Analytics', href: '/services/data-analytics' },
      { label: 'Cloud SaaS Services', href: '/services/cloud-saas' },
    ]
  },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
  { id: 'careers', label: 'Careers', href: '/careers' },
];

export default function Navigation({ activeSection, onScrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNavClick = (sectionId: string, href: string) => {
    if (href.startsWith('/#')) {
      // Internal navigation - scroll to section
      onScrollToSection(sectionId);
    }
    // For external links, Next.js Link will handle navigation
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/devtechai-logo.png" 
              alt="DevTechAi.Org Logo" 
              width={32} 
              height={32}
              className="h-8 w-8"
              priority
            />
            <span className="text-xl font-bold text-white/90">DevTechAi.Org</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              item.dropdown ? (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id
                        ? 'text-white border-b-2 border-white'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                  {activeDropdown === item.id && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-64 bg-white/90 backdrop-blur-xl rounded-lg shadow-2xl border border-white/40 py-2 z-50"
                      onMouseEnter={() => setActiveDropdown(item.id)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 hover:text-slate-600 transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id, item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'text-white border-b-2 border-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transform hover:scale-110 transition-transform duration-300 text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/30 transform transition-all duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.id}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:text-white/80 transform hover:scale-105 transition-all duration-300"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.id && (
                      <div className="pl-6 space-y-1">
                        {item.dropdown.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            href={dropdownItem.href}
                            className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors duration-200"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.id, item.href)}
                    className="block px-3 py-2 text-base font-medium text-white hover:text-white/80 w-full text-left transform hover:scale-105 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}