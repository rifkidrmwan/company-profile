// FILE: app/blogg/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { deleteBlog, getBlogs, seedBlogsIfEmpty, type BlogPost } from "@/lib/blogStore";
import { getUser } from "@/lib/auth";

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [q, setQ] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    seedBlogsIfEmpty();
    setBlogs(getBlogs());
    setIsAdmin(getUser()?.role === "admin");
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return blogs;
    return blogs.filter(
      (b) =>
        b.title.toLowerCase().includes(query) ||
        b.content.toLowerCase().includes(query) ||
        b.author.toLowerCase().includes(query) ||
        (b.tags ?? []).some((t) => t.toLowerCase().includes(query))
    );
  }, [blogs, q]);

  function handleDelete(id: string, title: string) {
    const ok = confirm(`Delete blog: "${title}" ?`);
    if (!ok) return;

    deleteBlog(id);
    setBlogs(getBlogs());
  }

  return (
    <div className="space-y-6 text-white">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Blog List</h1>
          <p className="mt-2 text-sm text-white/70">
            Posts are stored in localStorage.
            {isAdmin ? " (Admin: you can delete posts)" : ""}
          </p>
        </div>

        <div className="w-full sm:w-80">
          <label className="text-xs font-semibold text-white/70">Search</label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="title, author, tags..."
            className="mt-1 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-sky-400"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm">
          No blog posts found.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              isAdmin={isAdmin}
              onDelete={() => handleDelete(post.id, post.title)}
            />
          ))}
        </div>
      )}
    </div>
  );
}