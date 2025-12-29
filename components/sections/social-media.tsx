"use client"

import { Instagram, Facebook, Youtube, Hash } from "lucide-react"

const socials = [
  {
    name: "Instagram",
    desc: "Campus moments & updates",
    href: "https://www.instagram.com/saint.xaviers.school.nagaur",
    icon: Instagram,
    accent: "group-hover:text-pink-500",
  },
  {
    name: "Facebook",
    desc: "Announcements & events",
    href: "https://www.facebook.com/share/1K1BYWcDnS/",
    icon: Facebook,
    accent: "group-hover:text-blue-600",
  },
  {
    name: "YouTube",
    desc: "Videos & celebrations",
    href: "https://youtube.com/@saintxaviersschool",
    icon: Youtube,
    accent: "group-hover:text-red-600",
  },
  {
    name: "Threads",
    desc: "Quick updates & posts",
    href: "https://www.threads.com/@saint.xaviers.school.nagaur",
    icon: Hash, // clean, minimal – no image needed
    accent: "group-hover:text-neutral-900 dark:group-hover:text-white",
  },
]

export default function SocialMedia() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            Stay Connected
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
            Follow Saint Xavier’s Online
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-border bg-card p-8
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-lg"
            >
              <item.icon
                className={`w-10 h-10 mb-6 text-muted-foreground transition-colors duration-300 ${item.accent}`}
              />

              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
