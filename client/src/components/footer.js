import React from "react";
import { Twitter, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white py-6 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={scrollToTop} className="rounded-full border px-3 py-2 bg-white hover:bg-gray-100">
          <ArrowUp className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[#002b44] mr-2 font-medium">social media</span>
          <a href="#" className="p-2">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" className="p-2">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" className="p-2">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" className="p-2">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
