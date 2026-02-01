'use client';

import { motion } from 'framer-motion';
import { Newspaper, Award, Tv } from 'lucide-react';

const mediaItems = [
    { name: '매일경제', quote: '"인스타 마케팅 시장의 새로운 강자"', icon: Newspaper },
    { name: '조선비즈', quote: '"소상공인 필수 마케팅 파트너"', icon: Newspaper },
    { name: '스타트업 위클리', quote: '"2024 주목할 그로스 에이전시"', icon: Award },
    { name: 'SBS Biz', quote: '"SNS 마케팅의 새로운 패러다임"', icon: Tv },
];

export function MediaSection() {
    return (
        <section className="py-24 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-400 font-medium text-sm mb-2"
                    >
                        미디어
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        언론에서 주목하는 서비스
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-default"
                        >
                            <item.icon className="w-6 h-6 text-purple-400 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                            <p className="text-gray-400 text-sm italic">{item.quote}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
