import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, CalendarDays } from "lucide-react";

import { getBlogBySlug } from "@/lib/api/blogs";
import BlogContent from "@/components/blog/BlogContent";
import CommentsComingSoon from "@/components/blog/BlogComments";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* <article className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16"> */}
      <article className="mx-auto max-w-5xl px-4 pb-10 pt-32 md:px-6 md:pb-16 md:pt-36">

        {/* Back button */}
        <Button
          variant="ghost"
          size="sm"
          className="mb-10"
        >
          <Link 
            href="/" 
            className="flex gap-4"
          >
            <ArrowLeft />
            <p>Back to articles</p>
          </Link>
        </Button>

        {/* Header */}
        <header className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            {blog.category && (
              <Badge variant="secondary">
                {blog.category.name}
              </Badge>
            )}

            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <CalendarDays className="size-4" />

              <time dateTime={blog.createdAt}>
                {new Date(blog.createdAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </time>
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {blog.title}
          </h1>

          {/* Author */}
          {blog.author && (
            <div className="mt-8 flex items-center gap-3">
              {blog.author.profilePic ? (
                <Image
                  src={blog.author.profilePic}
                  alt={blog.author.fullName}
                  width={44}
                  height={44}
                  className="size-11 rounded-full object-cover"
                />
              ) : (
                <div className="flex size-11 items-center justify-center rounded-full bg-muted text-sm font-medium">
                  {blog.author.fullName.charAt(0)}
                </div>
              )}

              <div>
                <p className="text-sm font-medium">
                  {blog.author.fullName}
                </p>

                <p className="text-sm text-muted-foreground">
                  Author
                </p>
              </div>
            </div>
          )}
        </header>

        {/* Hero Image */}
        {blog.heroImage && (
          <div className="relative mt-12 aspect-video overflow-hidden rounded-2xl">
            <Image
              src={blog.heroImage}
              alt={blog.title}
              unoptimized={blog.heroImage.includes("images.unsplash.com")}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}


        <Separator className="my-12" />

        {/* Article Content */}
        <div className="mx-auto max-w-3xl">
          <BlogContent content={blog.content} />

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12">
              <Separator className="mb-8" />

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <Badge
                    key={tag._id}
                    variant="outline"
                  >
                    #{tag.name}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <CommentsComingSoon />
        </div>


      </article>
    </main>
  );
}