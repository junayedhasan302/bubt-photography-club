import type { Metadata } from "next";
import { DM_Sans, Sora, Geist_Mono } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BUBT Photography Club",
    template: "%s | BUBT Photography Club",
  },
  description:
    "Official website of BUBT Photography Club, developed and maintained by the 2026 Committee.",
};

const themeScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem("theme");

      const theme =
        savedTheme === "light" || savedTheme === "dark"
          ? savedTheme
          : window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

      document.documentElement.classList.toggle(
        "dark",
        theme === "dark"
      );

      document.documentElement.dataset.theme = theme;
    } catch {
      document.documentElement.classList.remove("dark");
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${sora.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
