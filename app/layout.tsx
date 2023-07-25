import Header from "@/components/Header";
import "@/styles/globals.scss";
import Footer from "@/components/Footer";
export const metadata = {
  title: "지현포트폴리오",
  description: "웹디자이너, 웹퍼블리셔 포트폴리오",
  icon: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
