"use client";

import { useEffect } from "react";

import { AlertCircle, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-muted">
          <AlertCircle className="size-7 text-muted-foreground" />
        </div>

        <h1 className="mt-6 text-3xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-2 text-muted-foreground">
          We couldn&apos;t load the articles right now.
        </p>

        <Button
          onClick={() => reset()}
          className="mt-6"
        >
          <RefreshCw />
          Try again
        </Button>
      </div>
    </main>
  );
}
