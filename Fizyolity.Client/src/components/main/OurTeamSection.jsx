import React from "react";
import { RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";

const teamMembers = [
  {
    name: "Fatma Çakıllı",
    role: "kurucu fizyoterapist",
    image: "/img/body/ourteam/fatma-cakilli.webp",
    areas: [
      "Kronik Ağrı ve Stres",
      "Ameliyat sonrası tedavi süreci",
      "Sporcu Fizyoterapistliği",
      "Manuel terapi ve Osteopati",
      "Çene ve Yüz Ağrıları",
      "Pilates, Yoga ve Fonksiyonel Egzersizler",
    ],
    instagram: "https://www.instagram.com/fztfatoscakilli/",
    linkedin: "https://www.linkedin.com/in/fatma-çakıllı-42b789266/",
  },
  {
    name: "Umut Küçük",
    role: "fizyoterapist",
    image: "/img/body/ourteam/umut.webp",
    areas: [
      "Kronik Ağrı ve Stres",
      "Fonksiyonel Tıp Diyetisyenliği",
      "Ameliyat sonrası tedavi süreci",
      "Sporcu Fizyoterapistliği",
      "Pilates, Yoga ve Fonksiyonel Egzersizler",
    ],
  },
  {
    name: "Büşra Çakıllı",
    role: "diyetisyen",
    image: "/img/body/ourteam/busra.webp",
    areas: [
      "Sporcu beslenmesi",
      "Fonksiyonel Tıp Diyetisyenliği",
      "Hamilelikte beslenme",
      "Kilo verme/kilo alma",
      "Hastalıklarda beslenme",
    ],
    instagram: "https://www.instagram.com/healthylookk/",
  },
  {
    name: "Çağla Aydın",
    role: "fizyoterapist",
    image: "/img/body/ourteam/Cagla.webp",
    areas: [
      "Kronik Ağrı ve Stres",
      "Ameliyat sonrası tedavi süreçleri",
      "Manuel terapi",
      "Fasya",
      "Pilates, Yoga ve Fonksiyonel Egzersizler",
    ],
  },
];

export default function OurTeamSection() {
  return (
    <section id="ourteams" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white/90">
          Ekibimiz
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white/70 border border-gray-200 p-4 rounded-xl text-center shadow-lg hover:bg-transparent hover:text-white/90 hover:shadow-lg transition duration-300 easy-in-out"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full border-2 mx-auto w-32 h-32 object-cover mb-4"
                loading="lazy"
              />
              <div className="text-xl font-semibold">{member.name}</div>
              <div className="text-md mb-3 italic">
                <strong>#</strong>
                {member.role}
              </div>
              <div className="text-sm font-medium mb-1">
                <strong>Çalıştığı Alanlar</strong>
              </div>
              <ul className="text-sm list-disc list-inside mb-3">
                {member.areas.map((area, i) => (
                  <li key={i}>{area}</li>
                ))}
              </ul>
              <div className="flex justify-center gap-4 mt-2">
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiInstagramLine size={20} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiLinkedinBoxLine size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
