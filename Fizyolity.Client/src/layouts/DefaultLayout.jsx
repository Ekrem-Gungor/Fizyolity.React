// src/layouts/DefaultLayout.jsx
import Footer from "@/components/defaultLayout/Footer";
import Header from "../components/defaultLayout/Header";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import FloatingButtons from "@/components/utils/FloatingButtons";

export default function DefaultLayout() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* İçerik */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />

        <FloatingButtons />
      </div>
    </HelmetProvider>
  );
}
