
// Types
import type { Blog, BlogDetail } from "@/types/blogs";

const CMS_API_URL = process.env.CMS_API_URL;

if (!CMS_API_URL) {
  throw new Error("CMS_API_URL is not defined");
}

export async function getPublishedBlogs(): Promise<Blog[]> {
  const response = await fetch(`${CMS_API_URL}/api/public/blogs`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch published blogs");
  }

  return response.json();
}

export async function getBlogBySlug(
  slug: string
): Promise<BlogDetail | null> {
  const response = await fetch(
    `${CMS_API_URL}/api/public/blogs/${slug}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }

  return response.json();
}


// export async function getPublishedBlogs() {
//   const response = await fetch(`${CMS_API_URL}/api/public/blogs`, {
//     next: {
//       revalidate: 60,
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch published blogs");
//   }

//   return response.json();
// }

// export async function getBlogBySlug(slug: string) {
//   const response = await fetch(
//     `${CMS_API_URL}/api/public/blogs/${slug}`,
//     {
//       next: {
//         revalidate: 60,
//       },
//     }
//   );

//   if (response.status === 404) {
//     return null;
//   }

//   if (!response.ok) {
//     throw new Error("Failed to fetch blog");
//   }

//   return response.json();
// }