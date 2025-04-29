import {
  RiUserCommunityLine,
  RiRestaurantLine,
  RiStethoscopeLine,
} from "react-icons/ri";

const servicesData = [
  {
    icon: (
      <RiUserCommunityLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Fizyoterapi Danışmanlığı",
    description:
      "Fizyoterapi, hareket ve fonksiyonları geliştirmek, ağrıyı azaltmak ve genel yaşam kalitesini artırmak için uygulanan bir tedavi yöntemidir.",
    link: "/blog/fizyoterapi-danismanligi",
  },
  {
    icon: (
      <RiRestaurantLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Beslenme Danışmanlığı",
    description:
      "Sağlıklı ve dengeli bir yaşam için kişiye özel bir hizmettir. Yaş, sağlık durumu ve hedefler detaylı değerlendirilir.",
    link: "/blog/beslenme-danismanligi",
  },
  {
    icon: (
      <RiStethoscopeLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "İş Merkezlerine Sağlık Danışmanlığı",
    description:
      "İş yerinize özel, bütüncül sağlık danışmanlığı: fizyoterapi, beslenme ve psikolojik destek bir arada sunulur.",
    link: "/blog/is-merkezlerine-saglik-danismanligi",
  },
];

export default servicesData;
