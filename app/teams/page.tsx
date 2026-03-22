// FILE: app/teams/page.tsx
import Image from "next/image";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string; // path dari /public
};

const TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Rifki Darmawan",
    role: "Showroom Manager",
    bio: "Memimpin operasional showroom, memastikan standar layanan premium, serta mengoordinasikan tim untuk pengalaman pelanggan yang konsisten dan berkelas.",
    photo: "/teams/member1.jpg",
  },
  {
    id: "2",
    name: "Amanda Eka Lupita",
    role: "Product Specialist",
    bio: "Memberikan konsultasi mendalam terkait spesifikasi, fitur, dan opsi konfigurasi, serta memandu pelanggan saat test drive dengan penjelasan yang jelas dan terpercaya.",
    photo: "/teams/member2.jpg",
  },
  {
    id: "3",
    name: "Fajar Ariya Putra",
    role: "Aftersales Consultant",
    bio: "Mendampingi pelanggan dalam perencanaan servis berkala, perawatan kendaraan, dan rekomendasi genuine parts untuk menjaga performa dan nilai kendaraan jangka panjang.",
    photo: "/teams/member3.jpg",
  },
  
  {
    id: "4",
    name: "Muhammad Fadhel",
    role: "Finance & Trade-in",
    bio: "Mengelola kebutuhan pelanggan dari awal hingga serah terima, memberikan rekomendasi model yang tepat, dan memastikan proses pembelian berjalan cepat, aman, dan nyaman.",
    photo: "/teams/member4.jpg",
  },
  {
    id: "5",
    name: "Farhan Yolanda Putra", 
    role: "Sales Advisor",
    bio: "Mengelola kebutuhan pelanggan dari awal hingga serah terima, memberikan rekomendasi model yang tepat, dan memastikan proses pembelian berjalan cepat, aman, dan nyaman.",
    photo: "/teams/member5.jpg",
  },
  
];

export default function TeamsPage() {
  return (
    <div className="space-y-6 text-white">
      <div>
        <h1 className="text-3xl font-extrabold">Teams</h1>
        <p className="mt-2 text-sm text-white/70">Meet our showroom team.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m) => (
          <div
            key={m.id}
            className="rounded-3xl border border-white/10 bg-[#0b1220] p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10">
                <Image src={m.photo} alt={m.name} fill className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-extrabold">{m.name}</div>
                <div className="text-xs text-white/60">{m.role}</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-white/70">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}