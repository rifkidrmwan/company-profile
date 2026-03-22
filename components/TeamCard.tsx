type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export default function TeamCard({ m }: { m: TeamMember }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center gap-4">
        <img
          src={m.photo}
          alt={m.name}
          className="h-14 w-14 rounded-2xl object-cover"
        />
        <div>
          <div className="text-sm font-bold">{m.name}</div>
          <div className="text-xs text-slate-600 dark:text-slate-400">{m.role}</div>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{m.bio}</p>
    </div>
  );
}