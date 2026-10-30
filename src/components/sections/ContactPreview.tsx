import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Globe,
  Camera,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Have a question or collaboration idea?",
    value: "bubtpc9@gmail.com",
    href: "mailto:bubtpc9@gmail.com",
    linkLabel: "Send an Email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Find BUBT Photography Club at our university.",
    value: "BUBT, Dhaka, Bangladesh",
    href: "https://www.bubt.edu.bd/page/bubt-photography-club",
    linkLabel: "University Club Page",
  },
  {
    icon: MessageCircle,
    title: "Connect With Us",
    description: "Follow our activities and announcements.",
    value: "Facebook & LinkedIn",
    href: "https://www.facebook.com/BUBTPhotographyClub/",
    linkLabel: "Visit Facebook Page",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/BUBTPhotographyClub/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/bubtpc",
  },
  {
    label: "Facebook Group",
    href: "https://www.facebook.com/groups/bubtphotography",
  },
];

export default function ContactPreview() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-10 size-[400px] rounded-full bg-primary/[0.045] blur-[110px]" />

      <div className="container-custom relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="flex size-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary-light text-primary">
              <Camera size={27} strokeWidth={1.5} />
            </div>

            <span className="mt-6 block text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Get In Touch
            </span>

            <h2 className="mt-4 max-w-xl font-heading text-3xl leading-tight font-semibold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
              Let's Start a<span className="text-primary"> Conversation.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-8 text-muted sm:text-base">
              Have a question, collaboration idea, or want to become part of our
              photography community? We would love to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary group">
                Contact Our Team
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a href="mailto:bubtpc9@gmail.com" className="btn-secondary">
                <Mail size={17} />
                Send Email
              </a>
            </div>

            {/* Official Social Links */}
            <div className="mt-10 border-t border-border pt-7">
              <p className="text-xs font-bold tracking-[0.16em] text-muted uppercase">
                Find Us Online
              </p>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    {social.label}
                    <ArrowUpRight
                      size={14}
                      className="text-muted transition-colors group-hover:text-primary"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Contact Cards */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] border border-primary/[0.08]" />

            <div className="relative grid gap-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;

                return (
                  <a
                    key={method.title}
                    href={method.href}
                    target={index === 0 ? undefined : "_blank"}
                    rel={index === 0 ? undefined : "noopener noreferrer"}
                    className="group flex items-start gap-5 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_14px_35px_rgba(35,85,150,0.08)] sm:p-6"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon size={23} strokeWidth={1.6} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                        {method.title}
                      </h3>

                      <p className="mt-1 text-xs leading-6 text-muted sm:text-sm">
                        {method.description}
                      </p>

                      <p className="mt-3 break-words text-sm font-semibold text-primary">
                        {method.value}
                      </p>

                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition-colors group-hover:text-primary">
                        {method.linkLabel}
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Official Website Link */}
            <a
              href="https://www.bubt.edu.bd/page/bubt-photography-club"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-dashed border-border px-5 py-4 text-xs font-semibold text-muted transition-colors hover:border-primary/30 hover:text-primary"
            >
              <Globe size={16} />
              Visit BUBT Photography Club Official Website
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
