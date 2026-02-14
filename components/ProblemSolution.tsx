import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Clock, XCircle } from 'lucide-react';

const ProblemSolution = () => {
    const items = [
        {
            problem: "Delayed Shipments",
            pIcon: Clock,
            solution: "Real-time T&A Tracking",
            sIcon: CheckCircle,
            desc: "We monitor every milestone in the critical path to proactively identify and resolve bottlenecks before they cause delays."
        },
        {
            problem: "Inconsistent Quality",
            pIcon: XCircle,
            solution: "Rigorous 4-Point Inspection",
            sIcon: CheckCircle,
            desc: "Our certified inspectors are on the ground ensuring that every garment meets your exact specifications and AQL standards."
        },
        {
            problem: "Compliance Risks",
            pIcon: AlertTriangle,
            solution: "Full Supply Chain Audits",
            sIcon: CheckCircle,
            desc: "We verify factory certifications and conduct social compliance audits to protect your brand's reputation."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 tracking-tighter">Common Headaches. <span className="text-teal-600">Solved.</span></h2>
                    <p className="text-xl text-slate-500 font-light max-w-3xl mx-auto">
                        We turn supply chain chaos into a predictable, streamlined competitive advantage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                <div className="mb-8">
                                    <div className="flex items-center space-x-3 mb-4 opacity-50">
                                        <item.pIcon className="text-red-400" size={24} />
                                        <h4 className="font-bold text-slate-500 line-through decoration-red-400/50">{item.problem}</h4>
                                    </div>
                                    <div className="pl-4 border-l-4 border-teal-500">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <item.sIcon className="text-teal-600" size={28} />
                                            <h3 className="text-2xl font-black text-navy">{item.solution}</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-light mt-auto">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
