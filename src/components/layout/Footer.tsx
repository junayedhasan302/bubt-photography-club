import Link from "next/link";
import { Camera, MapPin, ArrowUpRight, Globe, Users, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Executive Committee", href: "/committee" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Contests", href: "/contests" },
  { label: "Announcements", href: "/announcements" },
  { label: "Contact", href: "/contact" },
];

const officialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/bubtpc",
    icon: "in",
  },
  {
    label: "Facebook Page",
    href: "https://www.facebook.com/BUBTPhotographyClub/",
    icon: "f",
  },
  {
    label: "Facebook Group",
    href: "https://www.facebook.com/groups/bubtphotography",
    icon: "f",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Club Information */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-white">
                <Camera size={23} />
              </span>

              <span>
                <span className="block text-lg font-bold text-foreground">
                  BUBT Photography Club
                </span>

                <span className="text-xs tracking-widest text-muted">
                  CAPTURE. CREATE. CONNECT.
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted">
              A creative community of photography enthusiasts at Bangladesh
              University of Business and Technology. We capture moments, share
              stories, and inspire creativity through photography.
            </p>

            {/* Official Social Links */}
            <div className="mt-6">
              <h3 className="mb-4 text-xs font-bold tracking-wider text-foreground uppercase">
                Follow Our Community
              </h3>

              <div className="flex flex-wrap gap-3">
                {officialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-sm font-bold text-muted transition-colors hover:border-primary hover:bg-primary hover:text-white"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Official Website */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-foreground">
              Find Us
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />

                <span className="text-sm leading-6 text-muted">
                  Bangladesh University of Business and Technology (BUBT),
                  Rupnagar, Mirpur-2, Dhaka, Bangladesh.
                </span>
              </li>

              <li>
                <a
                  href="mailto:bubtpc9@gmail.com"
                  className="inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-primary"
                >
                  <Mail size={18} className="shrink-0 text-primary" />
                  bubtpc9@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://www.bubt.edu.bd/page/bubt-photography-club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-primary"
                >
                  <Globe size={18} className="shrink-0 text-primary" />
                  BUBT Official Club Page
                  <ArrowUpRight size={14} />
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/groups/bubtphotography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-primary"
                >
                  <Users size={18} className="shrink-0 text-primary" />
                  Join Our Community
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted">
            © 2026 BUBT Photography Club. All rights reserved.
          </p>

          <p className="text-xs text-muted">Developed by the 2026 Committee</p>
        </div>
      </div>
    </footer>
  );
}
