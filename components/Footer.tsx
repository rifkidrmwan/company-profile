import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-10 dark:border-slate-800/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-semibold">Nexora Studio</div>
          <div className="text-xs text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Nexora Studio. All rights reserved.
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link className="hover:underline" href="/about">About</Link>
          <Link className="hover:underline" href="/services">Services</Link>
          <Link className="hover:underline" href="/teams">Teams</Link>
          <Link className="hover:underline" href="/blog">Blog</Link>
        </div>
      </div>
    </footer>
  );
}