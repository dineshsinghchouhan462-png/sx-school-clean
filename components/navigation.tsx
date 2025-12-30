"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const items = [
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Facilities", href: "#facilities" },
    { label: "Hostel", href: "#hostel" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-[100]
        transition-all duration-500
        ${scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/images/logo/logo.png"
              alt="Saint Xavier's Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-[15px] md:text-base font-medium tracking-wide text-foreground">
              Saint Xavier&apos;s
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {items.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="
                  text-sm
                  text-muted-foreground
                  transition-colors duration-300
                  hover:text-foreground
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              relative z-[120]
              p-2
              rounded-md
              bg-background/70 backdrop-blur
              border border-border/50
            "
            aria-label="Toggle Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="
            md:hidden
            absolute top-full left-0 right-0
            bg-background/95 backdrop-blur-xl
            border-b border-border
            z-[110]
          ">
            <div className="px-6 py-6 space-y-5">
              {items.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    block
                    text-sm
                    text-muted-foreground
                    hover:text-foreground
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
