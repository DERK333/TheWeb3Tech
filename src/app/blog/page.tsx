import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { allPosts } from '@/lib/posts-data';

export const metadata: Metadata = {
  title: 'TheWeb3Tech Blog — Bold Insights on Crypto, Tech & Web3',
  description:
    'All posts from blog.theweb3tech.com — practical guides on crypto, Linux, cybersecurity, Web3, and IT support by Derek R Samuel.',
  alternates: { canonical: '/blog' },
};

const categoryColors: Record<string, string> = {
  Crypto: 'bg-amber-100 text-amber-700 border-amber-200',
  Linux: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Security: 'bg-red-100 text-red-700 border-red-200',
  Cybersecurity: 'bg-red-100 text-red-700 border-red-200',
  Web3: 'bg-violet-100 text-violet-700 border-violet-200',
  Docker: 'bg-sky-100 text-sky-700 border-sky-200',
  IT: 'bg-slate-100 text-slate-600 border-slate-200',
  Tech: 'bg-blue-100 text-blue-700 border-blue-200',
  Tools: 'bg-orange-100 text-orange-700 border-orange-200',
};

export default function BlogPage() {
  const featured = allPosts[0];
  const rest = allPosts.slice(1);

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero Banner */}
        <section className="relative bg-primary pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 wireframe-bg opacity-10" aria-hidden="true" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 blob-accent opacity-30 pointer-events-none" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" className="font-mono-tag text-white/40 hover:text-white/70 transition-colors">Home</Link>
              <Icon name="ChevronRightIcon" size={12} className="text-white/30" />
              <span className="font-mono-tag text-accent">Blog</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="font-mono-tag text-accent">blog.theweb3tech.com</span>
            </div>
            <h1 className="text-section-title text-white mb-4">
              Bold Insights on Crypto, Tech &amp; Digital Innovation
            </h1>
            <p className="text-white/60 text-base max-w-2xl leading-relaxed">
              Bold insights on crypto, Web3 tools, and emerging tech trends. Practical guides,
              marketing strategies, and digital innovation tips designed for startups, creators,
              and curious minds.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="tag-pill bg-white/10 text-white/60 border border-white/15">
                {allPosts.length} Posts
              </span>
              <span className="tag-pill bg-accent/20 text-accent border border-accent/30">
                By Derek R Samuel
              </span>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Post */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="font-mono-tag text-accent">Featured Post</span>
            </div>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-0 bg-card rounded-4xl border border-border overflow-hidden card-hover"
            >
              {featured.image && (
                <div className="relative aspect-[16/10] overflow-hidden post-card-img-wrap">
                  <AppImage
                    src={featured.image}
                    alt={featured.imageAlt || featured.title}
                    fill
                    className="post-card-img object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
                </div>
              )}
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className={`tag-pill border ${categoryColors[featured.category] || 'bg-background text-muted border-border'}`}>
                    {featured.category}
                  </span>
                  <span className="font-mono-tag text-muted">{featured.date}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug mb-4 group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-accent text-sm font-bold">
                  Read Full Post
                  <Icon name="ArrowRightIcon" size={14} />
                </div>
              </div>
            </Link>
          </div>

          {/* All Posts Grid */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="font-mono-tag text-accent">All Posts</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-card rounded-4xl border border-border card-hover overflow-hidden flex flex-col"
              >
                {post.image && (
                  <div className="relative aspect-[16/10] overflow-hidden post-card-img-wrap">
                    <AppImage
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      className="post-card-img object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className={`tag-pill border ${categoryColors[post.category] || 'bg-background text-muted border-border'}`}>
                      {post.category}
                    </span>
                    <span className="font-mono-tag text-muted">{post.date}</span>
                  </div>
                  <h3 className="font-bold text-foreground text-sm sm:text-base leading-snug mb-2 group-hover:text-accent transition-colors flex-1">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-muted text-xs leading-relaxed mt-2 line-clamp-2">{post.excerpt}</p>
                  )}
                  <div className="mt-4 flex items-center gap-1.5 text-accent text-xs font-bold">
                    Read Post
                    <Icon name="ArrowRightIcon" size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Back to original blog */}
          <div className="mt-12 text-center">
            <a
              href="https://blog.theweb3tech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-muted hover:text-foreground hover:border-accent px-6 py-3 rounded-2xl text-sm font-semibold transition-all"
            >
              View Original Blog
              <Icon name="ArrowTopRightOnSquareIcon" size={14} />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
