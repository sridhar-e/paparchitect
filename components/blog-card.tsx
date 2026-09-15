import Image from "next/image";
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
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-0 top-0 border border-white/20 bg-brand-navy-dark/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
          {post.category}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs text-muted-foreground">{date}</p>
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
