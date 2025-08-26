// @flow strict
"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-xl sm:text-2xl lg:text-3xl font-bold">
            VINICIUS FONTES DE ANDRADE
          </Link>
        </div>

        {/* Hamburger menu button for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-[#16f2b3] transition-colors duration-300"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex md:space-x-1">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
        </ul>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0d1224] border-t border-[#1a1443] md:hidden z-50">
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link 
                  className="block px-4 py-3 no-underline outline-none hover:no-underline" 
                  href="/#about"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
                </Link>
              </li>
              <li>
                <Link 
                  className="block px-4 py-3 no-underline outline-none hover:no-underline" 
                  href="/#experience"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
                </Link>
              </li>
              <li>
                <Link 
                  className="block px-4 py-3 no-underline outline-none hover:no-underline" 
                  href="/#skills"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
                </Link>
              </li>
              <li>
                <Link 
                  className="block px-4 py-3 no-underline outline-none hover:no-underline" 
                  href="/#education"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
                </Link>
              </li>
              <li>
                <Link 
                  className="block px-4 py-3 no-underline outline-none hover:no-underline" 
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div>
                </Link>
              </li>
              <li>
                <Link 
                  className="block px-4 py-3 no-underline outline-none hover:no-underline" 
                  href="/#projects"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;