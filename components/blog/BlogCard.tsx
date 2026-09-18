import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, CalendarDays } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import type { Blog } from "@/types/blogs";

type BlogCardProps = {
  blog: Blog;
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Card className="group overflow-hidden border-border/60 bg-card/80 py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-xl">
      {/* Image */}
      <Link href={`/blog/${blog.slug}`} className="block">
        <div className="relative m-2 aspect-video overflow-hidden rounded-xl">
          {blog.heroImage ? (
            <Image
              src={blog.heroImage}
              alt={blog.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized={blog.heroImage.includes("images.unsplash.com")}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-muted">
              <span className="text-sm font-medium text-muted-foreground">
                Inkwell
              </span>
            </div>
          )}

          {/* Image overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

          {/* Categories */}
          {blog.category && (
            <div className="absolute left-3 top-3">
              <Badge
                variant="secondary"
                className="border-white/20 bg-black/45 px-3 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-md"
              >
                {blog.category.name}
              </Badge>
            </div>
          )}

          {/* Read arrow */}
          <div className="absolute bottom-3 right-3 flex size-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-black/80 dark:text-white">
            <ArrowUpRight className="size-4" />
          </div>
        </div>
      </Link>

      {/* Content */}
      <CardContent className="px-5 pb-4 pt-3">
        {/* Date */}
        <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <CalendarDays className="size-3.5" />

          <time dateTime={blog.createdAt}>
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        {/* Title */}
        <Link href={`/blog/${blog.slug}`}>
          <h2 className="line-clamp-2 text-xl font-semibold leading-snug tracking-tight transition-colors duration-200 group-hover:text-primary">
            {blog.title}
          </h2>
        </Link>

        {/* Extra categories / tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {blog.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag._id}
                variant="outline"
                className="rounded-full px-2.5 py-0.5 text-[11px] font-normal text-muted-foreground"
              >
                #{tag.name}
              </Badge>
            ))}

            {blog.tags.length > 3 && (
              <span className="flex items-center text-xs text-muted-foreground">
                +{blog.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </CardContent>

      {/* Author */}
      {blog.author && (
        // <CardFooter className="mx-5 border-t border-border/60 px-0 py-4">
        <CardFooter className="mx-5 border-t border-border/60 px-0 py-4 bg-transparent">
          <Link
            href={`/blog/${blog.slug}`}
            className="flex items-center gap-3"
          >
            {blog.author.profilePic ? (
              <Image
                src={blog.author.profilePic}
                alt={blog.author.fullName}
                width={36}
                height={36}
                className="size-9 rounded-full object-cover ring-2 ring-background"
              />
            ) : (
              <div className="flex size-9 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                {blog.author.fullName.charAt(0).toUpperCase()}
              </div>
            )}

            <div className="min-w-0">
              <p className="text-sm font-medium leading-none">
                {blog.author.fullName}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                Author
              </p>
            </div>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
