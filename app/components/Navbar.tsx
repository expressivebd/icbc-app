"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  const links = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About", href: "/about" },
    { id: 3, title: "Project Updates", href: "/project" },
    { id: 4, title: "Media", href: "/media" },
    {
      id: 5,
      title: "Learning",
      href: "https://www.icbcproject.org/learningspace",
    },
    { id: 6, title: "Contact", href: "/contact" },
  ];

  // Close the menu when the pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle scroll behavior to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // If scrolling down, hide the navbar
          setIsNavbarVisible(false);
        } else {
          // If scrolling up, show the navbar
          setIsNavbarVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`container bg-white max-sm:bg-[#DDF5FF] px-2 xl:px-16 max-sm:px-4 mx-auto flex items-center justify-between transition-transform duration-300 ${
        isNavbarVisible
          ? "translate-y-0 top-2 max-sm:top-0 py-2 rounded-xl"
          : "-translate-y-full"
      } w-[100%] fixed top-0 left-0 right-0 z-50`}
    >
      {/* Logo */}
      <Link href="/" className="md:hidden">
        <Image
          priority
          src="/logo-mark.svg"
          alt="logo"
          width={50}
          height={50}
        />
      </Link>

      {/* Hamburger Icon */}
      <button
        className="sm:hidden flex items-center justify-center w-10 h-10"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="sr-only">Toggle Menu</span>
        <svg
          className="w-6 h-6 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden w-full sm:flex gap-12 justify-between items-center text-secondary">
        <div className="flex gap-12">
          {links.slice(0, 3).map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-primary font-montserrat font-bold xl:text-lg text-[15px]"
                  : "font-montserrat xl:text-lg text-[15px] font-medium text-secondary"
              }
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* logo */}
        <Link href="/">
          <Image
            priority
            src="/logo-mark.svg"
            alt="logo"
            layout="responsive"
            width={70}
            height={70}
          />
        </Link>

        <div className="flex gap-12">
          {links.slice(3).map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-primary font-montserrat font-bold xl:text-lg text-[15px]"
                  : "font-montserrat xl:text-lg text-[15px] font-medium text-secondary"
              }
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute z-50 top-[55px] left-0 right-0 bg-white flex flex-col gap-2 mt-2 shadow-lg p-8 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-primary font-bold"
                  : ""
              }
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
