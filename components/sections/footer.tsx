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
      {/* CINEMATIC END-OF-PAGE DIVIDER */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none" />

      {/* WARM CHARCOAL MIST BACKGROUND */}
      <div className="relative bg-gradient-to-b from-[#1e1e1c] via-[#1a1a18] to-[#141412] text-neutral-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {/* BRAND */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-4">
                Saint Xavier&apos;s Senior Secondary School
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                A disciplined, value-driven educational institution offering
                Hindi & English medium education from Nursery to Class 12.
              </p>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-base font-medium text-neutral-100 mb-5">
                Contact Information
              </h4>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-neutral-400" />
                  <span>
                    Manasar, Nagaur District
                    <br />
                    Rajasthan, India
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-neutral-400" />
                  <a
                    href="tel:+919214018172"
                    className="hover:text-neutral-100 transition"
                  >
                    +91 9214018172
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-neutral-400" />
                  <a
                    href="mailto:admin@saintxaviersmanasar.edu.in"
                    className="hover:text-neutral-100 transition"
                  >
                    admin@saintxaviersmanasar.edu.in
                  </a>
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <h4 className="text-base font-medium text-neutral-100 mb-5">
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
                      w-11 h-11
                      rounded-full
                      bg-white/5
                      backdrop-blur
                      border border-white/10
                      flex items-center justify-center
                      transition-all duration-300
                      hover:scale-105
                      hover:bg-white/10
                      hover:shadow-[0_0_18px_rgba(255,255,255,0.18)]
                    "
                  >
                    <item.icon className="w-5 h-5 text-neutral-300 group-hover:text-neutral-100 transition" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="mt-16 pt-8 border-t border-white/10 text-sm text-neutral-500 text-center">
            © 2025 Saint Xavier&apos;s Senior Secondary School. All rights reserved.
            <div className="mt-2 text-neutral-600">
              Designed with care for parents & students
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
