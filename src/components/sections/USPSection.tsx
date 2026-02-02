'use client';

import { motion } from 'framer-motion';
import { Target, Shield, BarChart3, Zap, Clock, Users } from 'lucide-react';

const features = [
    {
        icon: Target,
        title: "정밀 타겟팅",
        desc: "당신의 이상적인 고객층만 타겟팅",
        size: "large",
        bg: "bg-gradient-to-br from-purple-500 to-purple-700",
        text: "text-white"
    },
    {
        icon: Shield,
        title: "100% 안전",
        desc: "계정 제재 0건",
        size: "small",
        bg: "bg-green-50",
        text: "text-green-900"
    },
    {
        icon: Zap,
        title: "48시간",
        desc: "내 첫 변화 시작",
        size: "small",
        bg: "bg-yellow-50",
        text: "text-yellow-900"
    },
    {
        icon: BarChart3,
        title: "투명한 리포팅",
        desc: "실시간 성과 확인, 숨김 없는 데이터 공유",
        size: "medium",
        bg: "bg-blue-50",
        text: "text-blue-900"
    },
    {
        icon: Clock,
        title: "24/7 운영",
        desc: "쉬지 않는 시스템",
        size: "medium",
        bg: "bg-gray-900",
        text: "text-white"
    },
    {
        icon: Users,
        title: "전담 매니저",
        desc: "1:1 케어",
        size: "small",
        bg: "bg-pink-50",
        text: "text-pink-900"
    },
];

export function USPSection() {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-600 font-medium text-sm mb-2"
                    >
                        왜 우리인가
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900"
                    >
                        차별화된 서비스
                    </motion.h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {/* Large Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="col-span-2 row-span-2 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 text-white flex flex-col justify-between min-h-[320px] cursor-default"
                    >
                        <Target className="w-10 h-10 opacity-80" />
                        <div>
                            <h3 className="text-3xl font-bold mb-2">정밀 타겟팅</h3>
                            <p className="text-white/80 text-lg">
                                AI가 분석한 당신의 이상적인 고객층만 타겟팅합니다.
                                효율적인 도달로 낭비 없는 성장을 만듭니다.
                            </p>
                        </div>
                    </motion.div>

                    {/* Small Cards Row 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-green-500 rounded-3xl p-6 text-white flex flex-col justify-between min-h-[150px] cursor-default"
                    >
                        <Shield className="w-8 h-8 opacity-80" />
                        <div>
                            <div className="text-2xl font-bold">100%</div>
                            <div className="text-white/80 text-sm">안전 보장</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-yellow-400 rounded-3xl p-6 text-yellow-900 flex flex-col justify-between min-h-[150px] cursor-default"
                    >
                        <Zap className="w-8 h-8 opacity-80" />
                        <div>
                            <div className="text-2xl font-bold">48시간</div>
                            <div className="opacity-80 text-sm">내 첫 변화</div>
                        </div>
                    </motion.div>

                    {/* Small Cards Row 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-900 rounded-3xl p-6 text-white flex flex-col justify-between min-h-[150px] cursor-default"
                    >
                        <Clock className="w-8 h-8 opacity-80" />
                        <div>
                            <div className="text-2xl font-bold">24/7</div>
                            <div className="text-white/80 text-sm">무중단 운영</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-pink-500 rounded-3xl p-6 text-white flex flex-col justify-between min-h-[150px] cursor-default"
                    >
                        <Users className="w-8 h-8 opacity-80" />
                        <div>
                            <div className="text-2xl font-bold">1:1</div>
                            <div className="text-white/80 text-sm">전담 매니저</div>
                        </div>
                    </motion.div>

                    {/* Wide Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        className="col-span-2 bg-blue-600 rounded-3xl p-6 text-white flex items-center gap-6 cursor-default"
                    >
                        <BarChart3 className="w-12 h-12 opacity-80 flex-shrink-0" />
                        <div>
                            <div className="text-xl font-bold mb-1">투명한 리포팅</div>
                            <div className="text-white/80 text-sm">실시간 대시보드에서 모든 성과를 확인하세요</div>
                        </div>
                    </motion.div>

                    {/* Another Wide Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="col-span-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-6 text-white text-center cursor-default"
                    >
                        <div className="text-3xl font-bold mb-1">340%</div>
                        <div className="text-white/80">평균 성장률</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
