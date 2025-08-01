# MindBlogger - Responsive Blog Platform

A modern, responsive blog platform built with Next.js 15, TypeScript, and Tailwind CSS. Features dynamic routing, search functionality, and a clean, professional design.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dynamic Routing**: Individual blog post pages with SEO-friendly URLs
- **Search & Filter**: Real-time search and category filtering
- **Modern UI**: Clean, professional design with Tailwind CSS and shadcn/ui
- **Performance Optimized**: Built with Next.js App Router for optimal performance
- **TypeScript**: Full type safety throughout the application
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Data**: JSON-based blog content (easily replaceable with CMS)

## 📁 Project Structure

\`\`\`
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Individual blog post pages
│   │   └── page.tsx              # Blog listing page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── not-found.tsx             # 404 page
│   └── page.tsx                  # Home page
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── blog-card.tsx             # Blog post card component
│   ├── featured-posts.tsx        # Featured posts section
│   ├── footer.tsx                # Site footer
│   ├── hero-section.tsx          # Hero section
│   ├── navigation.tsx            # Site navigation
│   └── search-filter.tsx         # Search and filter component
├── data/
│   └── blog-posts.json           # Blog post data
└── lib/
    └── utils.ts                  # Utility functions
\`\`\`

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd blog-platform
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`


### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📝 Content Management

### Adding New Blog Posts

Blog posts are stored in \`data/blog-posts.json\`. To add a new post:

1. Add a new object to the JSON array with the following structure:

\`\`\`json
{
  "id": 7,
  "slug": "your-post-slug",
  "title": "Your Post Title",
  "description": "Brief description of your post",
  "content": "Full content in markdown format",
  "image": "/placeholder.svg?height=400&width=600",
  "category": "Category Name",
  "tags": ["tag1", "tag2", "tag3"],
  "author": "Author Name",
  "publishedAt": "2024-01-01",
  "readTime": "5 min read"
}
\`\`\`

2. The post will automatically be available at \`/blog/your-post-slug\`

### Customizing Categories and Tags

- Categories and tags are automatically extracted from the blog posts
- The search and filter functionality will automatically include new categories
- No additional configuration needed

## 🎨 Customization

### Styling

- **Colors**: Modify the color scheme in \`tailwind.config.ts\`
- **Typography**: Adjust font settings in \`app/layout.tsx\`
- **Components**: Customize UI components in the \`components/\` directory

### Layout

- **Navigation**: Edit \`components/navigation.tsx\`
- **Footer**: Modify \`components/footer.tsx\`
- **Hero Section**: Customize \`components/hero-section.tsx\`

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px


