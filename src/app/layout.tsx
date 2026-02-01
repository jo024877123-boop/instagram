import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google"; // Import Noto Sans KR
import "./globals.css";
import clsx from "clsx";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"], // Noto Sans KR supports latin too, though mainly korean.
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "인스타 마케팅 - 검증된 인스타그램 성장 솔루션",
  description: "15,000명 이상의 고객이 선택한 안전하고 효과적인 인스타그램 마케팅 서비스. 팔로워, 좋아요, 실제 매출까지 모두 성장시켜드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={clsx(notoSansKr.variable, "antialiased font-sans")}
      >
        {children}
      </body>
    </html>
  );
}
