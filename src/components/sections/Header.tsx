'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 100);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: '서비스', href: '/#services' },
        { name: '성공사례', href: '/case-studies' },
        { name: '가격', href: '/#pricing' },
        { name: 'FAQ', href: '/#faq' },
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isScrolled
                ? "bg-white/90 backdrop-blur-lg border-b border-gray-100 py-3"
                : "bg-transparent py-5"
        )}>
            <div className="container mx-auto px-6">
                <nav className="flex items-center justify-between">
                    <Link href="/" className={cn(
                        "font-bold text-lg transition-colors",
                        isScrolled ? "text-gray-900" : "text-white"
                    )}>
                        인스타 마케팅
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm transition-colors",
                                    isScrolled
                                        ? "text-gray-600 hover:text-gray-900"
                                        : "text-white/80 hover:text-white"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/start"
                            className={cn(
                                "text-sm font-medium px-5 py-2.5 rounded-lg transition-all",
                                isScrolled
                                    ? "bg-gray-900 text-white hover:bg-gray-800"
                                    : "bg-white text-gray-900 hover:bg-gray-100"
                            )}
                        >
                            무료 상담
                        </Link>
                    </div>

                    <button
                        className={cn(
                            "md:hidden p-2 rounded-lg transition-colors",
                            isScrolled ? "text-gray-900" : "text-white"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden bg-white border-b border-gray-100 shadow-lg"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/start"
                                className="bg-gray-900 text-white text-center py-3 rounded-lg mt-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                무료 상담
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
