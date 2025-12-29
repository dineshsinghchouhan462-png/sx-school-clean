"use client"

import { Instagram, Facebook, Youtube, Hash } from "lucide-react"

const socials = [
  {
    name: "Instagram",
    desc: "Campus moments & updates",
    href: "https://www.instagram.com/saint.xaviers.school.nagaur",
    icon: Instagram,
  },
  {
    name: "Facebook",
    desc: "Announcements & events",
    href: "https://www.facebook.com/share/1K1BYWcDnS/",
    icon: Facebook,
  },
  {
    name: "YouTube",
    desc: "Videos & celebrations",
    href: "https://youtube.com/@saintxaviersschool",
    icon: Youtube,
  },
  {
    name: "Threads",
    desc: "Quick updates & posts",
    href: "https://www.threads.com/@saint.xaviers.school.nagaur",
    icon: Hash, // clean minimal Threads-style icon (no image)
  },
]

export default function SocialMedia() {
  return (
    <section className="py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-foreground mb-14">
          Connect With Us
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-background p-8
                         shadow-sm transition-all duration-300
                         hover:-translate-y-1 hover:shadow-lg"
            >
              <item.icon
                className="w-8 h-8 mb-4 text-foreground
                           transition-transform duration-300
                           group-hover:scale-110"
              />

              <h3 className="text-xl font-medium mb-1">
                {item.name}
              </h3>

              <p className="text-muted-foreground text-sm">
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
