import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { techDerksPosts, Post, PostSection } from '@/lib/posts-data';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return techDerksPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = techDerksPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} — TechDerks Insights`,
    description: post.excerpt,
    alternates: { canonical: `/techderks/${post.slug}` },
  };
}

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

function renderSection(section: PostSection, idx: number) {
  switch (section.type) {
    case 'heading2':
      return (
        <h2 key={idx} className="text-2xl sm:text-3xl font-bold text-foreground leading-tight mt-8 mb-4">
          {section.text}
        </h2>
      );
    case 'heading3':
      return (
        <h3 key={idx} className="text-lg sm:text-xl font-bold text-foreground leading-snug mt-6 mb-3">
          {section.text}
        </h3>
      );
    case 'paragraph':
      return (
        <p key={idx} className="text-foreground/80 leading-relaxed mb-4">
          {section.text}
        </p>
      );
    case 'bold-paragraph':
      return (
        <p key={idx} className="font-semibold text-foreground leading-relaxed mb-4 italic">
          {section.text}
        </p>
      );
    case 'image':
      return (
        <div key={idx} className="my-6 rounded-2xl overflow-hidden border border-border">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <AppImage
              src={section.src!}
              alt={section.alt || 'Post image'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
      );
    case 'list':
      return (
        <ul key={idx} className="space-y-2 mb-4 pl-0">
          {section.items?.map((item, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center text-accent font-bold text-xs mt-0.5">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'code':
      return (
        <div key={idx} className="my-4 rounded-2xl overflow-hidden border border-border bg-primary">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="font-mono-tag text-white/30 ml-2">terminal</span>
          </div>
          <pre className="p-4 overflow-x-auto">
            <code className="font-mono text-sm text-emerald-400 leading-relaxed">
              {section.codeLines?.join('\n')}
            </code>
          </pre>
        </div>
      );
    case 'separator':
      return <hr key={idx} className="my-8 border-border" />;
    default:
      return null;
  }
}

export default function TechDerksPostPage({ params }: Props) {
  const post = techDerksPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = techDerksPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);
  const otherPosts = techDerksPosts.filter((p) => p.id !== post.id).slice(0, 3);
  const suggestions = relatedPosts.length > 0 ? relatedPosts : otherPosts;

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative bg-primary pt-28 pb-12 overflow-hidden">
          <div className="absolute inset-0 wireframe-bg opacity-10" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 blob-accent opacity-20 pointer-events-none" aria-hidden="true" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 flex-wrap">
              <Link href="/" className="font-mono-tag text-white/40 hover:text-white/70 transition-colors">Home</Link>
              <Icon name="ChevronRightIcon" size={12} className="text-white/30" />
              <Link href="/techderks" className="font-mono-tag text-white/40 hover:text-white/70 transition-colors">TechDerks</Link>
              <Icon name="ChevronRightIcon" size={12} className="text-white/30" />
              <span className="font-mono-tag text-accent truncate max-w-xs">{post.category}</span>
            </div>

            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className={`tag-pill border ${categoryColors[post.category] || 'bg-white/10 text-white border-white/20'}`}>
                {post.category}
              </span>
              <span className="tag-pill bg-white/10 text-white/60 border border-white/15">{post.date}</span>
              <span className="tag-pill bg-accent/20 text-accent border border-accent/30">techderksinsights.blogspot.com</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                DS
              </div>
              <div>
                <a
                  href={post.authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold text-sm hover:text-accent transition-colors"
                >
                  {post.author}
                </a>
                <p className="text-white/40 text-xs">TechDerks Insights</p>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Main content */}
            <article className="lg:col-span-8">
              <div className="bg-card rounded-4xl border border-border p-6 sm:p-10">
                {post.content.map((section, idx) => renderSection(section, idx))}
              </div>

              {/* Labels */}
              {post.labels && post.labels.length > 0 && (
                <div className="mt-6 flex items-center gap-2 flex-wrap">
                  <span className="font-mono-tag text-muted">Labels:</span>
                  {post.labels.map((label) => (
                    <span key={label} className="tag-pill bg-background text-muted border border-border">
                      {label}
                    </span>
                  ))}
                </div>
              )}

              {/* Original post link */}
              <div className="mt-6">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:underline"
                >
                  View original post on techderksinsights.blogspot.com
                  <Icon name="ArrowTopRightOnSquareIcon" size={14} />
                </a>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Author card */}
              <div className="bg-card rounded-4xl border border-border p-6">
                <h3 className="font-bold text-foreground text-base mb-4 flex items-center gap-2">
                  <Icon name="UserCircleIcon" size={16} className="text-accent" />
                  Author
                </h3>
                <a
                  href={post.authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent font-bold text-sm flex-shrink-0">
                    DS
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors">
                      {post.author}
                    </div>
                    <div className="text-xs text-muted">TechDerks Insights</div>
                    <div className="text-xs text-muted mt-1">Linux, Docker, Networking &amp; IT Support</div>
                  </div>
                </a>
              </div>

              {/* Related posts */}
              {suggestions.length > 0 && (
                <div className="bg-card rounded-4xl border border-border p-6">
                  <h3 className="font-bold text-foreground text-base mb-4">More Posts</h3>
                  <div className="space-y-3">
                    {suggestions.map((p) => (
                      <Link
                        key={p.id}
                        href={`/techderks/${p.slug}`}
                        className="block group p-3 rounded-2xl hover:bg-background transition-all border border-transparent hover:border-border"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`tag-pill border ${categoryColors[p.category] || 'bg-background text-muted border-border'}`}>
                            {p.category}
                          </span>
                          <span className="font-mono-tag text-muted">{p.date}</span>
                        </div>
                        <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                          {p.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to blog */}
              <Link
                href="/techderks"
                className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent transition-colors"
              >
                <Icon name="ArrowLeftIcon" size={14} />
                Back to TechDerks
              </Link>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
