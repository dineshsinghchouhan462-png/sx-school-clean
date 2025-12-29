"use client"

import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-neutral-300">
      {/* PREMIUM BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[260px] w-[260px] bg-white/4 blur-[120px]" />
      </div>

      {/* TOP DIVIDER */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Saint Xavier&apos;s Senior Secondary School
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              A disciplined, value-driven educational institution offering
              Hindi & English medium education from Nursery to Class 12.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-base font-medium text-white mb-5">
              Contact Information
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-white/70" />
                <span>
                  Manasar, Nagaur District
                  <br />
                  Rajasthan, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/70" />
                <a
                  href="tel:+919214018172"
                  className="hover:text-white transition"
                >
                  +91 9214018172
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/70" />
                <a
                  href="mailto:admin@saintxaviersmanasar.edu.in"
                  className="hover:text-white transition"
                >
                  admin@saintxaviersmanasar.edu.in
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-base font-medium text-white mb-5">
              Connect With Us
            </h4>

            <div className="flex gap-5">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/saint.xaviers.school.nagaur",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/share/1K1BYWcDnS/",
                },
                {
                  icon: Youtube,
                  href: "https://youtube.com/@saintxaviersschool",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    w-12 h-12
                    rounded-full
                    bg-white/10
                    backdrop-blur-md
                    border border-white/15
                    flex items-center justify-center
                    transition-all duration-300
                    hover:scale-110
                    hover:bg-white/20
                    hover:shadow-[0_0_35px_rgba(255,255,255,0.35)]
                  "
                >
                  <item.icon className="w-5 h-5 text-white/90 transition group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER BASE */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-xs text-neutral-500">
          © 2025 Saint Xavier&apos;s Senior Secondary School. All rights reserved.
          <div className="mt-2 text-neutral-400">
            Designed with care for parents & students
          </div>
        </div>
      </div>
    </footer>
  )
}
