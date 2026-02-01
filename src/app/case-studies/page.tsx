'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, TrendingUp, Users, Heart, Eye, Bookmark, Share2 } from 'lucide-react';
import Link from 'next/link';
import CountUp from 'react-countup';
import { useState } from 'react';

const caseStudies = [
    {
        id: 1,
        title: '강남 뷰티 클리닉',
        category: '뷰티/의료',
        period: '3개월',
        image: '💄',
        color: 'from-pink-500 to-rose-600',
        followers: { before: 180, after: 12400 },
        engagement: { before: 0.8, after: 18.2 },
        revenue: '+580%',
        quotes: "주말 예약이 꽉 찹니다",
        stats: {
            likes: 850,
            comments: 124,
            saves: 380,
            reach: 48000,
        },
        story: "신규 오픈 후 인지도가 전무했던 뷰티 클리닉. 지역 타겟팅과 비포/애프터 콘텐츠 전략으로 3개월 만에 예약이 넘쳐나는 클리닉으로 성장했습니다."
    },
    {
        id: 2,
        title: '핸드메이드 쥬얼리',
        category: '이커머스',
        period: '4개월',
        image: '💍',
        color: 'from-purple-500 to-violet-600',
        followers: { before: 2400, after: 28600 },
        engagement: { before: 2.1, after: 15.8 },
        revenue: '+1,240%',
        quotes: "직원을 고용할 정도로 성장했습니다",
        stats: {
            likes: 1200,
            comments: 280,
            saves: 920,
            reach: 125000,
        },
        story: "작은 공방에서 시작한 핸드메이드 브랜드. 스토리텔링 콘텐츠와 제작 과정 릴스로 팬덤을 형성, 월 매출 1억을 돌파했습니다."
    },
    {
        id: 3,
        title: '홍대 비건 카페',
        category: 'F&B',
        period: '2개월',
        image: '☕',
        color: 'from-green-500 to-emerald-600',
        followers: { before: 890, after: 18200 },
        engagement: { before: 1.5, after: 22.4 },
        revenue: '+890%',
        quotes: "웨이팅이 당연한 카페가 되었습니다",
        stats: {
            likes: 980,
            comments: 340,
            saves: 1200,
            reach: 82000,
        },
        story: "높은 임대료에 비해 손님이 없던 카페. 비주얼 중심 콘텐츠와 시즌 한정 메뉴 이벤트로 핫플레이스로 자리잡았습니다."
    },
    {
        id: 4,
        title: '퍼스널 트레이닝',
        category: '피트니스',
        period: '3개월',
        image: '💪',
        color: 'from-blue-500 to-cyan-600',
        followers: { before: 1200, after: 24800 },
        engagement: { before: 3.2, after: 19.6 },
        revenue: '+670%',
        quotes: "대기자 명단을 운영하고 있습니다",
        stats: {
            likes: 1400,
            comments: 420,
            saves: 850,
            reach: 96000,
        },
        story: "대형 체인과의 경쟁에서 밀리던 PT샵. 회원 변화 스토리와 운동 팁 콘텐츠로 차별화에 성공, 신규 회원을 받지 못할 정도로 성장했습니다."
    },
];

function StatCard({ icon: Icon, label, value }: { icon: any; label: string; value: number }) {
    return (
        <div className="bg-gray-50 rounded-xl p-4 text-center">
            <Icon className="w-5 h-5 text-gray-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">
                <CountUp end={value} duration={2} separator="," enableScrollSpy scrollSpyOnce />
            </div>
            <div className="text-xs text-gray-500">{label}</div>
        </div>
    );
}

