import { useState } from "react";
import { Link } from "react-router";
import { Link as ScrollLink } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

const typedWords = [
  "mobility",
  "agility",
  "stability",
  "adaptability",
  "flexibility",
  "fizyolity",
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // Scroll olduğunda header efektleri vs.
  const handleScroll = () => {
    if (window.scrollY > 100 && window.innerWidth > 768) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useState(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="relative h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/img/header/ana-ekran.webp')" }}
    >
      {/* Navbar */}
      <nav
        className={`w-full flex items-center justify-between px-4 py-2 ${
          isScrolled ? "bg-white/0 backdrop-blur-md" : "bg-transparent"
        } fixed top-0 left-0 z-50`}
      >
        <div className="text-2xl font-bold text-white">
          <Link to="/">Fizyolity</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-white">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-100}
            className="rounded-xl p-1 px-2 cursor-pointer hover:bg-white/20 hover:text-zinc-700 transition-all duration-400 easy-in-out"
          >
            Biz Kimiz?
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={-100}
            className="rounded-xl p-1 px-2 cursor-pointer hover:bg-white/20 hover:text-zinc-700 transition-all duration-400 easy-in-out"
          >
            Hizmetlerimiz
          </ScrollLink>
          <ScrollLink
            to="blogs"
            smooth={true}
            duration={500}
            offset={-100}
            className="rounded-xl p-1 px-2 cursor-pointer hover:bg-white/20 hover:text-zinc-700 transition-all duration-400 easy-in-out"
          >
            Blogs
          </ScrollLink>
          <ScrollLink
            to="gallery"
            smooth={true}
            duration={500}
            offset={-100}
            className="rounded-xl p-1 px-2 cursor-pointer hover:bg-white/20 hover:text-zinc-700 transition-all duration-400 easy-in-out"
          >
            Galeri
          </ScrollLink>
          <ScrollLink
            to="events"
            smooth={true}
            duration={500}
            offset={-100}
            className="rounded-xl p-1 px-2 cursor-pointer hover:bg-white/20 hover:text-zinc-700 transition-all duration-400 easy-in-out"
          >
            Etkinlikler
          </ScrollLink>
          <ScrollLink
            to="ourteams"
            smooth={true}
            duration={500}
            offset={-100}
            className="rounded-xl p-1 px-2 cursor-pointer hover:bg-white/20 hover:text-zinc-700 transition-all duration-400 easy-in-out"
          >
            Ekibimiz
          </ScrollLink>
          <ScrollLink
            to="location"
            smooth={true}
            duration={500}
            offset={-100}
            className="rounded-xl p-1 px-2 cursor-pointer hover:bg-white/20 hover:text-zinc-700 transition-all duration-400 easy-in-out"
          >
            İletişim
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowSidebar(true)}
          className="md:hidden text-white"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            fill="#fff"
            viewBox="0 -960 960 960"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>

        {/* Mobile Sidebar */}
        {showSidebar && (
          <div className="fixed top-0 right-0 w-64 h-full bg-white bg-opacity-20 backdrop-blur-lg flex flex-col p-5 z-50">
            <button onClick={() => setShowSidebar(false)} className="self-end">
              {/* Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="30"
                fill="#000"
                viewBox="0 -960 960 960"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
            <ul className="flex flex-col gap-4 mt-6 text-black">
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setShowSidebar(false)}
                >
                  Biz Kimiz?
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setShowSidebar(false)}
                >
                  Hizmetlerimiz
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="blogs"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setShowSidebar(false)}
                >
                  Blogs
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="gallery"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setShowSidebar(false)}
                >
                  Galeri
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="events"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setShowSidebar(false)}
                >
                  Etkinlikler
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="ourteams"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setShowSidebar(false)}
                >
                  Ekibimiz
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="location"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setShowSidebar(false)}
                >
                  İletişim
                </ScrollLink>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Shadow Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10 border-b-4 border-white/30" />

      {/* Hero Text */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white z-20">
        <h1 className="text-4xl md:text-6xl mb-4" data-aos="fade-up">
          Fizyoterapi ve <br /> Danışmanlık Merkezi
        </h1>
        <span className="text-2xl md:text-4xl bg-white/10 rounded-xl px-3 py-1 text-[#3f9c9f]">
          <Typewriter
            words={typedWords}
            typeSpeed={50}
            loop={true}
            cursor
            cursorStyle="|"
            deleteSpeed={50}
            delaySpeed={2500}
          />
        </span>
      </div>
    </header>
  );
}
