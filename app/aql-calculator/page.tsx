"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TEXTILE_IMAGES } from '../../constants';
import { Calculator, CheckCircle, AlertTriangle, XCircle, Info, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// AQL Table Data (Simplified for the calculator)
// Based on ISO 2859-1 (ANSI/ASQ Z1.4)
const SAMPLE_SIZE_CODE_LETTERS = [
    { min: 2, max: 8, levelI: 'A', levelII: 'A', levelIII: 'B' },
    { min: 9, max: 15, levelI: 'A', levelII: 'B', levelIII: 'C' },
    { min: 16, max: 25, levelI: 'B', levelII: 'C', levelIII: 'D' },
    { min: 26, max: 50, levelI: 'C', levelII: 'D', levelIII: 'E' },
    { min: 51, max: 90, levelI: 'C', levelII: 'E', levelIII: 'F' },
    { min: 91, max: 150, levelI: 'D', levelII: 'F', levelIII: 'G' },
    { min: 151, max: 280, levelI: 'E', levelII: 'G', levelIII: 'H' },
    { min: 281, max: 500, levelI: 'F', levelII: 'H', levelIII: 'J' },
    { min: 501, max: 1200, levelI: 'G', levelII: 'J', levelIII: 'K' },
    { min: 1201, max: 3200, levelI: 'H', levelII: 'K', levelIII: 'L' },
    { min: 3201, max: 10000, levelI: 'J', levelII: 'L', levelIII: 'M' },
    { min: 10001, max: 35000, levelI: 'K', levelII: 'M', levelIII: 'N' },
    { min: 35001, max: 150000, levelI: 'L', levelII: 'N', levelIII: 'P' },
    { min: 150001, max: 500000, levelI: 'M', levelII: 'P', levelIII: 'Q' },
    { min: 500001, max: Infinity, levelI: 'N', levelII: 'Q', levelIII: 'R' },
];

const SAMPLE_SIZE_TABLE: Record<string, number> = {
    'A': 2, 'B': 3, 'C': 5, 'D': 8, 'E': 13, 'F': 20, 'G': 32, 'H': 50,
    'J': 80, 'K': 125, 'L': 200, 'M': 315, 'N': 500, 'P': 800, 'Q': 1250, 'R': 2000
};

// Acceptance/Rejection Levels (Generalized for Normal Inspection)
// { code: { aqlValue: { ac: x, re: y } } }
const ACCEPTANCE_TABLE: Record<string, Record<string, { ac: number, re: number }>> = {
    'A': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 0, re: 1 }, '4.0': { ac: 0, re: 1 }, '6.5': { ac: 0, re: 1 } },
    'B': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 0, re: 1 }, '4.0': { ac: 0, re: 1 }, '6.5': { ac: 0, re: 1 } },
    'C': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 0, re: 1 }, '4.0': { ac: 0, re: 1 }, '6.5': { ac: 1, re: 2 } },
    'D': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 0, re: 1 }, '4.0': { ac: 1, re: 2 }, '6.5': { ac: 1, re: 2 } },
    'E': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 1, re: 2 }, '4.0': { ac: 1, re: 2 }, '6.5': { ac: 2, re: 3 } },
    'F': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 1, re: 2 }, '2.5': { ac: 1, re: 2 }, '4.0': { ac: 2, re: 3 }, '6.5': { ac: 3, re: 4 } },
    'G': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 1, re: 2 }, '1.5': { ac: 1, re: 2 }, '2.5': { ac: 2, re: 3 }, '4.0': { ac: 3, re: 4 }, '6.5': { ac: 5, re: 6 } },
    'H': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 1, re: 2 }, '1.5': { ac: 2, re: 3 }, '2.5': { ac: 3, re: 4 }, '4.0': { ac: 5, re: 6 }, '6.5': { ac: 7, re: 8 } },
    'J': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 2, re: 3 }, '1.5': { ac: 3, re: 4 }, '2.5': { ac: 5, re: 6 }, '4.0': { ac: 7, re: 8 }, '6.5': { ac: 10, re: 11 } },
    'K': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 3, re: 4 }, '1.5': { ac: 5, re: 6 }, '2.5': { ac: 7, re: 8 }, '4.0': { ac: 10, re: 11 }, '6.5': { ac: 14, re: 15 } },
    'L': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 5, re: 6 }, '1.5': { ac: 7, re: 8 }, '2.5': { ac: 10, re: 11 }, '4.0': { ac: 14, re: 15 }, '6.5': { ac: 21, re: 22 } },
    'M': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 7, re: 8 }, '1.5': { ac: 10, re: 11 }, '2.5': { ac: 14, re: 15 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } },
    'N': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 10, re: 11 }, '1.5': { ac: 14, re: 15 }, '2.5': { ac: 21, re: 22 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } },
    'P': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 14, re: 15 }, '1.5': { ac: 21, re: 22 }, '2.5': { ac: 21, re: 22 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } },
    'Q': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 21, re: 22 }, '1.5': { ac: 21, re: 22 }, '2.5': { ac: 21, re: 22 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } },
    'R': { '0.0': { ac: 0, re: 1 }, '1.0': { ac: 21, re: 22 }, '1.5': { ac: 21, re: 22 }, '2.5': { ac: 21, re: 22 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } },
};

