"use client"

import {
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react"

export default function SocialMedia() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-14">
          Stay Connected
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/saint.xaviers.school.nagaur"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <Instagram className="w-10 h-10 text-pink-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-lg font-medium">Instagram</h3>
            <p className="text-muted-foreground mt-1">
              Campus moments & updates
            </p>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1K1BYWcDnS/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <Facebook className="w-10 h-10 text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-lg font-medium">Facebook</h3>
            <p className="text-muted-foreground mt-1">
              Announcements & events
            </p>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@saintxaviersschool"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <Youtube className="w-10 h-10 text-red-600 mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-lg font-medium">YouTube</h3>
            <p className="text-muted-foreground mt-1">
              Videos & celebrations
            </p>
          </a>

          {/* Threads – REAL ICON (SVG, no image upload) */}
          <a
            href="https://www.threads.com/@saint.xaviers.school.nagaur"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <svg
              className="w-10 h-10 mb-4 transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.48 0 4.73.99 6.36 2.6" />
              <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5c1.38 0 2.63.56 3.54 1.46" />
            </svg>
            <h3 className="text-lg font-medium">Threads</h3>
            <p className="text-muted-foreground mt-1">
              Quick updates & posts
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
