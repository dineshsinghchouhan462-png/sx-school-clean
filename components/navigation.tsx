"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          
          {/* LOGO */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/images/logo/logo.png"
              alt="Saint Xavier's School Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-base md:text-lg font-medium tracking-tight text-foreground">
              Saint Xavier&apos;s
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* MOBILE DROPDOWN MENU (NOT FULLSCREEN) */}
          {isOpen && (
            <div className="absolute right-0 top-full mt-3 w-56 rounded-xl bg-background/95 backdrop-blur-md border border-border shadow-lg md:hidden animate-in fade-in zoom-in-95">
              <div className="py-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
