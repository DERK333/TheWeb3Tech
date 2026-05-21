'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const img = heroRef.current.querySelector('.hero-parallax-img') as HTMLElement;
      if (img) {
        img.style.transform = `scale(1.08) translate(${x * 12}px, ${y * 8}px)`;
      }
    };

    const el = heroRef.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (el) el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-primary"
      style={{ minHeight: '100vh' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <AppImage
          src="https://cdn.dribbble.com/userupload/45885505/file/c5a56fe0fa08264d815eeee91bb56aec.png?resize=2048x1536&vertical=center"
          alt="Dark atmospheric cybersecurity environment with circuit patterns, deep shadows, dim blue glow, low-key technical workspace"
          fill
          priority
          className="hero-parallax-img object-cover transition-transform duration-700 ease-out"
          style={{ transform: 'scale(1.08)' }}
          sizes="100vw"
        />
      </div>

      {/* Scrim overlay */}
      <div className="absolute inset-0 hero-scrim" />

      {/* Subtle wireframe grid overlay */}
      <div
        className="absolute inset-0 wireframe-bg opacity-20"
        style={{ maskImage: 'radial-gradient(ellipse at 60% 40%, black 0%, transparent 70%)' }}
      />

      {/* Accent glow blob */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 blob-accent opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen pt-28 pb-12 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        {/* Top badge */}
        <div className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="tag-pill bg-accent/20 text-accent border border-accent/30">
            Web3 · Crypto · Linux · Security
          </span>
          <span className="tag-pill bg-white/10 text-white/60 border border-white/15 hidden sm:inline-flex">
            Est. 2024
          </span>
        </div>

        {/* Main headline + CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mt-auto">
          <div className="max-w-2xl">
            <h1
              className="text-hero-xl text-white mb-6"
              style={{ animationDelay: '0.2s' }}
            >
              Bold Insights on{' '}
              <span className="text-accent">Crypto,</span>{' '}
              Tech &amp;{' '}
              <span className="text-accent">Digital Innovation</span>
            </h1>

            <p
              className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl animate-fade-up"
              style={{ animationDelay: '0.35s' }}
            >
              Practical guides, marketing strategies, and digital innovation tips for startups,
              creators, and curious minds. From blockchain safety to Linux hacks — complex ideas
              broken down into clear, actionable knowledge.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: '0.45s' }}
            >
              <Link
                href="/blog/the-hidden-toolkit-5-cybersecurity"
                className="flex items-center gap-3 bg-white text-primary px-6 py-3.5 rounded-2xl text-sm font-bold hover:bg-accent hover:text-white transition-all group"
              >
                Read Featured Post
                <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-white group-hover:text-accent transition-all">
                  <Icon name="ArrowUpRightIcon" size={14} />
                </div>
              </Link>
              <Link
                href="/techderks"
                className="flex items-center gap-2 border border-white/30 text-white px-6 py-3.5 rounded-2xl text-sm font-semibold hover:bg-white/10 transition-all"
              >
                TechDerks Insights
                <Icon name="ArrowTopRightOnSquareIcon" size={14} />
              </Link>
            </div>
          </div>

          {/* Floating overlay card */}
          <div
            className="glass-card rounded-4xl p-6 sm:p-8 max-w-xs w-full shadow-hero animate-fade-up"
            style={{ animationDelay: '0.55s' }}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="tag-pill bg-accent/15 text-accent border border-accent/25">
                Featured
              </span>
              <span className="tag-pill bg-primary/10 text-foreground/60 border border-border">
                May 10, 2026
              </span>
            </div>
            <h3 className="text-foreground font-bold text-base leading-snug mb-3">
              The Hidden Toolkit: 5 Cybersecurity Resources the Pros Keep Quiet About
            </h3>
            <p className="text-muted text-xs leading-relaxed mb-5">
              Relying on basic antivirus is like bringing a toothpick to a sword fight. These 5
              lesser-known tools are in every pro&apos;s bookmarks.
            </p>
            <Link
              href="/blog/the-hidden-toolkit-5-cybersecurity"
              className="flex items-center gap-2 text-accent text-sm font-bold hover:gap-3 transition-all"
            >
              Read Full Post
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex items-center gap-3 mt-8 animate-fade-up" style={{ animationDelay: '0.7s' }}>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
            <Icon name="ChevronDownIcon" size={16} className="text-white/40" />
          </div>
          <span className="font-mono-tag text-white/40">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}