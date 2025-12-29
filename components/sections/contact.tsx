"use client"

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Navigation,
  Image as ImageIcon,
} from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-muted/40 dark:bg-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-semibold tracking-tight mb-16 text-foreground">
          Contact & Location
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* CONTACT DETAILS */}
          <div className="space-y-8">
            {[
              {
                icon: MapPin,
                title: "Address",
                content: (
                  <>
                    Saint Xavier&apos;s Senior Secondary School
                    <br />
                    Manasar, Nagaur District
                    <br />
                    Rajasthan, India
                  </>
                ),
              },
              {
                icon: Phone,
                title: "Contact",
                content: "+91 XXXXX XXXXX",
              },
              {
                icon: Mail,
                title: "Email",
                content: "admin@saintxaviersmanasar.edu.in",
              },
              {
                icon: Clock,
                title: "Operating Days",
                content: (
                  <>
                    Monday – Saturday
                    <br />
                    8:00 AM – 4:00 PM
                  </>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-background dark:bg-neutral-800 p-6
                           shadow-sm transition-all duration-300
                           hover:-translate-y-[2px] hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <item.icon className="text-primary mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-muted-foreground mt-1 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <a
              href="https://www.google.com/maps/place/Saint+Xavier's+Senior+Secondary+School+Manasar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary group"
            >
              Open in Google Maps
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* MAP */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            {/* DARK POLISH OVERLAY */}
            <div className="pointer-events-none absolute inset-0 z-10
                            bg-gradient-to-t from-black/30 via-transparent to-transparent
                            dark:from-black/50" />

            {/* FLOATING DIRECTIONS CTA */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Saint+Xavier's+Senior+Secondary+School+Manasar"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-5 right-5 z-20 inline-flex items-center gap-2
                         rounded-full bg-background/80 dark:bg-neutral-800/80
                         backdrop-blur-md px-5 py-2.5 text-sm font-medium
                         shadow-lg transition-all duration-300
                         hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Navigation className="w-4 h-4 text-primary" />
              Get Directions
            </a>

            {/* CAMPUS PHOTO OVERLAY */}
            <div className="absolute bottom-5 left-5 z-20 flex items-center gap-3
                            rounded-xl bg-background/85 dark:bg-neutral-800/85
                            backdrop-blur-md p-3 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <ImageIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-sm leading-tight">
                <p className="font-medium">Campus View</p>
                <p className="text-muted-foreground text-xs">
                  Saint Xavier&apos;s School
                </p>
              </div>
            </div>

            {/* MAP IFRAME */}
            <iframe
              title="Saint Xavier's School Location"
              src="https://www.google.com/maps?q=Saint+Xavier's+Senior+Secondary+School+Manasar&output=embed"
              className="relative z-0 w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
