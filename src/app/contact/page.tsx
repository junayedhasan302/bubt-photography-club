"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Globe,
  Send,
  ArrowUpRight,
  Camera,
  Users,
  MessageCircle,
} from "lucide-react";

const contactMethods = [
  {
    title: "Email Us",
    value: "bubtpc9@gmail.com",
    description: "Send us your questions and inquiries.",
    href: "mailto:bubtpc9@gmail.com",
    icon: Mail,
  },
  {
    title: "Visit BUBT",
    value: "Rupnagar, Mirpur-2, Dhaka",
    description: "Bangladesh University of Business and Technology.",
    href: "https://www.bubt.edu.bd/page/bubt-photography-club",
    icon: MapPin,
  },
];

const socialLinks = [
  {
    title: "LinkedIn",
    description: "Connect with our professional community.",
    href: "https://www.linkedin.com/company/bubtpc",
  },
  {
    title: "Facebook Page",
    description: "Follow our official club updates.",
    href: "https://www.facebook.com/BUBTPhotographyClub/",
  },
  {
    title: "Facebook Group",
    description: "Join our photography community.",
    href: "https://www.facebook.com/groups/bubtphotography",
  },
  {
    title: "BUBT Official Website",
    description: "Visit our official university club page.",
    href: "https://www.bubt.edu.bd/page/bubt-photography-club",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:bubtpc9@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-custom relative text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary-light text-primary">
            <MessageCircle size={32} />
          </div>

          <span className="mt-6 block text-sm font-semibold tracking-widest text-primary uppercase">
            We'd Love to Hear From You
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Get in <span className="text-primary">Touch</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted sm:text-base">
            Have a question, an idea, or want to become part of our photography
            community? Feel free to contact us.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <span className="text-sm font-semibold tracking-widest text-primary uppercase">
                Contact Information
              </span>

              <h2 className="mt-3 text-3xl font-bold text-foreground">
                Let's Connect
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                We welcome questions, collaborations, photography enthusiasts,
                and creative ideas. Reach out through any of our official
                channels.
              </p>

              <div className="mt-8 space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;

                  return (
                    <a
                      key={method.title}
                      href={method.href}
                      target={
                        method.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40"
                    >
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                        <Icon size={23} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-foreground">
                          {method.title}
                        </h3>

                        <p className="mt-1 break-words text-sm font-medium text-primary">
                          {method.value}
                        </p>

                        <p className="mt-2 text-xs leading-6 text-muted">
                          {method.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-muted transition-colors group-hover:text-primary"
                      />
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  Find Us Online
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {socialLinks.map((social) => (
                    <a
                      key={social.title}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary/40 hover:bg-primary-light/30"
                    >
                      <Globe size={20} className="shrink-0 text-primary" />

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground">
                          {social.title}
                        </p>

                        <p className="mt-1 text-xs text-muted">
                          {social.description}
                        </p>
                      </div>

                      <ArrowUpRight size={16} className="shrink-0 text-muted" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-9">
                <div className="mb-8">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <Send size={23} />
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-foreground">
                    Send Us a Message
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-muted">
                    Fill out the form below. Your default email application will
                    open with your message prepared.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-foreground"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          name: event.target.value,
                        })
                      }
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-foreground"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={254}
                      value={formData.email}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          email: event.target.value,
                        })
                      }
                      placeholder="example@email.com"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-foreground"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      type="text"
                      required
                      maxLength={150}
                      value={formData.subject}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          subject: event.target.value,
                        })
                      }
                      placeholder="What would you like to discuss?"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-foreground"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      required
                      rows={6}
                      maxLength={5000}
                      value={formData.message}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          message: event.target.value,
                        })
                      }
                      placeholder="Write your message here..."
                      className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover sm:w-auto"
                  >
                    Prepare Email
                    <Send size={17} />
                  </button>

                  <p className="text-xs leading-6 text-muted">
                    This form opens your email application. It does not submit
                    or store messages on the website.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-surface py-16">
        <div className="container-custom text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
            <Camera size={27} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-foreground sm:text-3xl">
            Let's Create Something Together
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
            Every great story begins with a connection. We look forward to
            hearing from you.
          </p>

          <a
            href="mailto:bubtpc9@gmail.com"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Email Our Club
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </>
  );
}