export default function CaseStudiesPage() {
    const [activeCase, setActiveCase] = useState(0);

    return (
        <main className="min-h-screen bg-white">
            {/* Navigation */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-medium">메인으로</span>
                    </Link>
                    <Link href="/start" className="text-sm font-semibold text-purple-600 hover:text-purple-700">
                        무료 상담 →
                    </Link>
                </div>
            </div>

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-purple-600 font-semibold text-sm mb-3"
                        >
                            성공 사례
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
                        >
                            실제 고객들의<br />성장 스토리
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-500 max-w-xl mx-auto"
                        >
                            평균 3개월 만에 팔로워 10배 이상 성장을 달성한 고객들의 이야기입니다.
                        </motion.p>
                    </div>

                    {/* Summary Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl text-white"
                    >
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">
                                <CountUp end={15400} duration={2} separator="," enableScrollSpy scrollSpyOnce />+
                            </div>
                            <div className="text-sm text-gray-400">누적 고객</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">
                                <CountUp end={340} duration={2} enableScrollSpy scrollSpyOnce />%
                            </div>
                            <div className="text-sm text-gray-400">평균 성장률</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">
                                <CountUp end={98} duration={2} enableScrollSpy scrollSpyOnce />%
                            </div>
                            <div className="text-sm text-gray-400">만족도</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">
                                <CountUp end={100} duration={2} enableScrollSpy scrollSpyOnce />%
                            </div>
                            <div className="text-sm text-gray-400">안전 보장</div>
                        </div>
                    </motion.div>

                    {/* Case Studies */}
                    <div className="space-y-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                {/* Header */}
                                <div className={`bg-gradient-to-r ${study.color} p-6 md:p-8 text-white`}>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-5xl">{study.image}</span>
                                            <div>
                                                <h2 className="text-2xl md:text-3xl font-bold">{study.title}</h2>
                                                <p className="text-white/80">{study.category} • {study.period}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-4xl md:text-5xl font-bold">{study.revenue}</div>
                                            <div className="text-white/80 text-sm">매출 증가</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8">
                                    {/* Story */}
                                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">{study.story}</p>

                                    {/* Metrics Grid */}
                                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                                        {/* Followers */}
                                        <div className="bg-gray-50 rounded-2xl p-6">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Users className="w-5 h-5 text-purple-600" />
                                                <span className="font-semibold text-gray-900">팔로워 변화</span>
                                            </div>
                                            <div className="flex items-end gap-4">
                                                <div>
                                                    <div className="text-sm text-gray-400 mb-1">Before</div>
                                                    <div className="text-2xl font-bold text-gray-400">{study.followers.before.toLocaleString()}</div>
                                                </div>
                                                <TrendingUp className="w-6 h-6 text-green-500 mb-2" />
                                                <div>
                                                    <div className="text-sm text-purple-600 mb-1">After</div>
                                                    <div className="text-4xl font-bold text-purple-600">
                                                        <CountUp end={study.followers.after} duration={2} separator="," enableScrollSpy scrollSpyOnce />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Engagement */}
                                        <div className="bg-gray-50 rounded-2xl p-6">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Heart className="w-5 h-5 text-pink-600" />
                                                <span className="font-semibold text-gray-900">참여율 변화</span>
                                            </div>
                                            <div className="flex items-end gap-4">
                                                <div>
                                                    <div className="text-sm text-gray-400 mb-1">Before</div>
                                                    <div className="text-2xl font-bold text-gray-400">{study.engagement.before}%</div>
                                                </div>
                                                <TrendingUp className="w-6 h-6 text-green-500 mb-2" />
                                                <div>
                                                    <div className="text-sm text-pink-600 mb-1">After</div>
                                                    <div className="text-4xl font-bold text-pink-600">
                                                        <CountUp end={study.engagement.after} duration={2} decimals={1} enableScrollSpy scrollSpyOnce />%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Detailed Stats */}
                                    <div className="grid grid-cols-4 gap-4 mb-8">
                                        <StatCard icon={Heart} label="좋아요" value={study.stats.likes} />
                                        <StatCard icon={Share2} label="댓글" value={study.stats.comments} />
                                        <StatCard icon={Bookmark} label="저장" value={study.stats.saves} />
                                        <StatCard icon={Eye} label="도달" value={study.stats.reach} />
                                    </div>

                                    {/* Quote */}
                                    <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
                                        <p className="text-purple-900 text-lg italic">"{study.quotes}"</p>
                                        <p className="text-purple-600 text-sm mt-2 font-medium">— {study.title} 대표</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 text-center"
                    >
                        <div className="bg-gray-900 rounded-3xl p-12 md:p-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                다음 성공 사례가 되어보세요
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                                무료 상담을 통해 맞춤 성장 전략을 받아보세요. 3개월 후, 이 페이지에서 만나요.
                            </p>
                            <Link
                                href="/start"
                                className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                무료 상담 시작 <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
