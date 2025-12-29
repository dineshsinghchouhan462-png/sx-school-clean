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
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* SCHOOL INFO */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Saint Xavier&apos;s Senior Secondary School
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              A disciplined, value-driven educational institution offering
              Hindi & English medium education from Nursery to Class 12.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Contact Information
            </h4>

            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-neutral-500" />
                <span>
                  Manasar, Nagaur District <br />
                  Rajasthan, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neutral-500" />
                <span>+91 9214018172</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neutral-500" />
                <span>admin@saintxaviersmanasar.edu.in</span>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Connect With Us
            </h4>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/saint.xaviers.school.nagaur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-900 hover:bg-neutral-800 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/share/1K1BYWcDnS/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-900 hover:bg-neutral-800 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://youtube.com/@saintxaviersschool"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-900 hover:bg-neutral-800 transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-neutral-800 my-10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} Saint Xavier&apos;s Senior Secondary School.
            All rights reserved.
          </p>

          <p>
            Designed with care for parents & students
          </p>
        </div>
      </div>
    </footer>
  )
}
