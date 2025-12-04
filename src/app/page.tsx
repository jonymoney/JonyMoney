"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { SocialLinks } from "@/components/SocialLinks";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="max-w-md text-center">
        <AnimatedSection delay={0} className="flex justify-center">
          <ProfilePhoto
            src="/profile.jpg"
            alt="Jonathan Velazquez"
            initials="JV"
            size={128}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Jonathan Velázquez
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            iOS Software Engineer
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <SocialLinks />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/resume"
              className="rounded-full border border-neutral-300 px-6 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
            >
              Resume
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-neutral-300 px-6 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
            >
              Blog
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
