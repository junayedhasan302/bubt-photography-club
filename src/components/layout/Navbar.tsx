"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Committee", href: "/committee" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Contests", href: "/contests" },
  { label: "Announcements", href: "/announcements" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const isActiveLink = (href: string) => {
    return (
      pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl">
      <div className="container-custom">
        {/* Main Navbar Row */}
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          {/* Brand */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-[var(--button-bg)] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Camera size={23} strokeWidth={1.8} />
            </span>

            <span className="flex flex-col">
              <span className="font-heading text-[15px] font-semibold leading-tight tracking-[-0.04em] text-[var(--foreground)] sm:text-base">
                BUBT Photography
              </span>

              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Official Photography Club
              </span>
            </span>
          </Link>

          {/* Desktop Navigation: 1280px and above */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-4 xl:flex"
          >
            {navigationLinks.map((item) => {
              const isActive = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`whitespace-nowrap text-[13px] font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              {isDark ? (
                <Sun size={19} strokeWidth={1.8} />
              ) : (
                <Moon size={19} strokeWidth={1.8} />
              )}
            </button>

            {/* Hamburger: Mobile Only */}
            <button
              type="button"
              onClick={() => setMenuOpen((previous) => !previous)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-colors hover:border-[var(--primary)] md:hidden"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* Tablet Navigation: 768px to 1279px */}
        <nav
          aria-label="Tablet navigation"
          className="hidden flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-[var(--border)] py-4 md:flex xl:hidden"
        >
          {navigationLinks.map((item) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`whitespace-nowrap text-xs font-semibold transition-colors duration-200 lg:text-[13px] ${
                  isActive
                    ? "text-[var(--primary)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation: Below 768px */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-[var(--border)] py-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navigationLinks.map((item) => {
                const isActive = isActiveLink(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-[var(--primary-light)] text-[var(--primary)]"
                        : "text-[var(--muted)] hover:bg-[var(--surface-secondary)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
