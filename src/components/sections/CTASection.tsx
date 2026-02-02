'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-3xl p-6 md:p-16"
                >
                    {/* Background Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                                <Sparkles className="w-4 h-4 text-yellow-300" />
                                <span className="text-white/90 text-sm font-medium">첫 상담 무료</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                지금 바로<br />
                                성장을 시작하세요
                            </h2>
                            <p className="text-white/80 text-lg">
                                10분 상담으로 맞춤 성장 전략을 받아보세요.<br className="hidden md:block" />
                                24시간 내에 전담 매니저가 연락드립니다.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Link
                                href="/start"
                                className="group inline-flex items-center justify-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all text-lg"
                            >
                                무료 상담 받기
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <p className="text-white/60 text-sm text-center">
                                ✓ 신용카드 불필요 &nbsp; ✓ 언제든 취소 가능
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
