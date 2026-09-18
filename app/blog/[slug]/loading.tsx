import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen">
      <article className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16">
        <Skeleton className="h-9 w-36" />

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex gap-3">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-32" />
          </div>

          <Skeleton className="mt-6 h-14 w-full" />
          <Skeleton className="mt-3 h-14 w-4/5" />

          <div className="mt-8 flex items-center gap-3">
            <Skeleton className="size-11 rounded-full" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>

        <Skeleton className="mx-auto mt-12 aspect-video w-full rounded-2xl" />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />

          <Skeleton className="mt-8 h-8 w-2/3" />

          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
        </div>
      </article>
    </main>
  );
}
