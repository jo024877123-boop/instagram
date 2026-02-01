'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "계정이 안전한가요?",
        answer: "네, 100% 안전합니다. 인스타그램 정책을 철저히 준수하며, 자연스러운 방식으로만 운영합니다. 지금까지 단 한 건의 계정 제재도 없었습니다."
    },
    {
        question: "얼마나 빨리 결과가 나오나요?",
        answer: "첫 48시간 내에 변화가 시작됩니다. 대부분의 고객은 2주 내에 눈에 띄는 성장을 경험하며, 3개월 후에는 평균 300% 이상의 성장을 달성합니다."
    },
    {
        question: "환불이 가능한가요?",
        answer: "네, 모든 플랜에 환불 보장이 포함되어 있습니다. 만족하지 않으시면 전액 환불해드립니다."
    },
    {
        question: "봇이나 가짜 계정을 사용하나요?",
        answer: "절대 아닙니다. 실제 활성 사용자들만 타겟팅하며, 품질 낮은 팔로워는 사용하지 않습니다."
    },
    {
        question: "어떤 업종에 효과적인가요?",
        answer: "모든 업종에 효과적입니다. 특히 뷰티, F&B, 패션, 피트니스, 이커머스 분야에서 뛰어난 성과를 보이고 있습니다."
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left - Header */}
                    <div className="lg:sticky lg:top-32 lg:self-start">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-purple-600 font-medium text-sm mb-2"
                        >
                            FAQ
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        >
                            자주 묻는<br />질문들
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gray-500 mb-8"
                        >
                            궁금한 점이 더 있다면 언제든 문의해주세요.
                            24시간 내에 답변드립니다.
                        </motion.p>
                        <motion.a
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            href="mailto:hello@instamarketing.kr"
                            className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700"
                        >
                            문의하기 →
                        </motion.a>
                    </div>

                    {/* Right - Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="border-b border-gray-200"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full py-6 flex items-center justify-between text-left group"
                                >
                                    <span className="font-semibold text-lg text-gray-900 group-hover:text-purple-600 transition-colors pr-4">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-6 text-gray-500 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
