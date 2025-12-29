"use client"

import {
  Instagram,
  Youtube,
  Facebook,
  Hash,
} from "lucide-react"

export default function SocialMedia() {
  return (
    <section className="py-20 bg-muted/40 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          Connect With Saint Xavier’s
        </h2>

        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Follow our official social platforms for campus life, achievements,
          student activities and important updates.
        </p>

        {/* Social Cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/saint.xaviers.school.nagaur"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-background dark:bg-neutral-800 p-6 shadow-sm
                       hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <Instagram className="mx-auto h-10 w-10 text-pink-500 group-hover:scale-110 transition-transform" />
            <p className="mt-4 font-medium text-foreground">Instagram</p>
            <p className="text-sm text-muted-foreground">
              Campus moments & updates
            </p>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1K1BYWcDnS/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-background dark:bg-neutral-800 p-6 shadow-sm
                       hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <Facebook className="mx-auto h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform" />
            <p className="mt-4 font-medium text-foreground">Facebook</p>
            <p className="text-sm text-muted-foreground">
              Announcements & events
            </p>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@saintxaviersschool"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-background dark:bg-neutral-800 p-6 shadow-sm
                       hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <Youtube className="mx-auto h-10 w-10 text-red-600 group-hover:scale-110 transition-transform" />
            <p className="mt-4 font-medium text-foreground">YouTube</p>
            <p className="text-sm text-muted-foreground">
              Videos & celebrations
            </p>
          </a>

          {/* Threads */}
          <a
            href="https://www.threads.com/@saint.xaviers.school.nagaur"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-background dark:bg-neutral-800 p-6 shadow-sm
                       hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <Hash className="mx-auto h-10 w-10 text-foreground group-hover:scale-110 transition-transform" />
            <p className="mt-4 font-medium text-foreground">Threads</p>
            <p className="text-sm text-muted-foreground">
              Quick updates & posts
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
