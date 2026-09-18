import Image from "next/image";
import Link from "next/link";

import { CalendarDays } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Blog } from "@/types/blogs";

type FeaturedBlogProps = {
  blog: Blog;
};

export default function FeaturedBlog({
  blog,
}: FeaturedBlogProps) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group relative block h-130 overflow-hidden rounded-2xl"
    >
      {/* Background Image */}
      {blog.heroImage ? (
        <Image
          src={blog.heroImage}
          alt={blog.title}
          unoptimized={blog.heroImage.includes("images.unsplash.com")}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-muted" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/5" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          
          {/* Left */}
          <div className="max-w-2xl">
            {blog.category && (
              <Badge
                variant="secondary"
                className="mb-4 border-0 bg-black/40 text-white backdrop-blur-sm"
              >
                {blog.category.name}
              </Badge>
            )}

            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              {blog.title}
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 md:text-base">
              Discover the ideas, stories, and perspectives behind this
              article.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-white/75">
              <CalendarDays className="size-4" />

              <time dateTime={blog.createdAt}>
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>

          {/* Author */}
          {blog.author && (
            <div className="flex shrink-0 items-center gap-3">
              {blog.author.profilePic ? (
                <Image
                  src={blog.author.profilePic}
                  alt={blog.author.fullName}
                  width={44}
                  height={44}
                  className="size-11 rounded-full object-cover ring-2 ring-white/30"
                />
              ) : (
                <div className="flex size-11 items-center justify-center rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm">
                  {blog.author.fullName.charAt(0)}
                </div>
              )}

              <div>
                <p className="text-sm font-medium">
                  {blog.author.fullName}
                </p>

                <p className="text-xs text-white/60">
                  Author
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Carousel indicators */}
        {/* <div className="mt-6 flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-white" />
          <span className="size-2 rounded-full border border-white/70" />
          <span className="size-2 rounded-full border border-white/70" />
        </div> */}
      </div>
    </Link>
  );
}