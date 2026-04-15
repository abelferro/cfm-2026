"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  GraduationCap,
  Mail,
  Phone,
} from "lucide-react";
import MauticContactForm from "@/components/MauticContactForm";

const logoUrl =
  "https://tds.bwelz.org/logos/wels/digital/SVG/wels-Horizontal_Logo_RGB_Full_Color.svg?Expires=1881081483&Signature=XZYm8YQbfhBMaBRxh~YRLGK60sm39SHfjqQIx85sg8dJiw3mbBNeRt28fGyUnbgl5DEA31ZQy-lJuBOwYxLa7tFN3JaB3SxBQVHMua6WqRZqfqjAXIE9v9jWCLrV-EBwboXVOdkzk2jdk3NLcOH-kbiU~UWOd7xrUy6jnuyYFc0zZNmQl3LFx-iXo04pfYzjEJ0si68wsLfoyLs~ejS~7K0yvYTEEUYCxZn-6gTWh8FT8PWl6Ni9CJKKxqg5DZlJsOPoS4tuM7xR6E7iCsIAdowDCzfbB~w9CUeZoHTNopzkXrYQfFlmVO00290Baap32us-kz0LIotdxmSBZ-bt7A__&Key-Pair-Id=K1PPZDIOWN47R1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const educatorsImageUrl = `${basePath}/images/wels-educators.png`;
const mikeUrl =
  "https://welsfoundation.org/wp-content/uploads/2022/03/mike-bwelz-360px.jpg";
const buttonGradient =
  "linear-gradient(90deg, var(--color-brand-plum, #7a5fc3) 0%, var(--color-brand-pink, #eb4d8f) 50%, var(--color-brand-plum, #7a5fc3) 100%)";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, delay },
});

const cardMotion = {
  whileHover: { y: -6, scale: 1.02 },
  whileTap: { scale: 0.99 },
  transition: { duration: 0.18, ease: "easeOut" as const },
};

const featureList = [
  {
    icon: Building2,
    title: "Workforce Development",
    description: "Empower educators and organizations",
  },
  {
    icon: GraduationCap,
    title: "Training & Credentials",
    description: "Track progress. Unlock potential.",
  },
  {
    icon: BadgeCheck,
    title: "Badges",
    description: "Recognize quality in early childhood education",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Make smarter decisions. Improve outcomes for children",
  },
];

const exchangeModules = [
  {
    title: "Educator Portal",
    description:
      "WELS helps early learning professionals manage demographics, experience, education, training, scholarships, and incentives in one place.",
  },
  {
    title: "Quality Initiatives",
    description:
      "Quality supports, assessments, and continuous improvement efforts stay visible instead of scattered.",
  },
  {
    title: "Data Management",
    description:
      "PRISM reporting turns collected data into dashboards, trends, and analysis that leaders can actually use.",
  },
];

