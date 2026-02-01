'use client';

import Link from 'next/link';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Shield } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
    return (
        <CountUp
            end={value}
            duration={2.5}
            separator=","
            prefix={prefix}
            suffix={suffix}
            enableScrollSpy
            scrollSpyOnce
        />
    );
}

export function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden flex items-center">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            {/* Floating Gradient Orbs */}
            <motion.div
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
                transition={{ type: "spring", damping: 30 }}
                className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    x: -mousePosition.x,
                    y: -mousePosition.y,
                }}
                transition={{ type: "spring", damping: 30 }}
                className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px]"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium">15,000+ 비즈니스가 성장 중</span>
                    </motion.div>

                    {/* Main Heading with Stagger Animation */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight"
                    >
                        <span className="block">인스타그램으로</span>
                        <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                            매출을 올리세요
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        평균 <span className="text-white font-semibold">3개월</span> 만에
                        매출 <span className="text-white font-semibold">300%</span> 성장
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
                    >
                        <Link
                            href="/start"
                            className="group inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-105"
                        >
                            무료 상담 시작
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            성공 사례 보기
                        </Link>
                    </motion.div>

                    {/* Animated Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                    >
                        {[
                            { icon: Users, value: 15400, suffix: '+', label: '누적 고객' },
                            { icon: TrendingUp, value: 340, suffix: '%', label: '평균 성장률' },
                            { icon: Shield, value: 100, suffix: '%', label: '계정 안전' },
                            { value: 4.9, suffix: '/5', label: '고객 만족도', decimal: 1 },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + i * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-default"
                            >
                                <div className="text-4xl md:text-5xl font-bold mb-2">
                                    <CountUp
                                        end={stat.value}
                                        duration={2.5}
                                        decimals={stat.decimal || 0}
                                        suffix={stat.suffix}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
                >
                    <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
