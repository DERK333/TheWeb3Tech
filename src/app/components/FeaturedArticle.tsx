'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function FeaturedArticle() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  const toolkit = [
    {
      name: 'Shodan',
      subtitle: 'The Search Engine for Everything Else',
      desc: 'Security experts use Shodan to find everything on the IoT — from webcams and routers to power plant control systems. See what devices are accidentally exposed on your network.',
    },
    {
      name: 'Have I Been Pwned',
      subtitle: 'Know Your Exposure',
      desc: 'Check if your email or phone has appeared in a data breach. Essential first step for any security audit — free, fast, and trusted by millions.',
    },
    {
      name: 'VirusTotal',
      subtitle: 'Multi-Engine File Scanner',
      desc: "Analyze suspicious files and URLs with 70+ antivirus engines simultaneously. The pros run every unknown file through VirusTotal before opening it.",
    },
    {
      name: 'Wireshark',
      subtitle: 'Network Traffic Analyzer',
      desc: "The gold standard for capturing and analyzing network packets. If something is talking on your network that shouldn't be, Wireshark will find it.",
    },
    {
      name: 'CyberChef',
      subtitle: 'The Cyber Swiss Army Knife',
      desc: "GCHQ's open-source tool for encoding, decoding, encrypting, and analyzing data. Security researchers use it daily — it's the one tool you didn't know you needed.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 blob-accent opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="scroll-reveal-init flex items-center gap-3 mb-10">
          <div className="h-px flex-1 max-w-8 bg-accent" />
          <span className="font-mono-tag text-accent">Featured Deep-Dive</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Image + meta */}
          <div className="lg:col-span-5 scroll-reveal-init stagger-1">
            <div className="relative rounded-4xl overflow-hidden aspect-[4/3] bg-primary/10 post-card-img-wrap shadow-card">
              <AppImage
                src="https://cdn.dribbble.com/userupload/45885505/file/c5a56fe0fa08264d815eeee91bb56aec.png?resize=2048x1536&vertical=center"
                alt="Dark cybersecurity themed illustration with digital lock and network connections in moody blue tones"
                fill
                className="post-card-img object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="tag-pill bg-accent text-white">Cybersecurity</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: 'Min Read', value: '8' },
                { label: 'Tools Covered', value: '5' },
                { label: 'Level', value: 'Pro' },
              ]?.map((stat) => (
                <div
                  key={stat?.label}
                  className="bg-background rounded-2xl p-4 text-center border border-border"
                >
                  <div className="text-2xl font-bold text-foreground">{stat?.value}</div>
                  <div className="font-mono-tag text-muted mt-1">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 scroll-reveal-init stagger-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="tag-pill bg-accent/10 text-accent border border-accent/20">
                May 10, 2026
              </span>
              <span className="tag-pill bg-background text-muted border border-border">
                blog.theweb3tech.com
              </span>
            </div>

            <h2 className="text-section-title text-foreground mb-4 leading-tight">
              The Hidden Toolkit: 5 Cybersecurity Resources the Pros Keep Quiet About
            </h2>

            <p className="text-muted text-base leading-relaxed mb-8">
              In a world where data breaches are the new normal, relying on basic antivirus software
              is like bringing a toothpick to a sword fight. While everyone knows the big names in
              security, the real power players use a specialized &quot;shadow&quot; toolkit to stay ahead of
              threats. These five lesser-known tools and websites are essential for your bookmarks.
            </p>

            {/* Toolkit list */}
            <div className="space-y-4 mb-8">
              {toolkit?.map((tool, i) => (
                <div
                  key={tool?.name}
                  className="flex gap-4 p-4 rounded-2xl border border-border bg-background hover:border-accent/30 hover:bg-accent/5 transition-all group scroll-reveal-init"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-accent/15 flex items-center justify-center text-accent font-bold font-mono text-sm">
                    {String(i + 1)?.padStart(2, '0')}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-bold text-foreground text-sm">{tool?.name}</span>
                      <span className="text-xs text-muted">— {tool?.subtitle}</span>
                    </div>
                    <p className="text-muted text-xs leading-relaxed">{tool?.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/blog/the-hidden-toolkit-5-cybersecurity"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-2xl text-sm font-bold hover:bg-accent transition-all group"
            >
              Read the Full Guide
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <Icon name="ArrowUpRightIcon" size={14} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
