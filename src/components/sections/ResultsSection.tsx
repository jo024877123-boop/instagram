'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CountUp from 'react-countup';
import { ArrowUpRight } from 'lucide-react';

const results = [
    {
        name: "강남 뷰티샵",
        emoji: "💄",
        before: 180,
        after: 12400,
        revenue: "+580%",
        period: "3개월",
        color: "from-pink-500 to-rose-600"
    },
    {
        name: "홍대 카페",
        emoji: "☕",
        before: 890,
        after: 18200,
        revenue: "+890%",
        period: "2개월",
        color: "from-green-500 to-emerald-600"
    },
    {
        name: "패션 브랜드",
        emoji: "👗",
        before: 2400,
        after: 28600,
        revenue: "+1,240%",
        period: "4개월",
        color: "from-purple-500 to-violet-600"
    },
];

export function ResultsSection() {
    return (
        <section className="py-24 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                {/* Header - Split Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-purple-400 font-medium text-sm mb-2"
                        >
                            성공 사례
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold leading-tight"
                        >
                            숫자가<br />모든 것을 말합니다
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-between lg:justify-end lg:gap-16"
                    >
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-purple-400">
                                <CountUp end={340} duration={2} suffix="%" enableScrollSpy scrollSpyOnce />
                            </div>
                            <div className="text-gray-400 text-sm mt-1">평균 성장</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-green-400">
                                <CountUp end={15400} duration={2} separator="," enableScrollSpy scrollSpyOnce />+
                            </div>
                            <div className="text-gray-400 text-sm mt-1">고객 수</div>
                        </div>
                    </motion.div>
                </div>

                {/* Horizontal Scroll Cards */}
                <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
                    {results.map((result, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-shrink-0 w-[340px] bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group cursor-default"
                        >
                            {/* Emoji & Name */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl">{result.emoji}</span>
                                <div>
                                    <h3 className="font-bold text-xl">{result.name}</h3>
                                    <p className="text-gray-400 text-sm">{result.period}</p>
                                </div>
                            </div>

                            {/* Growth Visual */}
                            <div className="relative h-24 mb-6">
                                <div className="absolute bottom-0 left-0 w-16 h-4 bg-gray-700 rounded" />
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                                    className={`absolute bottom-0 right-0 w-16 bg-gradient-to-t ${result.color} rounded`}
                                />
                                <div className="absolute bottom-6 left-0 text-xs text-gray-500 w-16 text-center">Before</div>
                                <div className="absolute -top-6 right-0 text-xs text-white w-16 text-center font-bold">After</div>
                            </div>

                            {/* Stats */}
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-gray-500 text-sm">{result.before.toLocaleString()} →</div>
                                    <div className="text-3xl font-bold">
                                        <CountUp end={result.after} duration={2} separator="," enableScrollSpy scrollSpyOnce />
                                    </div>
                                    <div className="text-gray-400 text-xs">팔로워</div>
                                </div>
                                <div className={`text-2xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>
                                    {result.revenue}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* View All Card */}
                    <Link
                        href="/case-studies"
                        className="flex-shrink-0 w-[200px] border-2 border-dashed border-white/20 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-purple-500 hover:bg-white/5 transition-all group"
                    >
                        <ArrowUpRight className="w-8 h-8 text-gray-500 group-hover:text-purple-400 transition-colors" />
                        <span className="text-gray-400 group-hover:text-white transition-colors font-medium">전체 보기</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
