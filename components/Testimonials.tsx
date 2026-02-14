import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-24 bg-navy text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-20 opacity-5">
                <Quote size={400} />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 bg-teal-500/20 rounded-full text-teal-400 font-bold text-xs tracking-widest uppercase mb-4">
                        Client Success
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Trusted by Global Brands</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10">
                        <div className="flex text-teal-400 mb-6">
                            {[1, 2, 3, 4, 5].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                        </div>
                        <p className="text-xl text-slate-300 italic mb-8 leading-relaxed font-light">
                            &quot;Inspectra Global totally transformed our sourcing reliability. The level of detail in their inspection reports gives us complete peace of mind, even from thousands of miles away.&quot;
                        </p>
                        <div>
                            <h4 className="text-xl font-bold">Sarah Jenkins</h4>
                            <p className="text-teal-500 text-sm font-bold uppercase tracking-widest">Production Director, UK Apparel</p>
                        </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10">
                        <div className="flex text-teal-400 mb-6">
                            {[1, 2, 3, 4, 5].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                        </div>
                        <p className="text-xl text-slate-300 italic mb-8 leading-relaxed font-light">
                            &quot;Their team identified a critical fabric defect during the knit stage that would have ruined our entire season. We saved over $50k thanks to their PPI intervention.&quot;
                        </p>
                        <div>
                            <h4 className="text-xl font-bold">Michael Chen</h4>
                            <p className="text-teal-500 text-sm font-bold uppercase tracking-widest">Sourcing Manager, NY Fashion Grp</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