function Section({
  kicker,
  title,
  description,
  children,
}: {
  kicker: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <motion.div {...reveal()} className="max-w-3xl">
        <p className="section-kicker">{kicker}</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-brand-ink md:text-5xl">
          {title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-700">{description}</p>
      </motion.div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-brand-mist blur-3xl" />
        <div className="absolute right-[-10rem] top-[-3rem] h-80 w-80 rounded-full bg-brand-pink/16 blur-3xl" />
        <div className="absolute bottom-12 left-[18%] h-60 w-60 rounded-full bg-brand-lilac/18 blur-3xl" />
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="https://welsfoundation.org/" target="_blank" rel="noreferrer">
          <img
            src={logoUrl}
            alt="WELS Systems Foundation"
            className="h-12 w-auto md:h-14"
          />
        </a>
        <a
          href="#contact"
          className="wels-outline hidden text-sm font-bold text-brand-ink md:inline-flex"
        >
          Start a conversation
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-18 pt-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div {...reveal()} className="relative z-10">
          <h1 className="mt-8 max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-tight text-brand-ink md:text-7xl">
            Grow Educators.
            <span className="gradient-text block">Grow Futures.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
            WELS, a unified system that connects training, credentials, and
            incentives to support educators and improve outcomes for children.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#features"
              className="gradient-shift-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-[0_18px_34px_rgba(122,95,195,0.18)]"
              style={{ backgroundImage: buttonGradient }}
            >
              See the framework
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-brand-pink/22 bg-white/80 px-6 py-3 text-sm font-bold text-brand-ink transition hover:border-brand-pink hover:text-brand-pink"
            >
              Talk with WELS
            </a>
          </div>
        </motion.div>

        <motion.div {...reveal(0.12)} className="relative">
          <div className="relative flex min-h-[440px] items-center justify-center md:min-h-[660px]">
            <img
              src={educatorsImageUrl}
              alt="WELS educators hero visual"
              className="mx-auto w-full max-w-[920px] object-contain"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 pb-10 pt-4 md:pb-16">
        <motion.div
          {...reveal()}
          className="mb-7 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="section-kicker">Core Capabilities</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
              Four ways WELS supports educator growth.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              A quick view of the connected capabilities behind the platform.
            </p>
          </div>

          <div className="wels-outline w-fit bg-white/80 text-xs font-bold uppercase tracking-[0.18em] text-brand-pink">
            4 connected focus areas
          </div>
        </motion.div>

        <div className="grid gap-4">
          {featureList.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              {...reveal(index * 0.05)}
              {...cardMotion}
              className="wels-card interactive-panel relative overflow-hidden grid grid-cols-[auto_1fr] items-center gap-4 px-5 py-5 md:gap-6 md:px-7 md:py-6"
            >
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-[radial-gradient(circle_at_right,rgba(235,77,143,0.08),transparent_68%)] md:w-32" />

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] bg-brand-soft text-brand-pink md:h-24 md:w-24 md:rounded-[28px]">
                <Icon size={32} />
              </div>

              <div className="relative min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-pink">
                  0{index + 1}
                </p>
                <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-brand-ink md:text-[2.4rem]">
                  {title}
                </h2>
                <p className="mt-2 text-base leading-7 text-slate-700 md:text-[1.9rem] md:leading-[1.2]">
                  {description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Section
        kicker="Built on WELS Exchange Hub"
        title="One platform, multiple paths to better outcomes."
        description="WELS brings workforce development, training, credentials, incentives, and reporting into one connected experience that supports educator growth and stronger outcomes for children."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {exchangeModules.map((item, index) => (
            <motion.div
              key={item.title}
              {...reveal(index * 0.08)}
              {...cardMotion}
              className="wels-card interactive-panel p-7"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-pink">
                Module
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-brand-ink">
                {item.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <motion.div
          {...reveal()}
          className="wels-card grid gap-8 overflow-hidden p-8 md:grid-cols-[0.88fr_1.12fr] md:p-10"
        >
          <div>
            <p className="section-kicker">Summit framing</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
              Proud event sponsor of the Children&apos;s Foundation of Mississippi.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              WELS is bringing a clear message to the summit: support educator
              growth with connected systems for training, credentials, badges,
              scholarship workflows, and data-informed decisions.
            </p>
          </div>
          <div className="rounded-[30px] bg-brand-plum px-6 py-7 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Event line
            </p>
            <p className="mt-4 text-3xl font-bold leading-tight">
              Children&apos;s Foundation of Mississippi
            </p>
            <p className="mt-3 text-lg font-bold text-white/84">
              5th Annual CFM Summit 2026
            </p>
            <p className="mt-6 text-base leading-8 text-white/78">
              WELS helps state and regional partners strengthen the educator
              workforce with one system built for visibility, progress, and
              practical action.
            </p>
          </div>
        </motion.div>
      </section>

      <section
        id="contact"
        className="w-full px-0 py-16 md:mx-auto md:max-w-5xl md:px-6 md:py-20"
      >
        <motion.div {...reveal()} className="mx-auto max-w-4xl text-center">
          <p className="section-kicker">Start the Conversation</p>

          <div className="mt-8 wels-card flex flex-col gap-5 !rounded-b-none !rounded-t-[32px] px-6 pb-8 pt-6 text-left md:!rounded-[32px] md:flex-row md:items-center md:justify-between md:p-7">
            <div className="flex items-center gap-4">
              <img
                src={mikeUrl}
                alt="Mike from WELS"
                className="h-20 w-20 rounded-[24px] object-cover shadow-[0_18px_40px_rgba(93,76,172,0.16)]"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-pink">
                  Mike from WELS
                </p>
                <p className="mt-2 max-w-xl text-base leading-7 text-slate-600">
                  A quick note is all it takes.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:min-w-[360px]">
              <div
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-pink/18 bg-white/80 px-4 py-3 text-sm font-bold text-brand-ink transition hover:border-brand-pink hover:text-brand-pink"
              >
                <Mail size={16} />
                support@welsfoundation.org
              </div>
              <div
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-pink/18 bg-white/80 px-4 py-3 text-sm font-bold text-brand-ink transition hover:border-brand-pink hover:text-brand-pink"
              >
                <Phone size={16} />
                786.735.0200
              </div>
            </div>
          </div>

          <div className="mt-1 text-left md:mx-auto md:mt-8 md:max-w-2xl">
            <MauticContactForm
              formKicker=""
              formTitle="Tell us a little about you."
              successTitle="You're all set."
              successMessage="Mike from WELS will reach out soon. He usually handles support and will help with the next step."
            />
          </div>
        </motion.div>
      </section>

      <footer className="mx-auto max-w-4xl px-6 pb-16 text-center">
        <motion.div {...reveal()} className="space-y-3">
          <a
            href="https://welsfoundation.org/"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-sm font-bold uppercase tracking-[0.22em] text-brand-pink transition hover:opacity-80"
          >
            WELS Systems Foundation
          </a>
          <p className="text-lg font-bold text-slate-600">
            Proud event sponsor of CFM Summit 2026.
          </p>
          <p className="text-base text-slate-500">
            Children&apos;s Foundation of Mississippi • 5th Annual Summit
          </p>
        </motion.div>
      </footer>
    </main>
  );
}
