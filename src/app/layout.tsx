import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DockDemo } from "@/components/Dock";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Toaster } from "@/components/ui/sonner";
import { Particles } from "@/components/magicui/particles";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Joseph Alforque - Software Engineer",
  description:
    "Full-Stack Software Engineer specializing in modern web technologies, React, Next.js, and TypeScript.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${playfairDisplay.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Particles
            size={0.1}
            className="z-0 fixed inset-0"
            quantity={50}
            ease={80}
          />
          <DockDemo />
          {children}
          <Toaster position="top-left" richColors closeButton />
          <ScrollProgress className="z-10 h-0.5" />
        </ThemeProvider>
      </body>
    </html>
  );
}
