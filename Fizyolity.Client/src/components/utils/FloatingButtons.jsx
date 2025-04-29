import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      {isVisible && (
        <>
          {/* WhatsApp Button */}
          <div className="group relative">
            <a
              href="https://wa.me/905339289555"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 duration-300"
            >
              <FaWhatsapp size={24} />
            </a>
            <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2">
              WhatsApp
            </span>
          </div>

          {/* Phone Call Button */}
          <div className="group relative">
            <a
              href="tel:+905339289555"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110 duration-300"
            >
              <FaPhoneAlt size={20} />
            </a>
            <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2">
              Ara
            </span>
          </div>

          {/* Scroll to Top Button */}
          <div className="group relative">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white shadow-lg hover:bg-gray-800 transition-transform transform hover:scale-110 duration-300"
            >
              <FaArrowUp size={20} />
            </button>
            <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2">
              Yukarı
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default FloatingButtons;
