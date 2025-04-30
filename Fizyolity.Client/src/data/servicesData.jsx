import {
  RiUserCommunityLine,
  RiRestaurantLine,
  RiStethoscopeLine,
  RiPsychotherapyLine,
  RiOpenArmLine,
  RiWindyFill,
  RiWeightLine,
} from "react-icons/ri";
import { FaNutritionix } from "react-icons/fa";
import { LiaBabyCarriageSolid } from "react-icons/lia";
import { MdPregnantWoman } from "react-icons/md";
import { GrYoga } from "react-icons/gr";
import { TbYoga } from "react-icons/tb";

const servicesData = [
  {
    id: 1,
    icon: (
      <RiUserCommunityLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Fizyoterapi Danışmanlığı",
    description:
      "Fizyoterapi, hareket ve fonksiyonları geliştirmek, ağrıyı azaltmak ve genel yaşam kalitesini artırmak için uygulanan bir tedavi yöntemidir.",
    link: "/blog/fizyoterapi-danismanligi",
  },
  {
    id: 2,
    icon: (
      <RiRestaurantLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Beslenme Danışmanlığı",
    description:
      "Sağlıklı ve dengeli bir yaşam için kişiye özel bir hizmettir. Yaş, sağlık durumu ve hedefler detaylı değerlendirilir.",
    link: "/blog/beslenme-danismanligi",
  },
  {
    id: 3,
    icon: (
      <RiStethoscopeLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "İş Merkezlerine Sağlık Danışmanlığı",
    description:
      "İş yerinize özel, bütüncül sağlık danışmanlığı: fizyoterapi, beslenme ve psikolojik destek bir arada sunulur.",
    link: "/blog/is-merkezlerine-saglik-danismanligi",
  },
  {
    id: 4,
    icon: (
      <FaNutritionix className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Sporcu Beslenmesi",
    link: "/blog/is-merkezlerine-saglik-danismanligi",
  },
  {
    id: 5,
    icon: (
      <LiaBabyCarriageSolid className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Gebelikte Beslenme",
    link: "/blog/gebelikteleBeslenmesi",
  },
  {
    id: 6,
    icon: (
      <RiPsychotherapyLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Manuel Terapi",
    link: "/blog/manuelTerapi",
  },
  {
    id: 7,
    icon: (
      <RiOpenArmLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Klinik Pilates",
    link: "/blog/klinikPilates",
  },
  {
    id: 8,
    icon: (
      <MdPregnantWoman className="w-14 h-14 p-1 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Hamileler İçin Pilates",
    link: "/blog/hamilelerIcinPilates",
  },
  {
    id: 9,
    icon: (
      <GrYoga className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Yoga",
    link: "/blog/yoga",
  },
  {
    id: 10,
    icon: (
      <TbYoga className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Swing Yoga",
    link: "/blog/swingYoga",
  },
  {
    id: 11,
    icon: (
      <RiWindyFill className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Osteopati",
    link: "/blog/osteopati",
  },
  {
    id: 12,
    icon: (
      <RiWeightLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Fonksiyonel Egzersiz",
    link: "/blog/fonksiyonelEgzersiz",
  },
];

export default servicesData;
