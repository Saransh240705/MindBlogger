"use client"

import { useState, useMemo } from "react"
import { BlogCard } from "@/components/blog-card"
import { SearchFilter } from "@/components/search-filter"
import blogPosts from "@/data/blog-posts.json"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(blogPosts.map((post) => post.category))]
    return uniqueCategories.sort()
  }, [])

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === null || post.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of articles covering web development, design, and technology insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <SearchFilter
                onSearch={setSearchQuery}
                onCategoryFilter={setSelectedCategory}
                categories={categories}
                selectedCategory={selectedCategory}
                searchQuery={searchQuery}
              />
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
                </p>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
                  <p className="text-muted-foreground mt-2">Try adjusting your search or filter options.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
