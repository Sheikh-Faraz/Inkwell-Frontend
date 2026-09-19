import { getPublishedBlogs } from "@/lib/api/blogs";

import BlogFilters from "@/components/blog/BlogFilters";
import FeaturedBlog from "@/components/blog/FeaturedBlog";

export default async function Home() {
  const blogs = await getPublishedBlogs();

  const latestBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

  return (
    <main className="min-h-screen md:pt-20 pt-26">
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Inkwell
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Ideas worth reading.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Discover stories, ideas, and perspectives from
              writers across Inkwell.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      {latestBlog && (
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <FeaturedBlog blog={latestBlog} />
        </section>
      )}

      {/* Other Articles */}
      {remainingBlogs.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              More articles
            </h2>

            <p className="mt-2 text-muted-foreground">
              Explore more stories from Inkwell.
            </p>
          </div>

          <BlogFilters blogs={remainingBlogs} />
        </section>
      )}
    </main>
  );
}



// import { getPublishedBlogs } from "@/lib/api/blogs";

// import BlogFilters from "@/components/blog/BlogFilters";

// export default async function Home() {
//   const blogs = await getPublishedBlogs();

//   return (
//     <main className="min-h-screen">
//       {/* Hero */}
//       <section className="border-b">
//         <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
//           <div className="max-w-3xl">
//             <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
//               Inkwell
//             </p>

//             <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//               Ideas worth reading.
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
//               Discover stories, ideas, and perspectives from
//               writers across Inkwell.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Latest Blogs */}
//       <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
//         <div className="mb-10">
//           <h2 className="text-3xl font-bold tracking-tight">
//             Latest articles
//           </h2>

//           <p className="mt-2 text-muted-foreground">
//             Explore the latest stories published on Inkwell.
//           </p>
//         </div>

//         <BlogFilters blogs={blogs} />
//       </section>
//     </main>
//   );
// };