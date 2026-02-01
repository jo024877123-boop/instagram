'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export function ContactFooter() {
    const [email, setEmail] = useState('');

    return (
        <footer className="bg-gray-900 text-white">
            {/* CTA Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        성장을 시작할 준비가 되셨나요?
                    </h2>
                    <p className="text-gray-400 mb-8">
                        무료 상담을 통해 맞춤 성장 전략을 받아보세요
                    </p>
                    <Link
                        href="/start"
                        className="inline-block bg-white text-gray-900 font-medium px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                        무료 상담 시작
                    </Link>
                </div>
            </div>

            {/* Footer Links */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <div className="font-bold text-lg mb-4">인스타 마케팅</div>
                            <p className="text-gray-400 text-sm mb-4 max-w-xs">
                                진짜 고객을 만드는 인스타그램 마케팅 전문가
                            </p>
                            <div className="space-y-2 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    hello@instamarketing.kr
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    02-1234-5678
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="font-medium mb-4">서비스</div>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><Link href="/#services" className="hover:text-white transition-colors">왜 인스타 마케팅인가</Link></li>
                                <li><Link href="/case-studies" className="hover:text-white transition-colors">성공 사례</Link></li>
                                <li><Link href="/#pricing" className="hover:text-white transition-colors">가격</Link></li>
                            </ul>
                        </div>

                        <div>
                            <div className="font-medium mb-4">문의</div>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><Link href="/start" className="hover:text-white transition-colors">무료 상담</Link></li>
                                <li><Link href="/#faq" className="hover:text-white transition-colors">자주 묻는 질문</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2024 인스타 마케팅. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <button className="hover:text-white transition-colors">개인정보처리방침</button>
                        <button className="hover:text-white transition-colors">이용약관</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
