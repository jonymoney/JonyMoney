import { getAllPosts } from "@/lib/blog";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata = {
  title: "Blog | Jonathan Velázquez",
  description: "Thoughts on iOS development, software engineering, and technology.",
};

export default function BlogPage() {
  const posts = getAllPosts();

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
            Blog
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Thoughts on iOS development, software engineering, and technology.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {posts.length === 0 ? (
            <div className="mt-16 text-center">
              <p className="text-neutral-400 dark:text-neutral-500">
                Nothing here yet.
              </p>
            </div>
          ) : (
            <div className="mt-12 space-y-8">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="border-l-2 border-neutral-200 pl-4 transition-colors group-hover:border-neutral-400 dark:border-neutral-800 dark:group-hover:border-neutral-600">
                      <h2 className="font-medium group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
                        {post.title}
                      </h2>
                      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}{" "}
                        &middot; {post.readingTime}
                      </p>
                      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                        {post.description}
                      </p>
                      {post.tags && post.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </AnimatedSection>
      </div>
    </main>
  );
}
