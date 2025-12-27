"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Saint Xavier's Senior Secondary School\nManasar, Nagaur District\nRajasthan, India",
    },
    {
      icon: Phone,
      title: "Contact",
      content: "+91 XXXXX XXXXX\nadmin@saintxaviersmanasar.edu.in",
    },
    {
      icon: Clock,
      title: "Operating Days",
      content: "Monday – Saturday\n8:00 AM – 4:00 PM",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
            Contact & Location
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={info.title}
                  className={`transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-6 h-6 text-foreground mt-1" strokeWidth={1.5} />
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-2 tracking-tight">{info.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}

            <div
              className={`transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors group"
              >
                <span className="border-b border-foreground group-hover:border-muted-foreground transition-colors">
                  View on Google Maps
                </span>
                <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="aspect-[4/3] bg-muted/30 rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973022967!2d73.83384!3d26.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDMzJzAwLjAiTiA3M8KwNTAnMDEuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
