import { Box, Facebook, Instagram, Twitter, ChevronDown } from "lucide-react";
import logo from "../../assets/footer_logo.png";
import us from "../../assets/us.png";
import { footerLinks } from "../data/data.js";

export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-3xl md:rounded-none lg:rounded-none mt-4">
      <div className="container mx-auto px-5 md:px-10 py-12">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-12">
          {/* Logo */}
          <div className=" mb-6 sm:mb-0">
            <img src={logo} alt={logo} className="h-full object-contain" />
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 border border-gray-500 rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2 border border-gray-500 rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2 border border-gray-500 rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-medium text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10">
          {/* Country Selector */}
          <button
            className="flex items-center w-full md:w-auto justify-between space-x-2 bg-white/10 rounded-xl px-4 py-2 mb-4 sm:mb-0"
            aria-label="Select country"
          >
            <span className="text-sm flex items-center">
              <img src={us} alt="" className="w-5 h-5 rounded-full me-2" />{" "}
              United States
            </span>
            <ChevronDown className="h-4 w-4" />
          </button>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © Ganttify {new Date().getFullYear()}. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
