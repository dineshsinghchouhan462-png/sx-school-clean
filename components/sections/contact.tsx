"use client"

import { MapPin, Phone, Clock, ExternalLink } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16">
          <div className="h-px w-20 bg-primary/40 mb-6" />
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Contact & Location
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Reach out to Saint Xavier's Senior Secondary School for admissions,
            inquiries, or campus visits.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Address */}
          <div className="rounded-3xl bg-background p-8 shadow-sm hover:shadow-md transition">
            <MapPin className="h-6 w-6 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Address</h3>
            <p className="text-muted-foreground leading-relaxed">
              Saint Xavier's Senior Secondary School<br />
              Manasar, Nagaur District<br />
              Rajasthan, India
            </p>
          </div>

          {/* Contact */}
          <div className="rounded-3xl bg-background p-8 shadow-sm hover:shadow-md transition">
            <Phone className="h-6 w-6 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Contact</h3>
            <p className="text-muted-foreground">
              +91 XXXXX XXXXX
            </p>
            <p className="text-muted-foreground mt-1">
              admin@saintxaviersmanasar.edu.in
            </p>
          </div>

          {/* Timings */}
          <div className="rounded-3xl bg-background p-8 shadow-sm hover:shadow-md transition">
            <Clock className="h-6 w-6 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Operating Days</h3>
            <p className="text-muted-foreground">
              Monday – Saturday<br />
              8:00 AM – 4:00 PM
            </p>
          </div>

        </div>

        {/* Google Maps CTA */}
        <div className="mt-16">
          <a
            href="https://maps.google.com"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View on Google Maps
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
