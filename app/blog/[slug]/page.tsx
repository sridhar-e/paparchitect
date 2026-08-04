import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section } from "@/components/section";
import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/lib/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "Pithavadian And Partners", "architecture and engineering India"],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://paparchitect.com${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Pithavadian And Partners" },
    publisher: { "@type": "Organization", name: "Pithavadian And Partners" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="relative aspect-[21/9] w-full min-h-[320px]">
        <Image src={post.image} alt={post.title} fill preload className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/95 via-brand-navy-dark/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 container px-4 pb-10 sm:px-6 lg:px-8">
          <span className="inline-block border border-white/20 bg-brand-navy-dark/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            {post.category}
          </span>
          <h1 className="mt-4 max-w-3xl font-[Tahoma] text-3xl font-bold text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-white/70">
            {date} &middot; Pithavadian And Partners
          </p>
        </div>
      </div>

      <Section containerClassName="max-w-3xl">
        <div className="space-y-5 text-base leading-relaxed text-foreground">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-cream">
        <h2 className="font-heading text-2xl font-bold text-brand-navy">Related Posts</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {related.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
