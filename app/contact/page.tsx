"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Clock, CheckCircle, ArrowRight, BadgeCheck } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="pt-20 overflow-hidden">
            {/* Refactored Hero */}
            <section className="bg-navy py-48 text-white relative text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-blue-900"></div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-10 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"
                />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-teal-400 font-bold uppercase tracking-[0.4em] text-sm mb-6 block"
                    >
                        Global Partnership Desk
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter"
                    >
                        Connect <span className="text-teal-500 italic">Today.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Ready to secure your quality and optimize your sourcing?
                        Our global team is standing by to provide a technical consultation.
                    </motion.p>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-24">
                        {/* Contact Info & Global Presence */}
                        <div className="lg:w-1/3 space-y-16">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl font-bold text-navy mb-10 tracking-tight text-center lg:text-left">Technical Desks</h3>
                                <div className="space-y-10">
                                    <div className="flex items-start gap-8 group">
                                        <div className="bg-teal-50 p-6 rounded-3xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-sm">
                                            <MapPin size={32} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-navy mb-2">Corporate HQ</h4>
                                            <p className="text-slate-600 font-light text-lg">341 D Type Canal Road, Faisalabad, Pakistan</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-8 group">
                                        <div className="bg-teal-50 p-6 rounded-3xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-sm">
                                            <Phone size={32} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-navy mb-2">Global Inquiry</h4>
                                            <p className="text-slate-600 font-light text-lg">+92 305 5311891 <br /><span className="text-sm font-bold opacity-50 uppercase tracking-widest">24/7 Priority Desk</span></p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-8 group">
                                        <div className="bg-teal-50 p-6 rounded-3xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-sm">
                                            <Mail size={32} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-navy mb-2">Email Support</h4>
                                            <p className="text-slate-600 font-light text-lg">info@inspectraglobal.com</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-navy p-12 rounded-[3rem] text-white shadow-3xl text-center"
                            >
                                <MessageSquare className="w-16 h-16 mb-8 text-teal-400 mx-auto" />
                                <h4 className="text-3xl font-bold mb-6 tracking-tight">WhatsApp Priority</h4>
                                <p className="text-xl text-slate-400 mb-10 font-light">Direct line to our senior merchandising team for urgent booking.</p>
                                <a
                                    href="https://wa.me/+923055311891"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-teal-500 text-navy px-10 py-5 rounded-2xl font-black text-lg hover:bg-teal-400 transition-all shadow-xl"
                                >
                                    START LIVE CHAT <ArrowRight size={24} />
                                </a>
                            </motion.div>
                        </div>

                        {/* Expanded Inquiry Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-2/3"
                        >
                            <div className="bg-slate-50 p-12 md:p-20 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                    <Globe size={300} className="text-navy" />
                                </div>

                                <h3 className="text-4xl font-bold text-navy mb-12 tracking-tighter">Strategic Partnership Inquiry</h3>
                                <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Full Name</label>
                                            <input type="text" placeholder="e.g. John Doe" className="w-full p-6 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all shadow-sm" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Company Name</label>
                                            <input type="text" placeholder="Your Global Brand" className="w-full p-6 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all shadow-sm" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Professional Email</label>
                                            <input type="email" placeholder="john@example.com" className="w-full p-6 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all shadow-sm" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Primary Requirement</label>
                                            <select className="w-full p-6 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all shadow-sm appearance-none">
                                                <option>Apparel Buying & Sourcing</option>
                                                <option>3rd Party QA Inspection (AQL)</option>
                                                <option>Ethical & Compliance Auditing</option>
                                                <option>Fabric Lab Testing</option>
                                                <option>Merchandising Support</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-slate-700 uppercase tracking-widest px-1">Project Detailed Description</label>
                                        <textarea rows={6} placeholder="Describe your product categories, factory locations, and required timeline..." className="w-full p-6 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all shadow-sm"></textarea>
                                    </div>
                                    <button className="w-full bg-teal-500 text-navy py-6 rounded-2xl font-black text-xl hover:bg-teal-400 transition-all flex items-center justify-center gap-4 shadow-3xl transform hover:translate-y-[-5px]">
                                        SUBMIT INQUIRY <Send size={24} />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Badges section */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-16 opacity-30">
                        <div className="flex items-center gap-3 grayscale"><Clock size={40} /><span className="text-3xl font-black italic tracking-tighter">FASTRACK</span></div>
                        <div className="flex items-center gap-3 grayscale"><CheckCircle size={40} /><span className="text-3xl font-black italic tracking-tighter">ISO_9001</span></div>
                        <div className="flex items-center gap-3 grayscale"><BadgeCheck size={40} /><span className="text-3xl font-black italic tracking-tighter">WRAP_CERT</span></div>
                        <div className="flex items-center gap-3 grayscale"><Globe size={40} /><span className="text-3xl font-black italic tracking-tighter">GLOBAL_S</span></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
