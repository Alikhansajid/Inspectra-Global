"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TEXTILE_IMAGES } from '../../constants';
import {
    Truck,
    Factory,
    BarChart3,
    Microscope,
    Scale,
    CheckCircle,
    XCircle,
} from 'lucide-react';

const Inspections: React.FC = () => {
    return (
        <div className="pt-20 overflow-hidden">
            {/* Refactored Hero */}
            <section
                className="relative py-48 bg-navy text-white overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.9), rgba(0, 33, 71, 0.9)), url(${TEXTILE_IMAGES.inspection})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-teal-400 font-bold uppercase tracking-[0.3em] text-sm mb-6 block"
                    >
                        Technical Audits & Quality Protocols
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter"
                    >
                        Scientific <span className="text-teal-500 italic">Precision.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Our uncompromising 3rd-party inspection protocols cover the entire lifecycle of your garment,
                        from raw yarn tests to final container loading supervision.
                    </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Technical Protocol Intro */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:w-1/3"
                        >
                            <div className="bg-slate-50 p-16 rounded-[4rem] flex items-center justify-center border border-slate-100 shadow-2xl relative">
                                <Microscope size={120} className="text-teal-600 animate-pulse" />
                                <div className="absolute -top-4 -right-4 bg-navy text-white px-6 py-2 rounded-full font-bold shadow-lg">ISO 17020</div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:w-2/3"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tight">Standardized Protocols</h2>
                            <p className="text-2xl text-slate-600 leading-relaxed font-light mb-10">
                                Our inspectors are equipped with digital calipers, calibrated light boxes, and GSM precision cutters.
                                We utilize the ANSI/ASQ Z1.4 (ISO 2859-1) statistical sampling standard to ensure objective pass/fail results.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {["AQL Level II", "Critical Zero Tolerance", "Symmetry Audits", "Fit-to-Form Checks", "Lab Grade Testing"].map((tag, i) => (
                                    <span key={i} className="px-6 py-3 bg-teal-50 text-teal-700 font-bold text-sm rounded-2xl border border-teal-100 shadow-sm">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* AQL Methodology Breakdown */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-navy mb-12 tracking-tighter">AQL Sampling Method (ISO 2859-1)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-teal-600 mb-4">Critical Defects (0.0)</h3>
                            <p className="text-slate-600">Zero tolerance for dangerous or unsafe conditions. Any critical defect results in immediate shipment rejection.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-teal-600 mb-4">Major Defects (2.5)</h3>
                            <p className="text-slate-600">Defects that could result in product failure or reduce usability. We adhere to the strict AQL 2.5 standard for majors.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-teal-600 mb-4">Minor Defects (4.0)</h3>
                            <p className="text-slate-600">Defects that do not reduce the usability of the product but deviate from the specified quality standards.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expanded Stages */}
            <div className="space-y-0">
                {/* PPI Section - Knitting */}
                <section className="py-32 bg-slate-50 border-y border-slate-100">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2"
                            >
                                <div className="inline-block p-4 bg-teal-500 rounded-3xl text-white mb-8 shadow-xl">
                                    <Factory size={40} />
                                </div>
                                <h2 className="text-5xl font-bold text-navy mb-8 tracking-tighter">Pre-Production (PPI)</h2>
                                <p className="text-2xl text-slate-600 mb-10 leading-relaxed font-light italic">
                                    &quot;Identifying defects at the yarn and knit stage saves 90% of rework costs.&quot;
                                </p>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <CheckCircle className="text-teal-600 w-8 h-8 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-xl font-bold text-navy mb-2">Fiber & Yarn Verification</h4>
                                            <p className="text-slate-600 leading-relaxed">Checking yarn count, twist, and moisture regain before the first loom is set.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <CheckCircle className="text-teal-600 w-8 h-8 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-xl font-bold text-navy mb-2">Knit Shade Grouping</h4>
                                            <p className="text-slate-600 leading-relaxed">Analyzing shade variation (A-B-C groupings) across knitting batches to prevent garment mismatch.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2"
                            >
                                <img src={"https://images.pexels.com/photos/3544567/pexels-photo-3544567.jpeg"} className="rounded-[4rem] shadow-3xl h-[600px] w-full object-cover" alt="Knitting Inspection" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* DPI Section - Sewing */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2"
                            >
                                <div className="inline-block p-4 bg-navy rounded-3xl text-white mb-8 shadow-xl">
                                    <BarChart3 size={40} />
                                </div>
                                <h2 className="text-5xl font-bold text-navy mb-8 tracking-tighter">During Production (DPI)</h2>
                                <p className="text-2xl text-slate-600 mb-10 leading-relaxed font-light">
                                    Audit of the live sewing floor once 25% of the order is completed to ensure the pilot run standard is maintained.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
                                        <h5 className="font-bold text-navy text-xl mb-4">SPI Consistency</h5>
                                        <p className="text-sm text-slate-500 leading-relaxed">Verification of Stitches Per Inch and seam strength across all operators.</p>
                                    </div>
                                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
                                        <h5 className="font-bold text-navy text-xl mb-4">Fit-to-Form</h5>
                                        <p className="text-sm text-slate-500 leading-relaxed">Live measurement audits against tech-packs to ensure correct sizing and grade rules.</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2"
                            >
                                <img src={"https://images.pexels.com/photos/7998342/pexels-photo-7998342.jpeg"} className="rounded-[4rem] shadow-3xl h-[600px] w-full object-cover" alt="Sewing Audit" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Final Audit & Container Loading */}
                <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2"
                            >
                                <div className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-6 block">The Final Gate</div>
                                <h2 className="text-5xl font-bold mb-8 tracking-tighter">Final Random & Dispatch (FRI)</h2>
                                <p className="text-xl text-slate-400 mb-12 leading-relaxed font-light">
                                    Once 100% produced and 80% packed, our inspectors verify quantities, packaging, and perform the final AQL gatekeeper check.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10">
                                        <div className="bg-teal-500/20 p-4 rounded-2xl">
                                            <Truck className="text-teal-400" size={32} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold">Carton Integrity Test</h4>
                                            <p className="text-sm text-slate-400">Drop tests and humidity checks for all export packaging.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10">
                                        <div className="bg-teal-500/20 p-4 rounded-2xl">
                                            <Scale className="text-teal-400" size={32} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold">Container Supervision</h4>
                                            <p className="text-sm text-slate-400">Verifying container seals, floor cleanliness, and moisture levels before loading.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2"
                            >
                                <div className="relative group overflow-hidden rounded-[4rem] shadow-2xl">
                                    <img src={TEXTILE_IMAGES.shipping} className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-1000" alt="Shipping Containers" />
                                    <div className="absolute inset-0 bg-navy/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <CheckCircle className="text-teal-400" size={120} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Pricing Section */}
            <section className="py-24 bg-teal-50 border-y border-teal-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-navy mb-12 tracking-tighter">Transparent Pricing</h2>
                    <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100 p-12">
                        <div className="flex flex-col md:flex-row justify-between items-center bg-navy text-white p-8 rounded-3xl mb-8">
                            <div className="text-left">
                                <h3 className="text-2xl font-bold">Standard Man-Day Rate</h3>
                                <p className="text-teal-400">All-inclusive inspection service</p>
                            </div>
                            <div className="text-5xl font-bold mt-4 md:mt-0">
                                $200 <span className="text-lg font-normal text-slate-400">/ day</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-teal-100 text-teal-700 rounded-lg"><Truck size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-navy text-lg">Travel Expenses</h4>
                                        <p className="text-slate-600">Flat rate of <span className="font-bold text-navy">$20</span> per inspector per day for local travel.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-red-100 text-red-700 rounded-lg"><XCircle size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-navy text-lg">Cancellation Policy</h4>
                                        <p className="text-slate-600">Free cancellation if informed <span className="font-bold text-navy">48 hours</span> before inspection.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><Scale size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-navy text-lg">Waiting Time</h4>
                                        <p className="text-slate-600">If goods are not ready, a maximum waiting time of <span className="font-bold text-navy">2 hours</span> is allowed.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-green-100 text-green-700 rounded-lg"><CheckCircle size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-navy text-lg">Included Reports</h4>
                                        <p className="text-slate-600">Same-day detailed PDF report with high-res photos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-32 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block p-6 bg-teal-50 rounded-[2rem] mb-10 shadow-sm"
                    >
                        <CheckCircle size={64} className="text-teal-600" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tighter"
                    >
                        Uncompromising Truth
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-2xl text-slate-600 italic font-light leading-relaxed max-w-4xl mx-auto"
                    >
                        &quot;Our reports provide high-resolution photographic evidence for every defect category discovered.
                        We maintain total neutrality. We deliver the facts, so you can make the decision.&quot;
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-12 flex justify-center gap-4"
                    >
                        <Link href="/contact" className="px-10 py-5 bg-navy text-white rounded-full font-bold shadow-2xl hover:translate-y-[-5px] transition-transform">Request Audit Sample</Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Inspections;
