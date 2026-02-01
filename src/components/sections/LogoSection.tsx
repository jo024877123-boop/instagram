'use client';

import { motion } from 'framer-motion';

const logos = [
    { name: '패션 브랜드', category: '이커머스' },
    { name: '뷰티 클리닉', category: '의료' },
    { name: '카페', category: 'F&B' },
    { name: 'PT 센터', category: '피트니스' },
    { name: '쥬얼리', category: '핸드메이드' },
    { name: '레스토랑', category: 'F&B' },
    { name: '스튜디오', category: '사진' },
    { name: '온라인샵', category: '이커머스' },
];

export function LogoSection() {
    return (
        <section className="py-16 border-y border-gray-100 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-gray-500 mb-8"
                >
                    15,000개 이상의 비즈니스가 함께하고 있습니다
                </motion.p>

                {/* Scrolling Logos */}
                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50/50 to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50/50 to-transparent z-10" />

                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex gap-12"
                    >
                        {[...logos, ...logos, ...logos].map((logo, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200"
                            >
                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                                    {logo.name.charAt(0)}
                                </div>
                                <span className="font-medium text-gray-700 whitespace-nowrap">{logo.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
