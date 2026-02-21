"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, Calendar, AlertTriangle, CheckCircle, CreditCard, Truck, MapPin } from 'lucide-react';

const Terms: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="bg-navy text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
                        <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                            Standard Terms and Conditions for Inspection Services provided by Inspectra Global.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">

                {/* Working Hours & Overtime */}
                <section>
                    <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                        <Clock className="text-teal-500" /> Working Hours & Overtime
                    </h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 space-y-6">
                        <div>
                            <h3 className="font-bold text-lg text-navy mb-2">Normal Working Days</h3>
                            <ul className="list-disc pl-5 text-slate-600 space-y-2">
                                <li>Mon-Fri but variable, in compliance with local labor law and customs.</li>
                                <li>Variable combination of time spent working & traveling to/from the service location.</li>
                                <li>Overtime will apply when working time alone exceeds 8 hours.</li>
                            </ul>
                            <p className="text-sm text-slate-400 mt-2 italic">*Out of Asia, this definition may be different. Details on request.</p>
                        </div>
                        <div className="border-t border-slate-100 pt-6">
                            <h3 className="font-bold text-lg text-navy mb-2">Overtime</h3>
                            <p className="text-slate-600 mb-2">Hours worked outside of normal working hours.</p>
                            <div className="bg-slate-50 p-4 rounded-lg inline-block">
                                <span className="font-mono text-navy font-bold">Rate: Man-hour = Man-day rate / 8 hours</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Travel */}
                <section>
                    <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                        <Truck className="text-teal-500" /> Traveling Time & Costs
                    </h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 space-y-6">
                        <div>
                            <h3 className="font-bold text-lg text-navy mb-2">Traveling Time Charge</h3>
                            <p className="text-slate-600 mb-4">
                                Travel time is free of charge if travel is done the same day of the service and even if it exceeds the normal working hours (respecting local labor law).
                            </p>
                            <h4 className="font-semibold text-navy mb-2">Travel charge is required when:</h4>
                            <ul className="list-disc pl-5 text-slate-600 space-y-2 mb-4">
                                <li>Travel is required on the day before or the day after the service date.</li>
                                <li>There is waiting time the day before or day after due to lack of transport resources.</li>
                            </ul>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-teal-50 p-4 rounded-lg">
                                    <span className="block text-sm text-teal-800 font-bold">Up to 4 hrs travel</span>
                                    <span className="text-navy font-bold">Additional 0.5 man-day</span>
                                </div>
                                <div className="bg-teal-50 p-4 rounded-lg">
                                    <span className="block text-sm text-teal-800 font-bold">More than 4 hrs travel</span>
                                    <span className="text-navy font-bold">Additional 1.0 man-day</span>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-slate-100 pt-6">
                            <h3 className="font-bold text-lg text-navy mb-2">Traveling Expense & Accommodation</h3>
                            <p className="text-slate-600 mb-2"><span className="font-semibold">Transportation Cost:</span> At cost / On request.</p>
                            <p className="text-slate-600"><span className="font-semibold">Accommodation:</span> Charged if travel required day before/after or service  1 day.</p>
                        </div>
                    </div>
                </section>

                {/* Holidays & Cancellations */}
                <section>
                    <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                        <Calendar className="text-teal-500" /> Holidays & Scheduling Policies
                    </h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 space-y-6">
                        <div>
                            <h3 className="font-bold text-lg text-navy mb-2">Working / Traveling on Holidays</h3>
                            <p className="text-slate-600 mb-4">If inspector performs inspection or travels during a holiday, Inspectra Global charges a holiday surcharge.</p>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                                    <span className="text-slate-700">Saturday or equivalent</span>
                                    <span className="font-bold text-navy">US$100 x no. of inspector</span>
                                </div>
                                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                                    <span className="text-slate-700">Sunday, Public Holiday</span>
                                    <span className="font-bold text-navy">US$150 x no. of inspector</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-slate-100 pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-lg text-navy mb-2">Late Booking</h3>
                                <p className="text-slate-600 text-sm mb-2">Booking up to the day before service date.</p>
                                <span className="font-bold text-red-500">Rate: US$150 per factory visit</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-navy mb-2">Late Revised Date</h3>
                                <p className="text-slate-600 text-sm mb-2">Rescheduling after 12 noon working day before.</p>
                                <span className="font-bold text-red-500">Rate: Man-day rate + expenses</span>
                            </div>
                        </div>

                        <div className="border-t border-slate-100 pt-6">
                            <h3 className="font-bold text-lg text-navy mb-2 text-red-600">Cancellation Policy</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-semibold text-navy">Late Cancellation (After 12 noon day before)</p>
                                    <p className="text-slate-600">Rate: Man-day rate + expenses</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-navy">Less than 48 hours notice</p>
                                    <p className="text-slate-600">Rate: Full Man-day rate + expenses</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-navy">48 - 72 hours notice</p>
                                    <p className="text-slate-600">Rate: 50% of Man-day rate + expenses</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                            <h3 className="font-bold text-red-700 mb-1">Visit In Vain</h3>
                            <p className="text-sm text-red-600">
                                If goods are not ready or circumstances (unsafe, etc.) prevent inspection.
                                <br /><span className="font-bold">Charge: Man-day rate + expenses.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Definitions & Standards */}
                <section>
                    <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                        <FileText className="text-teal-500" /> Definitions & Sampling
                    </h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 space-y-8">
                        <div>
                            <h3 className="font-bold text-lg text-navy mb-2">Man-day Definition</h3>
                            <p className="text-slate-600">
                                One man-day equals up to 12 hours which includes: up to 8 hours working on site, up to one hour meal period, and up to 3 hours of travel.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg text-navy mb-2">Booking Lead Time</h3>
                            <p className="text-slate-600">
                                Minimum <span className="font-bold">3 working days</span> in ASIA & 5 working days in other regions prior to desired service date.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg text-navy mb-4">Inspection Quantity Guidelines</h3>
                            <div className="grid gap-3">
                                <div className="flex gap-4 items-start">
                                    <span className="font-bold text-teal-600 w-16">IPI</span>
                                    <span className="text-slate-600">Initial Production Inspection: When 10-20% of order is finished.</span>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="font-bold text-teal-600 w-16">DPI</span>
                                    <span className="text-slate-600">During Production Inspection: When 40-60% of order is finished.</span>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="font-bold text-teal-600 w-16">FRI</span>
                                    <span className="text-slate-600">Final Random Inspection: 100% finished and at least 80% packed.</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h3 className="font-bold text-lg text-navy mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-orange-500" /> Combined Sampling Risk
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Inspectra Global  advises all clients of the risks associated with "Combined Sampling" where several different product styles are combined to make a single lot size. This represents an increased level of risk as statistical rules are compromised.
                            </p>
                            <p className="text-slate-500 text-xs italic">
                                We disclaim any liability if decisions are made concerning the acceptance, payment authorization, or shipment of the inspected goods based upon Combined Sampling.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Misc */}
                <section>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-navy">Mailing Expenses</span>
                            <span className="text-slate-600">Charged at cost</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-navy">Service Document Re-issuance</span>
                            <span className="text-slate-600">US$100</span>
                        </div>
                    </div>
                </section>

                <div className="text-center text-slate-400 text-sm mt-12 pb-12">
                    <p>Inspectra Global - Quality Assurance & Sourcing Experts</p>
                    <p>Refer to CPS Conditions of Service for Liability details.</p>
                </div>

            </div>
        </div>
    );
};

export default Terms;
