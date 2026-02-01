'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    { name: "김서영", role: "패션 브랜드", content: "3개월 만에 매출이 3배 올랐어요. 처음엔 반신반의했는데 결과로 증명해주셨습니다." },
    { name: "박준호", role: "PT 트레이너", content: "신규 회원 문의가 폭주해서 대기자 명단을 만들었습니다." },
    { name: "이지민", role: "카페 운영", content: "인스타 마케팅 시작 후 웨이팅이 생겼어요. 진짜 효과 있습니다." },
    { name: "최민수", role: "스타트업", content: "투명한 리포트가 정말 좋았습니다. 어디에 비용이 쓰이는지 다 보여요." },
    { name: "정유진", role: "쥬얼리샵", content: "해외 주문까지 들어오기 시작했어요. 꿈만 같습니다." },
    { name: "한동훈", role: "레스토랑", content: "예약이 2주 전에 마감됩니다. 전엔 상상도 못했죠." },
];

const reviewsReversed = [...reviews].reverse();

export function ReviewCarousel() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-purple-600 font-medium text-sm mb-2"
                        >
                            고객 후기
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-gray-900"
                        >
                            실제 고객들의 이야기
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 mt-4 md:mt-0"
                    >
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-gray-600 font-medium">4.9 / 5.0</span>
                        <span className="text-gray-400">• 15,400+ 리뷰</span>
                    </motion.div>
                </div>
            </div>

            {/* Marquee - Row 1 */}
            <div className="relative mb-4">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                    animate={{ x: [0, -1500] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex gap-4"
                >
                    {[...reviews, ...reviews].map((review, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[400px] bg-gray-50 rounded-2xl p-6 border border-gray-100"
                        >
                            <Quote className="w-8 h-8 text-purple-200 mb-4" />
                            <p className="text-gray-700 mb-4 leading-relaxed">{review.content}</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">{review.name}</div>
                                    <div className="text-sm text-gray-500">{review.role}</div>
                                </div>
                                <div className="flex">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Marquee - Row 2 (opposite direction) */}
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                    animate={{ x: [-1500, 0] }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="flex gap-4"
                >
                    {[...reviewsReversed, ...reviewsReversed].map((review, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[400px] bg-gray-50 rounded-2xl p-6 border border-gray-100"
                        >
                            <Quote className="w-8 h-8 text-purple-200 mb-4" />
                            <p className="text-gray-700 mb-4 leading-relaxed">{review.content}</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">{review.name}</div>
                                    <div className="text-sm text-gray-500">{review.role}</div>
                                </div>
                                <div className="flex">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
