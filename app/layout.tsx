import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MindBlogger - Web Development Insights & Tutorials",
  description:
    "Discover the latest insights, tutorials, and best practices in web development, design, and technology. Join our community of developers and creators.",
  keywords: ["web development", "programming", "tutorials", "Next.js", "React", "TypeScript", "CSS"],
  authors: [{ name: "MindBlogger Team" }],
  openGraph: {
    title: "MindBlogger - Web Development Insights & Tutorials",
    description:
      "Discover the latest insights, tutorials, and best practices in web development, design, and technology.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MindBlogger - Web Development Insights & Tutorials",
    description:
      "Discover the latest insights, tutorials, and best practices in web development, design, and technology.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
