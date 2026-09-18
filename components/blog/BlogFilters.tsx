"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import BlogCard from "@/components/blog/BlogCard";
import type { Blog } from "@/types/blogs";

type BlogFiltersProps = {
  blogs: Blog[];
};

export default function BlogFilters({
  blogs,
}: BlogFiltersProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => {
    const uniqueCategories = new Map<string, string>();

    blogs.forEach((blog) => {
      if (blog.category) {
        uniqueCategories.set(
          blog.category._id,
          blog.category.name
        );
      }
    });

    return Array.from(uniqueCategories.entries());
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return blogs.filter((blog) => {
      const matchesSearch =
        !searchTerm ||
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.author?.fullName
          .toLowerCase()
          .includes(searchTerm);

      const matchesCategory =
        category === "all" ||
        blog.category?._id === category;

      return matchesSearch && matchesCategory;
    });
  }, [blogs, search, category]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search articles..."
            className="pl-9"
          />
        </div>

        <Select
          value={category}
          onValueChange={(value) => {
            if (value !== null) {
              setCategory(value);
            }
          }}
          // onValueChange={setCategory}
        >
          <SelectTrigger className="w-full sm:w-50">
            <SelectValue placeholder="Category" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">
              All categories
            </SelectItem>

            {categories.map(([id, name]) => (
              <SelectItem key={id} value={id}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Results */}
      {filteredBlogs.length === 0 ? (
        <div className="rounded-xl border border-dashed p-12 text-center">
          <h3 className="text-lg font-semibold">
            No articles found
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Try a different search or category.
          </p>
        </div>
      ) : (
        <>
          <p className="mb-6 text-sm text-muted-foreground">
            {filteredBlogs.length}{" "}
            {filteredBlogs.length === 1
              ? "article"
              : "articles"}
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog._id}
                blog={blog}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
