"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50
        transition-all duration-500 ease-out
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-black/5"
            : "bg-white/70 backdrop-blur-sm"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo/logo.png"
            alt="Saint Xavier's School"
            width={42}
            height={42}
            priority
          />
          <span className="text-[15px] font-medium tracking-wide text-neutral-900">
            Saint Xavier&apos;s
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "About", href: "#about" },
            { label: "Academics", href: "#academics" },
            { label: "Facilities", href: "#facilities" },
            { label: "Gallery", href: "#gallery" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative text-sm text-neutral-700
                transition-colors duration-300
                hover:text-neutral-900
                after:absolute after:left-0 after:-bottom-1
                after:h-[1px] after:w-0 after:bg-neutral-900
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-neutral-800 text-xl">
          ☰
        </button>
      </div>
    </header>
  )
}
