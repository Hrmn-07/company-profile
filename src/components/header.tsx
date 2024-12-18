"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full transition-all duration-300 ${
        isScrolled ? "bg-slate-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/echolink.png"
            alt="TechCorp Logo"
            width={45}
            height={45}
            className="rounded-xl"
          />
          <span className="ml-2 text-lg font-bold pl-2">EchoLink</span>
        </Link>
        <nav>
          <ul className="flex space-x-4 text-md">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-blue-400">
                Our Team
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
