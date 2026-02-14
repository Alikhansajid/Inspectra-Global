"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-navy p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Globe className="text-teal-400 w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl tracking-tight leading-none ${scrolled ? 'text-navy-900' : 'text-navy-900'}`}>INSPECTRA</span>
              <span className="text-teal-600 text-xs font-semibold tracking-widest uppercase">Global</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${pathname === item.path
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-slate-700'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all shadow-md active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-teal-600 transition-colors"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-white border-t`}>
        <div className="flex flex-col space-y-4 px-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-lg font-medium py-2 ${pathname === item.path ? 'text-teal-600' : 'text-slate-700'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-navy text-white text-center py-3 rounded-lg font-bold"
          >
            Request Inspection
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
