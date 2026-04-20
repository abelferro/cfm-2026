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
const heroImageUrl = `${basePath}/images/cfm-summit-2026.png`;
const mikeUrl =
  "https://welsfoundation.org/wp-content/uploads/2022/03/mike-bwelz-360px.jpg";
const buttonGradient =
  "linear-gradient(90deg, var(--color-brand-blue, #3252e0) 0%, var(--color-brand-pink, #e44081) 52%, var(--color-brand-blue, #3252e0) 100%)";

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
    description: "Make smarter decisions. Improve outcomes for children.",
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
      "PRISM reporting turns collected data into dashboards, trends, and analytics that leaders can actually use.",
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

      <section className="mx-auto flex max-w-7xl flex-col gap-0 px-6 pb-16 pt-0 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12 lg:pb-20 lg:pt-6">
        <motion.div
          {...reveal(0.12)}
          className="relative order-1 mb-5 -mt-8 flex justify-center sm:mb-7 lg:order-2 lg:mb-0 lg:mt-0 lg:justify-end"
        >
          <div className="relative flex w-full justify-center lg:justify-end">
            <img
              src={heroImageUrl}
              alt="Early childhood educator playing with children"
              className="w-full max-w-[390px] object-contain sm:max-w-[470px] md:max-w-[560px] lg:-mr-8 lg:max-w-[680px] xl:max-w-[760px]"
              loading="eager"
            />
          </div>
        </motion.div>

        <motion.div {...reveal()} className="relative z-10 order-2 lg:order-1">
          <h1 className="mt-0 max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-tight text-brand-ink md:text-7xl lg:mt-8">
            <span className="block text-brand-blue">Nurture educators,</span>
            <span className="block text-brand-pink">cultivate leaders</span>
            <span className="block text-brand-pink">for tomorrow.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
            Efforts across Mississippi are strengthening the early childhood
            profession and building a brighter future for children.
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-700">
            <span className="font-bold text-brand-ink">
              Proud supporter of the Children&apos;s Foundation of Mississippi
            </span>{" "}
            and the impactful work they do.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#summit"
              className="gradient-shift-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-[0_18px_34px_rgba(122,95,195,0.18)]"
              style={{ backgroundImage: buttonGradient }}
            >
              Learn more
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
      </section>

      <section id="features" className="mx-auto max-w-5xl px-6 pb-8 pt-2 md:pb-12">
        <motion.div
          {...reveal()}
          className="mb-5 flex flex-col gap-3 md:mb-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <p className="section-kicker">Core Capabilities</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-ink md:text-[2rem]">
              Four ways WELS supports educator growth.
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base">
              A quick view of the connected capabilities behind the platform.
            </p>
          </div>

          <div className="wels-outline w-fit bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-pink">
            4 connected focus areas
          </div>
        </motion.div>

        <div className="grid gap-3">
          {featureList.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              {...reveal(index * 0.05)}
              {...cardMotion}
              className={`interactive-panel relative overflow-hidden grid grid-cols-[auto_1fr] items-center gap-3 rounded-[30px] border px-4 py-4 shadow-[0_18px_44px_rgba(83,65,141,0.08)] backdrop-blur-sm md:gap-5 md:px-5 md:py-4.5 ${
                [
                  "border-[rgba(95,107,210,0.24)] bg-[linear-gradient(135deg,rgba(95,107,210,0.26)_0%,rgba(157,132,244,0.16)_18%,rgba(255,255,255,0.95)_56%,rgba(255,255,255,0.99)_100%)]",
                  "border-[rgba(235,77,143,0.24)] bg-[linear-gradient(135deg,rgba(235,77,143,0.28)_0%,rgba(255,182,212,0.16)_18%,rgba(255,255,255,0.95)_56%,rgba(255,255,255,0.99)_100%)]",
                  "border-[rgba(244,213,94,0.28)] bg-[linear-gradient(135deg,rgba(255,215,110,0.3)_0%,rgba(255,196,222,0.14)_18%,rgba(255,255,255,0.95)_56%,rgba(255,255,255,0.99)_100%)]",
                  "border-[rgba(170,120,255,0.24)] bg-[linear-gradient(135deg,rgba(170,120,255,0.24)_0%,rgba(255,177,214,0.14)_18%,rgba(255,255,255,0.95)_56%,rgba(255,255,255,0.99)_100%)]",
                ][index]
              }`}
            >
              <div className="pointer-events-none absolute -left-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-white/50 blur-2xl" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[radial-gradient(circle_at_right,rgba(235,77,143,0.14),transparent_70%)] md:w-28" />

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-brand-soft text-brand-pink md:h-18 md:w-18 md:rounded-[22px]">
                <Icon size={26} />
              </div>

              <div className="relative min-w-0">
                <h2 className="text-xl font-bold leading-tight tracking-tight text-brand-ink md:text-[1.9rem]">
                  {title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-700 md:text-[1.15rem] md:leading-[1.35]">
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
          {exchangeModules.map((item, index) => {
            const cardBackgrounds = [
              "border-[rgba(95,107,210,0.24)] bg-[linear-gradient(135deg,rgba(95,107,210,0.32)_0%,rgba(160,140,246,0.2)_28%,rgba(255,255,255,0.97)_70%,rgba(255,255,255,0.99)_100%)]",
              "border-[rgba(235,77,143,0.24)] bg-[linear-gradient(135deg,rgba(235,77,143,0.34)_0%,rgba(255,188,218,0.2)_28%,rgba(255,255,255,0.97)_70%,rgba(255,255,255,0.99)_100%)]",
              "border-[rgba(244,213,94,0.3)] bg-[linear-gradient(135deg,rgba(255,214,98,0.38)_0%,rgba(255,196,222,0.18)_28%,rgba(255,255,255,0.97)_70%,rgba(255,255,255,0.99)_100%)]",
            ];

            return (
              <motion.div
                key={item.title}
                {...reveal(index * 0.08)}
                {...cardMotion}
                className={`interactive-panel rounded-[32px] border p-7 shadow-[0_18px_44px_rgba(83,65,141,0.06)] backdrop-blur-sm ${cardBackgrounds[index]}`}
              >
                <h3 className="text-3xl font-bold tracking-tight text-brand-ink">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <section id="summit" className="mx-auto max-w-7xl px-6 pb-10">
        <motion.div
          {...reveal()}
          className="wels-card grid gap-8 overflow-hidden p-8 md:grid-cols-[0.88fr_1.12fr] md:p-10"
        >
          <div>
            
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
              Proud event sponsor of the Children&apos;s Foundation of Mississippi.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              WELS is honored to support people and organizations working
              across Mississippi to strengthen early childhood education,
              elevate educators, and create brighter futures for children.
            </p>
          </div>
          <div className="rounded-[30px] bg-brand-plum px-6 py-7 text-white">
            
            <p className="mt-4 text-3xl font-bold leading-tight">
              Children&apos;s Foundation of Mississippi
            </p>
            <p className="mt-3 text-lg font-bold text-white/84">
              5th Annual CFM Summit 2026
            </p>
            <p className="mt-6 text-base leading-8 text-white/78">
              A shared moment to celebrate progress, connect partners, and keep
              building support around Mississippi&apos;s early childhood workforce.
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
                601-345-3644
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
        <motion.div {...reveal()} className="space-y-4">
          <a
            href="https://welsfoundation.org/"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-sm font-bold uppercase tracking-[0.22em] text-brand-pink transition hover:opacity-80"
          >
            WELS Systems Foundation
          </a>
          <p className="mx-auto max-w-2xl text-xl font-bold leading-snug text-slate-600 md:text-2xl">
            Proud supporter of the Children&apos;s Foundation of Mississippi and
            the impactful work they do.
          </p>
        </motion.div>
      </footer>
    </main>
  );
}
