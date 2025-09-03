import { posts } from "@/data/landingData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, ArrowRight, Clock, TrendingUp, BookOpen, Lightbulb } from "lucide-react";

const Blog = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Trust Indicator */}
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800 border-blue-200 px-4 py-2">
            <BookOpen className="w-4 h-4 mr-2" />
            Updated Weekly with Fresh Insights
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-200 via-blue-800 to-purple-800 bg-clip-text text-transparent sm:text-6xl">
            Latest AI & Automation
            <span className="block text-blue-600">Success Stories</span>
          </h2>

          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover proven strategies, case studies, and actionable insights from industry experts.
            Learn how businesses are <strong className="text-blue-600">increasing revenue by 300%</strong> with
            AI automation and smart marketing tactics.
          </p>

          {/* Stats Row */}
          <div className="mt-10 flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span><strong className="text-foreground">50k+</strong> Monthly Readers</span>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-4 h-4 text-yellow-600" />
              <span><strong className="text-foreground">200+</strong> Success Stories</span>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span><strong className="text-foreground">5-min</strong> Read Time</span>
            </div>
          </div>
        </div>

        {/* Enhanced Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              className={`group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 overflow-hidden bg-white/80 backdrop-blur-sm ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
            >
              {/* Featured Image (if available) */}
              {post.imageUrl && (
                <div className="relative overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={`${post.title} - AI automation guide and business growth strategies`}
                    width={index === 0 ? 800 : 400}
                    height={index === 0 ? 400 : 250}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ height: index === 0 ? '300px' : '200px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}

              <CardHeader className="space-y-4">
                {/* Meta Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3 text-sm text-muted-foreground">
                    <CalendarDays className="w-4 h-4" />
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime || "5 min read"}
                    </span>
                  </div>

                  <Link href={post.category.href}>
                    <Badge
                      variant="outline"
                      className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      {post.category.title}
                    </Badge>
                  </Link>
                </div>

                {/* Title */}
                <h3 className={`font-bold text-foreground group-hover:text-blue-600 transition-colors leading-tight ${index === 0 ? 'text-2xl sm:text-3xl' : 'text-xl'
                  }`}>
                  <Link href={post.href} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
              </CardHeader>

              <CardContent>
                {/* Description */}
                <p className={`text-muted-foreground leading-relaxed ${index === 0 ? 'text-lg line-clamp-4' : 'text-sm line-clamp-3'
                  }`}>
                  {post.description}
                </p>

                {/* Tags (if available) */}
                {post.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex items-center justify-between pt-6">
                {/* Author Info */}
                <div className="flex items-center gap-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={post.author.imageUrl}
                      alt={`${post.author.name} - AI automation expert`}
                    />
                    <AvatarFallback className="bg-blue-100 text-blue-800">
                      {post.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Link
                      href={post.author.href}
                      className="text-sm font-semibold text-foreground hover:text-blue-600 transition-colors"
                    >
                      {post.author.name}
                    </Link>
                    <p className="text-xs text-muted-foreground">{post.author.role}</p>
                  </div>
                </div>

                {/* Read More Button */}
                <Link href={post.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* View All Blog Posts CTA */}
        <div className="mt-16 text-center">
          <Card className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Explore our complete library of AI automation guides, case studies, and proven strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <BookOpen className="w-5 h-5 mr-2" />
                    View All Articles
                  </Button>
                </Link>
                <Link href="/newsletter">
                  <Button variant="outline" size="lg" className="hover:bg-blue-50 hover:border-blue-300">
                    Subscribe to Newsletter
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schema.org structured data for blog section */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "AI Automation & Business Growth Blog",
            "description": "Expert insights on AI automation, intelligent marketing, and proven business growth strategies",
            "url": "https://yoursite.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Your Company Name"
            },
            "blogPost": posts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.description,
              "datePublished": post.datetime,
              "author": {
                "@type": "Person",
                "name": post.author.name
              },
              "url": post.href
            }))
          })
        }} />
      </div>
    </section>
  );
};

export default Blog;