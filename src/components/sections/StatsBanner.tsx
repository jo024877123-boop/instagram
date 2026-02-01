'use client';

import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export function StatsBanner() {
    return (
        <section className="py-28 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark text-white relative overflow-hidden">
            {/* Animated Mesh Gradients */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-secondary/20 rounded-full blur-[120px] pointer-events-none animate-[pulse_10s_ease-in-out_infinite]" />

            {/* Accent Lines */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-secondary to-transparent opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-center">
                    {[
                        { label: "누적 고객사", value: 15400, suffix: "+" },
                        { label: "고객 유지율", value: 94, suffix: "%" },
                        { label: "생성된 인게이지먼트", value: 52, suffix: "M+" },
                        { label: "고객 만족도", value: 4.9, suffix: "/5" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                            className="group"
                        >
                            <div className="relative inline-block">
                                <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 group-hover:scale-110 transition-transform duration-300">
                                    <CountUp end={stat.value} duration={2.5} separator="," decimals={stat.label.includes("만족도") ? 1 : 0} enableScrollSpy scrollSpyOnce />
                                    <span className="text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary ml-1">{stat.suffix}</span>
                                </div>
                                {/* Decorative underline */}
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="text-slate-300 font-bold text-base md:text-lg uppercase tracking-wider mt-2">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
