"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TEXTILE_IMAGES } from '../../constants';
import { Ruler, AlertTriangle, ScrollText, CheckCircle, Calculator } from 'lucide-react';
import Link from 'next/link';

const FabricInspection: React.FC = () => {
    return (
        <div className="pt-20 overflow-hidden bg-slate-50">
            {/* Hero Section */}
            <section
                className="relative py-32 bg-navy text-white text-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.95), rgba(0, 33, 71, 0.95)), url(${TEXTILE_IMAGES.fabricRolls})`,
                    backgroundSize: 'cover',
                }}
            >
                <div className="max-w-4xl mx-auto px-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-teal-400 font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
                    >
                        Raw Material Quality Control
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
                    >
                        Fabric Inspection
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-300 font-light"
                    >
                        ASTM D5430-07 Standard (4-Point System)
                    </motion.p>
                </div>
            </section>

            {/* Intro & Why Essential */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-4xl font-bold text-navy mb-6">Professional Fabric Inspection Services in Pakistan</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Quality control defines success in the textile export business. At <strong>Inspectra Global</strong>, we deliver precise and professional Fabric Inspection in Pakistan, ensuring every roll of fabric meets international buyer requirements.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Our qualified inspectors identify hidden flaws such as weaving errors, color shading, stains, and finishing defects long before shipping. By using advanced equipment and global methods, we help factories and exporters protect both their investment and brand reputation.
                            </p>

                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-navy mb-4">Why is it Essential?</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Pakistan’s textile sector powers global supply chains, yet one defective roll can break trust and cause financial loss. A strong Fabric Inspection strategy saves time, prevents rework, and ensures compliance with international AQL standards. We bridge the gap between mills and markets, providing objective evaluation that satisfies European and U.S. buyers alike.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <img src="https://images.pexels.com/photos/31047133/pexels-photo-31047133.jpeg" alt="Fabric Manufacturing Inspection" className="rounded-[3rem] shadow-2xl w-full h-[600px] object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The 4-Point System Explained */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-2 block">Our Methodology</span>
                        <h2 className="text-4xl font-bold text-navy">Our 4-Point Fabric Inspection System</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-slate-600">
                            We use the internationally recognized 4-Point System to classify and measure every defect found. Each roll is inspected under balanced lighting and checked meter by meter for precision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="space-y-4 mb-12">
                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-navy mb-2 flex items-center gap-2"><CheckCircle className="text-teal-500 w-5 h-5" /> Weaving & Construction</h4>
                                    <p className="text-sm text-slate-500">Detecting holes, knots, slubs, or broken ends.</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-navy mb-2 flex items-center gap-2"><CheckCircle className="text-teal-500 w-5 h-5" /> Color & Dyeing</h4>
                                    <p className="text-sm text-slate-500">Checking for shade differences, contamination, or printing faults.</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-navy mb-2 flex items-center gap-2"><CheckCircle className="text-teal-500 w-5 h-5" /> Finishing & Texture</h4>
                                    <p className="text-sm text-slate-500">Identifying distortion, shrinkage, or surface damage.</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-navy mb-2 flex items-center gap-2"><CheckCircle className="text-teal-500 w-5 h-5" /> Measurement Verification</h4>
                                    <p className="text-sm text-slate-500">Verifying GSM, width, and roll length accuracy.</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-4 bg-teal-50 rounded-xl flex items-center gap-4">
                                    <div className="bg-teal-100 p-2 rounded-full text-teal-700 font-bold min-w-[3rem] text-center">1 Pt</div>
                                    <span className="text-slate-700 font-medium">Defects up to 3 inches</span>
                                </div>
                                <div className="p-4 bg-teal-50 rounded-xl flex items-center gap-4">
                                    <div className="bg-teal-100 p-2 rounded-full text-teal-700 font-bold min-w-[3rem] text-center">2 Pt</div>
                                    <span className="text-slate-700 font-medium">Defects 3 to 6 inches</span>
                                </div>
                                <div className="p-4 bg-teal-50 rounded-xl flex items-center gap-4">
                                    <div className="bg-teal-100 p-2 rounded-full text-teal-700 font-bold min-w-[3rem] text-center">3 Pt</div>
                                    <span className="text-slate-700 font-medium">Defects 6 to 9 inches</span>
                                </div>
                                <div className="p-4 bg-red-50 rounded-xl flex items-center gap-4">
                                    <div className="bg-red-100 p-2 rounded-full text-red-700 font-bold min-w-[3rem] text-center">4 Pt</div>
                                    <span className="text-slate-700 font-medium">Defects over 9 inches / Holes</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-navy p-12 rounded-[3rem] text-white relative overflow-hidden h-full flex flex-col justify-center"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Calculator className="w-64 h-64" />
                            </div>
                            <h3 className="text-3xl font-bold mb-8">Acceptance Method</h3>
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                After inspection, we issue a digital report including photographs, grading charts, and defect maps. This documentation becomes your transparent proof of quality.
                            </p>
                            <div className="space-y-8 relative z-10">
                                <div>
                                    <p className="text-teal-400 font-bold text-sm uppercase tracking-wider mb-2">Formula</p>
                                    <div className="text-xl font-mono bg-white/10 p-4 rounded-xl">
                                        (Total Points × 3600) ÷ (Length × Width)
                                    </div>
                                </div>
                                <div>
                                    <p className="text-teal-400 font-bold text-sm uppercase tracking-wider mb-2">Standard Passing Grade</p>
                                    <p className="text-4xl font-bold">40 Points</p>
                                    <p className="text-slate-400 text-sm">per 100 square yards</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Fabrics We Inspect */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <img src={TEXTILE_IMAGES.fabricRolls} alt="Fabric Rolls" className="rounded-[3rem] shadow-2xl h-[500px] w-full object-cover" />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-4xl font-bold text-navy mb-8">Fabrics We Inspect</h2>
                            <p className="text-lg text-slate-600 mb-8">Our expertise extends across Pakistan’s entire textile spectrum. Every inspection is handled with care, ensuring consistency from mill to shipment.</p>

                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    "Cotton, viscose, polyester, and mixed blends",
                                    "Knitted, woven, and non-woven fabrics",
                                    "Denim, fleece, jersey, twill, and canvas",
                                    "Greige, printed, dyed, or coated materials"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                                        <span className="text-navy font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits & Coverage */}
            <section className="py-24 bg-teal-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl font-bold mb-8">Benefits of Choosing Inspectra Global</h2>
                            <p className="text-teal-200 mb-8 max-w-lg">When you partner with us, you gain a long-term ally in textile quality. Our services give exporters measurable improvements in quality and credibility.</p>
                            <ul className="space-y-6">
                                {[
                                    "Prevent costly rejections and returns",
                                    "Maintain buyer satisfaction through verified quality",
                                    "Receive clear, photo-based inspection reports",
                                    "Increase production efficiency by catching issues early",
                                    "Work with qualified local experts trained to global standards"
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle className="text-teal-400 w-6 h-6 flex-shrink-0 mt-1" />
                                        <span className="text-lg">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/10 p-10 rounded-[3rem] border border-white/10">
                            <h2 className="text-3xl font-bold mb-6">Service Coverage Across Pakistan</h2>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                We proudly serve all major industrial cities — <span className="text-white font-bold">Karachi, Lahore, Faisalabad, Sialkot, and Multan</span> — offering same-day scheduling and rapid report delivery.
                            </p>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                Whether you manage a weaving unit, dyeing mill, or sourcing agency, Inspectra Global provides flexible on-site inspections that fit your workflow.
                            </p>
                            <Link href="/contact" className="inline-block px-10 py-4 bg-white text-teal-900 rounded-full font-bold shadow-xl hover:bg-teal-50 transition-colors">
                                Schedule Inspection Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FabricInspection;
