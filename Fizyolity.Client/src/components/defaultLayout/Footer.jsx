import {
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { Link } from "react-router";
import { ROUTES } from "@/router/index";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    const isOnHome = location.pathname === "/";
    if (isOnHome) {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    } else {
      navigate(`/?section=${sectionId}`);
    }
  };
  return (
    <footer className="bg-zinc-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Üst Kısım */}
        <div className="flex flex-wrap justify-between gap-8">
          {/* Hızlı Bağlantılar */}
          <div className="w-full md:w-1/4">
            <h3 className="text-2xl border-b-2 border-fizyolity pb-2 mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={ROUTES.HOME}
                  className="hover:text-fizyolity transition"
                >
                  Anasayfa
                </Link>
              </li>
              <li
                onClick={() => handleNavClick("about")}
                className="hover:text-fizyolity cursor-pointer transition"
              >
                Hakkımızda
              </li>
              <li
                onClick={() => handleNavClick("services")}
                className="hover:text-fizyolity cursor-pointer transition"
              >
                Hizmetlerimiz
              </li>
              <li
                onClick={() => handleNavClick("blogs")}
                className="hover:text-fizyolity cursor-pointer transition"
              >
                Blog
              </li>
              <li>
                <Link
                  to={ROUTES.YOUTUBE}
                  className="hover:text-fizyolity transition"
                >
                  Fizyolity Youtube
                </Link>
              </li>
              <li
                onClick={() => handleNavClick("gallery")}
                className="hover:text-fizyolity cursor-pointer transition"
              >
                Galeri
              </li>
              <li
                onClick={() => handleNavClick("event")}
                className="hover:text-fizyolity cursor-pointer transition"
              >
                Etkinlikler
              </li>
              <li
                onClick={() => handleNavClick("ourteams")}
                className="hover:text-fizyolity cursor-pointer transition"
              >
                Ekibimiz
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div className="w-full md:w-1/4">
            <h3 className="text-2xl border-b-2 border-fizyolity pb-2 mb-4">
              İletişim
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <FaLocationDot className="text-fizyolity mt-1 mr-2" />
                <Link
                  to={ROUTES.GOOGLEMAP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fizyolity transition"
                >
                  Sahrayıcedit Mah. Atatürk Cad. No:55 Dilkum 5 Sitesi Daire:12
                  Kat:1 Kadıköy/İstanbul
                </Link>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-fizyolity mr-2" />
                <Link
                  to={`tel:+90${ROUTES.PHONENO}`}
                  target="_blank"
                  className="hover:text-fizyolity transition"
                >
                  +90 533 928 95 55
                </Link>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-fizyolity mr-2" />
                <Link
                  to={`mailto:${ROUTES.MAIL}`}
                  target="_blank"
                  className="hover:text-fizyolity transition"
                >
                  info@fizyolity.com.tr
                </Link>
              </div>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div className="w-full md:w-1/4">
            <h3 className="text-2xl border-b-2 border-fizyolity pb-2 mb-4">
              Bizi Takip Edin
            </h3>
            <div className="flex items-center space-x-4">
              <Link
                to={`https://www.instagram.com/${ROUTES.FIZYOLITYINSTAGRAM}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fizyolity transition text-2xl"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm space-y-2">
          <p>
            &trade; This Web Site Development by{" "}
            <span className="text-red-500">&hearts;</span>{" "}
            <Link
              to={`https://www.instagram.com/${ROUTES.DEVELOPERINSTAGRAM}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fizyolity transition"
            >
              Ekrem Güngör
            </Link>
          </p>
          <p>&copy; 2025 Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
