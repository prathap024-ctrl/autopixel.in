import { posts } from "@/data/landingData";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <section className="bg-gray-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            AI Insights from Our Blog
          </h2>
          <p className="mt-3 text-lg text-white">
            Unlock expert tips on AI automation, intelligent marketing, and
            business growth strategies.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="mt-12 grid gap-12 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col justify-between max-w-xl group"
            >
              {/* Meta Info */}
              <div className="flex items-center gap-x-3 text-xs text-white">
                <time dateTime={post.datetime}>{post.date}</time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-900 hover:bg-gray-100 transition"
                >
                  {post.category.title}
                </a>
              </div>

              {/* Title & Description */}
              <div className="mt-4 grow">
                <h3 className="text-lg font-semibold text-white group-hover:text-gray-600 transition">
                  <a href={post.href}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm text-white line-clamp-3">
                  {post.description}
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 flex items-center gap-x-4">
                <Image
                  width={40}
                  height={40}
                  alt={post.author.name}
                  src={post.author.imageUrl}
                  className="w-10 h-10 rounded-full bg-gray-50 object-cover"
                />
                <div className="text-sm">
                  <p className="font-semibold text-white hover:underline">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <p className="text-white">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
