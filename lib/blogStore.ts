import { v4 as uuidv4 } from "uuid";

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  tags?: string[];
};

const BLOG_KEY = "cp_blogs";

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

// seed awal blog
export function seedBlogsIfEmpty() {
  if (typeof window === "undefined") return;

  const existing = safeParse<BlogPost[]>(localStorage.getItem(BLOG_KEY));
  if (existing && existing.length > 0) return;

  const seed: BlogPost[] = [
    {
      id: uuidv4(),
      title: "Welcome to Our Blog",
      content:
        "This is a sample blog post. You can create a new post from Create Blog page after login.",
      author: "Admin",
      createdAt: new Date().toISOString(),
      tags: ["announcement", "company"],
    },
    {
      id: uuidv4(),
      title: "How We Work",
      content:
        "We follow a simple process: Discovery → Design → Build → Launch. Our focus is quality and clarity.",
      author: "Admin",
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      tags: ["process"],
    },
  ];

  localStorage.setItem(BLOG_KEY, JSON.stringify(seed));
}

// ambil semua blog
export function getBlogs(): BlogPost[] {
  if (typeof window === "undefined") return [];

  const data = safeParse<BlogPost[]>(localStorage.getItem(BLOG_KEY)) ?? [];

  const cleaned = data.filter(
    (b) => b.title.trim().length >= 5 && b.content.trim().length >= 10
  );

  return cleaned.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

// tambah blog
export function addBlog(post: Omit<BlogPost, "id" | "createdAt">): BlogPost {
  if (typeof window === "undefined") throw new Error("Client only");

  const newPost: BlogPost = {
    ...post,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
  };

  const all = getBlogs();
  const next = [newPost, ...all];

  localStorage.setItem(BLOG_KEY, JSON.stringify(next));
  return newPost;
}

// hapus blog
export function deleteBlog(blogId: string): void {
  if (typeof window === "undefined") return;

  const data = safeParse<BlogPost[]>(localStorage.getItem(BLOG_KEY)) ?? [];
  const next = data.filter((b) => b.id !== blogId);

  localStorage.setItem(BLOG_KEY, JSON.stringify(next));
}