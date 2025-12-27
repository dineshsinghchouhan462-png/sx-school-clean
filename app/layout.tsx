import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Saint Xavier's Senior Secondary School | Manasar, Nagaur, Rajasthan",
  description:
    "A distinguished CBSE & CISCE affiliated senior secondary school in Manasar, Nagaur District, offering Hindi & English medium education with boarding facilities. Committed to academic excellence and holistic development.",
  keywords:
    "Saint Xaviers School, Manasar School, Nagaur School, Rajasthan Boarding School, CBSE School, CISCE School, English Medium School, Hindi Medium School",
  openGraph: {
    title: "Saint Xavier's Senior Secondary School",
    description: "Distinguished education in Manasar, Nagaur, Rajasthan",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
