"use client"

import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"

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
          <div className="space-y-10">
            {/* Card */}
            <div className="group rounded-2xl bg-background dark:bg-neutral-800 p-6 shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <h3 className="font-medium text-lg">Address</h3>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    Saint Xavier&apos;s Senior Secondary School  
                    <br />
                    Manasar, Nagaur District  
                    <br />
                    Rajasthan, India
                  </p>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl bg-background dark:bg-neutral-800 p-6 shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md">
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <h3 className="font-medium text-lg">Contact</h3>
                  <p className="text-muted-foreground mt-1">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl bg-background dark:bg-neutral-800 p-6 shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md">
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <p className="text-muted-foreground mt-1">
                    admin@saintxaviersmanasar.edu.in
                  </p>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl bg-background dark:bg-neutral-800 p-6 shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md">
              <div className="flex items-start gap-4">
                <Clock className="text-primary mt-1 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <h3 className="font-medium text-lg">Operating Days</h3>
                  <p className="text-muted-foreground mt-1">
                    Monday – Saturday  
                    <br />
                    8:00 AM – 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps link */}
            <a
              href="https://www.google.com/maps?q=Saint+Xavier's+Senior+Secondary+School+Manasar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary group"
            >
              View on Google Maps
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* MAP */}
          <div className="relative overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-xl">
            <iframe
              title="Saint Xavier's School Location"
              src="https://www.google.com/maps?q=Saint+Xavier's+Senior+Secondary+School+Manasar&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
