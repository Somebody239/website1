import { Toaster } from "sonner";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";

type Page = "home" | "products" | "about" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#1a1a1a] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {currentPage === "home" && <HomePage onPageChange={onPageChange} />}
            {currentPage === "products" && <ProductsPage />}
            {currentPage === "about" && <AboutPage />}
            {currentPage === "contact" && <ContactPage />}
          </div>
        </main>
      </div>
      <Toaster theme="dark" />
    </div>
  );
}
