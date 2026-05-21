'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function BookmarkCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal-init').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleBookmark = () => {
    setBookmarked(true);
    setTimeout(() => setBookmarked(false), 3000);
  };

  const stats = [
    { value: '30+', label: 'Published Guides' },
    { value: '2', label: 'Active Sites' },
    { value: '100%', label: 'Honest Content' },
    { value: '0', label: 'Sponsored Posts' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 bg-primary relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 wireframe-bg opacity-10" aria-hidden="true" />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blob-accent opacity-20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Main CTA */}
          <div className="lg:col-span-7">
            <div className="scroll-reveal-init flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="font-mono-tag text-accent">Why Bookmark This Site</span>
            </div>

            <h2 className="scroll-reveal-init stagger-2 text-section-title text-white mb-6">
              Real Knowledge, No Fluff.{' '}
              <span className="text-accent">Come Back Daily.</span>
            </h2>

            <p className="scroll-reveal-init stagger-3 text-white/60 text-base leading-relaxed mb-8 max-w-xl">
              TheWeb3Tech and TechDerks Insights are written by working technicians — not content
              farms, not AI-generated fluff. Every post is tested, honest, and built to actually
              help you solve a problem or understand something new. If you found one post useful,
              there are 30+ more waiting for you.
            </p>

            <div className="scroll-reveal-init stagger-4 flex flex-wrap gap-4">
              <button
                onClick={handleBookmark}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all ${
                  bookmarked
                    ? 'bg-emerald-500 text-white' :'bg-white text-primary hover:bg-accent hover:text-white'
                }`}
              >
                <Icon name={bookmarked ? 'CheckIcon' : 'BookmarkIcon'} size={16} />
                {bookmarked ? 'Bookmarked!' : 'Bookmark This Site'}
              </button>

              <Link
                href="/blog"
                className="flex items-center gap-2 border border-white/20 text-white px-6 py-3.5 rounded-2xl text-sm font-semibold hover:bg-white/10 transition-all"
              >
                Explore All Posts
                <Icon name="ArrowRightIcon" size={14} />
              </Link>
            </div>
          </div>

          {/* Right: Stats + credibility */}
          <div className="lg:col-span-5">
            <div className="scroll-reveal-init stagger-2 grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card-dark rounded-3xl p-5 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="font-mono-tag text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Credibility statement */}
            <div className="scroll-reveal-init stagger-3 glass-card-dark rounded-3xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="ShieldCheckIcon" size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">
                    Insights from a Technician
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">
                    In today&apos;s interconnected world, your digital footprint is your business. This
                    platform is dedicated to helping modern independent professionals master their
                    digital workflows safely and efficiently.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="scroll-reveal-init stagger-4 mt-4 grid grid-cols-2 gap-3">
              {[
                { label: 'TechDerks Insights', href: '/techderks', icon: 'ComputerDesktopIcon' },
                { label: 'TheWeb3Tech Blog', href: '/blog', icon: 'GlobeAltIcon' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 glass-card-dark rounded-2xl px-4 py-3 text-xs font-semibold text-white/70 hover:text-accent transition-colors"
                >
                  <Icon
                    name={link.icon as 'ComputerDesktopIcon' | 'GlobeAltIcon'}
                    size={14}
                    className="text-accent flex-shrink-0"
                  />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}