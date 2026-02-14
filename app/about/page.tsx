"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TEXTILE_IMAGES } from '../../constants';
// Added BadgeCheck to the lucide-react imports
import { Shield, Target, Eye, Users, Award, Landmark, ScrollText, HeartHandshake, Building2, Globe, BadgeCheck } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="pt-20 overflow-hidden">
            {/* Refactored Hero */}
            <section
                className="relative py-48 bg-navy text-white overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.9), rgba(0, 33, 71, 0.9)), url(${TEXTILE_IMAGES.team})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-teal-400 font-bold uppercase tracking-[0.4em] text-sm mb-6 block"
                    >
                        The Buying House of Choice
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter"
                    >
                        Global. <span className="text-teal-500 italic">Trusted.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed"
                    >
                        Managing the complexity of global apparel sourcing so you don't have to.
                        Over 15 years of excellence in textile engineering and vendor management.
                    </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500"></div>
            </section>

            {/* Buying House Story */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative z-10">
                                <img src={"https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg"} />
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute -bottom-10 -left-10 bg-teal-600 text-white p-12 rounded-[3rem] shadow-3xl hidden md:block"
                                >
                                    <Building2 size={60} className="mb-6" />
                                    <h4 className="text-3xl font-bold mb-2">Asia-Pacific Hub</h4>
                                    <p className="text-teal-100 font-light">Presence in all major hubs</p>
                                </motion.div>
                            </div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-50 rounded-full -z-0"></div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-5xl md:text-7xl font-bold text-navy mb-10 tracking-tight leading-none">Engineering Integrity.</h2>
                            <div className="space-y-8 text-xl text-slate-600 font-light leading-relaxed">
                                <p>
                                    Inspectra Global was founded by textile engineers who saw a fundamental flaw in offshore sourcing:
                                    the lack of un-biased technical oversight. We built our Buying House on the principle that
                                    quality is not an variable—it is a measurable outcome.
                                </p>
                                <p>
                                    Our &quot;No Kickback&quot; policy has redefined the industry. By maintaining strict firewalls between our
                                    inspectors and factory management, we ensure that every tech-pack is followed to the millimeter.
                                </p>
                                <p>
                                    Today, we manage a network of over 50+ audited factories across Asia, specializing in knit, woven,
                                    denim, and high-performance activewear.
                                </p>
                                <div className="pt-10 grid grid-cols-2 gap-12 border-t border-slate-100">
                                    <div className="space-y-2">
                                        <h4 className="text-5xl font-bold text-navy tracking-tighter">25K+</h4>
                                        <p className="text-sm text-teal-600 font-bold uppercase tracking-widest">Inspections / Year</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-5xl font-bold text-navy tracking-tighter">150+</h4>
                                        <p className="text-sm text-teal-600 font-bold uppercase tracking-widest">On-Ground Staff</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="py-32 bg-slate-900 text-white relative">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-16 rounded-[4rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <Target className="text-teal-400 mb-8 w-16 h-16" />
                            <h3 className="text-4xl font-bold mb-6 tracking-tight">Our Mission</h3>
                            <p className="text-xl text-slate-400 leading-relaxed font-light">
                                To provide global buyers with absolute technical visibility through data-driven inspections,
                                eliminating the risks of offshore production and fostering ethical sustainability.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-16 rounded-[4rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <Eye className="text-teal-400 mb-8 w-16 h-16" />
                            <h3 className="text-4xl font-bold mb-6 tracking-tight">Our Vision</h3>
                            <p className="text-xl text-slate-400 leading-relaxed font-light">
                                To be the undisputed gold standard for supply chain integrity, where every thread is accounted for
                                and every partner is held to the highest standard of international excellence.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Sourcing Map Intro */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <img src={" https://images.pexels.com/photos/4715444/pexels-photo-4715444.jpeg"} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="inline-block p-4 bg-teal-50 rounded-2xl mb-8">
                                <Globe className="text-teal-600" size={40} />
                            </div>
                            <h2 className="text-5xl font-bold text-navy mb-8 tracking-tighter">A Global Perspective.</h2>
                            <p className="text-2xl text-slate-600 leading-relaxed font-light mb-10">
                                While our roots are deep in Asia&apos;s manufacturing heartlands, our outlook is global.
                                We understand the regulatory requirements for EU, US, and Oceanic markets.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-center gap-4 text-xl text-navy font-bold">
                                    <BadgeCheck className="text-teal-500" /> Multi-Country Compliance Management
                                </li>
                                <li className="flex items-center gap-4 text-xl text-navy font-bold">
                                    <BadgeCheck className="text-teal-500" /> Real-time Logistics Coordination
                                </li>
                                <li className="flex items-center gap-4 text-xl text-navy font-bold">
                                    <BadgeCheck className="text-teal-500" /> ESG & Sustainability Auditing
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pakistan Coverage Section */}
            <section className="py-24 bg-teal-900 text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tighter">Strategic Coverage in Pakistan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
                            <h3 className="text-2xl font-bold mb-4 text-teal-300">Lahore</h3>
                            <p className="text-slate-300">The hub of knitwear and denim. Our dedicated teams monitor major vertical units here.</p>
                        </div>
                        <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
                            <h3 className="text-2xl font-bold mb-4 text-teal-300">Karachi</h3>
                            <p className="text-slate-300">Port city logistics and home textile excellence. We manage final inspections and shipping here.</p>
                        </div>
                        <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
                            <h3 className="text-2xl font-bold mb-4 text-teal-300">Faisalabad</h3>
                            <p className="text-slate-300">The textile city. Massive capacity for woven fabrics and bedding.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
