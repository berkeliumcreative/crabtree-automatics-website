// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface FloatingNavProps {
  items: NavItem[];
  className?: string;
  logo?: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
}

export function FloatingNav({ items, className, logo, ctaText, ctaHref }: FloatingNavProps) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* DESKTOP — glass pill floating nav (unchanged) */}
      <nav
        className={cn(
          "fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300",
          "hidden md:flex items-center gap-6 rounded-full px-6 py-3",
          "border border-border/50",
          visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0",
          scrolled
            ? "bg-background/80 backdrop-blur-lg shadow-lg"
            : "bg-background/40 backdrop-blur-sm",
          className
        )}
      >
        {logo && <div className="mr-2">{logo}</div>}
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
        {ctaText && (
          <a
            href={ctaHref || "#contact"}
            className="rounded-lg px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--theme-accent)" }}
          >
            {ctaText}
          </a>
        )}
      </nav>

      {/* MOBILE — fixed top bar with hamburger */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300",
          "border-b border-border/50",
          visible ? "translate-y-0" : "-translate-y-full",
          scrolled
            ? "bg-background/80 backdrop-blur-lg shadow-lg"
            : "bg-background/40 backdrop-blur-sm",
        )}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {logo && <div className="font-bold text-lg">{logo}</div>}
          <div className="flex items-center gap-3">
            {ctaText && (
              <a
                href={ctaHref || "#contact"}
                className="rounded-lg px-3 py-1.5 text-xs font-medium text-white"
                style={{ backgroundColor: "var(--theme-accent)" }}
              >
                {ctaText}
              </a>
            )}
            <button
              className="p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="border-t border-border/50 bg-background/95 backdrop-blur-lg px-4 py-3">
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
