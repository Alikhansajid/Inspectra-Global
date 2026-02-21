"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TEXTILE_IMAGES } from '../../constants';
import { Globe2, Layers, Zap, CheckCircle, PenTool } from 'lucide-react';
import Link from 'next/link';

const Sourcing: React.FC = () => {
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-teal-400 font-bold uppercase tracking-[0.3em] text-sm mb-6 block"
                    >
                        Strategic Apparel Sourcing
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter"
                    >
                        Your Buying <span className="text-teal-500 italic">Edge.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        We eliminate the distance between your brand and the world&apos;s finest factories.
                        Direct sourcing from yarn to garment with zero middle-man fees.
                    </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Merchandising & Design Excellence */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-5xl md:text-7xl font-bold text-navy mb-10 tracking-tighter leading-none">Concept-to-Carton.</h2>
                            <p className="text-2xl text-slate-600 leading-relaxed font-light mb-12">
                                We don&apos;t just find a factory; we find a production solution for your entire season.
                                Our dedicated merchandising teams manage every minute of the Time & Action (T&A) calendar.
                            </p>

                            <div className="space-y-10">
                                <div className="flex gap-8 group">
                                    <div className="w-20 h-20 bg-teal-50 rounded-3xl flex items-center justify-center text-teal-600 flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-all">
                                        <PenTool size={40} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-navy mb-2">Trend & PD Coordination</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed font-light">We work with your designers to translate mood boards into technical tech-packs that factories can execute flawlessly.</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 group">
                                    <div className="w-20 h-20 bg-teal-50 rounded-3xl flex items-center justify-center text-teal-600 flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-all">
                                        <Layers size={40} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-navy mb-2">Exclusive Fabric Library</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed font-light">Access thousands of knit, woven, and denim swatches from our curated global supplier network.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="grid grid-cols-2 gap-6 relative">
                                <img src="https://images.pexels.com/photos/4620608/pexels-photo-4620608.jpeg" className="rounded-3xl shadow-2xl h-80 w-full object-cover transform translate-y-12" alt="Fabric Development" />
                                <img src="https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg" className="rounded-3xl shadow-2xl h-80 w-full object-cover" alt="Material" />
                                <img src="https://images.pexels.com/photos/783590/pexels-photo-783590.jpeg" className="rounded-3xl shadow-2xl h-80 w-full object-cover transform translate-y-12" alt="Garment Mfg" />
                                <img src="https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg" className="rounded-3xl shadow-2xl h-80 w-full object-cover" alt="Finishing" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-full shadow-3xl">
                                    <Zap className="text-teal-500 w-16 h-16 animate-bounce" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-32 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-navy mb-6 tracking-tighter"
                        >
                            Complete Sourcing Architecture
                        </motion.h2>
                        <p className="text-2xl text-slate-600 font-light max-w-3xl mx-auto">See how you benefit along the way from pre-design through to post-delivery.</p>
                    </div>

                    <div className="space-y-24">
                        {[
                            {
                                title: "Order Placement & Strategic Matching",
                                desc: "Finding the right supplier is an art form we have perfected. It is not just about who has the capacity; it is about who has the specific technical capability for your product class. We analyze quality levels, production costs, delivery timelines, and potential machinery changeover times. We assess the factory's distance to key component suppliers to minimize delays. Whether it is utilizing specialized wet-processing capabilities in Faisalabad or high-tech synthetic production in Sheikhupura, we match your order to the facility that gives you a competitive advantage. When you are ready to move, we execute immediately, securing line space before your competitors do.",
                                image: "https://images.pexels.com/photos/5439471/pexels-photo-5439471.jpeg" // Sewing/Meeting context
                            },
                            {
                                title: "Design Development & Proto-Sampling",
                                desc: "You don’t need to see the failures; you only need to see the perfect sample. We protect your brand standards by testing and correcting prototypes before they ever reach your headquarters. Our on-site technicians review the first 'Proto' samples, 'Fit' samples, and 'Size Sets' right at the factory floor. We check pattern grading, shrinkage, and construction integrity. By the time you receive a sample for approval, it has already passed our internal rigorous checks, saving you weeks of back-and-forth courier time. Your decisions drive the schedule; we ensure the vehicle is ready to race.",
                                image: "https://images.pexels.com/photos/9849320/pexels-photo-9849320.jpeg" // Design/Pattern making
                            },
                            {
                                title: "Graphic Art & Creative Pattern Making",
                                desc: "At Inspectra Global, we do not just follow instructions; we create. Our in-house creative team works as an extension of your design department. Whether you need complex screen prints, digital sublimation, puff printing, or intricate embroidery for hoodies and T-shirts, we handle the technical artwork separation. We create 'out of the box' pattern designs that optimize fabric consumption (marker efficiency) while delivering the aesthetic impact you desire. You provide the vision; we provide the technical execution to put it on fabric.",
                                image: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg" // Clothes/Design
                            },
                            {
                                title: "Quality Control & The Inspection Journey",
                                desc: "Quality is not a static final step; it is a continuous journey. Inspectra Global's QC experts are stationed permanently in the manufacturing hubs. We do not just visit the main factory; we audit the subcontractors, the dye houses, the print shops, and the washing units. We implement the 'Traffic Light System' on production lines to stop defects instantly. Finally, our rigorous Final Random Inspection (FRI) follows your specified AQL standard (usually 1.5/4.0 or 2.5/4.0). We are rarely surprised by the results because we have been watching the product being built stitch by stitch.",
                                image: "https://images.pexels.com/photos/35383622/pexels-photo-35383622.jpeg" // Inspection
                            },
                            {
                                title: "Logistics, Documentation & Monitoring",
                                desc: "Production is only half the battle; getting it to your warehouse is the other. Inspectra Global's logistics team ensures your shipment doesn't get stuck in bureaucratic red tape. We actively manage the consolidation of goods from multiple factories to maximize container space and reduce freight costs. We scrutinize all export documentation—Bills of Lading, Commercial Invoices, Packing Lists—to ensure 100% compliance with your country's customs regulations. We monitor the vessel schedules and act fast if a booking needs to be rolled or expedited.",
                                image: "https://images.pexels.com/photos/2881632/pexels-photo-2881632.jpeg" // Shipping
                            },
                            {
                                title: "Post Shipment Support & Commercial Analysis",
                                desc: "Our job isn't done when the container leaves the port. We believe in continuous improvement. After shipment, we sit down to analyze the entire process: what went right, what had hiccups, and how we can improve for the next season. We also help you analyze the commercial success of the product. Did the fabric hand-feel contribute to better sales? Did the packaging enhance the unboxing experience? We use this data to refine the specifications for your next order, ensuring you sell more and return less.",
                                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200" // Meeting/Review
                            },

                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                            >
                                <div className="lg:w-1/2">
                                    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl">
                                        <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm text-navy font-black text-2xl w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                                            0{i + 1}
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6 tracking-tight leading-tight">{step.title}</h3>
                                    <div className="h-1 w-20 bg-teal-500 mb-8"></div>
                                    <p className="text-lg text-slate-600 leading-relaxed font-light">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Global Supply Network Hubs */}
            <section className="py-32 bg-navy text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-500/5 -skew-x-12 transform origin-top-right"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter">Asia&apos;s Hub Network.</h2>
                            <div className="space-y-8">
                                <div className="p-8 bg-white/5 rounded-[2.5rem] border-l-8 border-teal-500">
                                    <h5 className="text-2xl font-bold mb-3">South Asia Central (PK/BD/IN)</h5>
                                    <p className="text-lg text-slate-400 font-light">High-volume jersey, denim specialty, and home textile excellence.</p>
                                </div>
                                <div className="p-8 bg-white/5 rounded-[2.5rem] border-l-8 border-blue-500">
                                    <h5 className="text-2xl font-bold mb-3">East Asia Technical (VN/KH/CN)</h5>
                                    <p className="text-lg text-slate-400 font-light">Performance activewear, technical outerwear, and luxury fashion accessories.</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="relative p-4 bg-white/5 rounded-[4rem] border border-white/10">
                                <img src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg" className="rounded-[3rem] shadow-2xl h-[500px] w-full object-cover" alt="Global Hubs" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 p-6 rounded-full shadow-3xl">
                                    <Globe2 size={40} className="text-white animate-spin-slow" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-32 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-10 flex justify-center"
                    >
                        <CheckCircle size={80} className="text-teal-600" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tighter"
                    >
                        Let&apos;s Do Business!
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-2xl text-slate-600 font-light mb-12 leading-relaxed"
                    >
                        Contact Us Today. Leverage our 15+ years of factory relationships to secure the best lead times and pricing in the market.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/contact" className="px-12 py-6 bg-navy text-white rounded-full font-bold text-lg shadow-2xl hover:translate-y-[-5px] transition-all">Start Sourcing Inquiry</Link>
                        <Link href="/services" className="px-12 py-6 border-2 border-navy text-navy rounded-full font-bold text-lg hover:bg-navy hover:text-white transition-all">Our Capabilities</Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Sourcing;
