"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LucideDownload } from "lucide-react";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faqs", label: "FAQs" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#ffffffb2] backdrop-blur-xl md:px-4 border-b border-b-[#EDEDED] z-50">
      <div className="flex items-center justify-between flex-wrap max-w-[1040px] mx-auto px-4 md:px-0 border-x border-x-[#edededb5] border-dashed">
        <div className="flex items-center flex-shrink-0 text-white py-1">
          <Link href="/">
            <Image
              src="/images/agriguard-logo.svg"
              className="w-auto h-auto"
              alt="agriguard logo"
              width={46}
              height={46}
            />
          </Link>
        </div>
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-6 w-6 text-[#00000080] ${
                isOpen ? "hidden" : "block"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-6 w-6 text-[#00000080] ${
                isOpen ? "block" : "hidden"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow md:flex md:items-center md:w-auto ${
            isOpen ? "block min-h-screen md:min-h-0" : "hidden max-h-none"
          }`}
        >
          <div className="text-sm flex md:flex-row flex-col items-center justify-center gap-4 ms-4">
              {navLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className="block md:inline-block text-center text-[#00000080] text-sm font-[500]"
                >
                  {link.label}
                </Link>
              ))}
          </div>
          <div className="lg:ms-auto mt-4 lg:mt-0 text-center">
              <Link
                  href="https://play.google.com/store/apps/details?id=com.agriguard.mobile"
                  target="_blank"
                >
                  <Button
                    className="rounded-full text-white h-9 hover:text-white font-semibold hover:bg-primary"
                  >
                    Download App
                    <LucideDownload className="ms-2 h-4 w-4" />
                  </Button>
                </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
