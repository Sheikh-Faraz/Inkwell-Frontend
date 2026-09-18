import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <Skeleton className="h-4 w-20" />

          <Skeleton className="mt-5 h-14 w-full max-w-2xl" />

          <Skeleton className="mt-6 h-6 w-full max-w-xl" />
          <Skeleton className="mt-2 h-6 w-3/4 max-w-xl" />
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <Skeleton className="h-9 w-56" />
        <Skeleton className="mt-3 h-5 w-80 max-w-full" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border"
            >
              <Skeleton className="aspect-video w-full rounded-none" />

              <div className="space-y-4 p-6">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

