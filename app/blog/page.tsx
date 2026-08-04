import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { BlogCard } from "@/components/blog-card";
import { Reveal } from "@/components/reveal";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Project milestones, firm news and perspectives on architecture, engineering and sustainable design.",
  keywords: [
    "architecture news India",
    "construction industry insights",
    "green building design articles",
    "structural engineering blog",
    "Pithavadian And Partners news",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "News & Insights | Pithavadian And Partners",
    description:
      "Project milestones, firm news and perspectives on architecture, engineering and sustainable design.",
    images: [{ url: "/images/blog-green-building.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/blog-green-building.jpg"],
  },
};

export default function BlogPage() {
  return (
    <>
      <Section noBottomPadding>
        <SectionHeading
          eyebrow="Blog"
          title="News & Insights"
          description="Updates from the studio — project milestones, firm news and perspectives on architecture, engineering and sustainable design."
        />
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 90}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
