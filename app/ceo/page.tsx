"use client";

import React from 'react';
import { Quote } from 'lucide-react';

const CEOMessage: React.FC = () => {
    return (
        <div className="pt-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                    {/* <div className="lg:w-2/5 relative min-h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                            alt="CEO Inspectra Global"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-navy/20"></div>
                    </div> */}

                    <div className="lg:w-3/5 p-10 md:p-20 flex flex-col justify-center">
                        <Quote className="text-teal-500 w-16 h-16 mb-8 opacity-50" />
                        <h1 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                            A Message From Our CEO
                        </h1>

                        <div className="space-y-6 text-slate-600 text-lg md:text-xl italic leading-relaxed mb-12">
                            <p>
                                &quot;At Inspectra Global, we operate on a simple yet profound philosophy: Transparency is the bedrock of trust, and trust is the only foundation for long-term success.&quot;
                            </p>
                            <p>
                                &quot;Our journey in the global sourcing world has taught us that accuracy is not just a goal — it&apos;s a responsibility. Every report we sign off on represents a commitment to the growth and stability of our clients&apos; businesses.&quot;
                            </p>
                            <p className="font-bold text-navy not-italic">
                                &quot;If you work with us, you will grow. We take the burden of quality off your shoulders so you can focus on building your brand and capturing your market.&quot;
                            </p>
                        </div>

                        <div>
                            <h4 className="text-2xl font-bold text-navy">Sheikh Saleem</h4>
                            <p className="text-teal-600 font-semibold uppercase tracking-widest">Founder & CEO, Inspectra Global</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CEOMessage;
