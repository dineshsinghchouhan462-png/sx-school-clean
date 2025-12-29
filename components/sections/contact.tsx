"use client"

import { MapPin, Phone, Clock, ExternalLink } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-accent/30 dark:bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Contact & Location
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Reach us for admissions, inquiries, or a campus visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* CONTACT DETAILS */}
          <div className="space-y-10">
            
            {/* Address */}
            <div className="group transition-transform duration-300 hover:-translate-y-1">
              <div className="flex gap-4">
                <MapPin className="mt-1 text-foreground animate-pulse" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Saint Xavier's Senior Secondary School<br />
                    Manasar, Nagaur District<br />
                    Rajasthan, India
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group transition-transform duration-300 hover:-translate-y-1">
              <div className="flex gap-4">
                <Phone className="mt-1 text-foreground" />
                <div>
                  <h4 className="font-medium">Contact</h4>
                  <p className="text-sm text-muted-foreground">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>
            </div>

            {/* Timing */}
            <div className="group transition-transform duration-300 hover:-translate-y-1">
              <div className="flex gap-4">
                <Clock className="mt-1 text-foreground" />
                <div>
                  <h4 className="font-medium">School Hours</h4>
                  <p className="text-sm text-muted-foreground">
                    Monday – Saturday<br />
                    8:00 AM – 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map Link */}
            <a
              href="https://maps.google.com"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium group mt-6"
            >
              <span className="relative">
                View on Google Maps
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* MAP */}
          <div className="relative overflow-hidden rounded-2xl border border-border transition-transform duration-700 hover:scale-[1.01]">
            <iframe
              src="https://www.google.com/maps?q=Manasar%20Nagaur%20Rajasthan&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Location Pulse Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600" />
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
