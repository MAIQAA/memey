import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Help", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Walkthrough", href: "#" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-['Pacifico'] text-xl sm:text-2xl text-black">
              logo
            </span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 hover:text-black text-sm lg:text-base transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button className="rounded-md bg-black text-white px-4 sm:px-6 py-2 text-sm lg:text-base hover:bg-black/90 transition-colors duration-200">
              Download
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-black text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="rounded-md bg-black text-white px-6 py-2 text-base hover:bg-black/90 w-full">
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
