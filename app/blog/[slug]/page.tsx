import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"
import blogPosts from "@/data/blog-posts.json"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Convert markdown-like content to HTML (simplified)
  const formatContent = (content: string) => {
    return content
      .split("\n")
      .map((line, index) => {
        if (line.startsWith("# ")) {
          return `<h1 key=${index} class="text-3xl font-bold mt-8 mb-4">${line.slice(2)}</h1>`
        }
        if (line.startsWith("## ")) {
          return `<h2 key=${index} class="text-2xl font-semibold mt-6 mb-3">${line.slice(3)}</h2>`
        }
        if (line.startsWith("### ")) {
          return `<h3 key=${index} class="text-xl font-semibold mt-4 mb-2">${line.slice(4)}</h3>`
        }
        if (line.startsWith("- ")) {
          return `<li key=${index} class="ml-4">${line.slice(2)}</li>`
        }
        if (line.startsWith("```")) {
          return line.includes("```")
            ? `<pre key=${index} class="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto"><code>`
            : `</code></pre>`
        }
        if (line.trim() === "") {
          return `<br key=${index} />`
        }
        return `<p key=${index} class="mb-4 leading-relaxed">${line}</p>`
      })
      .join("")
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{post.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <Separator className="mb-8" />

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />

        <Separator className="my-12" />

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Enjoyed this article?</h3>
            <p className="text-muted-foreground">Explore more articles on web development, design, and technology.</p>
            <Button asChild>
              <Link href="/blog">Read More Articles</Link>
            </Button>
          </div>
        </div>
      </article>
    </main>
  )
}
