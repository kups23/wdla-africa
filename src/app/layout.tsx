import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Workforce DealLab Africa | The Education-To-Employment Solutions Summit",
  description:
    "Bridging the Education-to-Employment Gap. Turning Workforce Challenges Into Solutions, Partnerships And Impact.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#0B1B2B]">
        {children}
      </body>
    </html>
  );
}
