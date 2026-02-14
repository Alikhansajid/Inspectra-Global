"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="text-teal-400 w-8 h-8" />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none text-white">INSPECTRA</span>
                <span className="text-teal-400 text-xs font-semibold tracking-widest uppercase">Global</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Global Sourcing & Inspection experts specializing in textiles, garments, and factory quality control. Providing transparency and accuracy since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-teal-600 pl-3">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {NAV_ITEMS.slice(0, 5).map(item => (
                <li key={item.path}>
                  <Link href={item.path} className="hover:text-teal-400 transition-colors flex items-center">
                    <span className="mr-2">›</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-teal-600 pl-3">Inspection Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/inspections" className="hover:text-teal-400 transition-colors flex items-center"><span className="mr-2">›</span> Pre-Production Inspection</Link></li>
              <li><Link href="/inspections" className="hover:text-teal-400 transition-colors flex items-center"><span className="mr-2">›</span> During Production Inspection</Link></li>
              <li><Link href="/inspections" className="hover:text-teal-400 transition-colors flex items-center"><span className="mr-2">›</span> Pre-Shipment Inspection</Link></li>
              <li><Link href="/inspections" className="hover:text-teal-400 transition-colors flex items-center"><span className="mr-2">›</span> Final Random Inspection</Link></li>
              <li><Link href="/inspections" className="hover:text-teal-400 transition-colors flex items-center"><span className="mr-2">›</span> Loading Supervision</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-teal-600 pl-3">Contact Us</h4>
            <ul className="space-y-5 text-slate-400">
              <li className="flex items-start">
                <MapPin className="text-teal-400 mr-4 mt-1 flex-shrink-0" size={20} />
                <span>341 D Type Canal Road, Faisalabad, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-teal-400 mr-4 flex-shrink-0" size={20} />
                <span>+92 305 5012061</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-teal-400 mr-4 flex-shrink-0" size={20} />
                <span>info@inspectraglobal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2025 Inspectra Global. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
