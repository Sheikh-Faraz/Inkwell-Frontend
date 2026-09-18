"use client";

import { MessageCircle } from "lucide-react";

export default function CommentsComingSoon() {
  return (
    <section className="mt-16 border-t pt-10">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <MessageCircle className="size-5" />
            <h2 className="text-xl font-semibold">Comments</h2>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            Join the conversation and share your thoughts.
          </p>
        </div>

        <span className="rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
          Coming Soon
        </span>
      </div>

      {/* Comment input teaser */}
      <div className="relative overflow-hidden rounded-xl border bg-muted/20 p-4">
        <div className="flex gap-3">
          {/* Avatar skeleton */}
          <div className="size-9 shrink-0 animate-pulse rounded-full bg-muted" />

          <div className="flex-1">
            {/* Fake input */}
            <div className="h-20 animate-pulse rounded-lg border bg-background/60" />

            <div className="mt-3 flex justify-end">
              <div className="h-9 w-24 animate-pulse rounded-md bg-muted" />
            </div>
          </div>
        </div>

        {/* Coming soon overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-[1px]">
          <div className="rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm">
            Comments are coming soon ✨
          </div>
        </div>
      </div>

      {/* Fake comments */}
      <div className="mt-8 space-y-6">
        {[1, 2].map((comment) => (
          <div key={comment} className="flex gap-3 opacity-50">
            <div className="size-9 shrink-0 animate-pulse rounded-full bg-muted" />

            <div className="flex-1 space-y-2">
              <div className="h-3 w-28 animate-pulse rounded bg-muted" />
              <div className="h-3 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        We’re working on giving you a place to discuss, react, and connect.
      </p>
    </section>
  );
}