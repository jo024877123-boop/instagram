'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';

const monthlyData = [
    { month: '1월', followers: 180, revenue: 120 },
    { month: '2월', followers: 850, revenue: 280 },
    { month: '3월', followers: 2400, revenue: 520 },
    { month: '4월', followers: 5200, revenue: 980 },
    { month: '5월', followers: 8900, revenue: 1650 },
    { month: '6월', followers: 12400, revenue: 2400 },
];

function AnimatedGraph() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const maxFollowers = Math.max(...monthlyData.map(d => d.followers));
    const maxRevenue = Math.max(...monthlyData.map(d => d.revenue));

    return (
        <div ref={ref} className="relative h-64 md:h-80">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-gray-400">
                <span>12.4K</span>
                <span>6K</span>
                <span>0</span>
            </div>

            {/* Graph Area */}
            <div className="ml-16 h-full relative">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2].map(i => (
                        <div key={i} className="border-t border-gray-200" />
                    ))}
                </div>

                {/* Bars */}
                <div className="absolute inset-0 bottom-8 flex items-end justify-around gap-2 md:gap-4 px-2">
                    {monthlyData.map((data, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-1">
                            <motion.div
                                initial={{ height: 0 }}
                                animate={isVisible ? { height: `${(data.followers / maxFollowers) * 100}%` } : { height: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                                className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg relative group cursor-pointer"
                            >
                                {/* Tooltip */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {data.followers.toLocaleString()} 팔로워
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-around text-xs text-gray-500">
                    {monthlyData.map((data, index) => (
                        <span key={index}>{data.month}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function AnimatedLine() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const points = monthlyData.map((d, i) => ({
        x: (i / (monthlyData.length - 1)) * 100,
        y: 100 - (d.revenue / 2400) * 80,
    }));

    const pathD = points.reduce((acc, point, i) => {
        if (i === 0) return `M ${point.x} ${point.y}`;
        return `${acc} L ${point.x} ${point.y}`;
    }, '');

    return (
        <div ref={ref} className="relative h-64 md:h-80">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-gray-400">
                <span>₩2,400만</span>
                <span>₩1,200만</span>
                <span>₩0</span>
            </div>

            {/* Graph Area */}
            <div className="ml-16 h-full relative pb-8">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2].map(i => (
                        <div key={i} className="border-t border-gray-200" />
                    ))}
                </div>

                {/* SVG Line Chart */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Gradient Fill */}
                    <defs>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
                            <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
                        </linearGradient>
                    </defs>

                    {/* Fill Area */}
                    <motion.path
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        d={`${pathD} L 100 100 L 0 100 Z`}
                        fill="url(#lineGradient)"
                    />

                    {/* Line */}
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        d={pathD}
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="0.5"
                        vectorEffect="non-scaling-stroke"
                    />

                    {/* Data Points */}
                    {points.map((point, i) => (
                        <motion.circle
                            key={i}
                            initial={{ scale: 0 }}
                            animate={isVisible ? { scale: 1 } : { scale: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            cx={point.x}
                            cy={point.y}
                            r="1.5"
                            fill="#22c55e"
                            className="cursor-pointer hover:r-2"
                        />
                    ))}
                </svg>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
                    {monthlyData.map((data, index) => (
                        <span key={index}>{data.month}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function GrowthSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-600 font-medium text-sm mb-2"
                    >
                        실시간 성장 지표
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        숫자로 증명하는 성장
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg"
                    >
                        6개월간 실제 고객의 성장 데이터입니다
                    </motion.p>
                </div>

                {/* Animated Counter Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
                    {[
                        { label: '총 팔로워 증가', value: 12220, suffix: '+', color: 'text-purple-600' },
                        { label: '매출 증가율', value: 580, suffix: '%', color: 'text-green-600' },
                        { label: '평균 참여율', value: 18.2, suffix: '%', decimal: 1, color: 'text-blue-600' },
                        { label: '신규 고객', value: 3400, suffix: '+', color: 'text-orange-600' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 rounded-2xl p-4 md:p-6 text-center cursor-default"
                        >
                            <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                                <CountUp
                                    end={stat.value}
                                    duration={2}
                                    decimals={stat.decimal || 0}
                                    suffix={stat.suffix}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                            </div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Charts Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Followers Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-200 rounded-2xl p-6"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="font-semibold text-gray-900">팔로워 성장</h3>
                                <p className="text-sm text-gray-500">월별 팔로워 증가 추이</p>
                            </div>
                            <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                                <span>+6,789%</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </div>
                        </div>
                        <AnimatedGraph />
                    </motion.div>

                    {/* Revenue Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-200 rounded-2xl p-6"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="font-semibold text-gray-900">매출 성장</h3>
                                <p className="text-sm text-gray-500">월별 매출 증가 추이</p>
                            </div>
                            <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                                <span>+1,900%</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </div>
                        </div>
                        <AnimatedLine />
                    </motion.div>
                </div>

                {/* Live Counter */}
                <motion.div
                    style={{ y }}
                    className="mt-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 text-white text-center"
                >
                    <p className="text-purple-200 mb-4">현재까지 누적 성장</p>
                    <div className="text-5xl md:text-7xl font-bold mb-4">
                        <CountUp
                            end={1547892}
                            duration={3}
                            separator=","
                            enableScrollSpy
                            scrollSpyOnce
                        />
                        <span className="text-purple-300 text-3xl md:text-4xl ml-2">팔로워</span>
                    </div>
                    <p className="text-purple-200">우리 고객들이 함께 달성한 성과입니다</p>
                </motion.div>
            </div>
        </section>
    );
}
