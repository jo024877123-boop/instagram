'use client';

import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const plans = [
    {
        name: "스타터",
        price: "15",
        desc: "개인 계정",
        features: ["팔로워 500명", "좋아요 100개", "30일 보장"],
    },
    {
        name: "프로",
        price: "45",
        desc: "소상공인 추천",
        features: ["팔로워 1,500명", "좋아요 300개", "전담 매니저", "콘텐츠 전략", "60일 보장"],
        popular: true
    },
    {
        name: "비즈니스",
        price: "75",
        desc: "본격적인 성장",
        features: ["팔로워 3,000명", "무제한 인게이지먼트", "1:1 컨설팅", "경쟁사 분석", "광고 지원"],
    }
];

export function PricingSection() {
    return (
        <section id="pricing" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-600 font-medium text-sm mb-2"
                    >
                        가격
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        심플한 가격 정책
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-500"
                    >
                        목표에 맞는 플랜을 선택하세요 • 모든 플랜 환불 보장
                    </motion.p>
                </div>

                {/* Pricing Cards - Horizontal on Desktop */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-0 bg-white rounded-3xl overflow-hidden shadow-xl">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative p-8 ${plan.popular
                                    ? "bg-purple-600 text-white md:-my-4 md:py-12 md:scale-105 z-10 rounded-3xl shadow-2xl"
                                    : "border-r border-gray-100 last:border-r-0"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-b-lg">
                                        인기
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className={`text-lg font-semibold mb-1 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                                        {plan.name}
                                    </h3>
                                    <p className={`text-sm ${plan.popular ? "text-white/70" : "text-gray-500"}`}>
                                        {plan.desc}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                                            {plan.price}
                                        </span>
                                        <span className={plan.popular ? "text-white/70" : "text-gray-500"}>만원/월</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className={`flex items-center gap-2 text-sm ${plan.popular ? "text-white/90" : "text-gray-600"}`}>
                                            <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-yellow-400" : "text-purple-600"}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/start"
                                    className={`block text-center py-3 rounded-xl font-medium transition-all ${plan.popular
                                        ? "bg-white text-purple-600 hover:bg-gray-100"
                                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                        }`}
                                >
                                    시작하기
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Enterprise */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-8 bg-gray-900 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                    >
                        <div className="text-white">
                            <h3 className="text-xl font-bold mb-2">엔터프라이즈</h3>
                            <p className="text-gray-400">대규모 비즈니스를 위한 맞춤 솔루션</p>
                        </div>
                        <Link
                            href="/start"
                            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-medium px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                            문의하기 <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
