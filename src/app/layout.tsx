import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Asia Drone Flying Club Kerala | by Asia Softlab India",
  description: "Official portal of Asia Drone Flying Club Kerala. Drone training, aerial photography, racing events, workshops, and drone community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      data-scroll-behavior="smooth" 
      suppressHydrationWarning
      className={`${poppins.variable} scroll-smooth antialiased font-sans`}
    >
      <body 
        suppressHydrationWarning
        className="min-h-screen bg-white text-slate-900 flex flex-col font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
