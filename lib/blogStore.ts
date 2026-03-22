  import { v4 as uuidv4 } from "uuid";
  export type BlogPost = {
    id: string;
    title: string;
    content: string; // markdown/plain text
    author: string;
    createdAt: string; // ISO
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

  export function seedBlogsIfEmpty() {
    const existing = safeParse<BlogPost[]>(localStorage.getItem(BLOG_KEY));
    if (existing && existing.length > 0) return;

    const seed: BlogPost[] = [
      {
        id: uuidv4(),
        title: "Welcome to Our Blog",
        content:
          "This is a sample blog post. You can create a new post from **Create Blog** page after login.",
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
export function deleteBlog(blogId: string): void {
  const data = safeParse<BlogPost[]>(localStorage.getItem(BLOG_KEY)) ?? [];
  const next = data.filter((b) => b.id !== blogId);
  localStorage.setItem(BLOG_KEY, JSON.stringify(next));
}
 export function getBlogs(): BlogPost[] {
  const data = safeParse<BlogPost[]>(localStorage.getItem(BLOG_KEY)) ?? [];

  // buang post yang judul/konten terlalu pendek (contoh: asdasd)
  const cleaned = data.filter(
    (b) => b.title.trim().length >= 5 && b.content.trim().length >= 10
  );

  // sort newest first
  return cleaned.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

  export function addBlog(post: Omit<BlogPost, "id" | "createdAt">): BlogPost {
    const newPost: BlogPost = {
      ...post,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    const all = getBlogs();
    const next = [newPost, ...all];
    localStorage.setItem(BLOG_KEY, JSON.stringify(next));
    return newPost;
  }