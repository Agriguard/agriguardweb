"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Check if the user is authenticated by looking for the user data in localStorage
    const userPhone = localStorage.getItem("user_phone");
    const userEmail = localStorage.getItem("user_email");
    const firstName = localStorage.getItem("first_name");

    if (userPhone || userEmail || firstName) {
      setIsAuthenticated(true);
      setUserName(firstName || userEmail || "User");
    }

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const renderNavLinks = () => (
    <div className="text-sm flex md:flex-row flex-col items-center justify-center gap-4">
      <a
        href="/"
        className="block md:inline-block md:ml-5 text-center text-[#00000080] dark:text-white font-[500]"
      >
        Home
      </a>
      <a
        href="#"
        className="block md:inline-block md:mt-0 text-center text-[#00000080] dark:text-white font-[500]"
      >
        About Us
      </a>
      <a
        href="#"
        className="block md:inline-block text-center text-[#00000080] dark:text-white font-[500]"
      >
        Features
      </a>
      <a
        href="#"
        className="block md:inline-block text-center text-[#00000080] dark:text-white font-[500]"
      >
        Pricing
      </a>
      <a
        href="#"
        className="block md:inline-block text-center text-[#00000080] dark:text-white font-[500]"
      >
        FAQs
      </a>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#ffffffb2] backdrop-blur-xl md:px-4 border-b border-b-[#EDEDED] z-50">
      <div className="flex items-center justify-between flex-wrap max-w-[1040px] mx-auto px-4 md:px-0">
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
          {isAuthenticated && pathname === "/" ? (
            renderNavLinks()
          ) : isAuthenticated ? (
            <div className="text-sm flex md:flex-row flex-col items-center justify-center gap-4">
              <a
                href="#"
                className="block text-sm md:inline-block text-center text-[#00000080] dark:text-white font-[500] ms-4"
              >
                Contact Support
              </a>
            </div>
          ) : (
            renderNavLinks()
          )}
          <div className="text-center ms-auto flex-col md:flex-row flex items-center justify-center gap-4 md:pt-0 pt-5">
            <Button asChild className="rounded-full h-8">
              <Link
                href={
                  isAuthenticated
                    ? "#"
                    : pathname === "/market-intelligence"
                    ? "/auth/login"
                    : "/market-intelligence"
                }
              >
                {isAuthenticated
                  ? `Hi, ${userName}`
                  : pathname === "/market-intelligence"
                  ? "Login"
                  : "Market Intelligence"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
