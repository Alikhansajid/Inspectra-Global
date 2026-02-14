"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Users, Zap, Award, CheckCircle, Factory, Clock, Star } from 'lucide-react';
import Link from 'next/link';
import { TEXTILE_IMAGES } from '../constants';
import ProblemSolution from '@/components/ProblemSolution';
import FAQs from '@/components/FAQs';
import Testimonials from '@/components/Testimonials';

const Home: React.FC = () => {
    const highlights = [
        {
            icon: Globe,
            title: 'Global Apparel Buying House',
            description: 'Comprehensive buying solutions across Asia with strategic headquarters in key textile hubs.'
        },
        {
            icon: Shield,
            title: 'End-to-End Solutions',
            description: 'From yarn sourcing to final container delivery with complete quality assurance at every step.'
        },
        {
            icon: Users,
            title: 'Trusted by International Brands',
            description: 'Serving 200+ global apparel brands with excellence, reliability, and technical expertise.'
        },
        {
            icon: Zap,
            title: 'Fast Track Production',
            description: 'Advanced ERP systems and streamlined processes for rapid order fulfillment.'
        }
    ];

    const processSteps = [
        {
            step: '01',
            title: 'Yarn Sourcing',
            description: 'Premium quality yarn procurement from globally certified suppliers.',
            icon: '🧶',
            image: "https://images.pexels.com/photos/6717035/pexels-photo-6717035.jpeg"
        },
        {
            step: '02',
            title: 'Fabric Development',
            description: 'Specialized knitting and weaving processes tailored to your specs.',
            icon: '🧵',
            image: "https://images.pexels.com/photos/8030147/pexels-photo-8030147.jpeg"
        },
        {
            step: '03',
            title: 'Garment Manufacturing',
            description: 'Precision cutting and sewing by skilled technicians.',
            icon: '✂️',
            image: "https://images.pexels.com/photos/31031031/pexels-photo-31031031.jpeg"
        },
        {
            step: '04',
            title: 'Quality Control',
            description: 'Rigorous 3rd party inspections and testing protocols.',
            icon: '🔍',
            image: "https://images.pexels.com/photos/31091541/pexels-photo-31091541.jpeg"
        },
        {
            step: '05',
            title: 'Finishing & Packing',
            description: 'Meticulous finishing and retail-ready packaging.',
            icon: '📦',
            image: "   https://images.pexels.com/photos/7309949/pexels-photo-7309949.jpeg"
        },
        {
            step: '06',
            title: 'Global Delivery',
            description: 'Worldwide shipping and complex logistics management.',
            icon: '🚚',
            image: TEXTILE_IMAGES.shipping
        }
    ];

    const stats = [
        { number: '15+', label: 'Years Experience', icon: Award },
        { number: '200+', label: 'Global Clients', icon: Users },
        { number: '50+', label: 'Partner Factories', icon: Factory },
        { number: '95%', label: 'Client Retention', icon: Star }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section - Optimized for Symmetry and Contrast */}
            <section className="relative min-h-screen flex flex-col items-center justify-center bg-navy pt-20">
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={TEXTILE_IMAGES.hero}
                        className="w-full h-full object-cover opacity-25"
                        alt="Textile Manufacturing Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy"></div>
                </div>

                {/* Symmetry Helper and Content */}
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex flex-col items-center w-full max-w-4xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-block bg-teal-600/20 border border-teal-500/40 text-teal-400 px-6 py-2 rounded-full font-bold text-xs tracking-widest uppercase mb-10 backdrop-blur-md"
                        >
                            Precision Global Sourcing
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 tracking-tighter text-white">
                            Precision in{' '}
                            <span className="text-teal-400 italic">
                                Inspection.
                            </span>
                            <br />
                            Confidence in Sourcing.
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed text-slate-300 font-light mb-14"
                        >
                            Inspectra Global connects premium apparel brands with top-tier manufacturers across Asia,
                            ensuring 100% compliance and flawless quality at every stage.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto"
                        >
                            <Link
                                href="/services"
                                className="group w-full sm:w-auto bg-teal-600 text-white font-black px-12 py-5 rounded-full transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:bg-teal-500 hover:scale-105 active:scale-95"
                            >
                                <span>EXPLORE SERVICES</span>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>

                            <Link
                                href="/contact"
                                className="group w-full sm:w-auto border-2 border-white/50 text-white font-black px-12 py-5 rounded-full transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-white hover:text-navy hover:border-white active:scale-95"
                            >
                                <span>GET A QUOTE</span>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Symmetrical Stats Grid - Perfectly Balanced */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-28 w-full max-w-6xl"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                whileHover={{ y: -12, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                                className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] text-center transition-all duration-300 flex flex-col items-center"
                            >
                                <div className="bg-teal-500/20 p-4 rounded-2xl mb-6">
                                    <stat.icon className="h-8 w-8 text-teal-400" />
                                </div>
                                <div className="text-5xl font-black text-white mb-2 tracking-tighter">{stat.number}</div>
                                <div className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em]">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Problems & Solutions */}
            <ProblemSolution />

            {/* CEO Message Section - Centered & Text Only */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="space-y-12">
                        <div className="inline-block px-5 py-2 bg-teal-600/10 rounded-full text-teal-700 font-black text-xs uppercase tracking-widest">
                            Executive Vision
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-navy leading-[1.1] tracking-tighter">
                            Our Commitment to <br /><span className="text-teal-600">Total Transparency.</span>
                        </h2>
                        <p className="text-2xl text-slate-600 leading-relaxed italic border-l-0 md:border-l-8 border-teal-500 pl-0 md:pl-10 font-light mx-auto max-w-3xl">
                            &quot;Inspectra Global doesn&apos;t just provide a report; we provide the certainty required to sign off on a shipment.
                            We are your eyes on the ground, ensuring your brand standards are never compromised.&quot;
                        </p>
                        <div className="flex flex-col items-center space-y-4 pt-4">
                            <div className="w-24 h-24 bg-navy rounded-3xl flex items-center justify-center shadow-2xl rotate-3 mb-4">
                                <span className="text-white font-black text-3xl">SS</span>
                            </div>
                            <div>
                                <h4 className="text-3xl font-black text-navy tracking-tight">Sheikh Saleem</h4>
                                <p className="text-teal-600 font-black uppercase tracking-widest text-[10px]">CEO & Founder, Inspectra Global</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manufacturing Process - Lengthy and Detailed */}
            <section className="py-40 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-32">
                        <h2 className="text-6xl lg:text-8xl font-black text-navy mb-10 tracking-tighter">Manufacturing Lifecycle</h2>
                        <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
                            We oversee every critical touchpoint in the textile production pipeline to ensure zero defects and ethical compliance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group flex flex-col items-start"
                            >
                                <div className="relative w-full h-80 overflow-hidden rounded-[3rem] mb-10 shadow-xl group-hover:shadow-3xl transition-all duration-500">
                                    <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-all duration-500"></div>
                                    <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md text-white w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl border border-white/20">
                                        {step.step}
                                    </div>
                                </div>
                                <div className="px-4 space-y-6">
                                    <h3 className="text-3xl font-bold text-navy tracking-tight">{step.title}</h3>
                                    <p className="text-xl text-slate-500 font-light leading-relaxed">
                                        {step.description}
                                    </p>
                                    <Link href="/services" className="inline-flex items-center text-teal-600 font-black text-sm uppercase tracking-widest hover:text-teal-700 transition-colors pt-4 group">
                                        View Methodology <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Testimonials />
            <FAQs />
        </div>
    );
};

export default Home;
