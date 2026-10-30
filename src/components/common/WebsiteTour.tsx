"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle2,
  Home,
  Info,
  Users,
  Camera,
  Calendar,
  Trophy,
  Bell,
  Mail,
  Sparkles,
} from "lucide-react";

export interface TourStep {
  id: string;
  navKey: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  href: string;
}

const TOUR_STEPS: TourStep[] = [
  {
    id: "welcome",
    navKey: "brand",
    title: "Welcome to BUBT Photography Club",
    tagline: "Official Digital Platform — 2026 Committee",
    description:
      "Welcome to our modern community platform! Take a quick 30-second tour to discover what our platform offers: photography showcases, contests, events, and committee updates.",
    icon: Sparkles,
    href: "/",
  },
  {
    id: "home",
    navKey: "home",
    title: "Home — The Community Hub",
    tagline: "Explore Highlights & Creative Work",
    description:
      "Your starting point for BUBT Photography Club: discover featured galleries, upcoming activities, active competitions, and the latest club announcements.",
    icon: Home,
    href: "/",
  },
  {
    id: "about",
    navKey: "about",
    title: "About Us — Our Mission & Vision",
    tagline: "Learn What Drives Our Creativity",
    description:
      "Learn about our club's history, vision, mission, and the core values that unite photographers and visual storytellers across the university.",
    icon: Info,
    href: "/about",
  },
  {
    id: "committee",
    navKey: "committee",
    title: "Executive Committee — Our Leadership",
    tagline: "Meet the 2026 Leadership Team",
    description:
      "Meet the current 2026 Executive Committee members guiding the club, view their roles, and browse archives of previous leadership teams.",
    icon: Users,
    href: "/committee",
  },
  {
    id: "gallery",
    navKey: "gallery",
    title: "Photo Gallery — Curated Stories",
    tagline: "Visual Perspectives Through the Lens",
    description:
      "Explore high-resolution photography categorized by Nature, Street, Portrait, Events, and Fine Art, with photographer credits and full-screen lightbox viewing.",
    icon: Camera,
    href: "/gallery",
  },
  {
    id: "events",
    navKey: "events",
    title: "Club Events — Learn & Explore",
    tagline: "Photowalks, Workshops & Exhibitions",
    description:
      "Stay informed about photography walks, camera workshops, and annual exhibitions. Register for upcoming events directly through the site.",
    icon: Calendar,
    href: "/events",
  },
  {
    id: "contests",
    navKey: "contests",
    title: "Contests — Showcase Your Talent",
    tagline: "Compete & Gain Recognition",
    description:
      "Enter photography competitions, review dynamic rules, register securely, upload your photo submissions, and track judging evaluations.",
    icon: Trophy,
    href: "/contests",
  },
  {
    id: "announcements",
    navKey: "announcements",
    title: "Announcements — Official Notices",
    tagline: "Real-time Club Updates & News",
    description:
      "Stay up-to-date with pinned official notices, contest deadlines, workshop schedules, and campus photography updates.",
    icon: Bell,
    href: "/announcements",
  },
  {
    id: "contact",
    navKey: "contact",
    title: "Contact — Connect With Us",
    tagline: "We'd Love to Hear From You",
    description:
      "Have questions, workshop inquiries, or collaboration ideas? Reach out via our verified email, official social media channels, or the contact form.",
    icon: Mail,
    href: "/contact",
  },
];

const STORAGE_KEY = "bubtpc_tour_seen";

export default function WebsiteTour() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Check if first-time visitor
  useEffect(() => {
    try {
      const seen = localStorage.getItem(STORAGE_KEY);
      if (!seen) {
        // Small delay so page renders smoothly first
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage may fail in private mode
    }
  }, []);

  // Allow custom event trigger to replay the tour
  useEffect(() => {
    const handleStartTour = () => {
      setCurrentStepIndex(0);
      setIsOpen(true);
    };

    window.addEventListener("start-bubtpc-tour", handleStartTour);
    return () => window.removeEventListener("start-bubtpc-tour", handleStartTour);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        closeTour();
      } else if (e.key === "ArrowRight") {
        if (currentStepIndex < TOUR_STEPS.length - 1) {
          setCurrentStepIndex((prev) => prev + 1);
        } else {
          closeTour();
        }
      } else if (e.key === "ArrowLeft") {
        if (currentStepIndex > 0) {
          setCurrentStepIndex((prev) => prev - 1);
        }
      }
    },
    [isOpen, currentStepIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const closeTour = () => {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore
    }
  };

  const handleNext = () => {
    if (currentStepIndex < TOUR_STEPS.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      closeTour();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const currentStep = TOUR_STEPS[currentStepIndex];
  const StepIcon = currentStep.icon;
  const isFirst = currentStepIndex === 0;
  const isLast = currentStepIndex === TOUR_STEPS.length - 1;

  return (
    <>
      {/* Floating Website Guide / Tour Replay Button */}
      <button
        onClick={() => {
          setCurrentStepIndex(0);
          setIsOpen(true);
        }}
        title="Start Website Guide Tour"
        aria-label="Start Website Guide Tour"
        className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-xs font-semibold text-[var(--foreground)] shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-xl hover:-translate-y-0.5"
      >
        <span className="flex size-6 items-center justify-center rounded-full bg-[var(--primary-light)] text-[var(--primary)]">
          <Compass size={14} className="animate-spin" style={{ animationDuration: "12s" }} />
        </span>
        <span>Website Guide</span>
      </button>

      {/* Tour Dialog Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeTour}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Tour Popover Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="tour-title"
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 shadow-2xl"
            >
              {/* Subtle accent glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-[var(--primary)]/15 blur-3xl" />

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary-light)] text-[var(--primary)] shadow-sm">
                    <StepIcon size={24} strokeWidth={2} />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--primary)]">
                      Step {currentStepIndex + 1} of {TOUR_STEPS.length}
                    </span>
                    <p className="text-xs text-[var(--muted)]">{currentStep.tagline}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeTour}
                  aria-label="Skip and close tour"
                  className="flex size-8 items-center justify-center rounded-xl text-[var(--muted)] transition-colors hover:bg-[var(--surface-secondary)] hover:text-[var(--foreground)]"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Title & Description */}
              <div className="mt-5">
                <h3
                  id="tour-title"
                  className="font-heading text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl"
                >
                  {currentStep.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {currentStep.description}
                </p>
              </div>

              {/* Step indicator dots */}
              <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-5">
                <div className="flex items-center gap-1.5">
                  {TOUR_STEPS.map((step, idx) => (
                    <button
                      key={step.id}
                      onClick={() => setCurrentStepIndex(idx)}
                      title={`Jump to ${step.title}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentStepIndex
                          ? "w-6 bg-[var(--primary)]"
                          : "w-2 bg-[var(--border)] hover:bg-[var(--primary)]/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-2">
                  {!isFirst && (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-xs font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--surface-secondary)]"
                    >
                      <ArrowLeft size={14} />
                      Prev
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-primary inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold"
                  >
                    {isLast ? (
                      <>
                        Finish Tour
                        <CheckCircle2 size={14} />
                      </>
                    ) : (
                      <>
                        Next
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Skip option */}
              <div className="mt-3 text-center">
                <button
                  type="button"
                  onClick={closeTour}
                  className="text-xs text-[var(--muted)] transition-colors hover:text-[var(--foreground)] hover:underline"
                >
                  Skip Tour & Explore Platform
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

