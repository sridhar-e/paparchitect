import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden border border-border bg-card transition-colors duration-300 hover:border-brand-navy"
    >
      <div className="p-5">
        <span className="inline-block border border-brand-deep/20 bg-brand-sky/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-deep">
          {post.category}
        </span>
        <p className="mt-4 text-xs text-muted-foreground">{date}</p>
        <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-brand-navy transition-colors group-hover:text-brand-gold-text">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy">
          Read More
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
