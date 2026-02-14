"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TEXTILE_IMAGES } from '../../constants';
import { Search, Shield, Factory, FileText, CheckCircle, Microscope, Settings, BarChart, Truck, Award } from 'lucide-react';
import Link from 'next/link';

const Services: React.FC = () => {
    return (
        <div className="pt-20 overflow-hidden">
            {/* Refactored Hero */}
            <section
                className="relative py-48 bg-navy text-white overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.9), rgba(0, 33, 71, 0.9)), url(${TEXTILE_IMAGES.buyingHouse})`,
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
                        Full-Cycle Buying Solutions
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter"
                    >
                        Expert <span className="text-teal-500 italic">Capabilities.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        From yarn selection to final container seals, our technical services ensure
                        your supply chain is robust, ethical, and optimized for performance.
                    </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </section>

            {/* Services Grid */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold text-navy mb-6 tracking-tighter">Our Core Vertical Services</h2>
                        <p className="text-2xl text-slate-600 font-light max-w-4xl mx-auto">
                            We provide a specialized ecosystem of services designed to manage the high-risk nature of apparel manufacturing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { icon: <Search />, title: "Technical Inspection", desc: "Specialized knit and woven audits using international AQL Level II standards to detect and prevent defects." },
                            { icon: <Factory />, title: "Vendor Compliance", desc: "Social responsibility (BSCI/SEDEX) and structural audits to ensure your brand's reputation is protected." },
                            { icon: <FileText />, title: "Technical Merchandising", desc: "In-depth Time & Action (T&A) management, sample tracking, and tech-pack interpretation services." },
                            { icon: <Shield />, title: "Global Compliance", desc: "Ensuring products meet localized regulatory market requirements (REACH, OEKO-TEX, CPSIA)." },
                            { icon: <Truck />, title: "Logistics Oversight", desc: "On-site loading supervision, seal verification, and documentation prep for global container dispatch." },
                            { icon: <Microscope />, title: "Lab Grade Testing", desc: "Coordination with accredited 3rd party labs for colorfastness, shrinkage, and chemical composition tests." }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-12 bg-white rounded-[3rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-teal-600 group-hover:text-white transition-all">
                                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 40 })}
                                </div>
                                <h3 className="text-3xl font-bold text-navy mb-4 tracking-tight">{service.title}</h3>
                                <p className="text-xl text-slate-600 leading-relaxed font-light mb-6">{service.desc}</p>
                                <div className="w-12 h-1 bg-teal-500 group-hover:w-full transition-all duration-700 rounded-full"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lab Testing Focus */}
            <section className="py-32 bg-navy text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <img src={"   https://images.pexels.com/photos/8392618/pexels-photo-8392618.jpeg"} alt="Technical Lab" className="rounded-[4rem] shadow-3xl h-[600px] w-full object-cover" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter">Lab-Grade Excellence.</h2>
                        <p className="text-2xl text-slate-400 leading-relaxed font-light mb-12">
                            Beyond physical inspections, we manage rigorous chemical and structural testing to ensure fabric longevity and safety.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Colorfastness", icon: <Award className="text-teal-400" /> },
                                { title: "Dimensional Stability", icon: <BarChart className="text-teal-400" /> },
                                { title: "Fiber Analysis", icon: <Microscope className="text-teal-400" /> },
                                { title: "Tensile Strength", icon: <Settings className="text-teal-400" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                                    {item.icon}
                                    <span className="text-xl font-bold">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
