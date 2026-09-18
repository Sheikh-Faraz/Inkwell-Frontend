import Link from "next/link";

import { ArrowLeft, FileQuestion } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-muted">
          <FileQuestion className="size-7 text-muted-foreground" />
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight">
          Article not found
        </h1>

        <p className="mt-2 max-w-md text-muted-foreground">
          The article you&apos;re looking for doesn&apos;t exist or may
          have been unpublished.
        </p>

        <Button className="mt-6">
          <Link href="/">
            <ArrowLeft />
            Back to articles
          </Link>
        </Button>
      </div>
    </main>
  );
}
