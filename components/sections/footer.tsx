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
    <>
      {/* 🎬 CINEMATIC END-OF-PAGE DIVIDER */}
      <div className="relative h-32 bg-gradient-to-b from-background to-transparent">
        <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent blur-sm" />
      </div>

      <footer className="relative bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 text-neutral-300">
        {/* subtle top glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* GRID */}
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
                  <MapPin className="w-4 h-4 mt-0.5 text-white/60" />
                  <span>
                    Manasar, Nagaur District
                    <br />
                    Rajasthan, India
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white/60" />
                  <a
                    href="tel:+919214018172"
                    className="hover:text-white transition"
                  >
                    +91 9214018172
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white/60" />
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
                      w-12 h-12
                      rounded-full
                      bg-white/5
                      backdrop-blur
                      flex items-center justify-center
                      border border-white/10
                      transition-all duration-300
                      hover:scale-110
                      hover:bg-white/10
                      hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]
                    "
                  >
                    <item.icon className="w-5 h-5 text-white/70 group-hover:text-white transition" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* BOTTOM */}
          <div className="text-center text-xs text-neutral-500 space-y-2">
            <p>
              © 2025 Saint Xavier&apos;s Senior Secondary School. All rights
              reserved.
            </p>
            <p className="italic">
              Designed with care for parents & students
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
