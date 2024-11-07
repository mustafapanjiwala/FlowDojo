import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/Logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Product", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Company", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-white/10 md:h-[10vh] lg:h-[10vh]">
      <div className="p-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0">
            <a href="#" className=" text-xl font-bold md:m-4">
              <img src={logo} alt={logo} className="h-full object-contain" />
            </a>
            <div className="hidden md:flex md:items-center md:space-x-8 md:ms-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black hover:underline transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Navigation */}

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="#"
              className="text-black py-2 px-3 hover:text-white hover:bg-black transition-colors duration-200"
              style={{
                fontWeight: "600",
                border: "1px solid rgba(223, 225, 230, 1)",
                borderRadius: "12px",
              }}
            >
              Sign In
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-black px-3 py-2 text-sm text-white hover:text-black hover:bg-white transition-colors duration-200"
              style={{
                fontWeight: "600",
                border: "1px solid rgba(223, 225, 230, 1)",
                borderRadius: "12px",
              }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-black me-5 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 space-y-2 me-3">
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-black text-center"
                  style={{
                    fontWeight: "600",
                    border: "1px solid rgba(223, 225, 230, 1)",
                    borderRadius: "12px",
                  }}
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="block rounded-md bg-black px-3 py-2 text-base font-medium text-white  text-center"
                  style={{
                    fontWeight: "600",
                    border: "1px solid rgba(223, 225, 230, 1)",
                    borderRadius: "12px",
                  }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
