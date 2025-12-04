"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";

const resumeData = {
  summary:
    "iOS Software Engineer with 9+ years of experience building high-quality mobile applications at companies like ŌURA, TikTok, Microsoft, and Nubank. Passionate about app architecture, performance optimization, and delivering exceptional user experiences.",
  experience: [
    {
      company: "ŌURA",
      title: "iOS Engineer",
      period: "Oct 2024 - Present",
      location: "Seattle, WA (Remote)",
      description:
        "Part of the Adapt Squad, focused on enhancing all aspects of workouts and fitness within the Ōura Ring app.",
    },
    {
      company: "TikTok",
      title: "iOS Engineer",
      period: "Jan 2023 - Oct 2024",
      location: "Seattle, WA (Hybrid)",
      description:
        "Part of the Reliability Team, focusing on app stability and security. Developed crash-handling frameworks, risk detection tools for app launch, and frontend dashboards. Built backend and frontend systems using TypeScript, Python, Ruby, and Objective-C.",
    },
    {
      company: "Fanco (Co-founder)",
      title: "Career Break / Entrepreneurship",
      period: "May 2022 - Dec 2022",
      location: "Mexico City",
      description:
        "Co-founded Fanco, a social media platform for creators to monetize content (Instagram meets Patreon). Built and launched the MVP, designed the platform architecture, and developed monetization features including subscriptions and paywalled content.",
    },
    {
      company: "Microsoft",
      title: "Software Engineer II",
      period: "Dec 2020 - May 2022",
      location: "Remote",
      description:
        "Worked on Outlook iOS, enhancing the search experience. Led the Query Formulation & Zero Input squad. Refactored search into a dedicated module, ran extensive A/B testing, and experimented with new search UX patterns.",
    },
    {
      company: "Nubank",
      title: "Mobile Engineer",
      period: "May 2020 - Dec 2020",
      location: "Mexico (Remote)",
      description:
        "Built cross-platform experiences with Flutter for Android and iOS. Developed localized payment flows for the Mexican market and enhanced cross-platform consistency.",
    },
    {
      company: "Cornershop by Uber",
      title: "iOS Software Engineer",
      period: "Oct 2018 - Feb 2020",
      location: "Santiago, Chile",
      description:
        "Led the iOS Customer App project. Built search engine, nutrition facts feature, and in-app chat. Drove internationalization from 2 to 6+ countries (Mexico, Chile, Canada, Peru, Colombia, Brazil).",
    },
    {
      company: "Nearsoft (IVY Team)",
      title: "iOS Developer",
      period: "May 2018 - Oct 2018",
      location: "Mexico City",
      description:
        "Led iOS development for IVY, a leadership social network for entrepreneurs. Owned iOS development, optimized chat performance, and collaborated on product strategy.",
    },
    {
      company: "Linio Group",
      title: "iOS Mobile Software Engineer",
      period: "Oct 2017 - May 2018",
      location: "Mexico City",
      description:
        "Enhanced the e-commerce iOS app, earning Best of 2017 in the App Store and E-commerce Award Mexico 2018. Achieved 99.5% crash-free users and modularized the project to reduce compilation time.",
    },
    {
      company: "Globant (EXPRESS)",
      title: "iOS Developer",
      period: "Aug 2016 - Oct 2017",
      location: "Mexico City",
      description:
        "Worked with EXPRESS fashion retail. Developed AR feature for virtual clothing previews, redesigned app navigation and architecture, and built a CMS for marketing team to customize the home screen.",
    },
    {
      company: "Smart Clipp",
      title: "Co-Founder / CFO / iOS Developer",
      period: "Feb 2015 - Oct 2016",
      location: "Mexico City",
      description:
        "Co-founded a software company. Built multiple apps including a pet-matching app, location-based exploration app for tree monitoring in Mexico City, and an NGO volunteer app. Managed finances and led client collaborations.",
    },
  ],
  skills: [
    "Swift",
    "Objective-C",
    "iOS Development",
    "TypeScript",
    "Python",
    "Flutter",
    "React",
    "Node.js",
    "App Architecture",
    "Performance Optimization",
    "A/B Testing",
    "Git",
  ],
};

export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <Link
            href="/"
            className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            &larr; Back
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
            Resume
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            {resumeData.summary}
          </p>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection delay={0.3}>
          <h2 className="mt-12 text-xl font-semibold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {resumeData.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection delay={0.4}>
          <h2 className="mt-12 text-xl font-semibold">Experience</h2>
          <div className="mt-6 space-y-8">
            {resumeData.experience.map((job, index) => (
              <div
                key={index}
                className="border-l-2 border-neutral-200 pl-4 dark:border-neutral-800"
              >
                <h3 className="font-medium">{job.title}</h3>
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {job.company}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {job.period} &middot; {job.location}
                </p>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
