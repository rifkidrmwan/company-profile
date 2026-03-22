import type { BlogPost } from "@/lib/blogStore";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogCard({
  post,
  isAdmin = false,
  onDelete,
}: {
  post: BlogPost;
  isAdmin?: boolean;
  onDelete?: (id: string) => void;
}) {
  const excerpt =
    post.content.length > 120 ? post.content.slice(0, 120).trim() + "..." : post.content;

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0b1220] p-6 text-white shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-extrabold">{post.title}</h3>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
          {formatDate(post.createdAt)}
        </span>
      </div>

      <p className="mt-2 text-sm text-white/70">{excerpt}</p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs text-white/70">
          Author: <span className="font-semibold text-white">{post.author}</span>
        </div>

        {post.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                #{t}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {/* ADMIN ACTIONS */}
      {isAdmin && onDelete && (
        <div className="mt-5 flex justify-end">
          <button
            onClick={() => onDelete(post.id)}
            className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-2 text-xs font-extrabold text-red-200 hover:bg-red-500/20 transition"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}