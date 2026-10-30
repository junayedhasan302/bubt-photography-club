import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Reach out to us through email.",
    value: "Official email coming soon",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Find us at our university campus.",
    value: "BUBT, Dhaka, Bangladesh",
  },
  {
    icon: MessageCircle,
    title: "Connect With Us",
    description: "Follow our activities and updates.",
    value: "Facebook & Instagram",
  },
];

export default function ContactPreview() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              Get In Touch
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let's Start a <span className="text-primary">Conversation.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-muted sm:text-base">
              Have a question, collaboration idea, or want to become part of our
              photography community? We would love to hear from you.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Contact Our Team
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <div
                  key={method.title}
                  className="flex items-center gap-5 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40 sm:p-6"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground">
                      {method.title}
                    </h3>

                    <p className="mt-1 text-sm text-muted">
                      {method.description}
                    </p>

                    <p className="mt-2 text-sm font-medium text-primary">
                      {method.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
