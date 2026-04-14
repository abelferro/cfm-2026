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
  "https://welsfoundation.org/wp-content/uploads/2022/05/wels-logo-horizontal.svg";
const mikeUrl =
  "https://welsfoundation.org/wp-content/uploads/2022/03/mike-bwelz-360px.jpg";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, delay },
});

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
    <section className="mx-auto max-w-7xl px-6 py-20">
      <motion.div {...reveal()} className="max-w-3xl">
        <p className="section-kicker">{kicker}</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-brand-ink md:text-5xl">
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
        <span className="wels-outline hidden text-sm font-bold text-brand-ink md:inline-flex">
          Proud event sponsor • CFM Summit 2026
        </span>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-18 pt-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div {...reveal()} className="relative z-10">
          <div className="flex flex-wrap gap-3">
            <span className="wels-outline bg-white/90 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-pink">
              WELS Systems Foundation
            </span>
            <span className="wels-outline bg-white/90 text-sm font-semibold text-slate-700">
              Children&apos;s Foundation of Mississippi • 5th Annual Summit
            </span>
          </div>

          <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[0.98] tracking-tight text-brand-ink md:text-7xl">
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
              className="inline-flex items-center gap-2 rounded-full bg-brand-pink px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-plum"
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

          <div id="features" className="mt-10 grid gap-4">
            {featureList.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                {...reveal(index * 0.06)}
                className="wels-card flex items-start gap-4 p-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-brand-soft text-brand-pink">
                  <Icon size={26} />
                </div>
                <div>
                  <h2 className="text-2xl font-black leading-tight text-brand-ink">
                    {title}
                  </h2>
                  <p className="mt-2 text-lg leading-7 text-slate-700">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal(0.12)} className="relative">
          <div className="hero-board relative overflow-hidden rounded-[40px] border border-white/70 p-6 shadow-[0_28px_90px_rgba(83,65,141,0.12)] md:p-8">
            <div className="absolute left-[16%] top-[16%] h-[42%] w-[42%] rounded-full border border-brand-pink/28" />
            <div className="absolute bottom-[14%] right-[14%] h-[44%] w-[44%] rounded-full border border-brand-plum/20" />
            <div className="absolute left-[52%] top-[12%] h-5 w-5 rounded-full bg-brand-plum shadow-[0_0_0_14px_rgba(122,95,195,0.10)]" />
            <div className="absolute left-[18%] top-[56%] h-5 w-5 rounded-full bg-brand-pink shadow-[0_0_0_14px_rgba(235,77,143,0.12)]" />
            <div className="absolute right-[16%] top-[72%] h-5 w-5 rounded-full bg-brand-plum shadow-[0_0_0_14px_rgba(122,95,195,0.10)]" />

            <div className="relative grid gap-4 md:grid-cols-2">
              <div className="mock-card md:translate-y-20">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-black text-brand-ink">
                    Participation
                  </p>
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-plum">
                    This Year
                  </span>
                </div>
                <div className="mt-5 flex items-end gap-3">
                  <div className="grid h-24 w-24 place-items-center rounded-full border-[18px] border-brand-yellow border-r-brand-pink border-b-brand-blue bg-white text-2xl font-black text-brand-ink">
                    72%
                  </div>
                  <div className="flex flex-1 items-end justify-end gap-3 pb-1">
                    <div className="h-9 w-4 rounded-full bg-brand-lime/90" />
                    <div className="h-14 w-4 rounded-full bg-brand-yellow" />
                    <div className="h-11 w-4 rounded-full bg-brand-pink/80" />
                    <div className="h-16 w-4 rounded-full bg-brand-blue/85" />
                  </div>
                </div>
              </div>

              <div className="mock-card md:ml-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-blue">
                  Training
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Strengthening Instruction
                  <br />& Leadership
                </p>
                <div className="mt-5 h-3 rounded-full bg-brand-soft">
                  <div className="h-full w-[74%] rounded-full bg-brand-blue" />
                </div>
              </div>

              <div className="mock-card md:mr-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-pink">
                  Professional Development
                </p>
                <h3 className="mt-3 text-2xl font-black text-brand-ink">
                  Manage scholarship applications
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Bring requests, status updates, documentation, and approvals
                  into one educator-centered workflow.
                </p>
                <div className="mt-5 h-3 rounded-full bg-brand-soft">
                  <div className="h-full w-[52%] rounded-full bg-brand-pink" />
                </div>
              </div>

              <div className="mock-card md:translate-y-14">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-black text-brand-ink">
                    Credentials
                  </p>
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-plum">
                    View All
                  </span>
                </div>
                <div className="mt-5 grid gap-3">
                  <div className="flex items-center justify-between rounded-2xl bg-lime-100 px-4 py-3 text-sm font-semibold text-brand-ink">
                    <span>Badge awarded</span>
                    <span className="text-brand-lime">✓</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-brand-soft px-4 py-3 text-sm font-semibold text-brand-ink">
                    <span>Course completed</span>
                    <span className="text-brand-blue">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
              className="wels-card p-7"
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-pink">
                Module
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-tight text-brand-ink">
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
            <h2 className="mt-4 text-3xl font-black tracking-tight text-brand-ink md:text-4xl">
              Proud event sponsor of the Children&apos;s Foundation of Mississippi.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              WELS is bringing a clear message to the summit: support educator
              growth with connected systems for training, credentials, badges,
              scholarship workflows, and data-informed decisions.
            </p>
          </div>
          <div className="rounded-[30px] bg-brand-plum px-6 py-7 text-white">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-white/70">
              Event line
            </p>
            <p className="mt-4 text-3xl font-black leading-tight">
              Children&apos;s Foundation of Mississippi
            </p>
            <p className="mt-3 text-lg font-semibold text-white/84">
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

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          {...reveal()}
          className="wels-card grid gap-8 overflow-hidden p-8 md:grid-cols-[0.95fr_1.05fr] md:p-10"
        >
          <div>
            <p className="section-kicker">Contact WELS</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-brand-ink md:text-4xl">
              Let&apos;s map the right WELS experience for your team.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              For demos, implementation conversations, or a closer look at how
              WELS supports educator growth and system alignment, connect with
              Mike Cullen.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:support@welsfoundation.org"
                className="rounded-[24px] border border-brand-pink/18 bg-white/92 p-5 transition hover:border-brand-pink"
              >
                <Mail className="text-brand-pink" size={22} />
                <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.18em] text-brand-pink">
                  Say hi
                </p>
                <p className="mt-2 text-lg font-black text-brand-ink">
                  support@welsfoundation.org
                </p>
              </a>
              <a
                href="tel:7867350200"
                className="rounded-[24px] border border-brand-pink/18 bg-white/92 p-5 transition hover:border-brand-pink"
              >
                <Phone className="text-brand-pink" size={22} />
                <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.18em] text-brand-pink">
                  Let&apos;s talk
                </p>
                <p className="mt-2 text-lg font-black text-brand-ink">
                  786.735.0200
                </p>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-white/72 bg-white/92 p-6 shadow-[0_26px_60px_rgba(83,65,141,0.10)]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <img
                  src={mikeUrl}
                  alt="Mike Cullen"
                  className="h-28 w-28 rounded-[26px] object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-pink">
                    Mike Cullen
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-brand-ink">
                    Support Manager
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    A direct path to WELS demonstrations, implementation
                    questions, and conversations about how the system can
                    support educator growth at scale.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://welsfoundation.org/contact-us/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-pink px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-plum"
                >
                  Visit contact page
                  <ArrowRight size={18} />
                </a>
                <a
                  href="https://welsfoundation.org/wels-exchange-hub/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-pink/22 px-5 py-3 text-sm font-bold text-brand-ink transition hover:border-brand-pink hover:text-brand-pink"
                >
                  Explore Exchange Hub
                </a>
              </div>
            </div>

            <MauticContactForm
              formKicker="WELS contact form"
              formTitle="Tell us about your goals."
              successKicker="Thanks for reaching out"
              successTitle="We have your message."
              successMessage="A WELS team member will follow up soon about your CFM and educator growth goals."
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
