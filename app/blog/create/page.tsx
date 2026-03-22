"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { addBlog } from "@/lib/blogStore";
import { getUser, isLoggedIn } from "@/lib/auth";

export default function CreateBlogPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const author = useMemo(() => getUser()?.email ?? "Unknown", []);

  useEffect(() => {
    // Protect page: if not logged in -> redirect
    if (!isLoggedIn()) {
      router.replace("/login");
      return;
    }
    setChecking(false);
  }, [router]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);

    if (!title.trim()) return setMsg("Title is required.");
    if (!content.trim()) return setMsg("Content is required.");

    try {
      setSaving(true);
      addBlog({
        title: title.trim(),
        content: content.trim(),
        author,
        tags: tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      });

      setTitle("");
      setContent("");
      setTags("");
      router.push("/blog");
    } finally {
      setSaving(false);
    }
  }

  if (checking) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm dark:border-slate-800 dark:bg-slate-950">
        Checking authentication...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold">Create Blog</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Only logged-in users can access this page.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <form onSubmit={onSubmit} className="space-y-4">
          {msg && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
              {msg}
            </div>
          )}

          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-800 dark:bg-slate-950"
              placeholder="Blog title"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Content (Markdown / text)
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              className="mt-1 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-800 dark:bg-slate-950"
              placeholder="Write your content..."
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Tags (optional, comma separated)
            </label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-800 dark:bg-slate-950"
              placeholder="design, nextjs, company"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className={`w-full rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition ${
              saving ? "cursor-not-allowed bg-slate-400" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {saving ? "Saving..." : "Publish"}
          </button>
        </form>
      </div>
    </div>
  );
}