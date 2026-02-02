'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Search, Rocket, BarChart } from 'lucide-react';

const steps = [
    {
        icon: MessageCircle,
        title: '무료 상담',
        desc: '현재 계정 상태와 목표를 파악합니다. 경쟁사 분석과 함께 성장 가능성을 진단해드립니다.',
        time: '10분',
        color: 'bg-purple-600'
    },
    {
        icon: Search,
        title: '전략 수립',
        desc: '타겟 오디언스를 정의하고 최적의 콘텐츠 전략을 설계합니다.',
        time: '1-2일',
        color: 'bg-blue-600'
    },
    {
        icon: Rocket,
        title: '실행',
        desc: '24/7 자동화 시스템이 쉬지 않고 성장을 만들어냅니다.',
        time: '매일',
        color: 'bg-green-600'
    },
    {
        icon: BarChart,
        title: '리포팅',
        desc: '투명한 주간 리포트로 성과를 공유하고 전략을 최적화합니다.',
        time: '매주',
        color: 'bg-orange-600'
    },
];

export function ProcessSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section ref={containerRef} className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left - Sticky Header */}
                    <div className="lg:sticky lg:top-32">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-purple-600 font-medium text-sm mb-2"
                        >
                            진행 과정
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        >
                            체계적인<br />4단계 프로세스
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gray-500 text-lg mb-8"
                        >
                            상담부터 결과까지, 모든 단계를 함께합니다.
                            투명한 과정으로 신뢰를 쌓아갑니다.
                        </motion.p>

                        {/* Progress Bar */}
                        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                                style={{ scaleX: scrollYProgress }}
                                className="h-full bg-purple-600 origin-left"
                            />
                        </div>
                    </div>

                    {/* Right - Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />

                        {/* Steps */}
                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-16"
                                >
                                    {/* Icon Circle */}
                                    <div className={`absolute left-0 w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white`}>
                                        <step.icon className="w-5 h-5" />
                                    </div>

                                    {/* Time Badge */}
                                    <div className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-3">
                                        {step.time}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-500">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
