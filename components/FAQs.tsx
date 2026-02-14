import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const questions = [
        {
            q: "What is your minimum order quantity (MOQ)?",
            a: "We are flexible with MOQs depending on the product category. Generally, we support both small batch collections for startups and large volume orders for established brands."
        },
        {
            q: "Do you provide lab testing services?",
            a: "Yes, we coordinate with accredited 3rd party labs (SGS, Intertek, BV) for all necessary physical and chemical tests to ensure compliance with international standards."
        },
        {
            q: "How do you ensure quality during production?",
            a: "We implement a strict 4-point inspection system and AQL sampling at multiple stages: Pre-Production (PPI), During Production (DPI), and Final Random Inspection (FRI)."
        },
        {
            q: "Can you help with sourcing specific fabrics?",
            a: "Absolutely. Our sourcing team has direct access to a vast network of certified mills across Asia, allowing us to find or develop the exact fabric you need."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-navy mb-4 tracking-tighter">Frequently Asked Questions</h2>
                    <p className="text-xl text-slate-500 font-light">
                        Common queries about our sourcing and inspection processes.
                    </p>
                </div>
                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
                            >
                                <span className="font-bold text-navy text-lg">{item.q}</span>
                                {activeIndex === index ? <ChevronUp className="text-teal-500" /> : <ChevronDown className="text-slate-400" />}
                            </button>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: activeIndex === index ? 'auto' : 0, opacity: activeIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-8 pb-8 pt-0 text-slate-600 leading-relaxed font-light">
                                    {item.a}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
