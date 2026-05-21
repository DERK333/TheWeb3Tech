import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-foreground text-lg tracking-tight">TheWeb3Tech</span>
              <span className="tag-pill bg-accent/10 text-accent border border-accent/20">Blog</span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              Bold insights on crypto, Web3 tools, and emerging tech trends. Practical guides for
              startups, creators, and curious minds — written by working technicians.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.blogger.com/profile/04486400705337085333"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Derek R Samuel profile"
                className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-background transition-all"
              >
                <Icon name="UserCircleIcon" size={18} />
              </a>
              <a
                href="https://www.blogger.com/profile/11476457670769994888"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Derrk Samuel profile"
                className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-background transition-all"
              >
                <Icon name="UserCircleIcon" size={18} />
              </a>
            </div>
          </div>

          {/* TheWeb3Tech Blog */}
          <div>
            <h3 className="font-bold text-foreground text-sm mb-4">TheWeb3Tech Blog</h3>
            <ul className="space-y-2">
              {[
                { label: 'All Posts', href: '/blog' },
                { label: 'Cybersecurity', href: '/blog' },
                { label: 'Crypto & Web3', href: '/blog' },
                { label: 'Linux Guides', href: '/blog' },
                { label: 'IT Support', href: '/blog' },
              ]?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* TechDerks */}
          <div>
            <h3 className="font-bold text-foreground text-sm mb-4">TechDerks Insights</h3>
            <ul className="space-y-2">
              {[
                { label: 'All Posts', href: '/techderks' },
                { label: 'Docker & Containers', href: '/techderks' },
                { label: 'Smart Contracts', href: '/techderks' },
                { label: 'Security & Privacy', href: '/techderks' },
                { label: 'Linux & Ubuntu', href: '/techderks' },
              ]?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5 flex-wrap justify-center sm:justify-start">
            <Link href="/" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/techderks" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
              TechDerks
            </Link>
            <a
              href="https://blog.theweb3tech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              Original Blog
            </a>
            <a
              href="https://www.blogger.com/go/report-abuse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              Report Abuse
            </a>
          </div>
          <span className="text-sm text-muted-foreground">
            © 2026 TheWeb3Tech · Derek R Samuel
          </span>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            Combining insights from{' '}
            <a
              href="https://blog.theweb3tech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              blog.theweb3tech.com
            </a>{' '}
            and{' '}
            <a
              href="https://techderksinsights.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              techderksinsights.blogspot.com
            </a>
          </p>
          <p className="text-xs text-muted-foreground">Powered by Blogger · Built for the curious</p>
        </div>
      </div>
    </footer>
  );
}