'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export default function StartPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        businessType: '',
        currentFollowers: '',
        goal: '',
        name: '',
        phone: '',
    });

    return (
        <main className="min-h-screen bg-white">
            {/* Navigation */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 h-16 flex items-center">
                    <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-medium">메인으로</span>
                    </Link>
                </div>
            </div>

            <div className="pt-28 pb-20">
                <div className="container mx-auto px-6 max-w-lg">
                    {/* Progress */}
                    <div className="flex gap-2 mb-8">
                        {[1, 2, 3].map((s) => (
                            <div
                                key={s}
                                className={`h-1 flex-1 rounded-full ${step >= s ? 'bg-purple-600' : 'bg-gray-200'}`}
                            />
                        ))}
                    </div>

                    {/* Step 1 */}
                    {step === 1 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <p className="text-purple-600 font-medium text-sm mb-2">1/3</p>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                어떤 비즈니스를 운영하시나요?
                            </h1>
                            <p className="text-gray-500 mb-8">맞춤 전략을 위해 알려주세요</p>

                            <div className="space-y-3 mb-8">
                                {['개인 브랜드', '쇼핑몰/커머스', '로컬 비즈니스', '인플루언서', '기타'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setFormData({ ...formData, businessType: type })}
                                        className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${formData.businessType === type
                                                ? 'border-purple-600 bg-purple-50 text-purple-700'
                                                : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                disabled={!formData.businessType}
                                className="w-full bg-gray-900 text-white py-4 rounded-xl font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                            >
                                다음 <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <p className="text-purple-600 font-medium text-sm mb-2">2/3</p>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                어떤 목표를 가지고 계신가요?
                            </h1>
                            <p className="text-gray-500 mb-8">원하시는 결과를 선택해주세요</p>

                            <div className="space-y-3 mb-8">
                                {['팔로워 증가', '매출 증대', '브랜드 인지도', '지역 고객 확보'].map((goal) => (
                                    <button
                                        key={goal}
                                        onClick={() => setFormData({ ...formData, goal })}
                                        className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${formData.goal === goal
                                                ? 'border-purple-600 bg-purple-50 text-purple-700'
                                                : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        {goal}
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setStep(1)}
                                    className="px-6 py-4 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                                >
                                    이전
                                </button>
                                <button
                                    onClick={() => setStep(3)}
                                    disabled={!formData.goal}
                                    className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                                >
                                    다음 <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <p className="text-purple-600 font-medium text-sm mb-2">3/3</p>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                연락처를 남겨주세요
                            </h1>
                            <p className="text-gray-500 mb-8">24시간 내에 연락드립니다</p>

                            <div className="space-y-4 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-colors"
                                        placeholder="홍길동"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">전화번호</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 transition-colors"
                                        placeholder="010-1234-5678"
                                    />
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 mb-8">
                                <div className="flex items-start gap-2 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>입력한 정보는 상담 목적으로만 사용됩니다</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setStep(2)}
                                    className="px-6 py-4 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                                >
                                    이전
                                </button>
                                <button
                                    disabled={!formData.name || !formData.phone}
                                    className="flex-1 bg-purple-600 text-white py-4 rounded-xl font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
                                >
                                    무료 상담 신청
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </main>
    );
}
