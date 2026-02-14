"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, PhoneCall } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleWhatsApp = () => {
    window.open('https://wa.me/+923055311891', '_blank');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-semibold">
          Chat with Us
        </span>
      </button>

      {/* Floating Inquiry Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="fixed bottom-6 left-6 z-50 bg-teal-600 text-white p-4 rounded-full shadow-2xl hover:bg-teal-700 transition-all hover:scale-110 flex items-center justify-center group"
      >
        <PhoneCall size={28} />
      </button>

      {/* Contact Popup */}
      {showPopup && (
        <div className="fixed bottom-24 left-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 animate-in slide-in-from-bottom-5 duration-500 overflow-hidden">
          <div className="bg-navy p-4 flex justify-between items-center text-white">
            <div>
              <h4 className="font-bold">Need Assistance?</h4>
              <p className="text-xs text-slate-300">Our experts are online.</p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="text-white hover:text-teal-400 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm text-slate-600 mb-4">
              Get a free consultation for your inspection needs. Leave your details below.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full text-sm p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full text-sm p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="w-full bg-teal-600 text-white py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors">
                <Send size={16} /> Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