const AQLCalculator: React.FC = () => {
    const [lotSize, setLotSize] = useState<number>(1000);
    const [inspectionLevel, setInspectionLevel] = useState<'I' | 'II' | 'III'>('II');
    const [criticalAQL, setCriticalAQL] = useState<string>('0.0');
    const [majorAQL, setMajorAQL] = useState<string>('2.5');
    const [minorAQL, setMinorAQL] = useState<string>('4.0');

    // Calculation Logic
    const calculateAQL = () => {
        const range = SAMPLE_SIZE_CODE_LETTERS.find(r => lotSize >= r.min && lotSize <= r.max);
        if (!range) return null;

        const codeLetter = inspectionLevel === 'I' ? range.levelI : inspectionLevel === 'II' ? range.levelII : range.levelIII;
        const sampleSize = SAMPLE_SIZE_TABLE[codeLetter];

        // Handle simplified lookups, fallback to reasonable defaults if not found
        const critical = ACCEPTANCE_TABLE[codeLetter]?.[criticalAQL] || { ac: 0, re: 1 };
        const major = ACCEPTANCE_TABLE[codeLetter]?.[majorAQL] || { ac: 0, re: 1 };
        const minor = ACCEPTANCE_TABLE[codeLetter]?.[minorAQL] || { ac: 0, re: 1 };

        return { codeLetter, sampleSize, critical, major, minor };
    };

    const result = calculateAQL();

    return (
        <div className="pt-20 overflow-hidden bg-slate-50">
            {/* Hero Section */}
            <section
                className="relative py-24 bg-navy text-white text-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.95), rgba(0, 33, 71, 0.95)), url(${TEXTILE_IMAGES.inspection})`,
                    backgroundSize: 'cover',
                }}
            >
                <div className="max-w-4xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter"
                    >
                        AQL Calculator
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-300 font-light"
                    >
                        Acceptable Quality Limit (AQL) Standard ISO 2859-1 (ANSI/ASQ Z1.4)
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">

                {/* Calculator Panel */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:w-1/2"
                >
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
                        <div className="flex items-center gap-3 mb-8 text-navy">
                            <Calculator className="w-8 h-8 text-teal-500" />
                            <h2 className="text-2xl font-bold">Inspection Calculator</h2>
                        </div>

                        {/* Input Form */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Order Quantity (Lot Size)</label>
                                <input
                                    type="number"
                                    value={lotSize}
                                    onChange={(e) => setLotSize(parseInt(e.target.value) || 0)}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Inspection Level</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {['I', 'II', 'III'].map((level) => (
                                        <button
                                            key={level}
                                            onClick={() => setInspectionLevel(level as 'I' | 'II' | 'III')}
                                            className={`py-2 rounded-xl border font-bold transition-all ${inspectionLevel === level
                                                    ? 'bg-teal-500 text-white border-teal-500'
                                                    : 'bg-white text-slate-500 border-slate-200 hover:border-teal-500'
                                                }`}
                                        >
                                            Level {level}
                                        </button>
                                    ))}
                                </div>
                                <p className="text-xs text-slate-400 mt-2">Level II is the industry standard for most inspections.</p>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Critical AQL</label>
                                    <select
                                        value={criticalAQL}
                                        onChange={(e) => setCriticalAQL(e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm"
                                    >
                                        {Object.keys(ACCEPTANCE_TABLE['A']).map(k => <option key={k} value={k}>{k}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Major AQL</label>
                                    <select
                                        value={majorAQL}
                                        onChange={(e) => setMajorAQL(e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm"
                                    >
                                        <option value="1.5">1.5</option>
                                        <option value="2.5">2.5 (Std)</option>
                                        <option value="4.0">4.0</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Minor AQL</label>
                                    <select
                                        value={minorAQL}
                                        onChange={(e) => setMinorAQL(e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm"
                                    >
                                        <option value="2.5">2.5</option>
                                        <option value="4.0">4.0 (Std)</option>
                                        <option value="6.5">6.5</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Result Display */}
                        {result && (
                            <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                <div className="flex justify-between items-center mb-6 border-b border-slate-200 pb-4">
                                    <div>
                                        <span className="text-sm text-slate-500 block">Sample Quantity</span>
                                        <span className="text-4xl font-black text-navy">{result.sampleSize}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-sm text-slate-500 block">Code Letter</span>
                                        <span className="text-2xl font-bold text-teal-600">{result.codeLetter}</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-red-50">
                                        <div className="flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-red-500" />
                                            <span className="font-bold text-slate-700">Critical</span>
                                        </div>
                                        <div className="flex gap-4">
                                            <span className="text-sm text-green-600 font-bold">✓ Accept: {result.critical.ac}</span>
                                            <span className="text-sm text-red-600 font-bold">✗ Reject: {result.critical.re}</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-orange-50">
                                        <div className="flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-orange-500" />
                                            <span className="font-bold text-slate-700">Major</span>
                                        </div>
                                        <div className="flex gap-4">
                                            <span className="text-sm text-green-600 font-bold">✓ Accept: {result.major.ac}</span>
                                            <span className="text-sm text-red-600 font-bold">✗ Reject: {result.major.re}</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-blue-50">
                                        <div className="flex items-center gap-2">
                                            <Info className="w-5 h-5 text-blue-500" />
                                            <span className="font-bold text-slate-700">Minor</span>
                                        </div>
                                        <div className="flex gap-4">
                                            <span className="text-sm text-green-600 font-bold">✓ Accept: {result.minor.ac}</span>
                                            <span className="text-sm text-red-600 font-bold">✗ Reject: {result.minor.re}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Content Panel */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:w-1/2"
                >
                    <div className="prose prose-lg text-slate-600">
                        <h2 className="text-navy font-bold text-3xl mb-6">What is AQL?</h2>
                        <p>
                            AQL (Acceptable Quality Limit) is widely used to determine whether a product batch meets the required quality standards by inspecting a <strong>random sample</strong> rather than the entire order.
                        </p>
                        <p>
                            It allows buyers and manufacturers to agree on the maximum number of defective units allowed in a batch before the entire lot is rejected.
                        </p>

                        <h3 className="text-navy font-bold text-xl mt-8 mb-4">Defect Classification</h3>
                        <ul className="space-y-4 list-none pl-0">
                            <li className="flex gap-3">
                                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                                <div>
                                    <strong className="text-navy">Critical Defects</strong>
                                    <p className="text-sm m-0">Dangerous or unsafe conditions. 0% tolerance (AQL 0.0).</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                                <div>
                                    <strong className="text-navy">Major Defects</strong>
                                    <p className="text-sm m-0">Issues that affect performance or appearance (e.g., holes, broken zippers). Typically AQL 2.5.</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Info className="w-6 h-6 text-blue-500 flex-shrink-0" />
                                <div>
                                    <strong className="text-navy">Minor Defects</strong>
                                    <p className="text-sm m-0">Small deviations that don't affect usability (e.g., untrimmed threads). Typically AQL 4.0.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-10 p-6 bg-teal-50 rounded-2xl border border-teal-100">
                            <h4 className="text-teal-800 font-bold mb-2">Why use AQL?</h4>
                            <p className="text-sm text-teal-700 m-0">
                                Testing 100% of a large order is often too costly and time-consuming. AQL provides a statistically valid way to ensure quality without inspecting every single item, balancing risk and cost effectively.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AQLCalculator;
