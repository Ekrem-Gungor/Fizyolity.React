import {
  RiUserCommunityLine,
  RiRestaurantLine,
  RiStethoscopeLine,
} from "react-icons/ri";

const blogsData = [
  {
    iconClass: (
      <RiUserCommunityLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Fizyoterapi Danışmanlığı",
    description:
      "Fizyoterapi, hareket ve fonksiyonları geliştirmek, ağrıyı azaltmak ve genel yaşam kalitesini artırmak için uygulanan bir tedavi yöntemidir.",
    href: "/blog/fizyoterapi-danismanligi",
  },
  {
    iconClass: (
      <RiRestaurantLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Beslenme Danışmanlığı",
    description:
      "Bireylerin sağlıklı ve dengeli bir yaşam sürmelerini destekleyen kişiye özel bir hizmettir. Süreçte bireyin sağlık durumu, yaşam tarzı ve hedefleri detaylı değerlendirilir.",
    href: "/blog/beslenme-danismanligi",
  },
  {
    iconClass: (
      <RiStethoscopeLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "İş Merkezlerine Sağlık Danışmanlığı",
    description:
      "İş merkezinizin analizini yaparak bütüncül bir yaklaşımla fizyoterapi, beslenme ve psikolojik desteği içeren özel paketler oluşturuyoruz.",
    href: "/blog/is-merkezlerine-saglik-danismanligi",
  },
];

export default blogsData;
