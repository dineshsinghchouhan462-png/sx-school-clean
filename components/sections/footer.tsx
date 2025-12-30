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
    <footer className="relative overflow-hidden">
      {/* CINEMATIC DIVIDER (above footer) */}
      <div className="relative h-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />
      </div>

      {/* FOOTER BODY */}
      <div className="relative bg-gradient-to-b from-[#1c1c1b] via-[#191918] to-[#141414] text-neutral-300">
        {/* soft ambient glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {/* BRAND */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">
                Saint Xavier&apos;s Senior Secondary School
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                A disciplined, value-driven educational institution offering
                Hindi & English medium education from Nursery to Class 12.
              </p>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-base font-medium text-white mb-6">
                Contact Information
              </h4>

              <ul className="space-y-4 text-sm text-neutral-400">
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
              <h4 className="text-base font-medium text-white mb-6">
                Connect With Us
              </h4>

              <div className="flex gap-4">
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
                      bg-white/[0.06]
                      backdrop-blur
                      border border-white/10
                      flex items-center justify-center
                      transition-all duration-300
                      hover:scale-[1.08]
                      hover:bg-white/[0.12]
                      hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]
                    "
                  >
                    <item.icon className="w-5 h-5 text-white/80 transition group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="mt-20 pt-8 border-t border-white/10 text-center text-xs text-neutral-500">
            © 2025 Saint Xavier&apos;s Senior Secondary School. All rights reserved.
            <div className="mt-2">
              Designed with care for parents & students
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
