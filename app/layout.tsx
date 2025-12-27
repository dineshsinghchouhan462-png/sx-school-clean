import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Saint Xavier's Senior Secondary School | Manasar, Nagaur",
  description:
    "Saint Xavier's Senior Secondary School, Manasar, Nagaur District, Rajasthan. Hindi & English Medium school committed to academic excellence and discipline.",
  icons: {
    icon: "/images/logo/logo.png", // favicon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-20 antialiased`}>
        {children}
      </body>
    </html>
  )
}
