'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const categories = [
  'Crypto', 'Web3', 'Linux', 'Cybersecurity', 'Docker',
  'Smart Contracts', 'IT Support', 'Blockchain',
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'TechDerks', href: '/techderks' },
  { label: 'Crypto', href: '/blog' },
  { label: 'Linux', href: '/blog' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(
        `https://blog.theweb3tech.com/search?q=${encodeURIComponent(searchQuery)}`,
        '_blank'
      );
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  // On non-home pages, always show solid header
  const solidHeader = scrolled || !isHomePage;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solidHeader
            ? 'bg-card/95 backdrop-blur-xl border-b border-border shadow-card'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-border/60 flex-shrink-0">
                <AppImage
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEjpo_thC0fLO1oiw1RdTYoL8ppBZMauZv5yoUx_kiBmhrXC-_jBTUERix1CG2icEe6OkDQK35khtdcIYCrOCIZMZRPbFVGq9YhL27sGHOqmt-KxQGrsXGGQB9oV3rm17838dynCtxSdpqZvukKBkHbGqDkOXOGmnZhtro6hSLb7l5PchTHIjDVfcduF9fJl=s284"
                  alt="TheWeb3Tech logo — hexagonal network node mark in electric cyan"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={`font-bold text-base tracking-tight transition-colors ${
                    solidHeader ? 'text-foreground' : 'text-white'
                  }`}
                >
                  TheWeb3Tech
                </span>
                <span
                  className={`font-mono-tag transition-colors ${
                    solidHeader ? 'text-muted' : 'text-white/60'
                  }`}
                  style={{ fontSize: '0.55rem', letterSpacing: '0.1em' }}
                >
                  TECH · CRYPTO · WEB3
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm font-semibold accent-underline transition-colors ${
                      isActive
                        ? 'text-accent'
                        : solidHeader
                        ? 'text-muted hover:text-foreground'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className={`p-2 rounded-xl transition-all ${
                  solidHeader
                    ? 'text-muted hover:text-foreground hover:bg-background'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Open search"
              >
                <Icon name="MagnifyingGlassIcon" size={20} />
              </button>

              <a
                href="https://blog.theweb3tech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-xl text-sm font-bold hover:bg-accent/90 transition-all"
              >
                Read Blog
                <Icon name="ArrowTopRightOnSquareIcon" size={14} />
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-xl transition-all ${
                  solidHeader
                    ? 'text-muted hover:text-foreground hover:bg-background'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${mobileOpen ? 'open' : ''} fixed inset-0 z-40 bg-primary/98 backdrop-blur-xl pt-20`}
      >
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8">
          <nav className="flex flex-col gap-1">
            {[
              { label: 'Home', href: '/' },
              { label: 'Blog — TheWeb3Tech', href: '/blog' },
              { label: 'TechDerks Insights', href: '/techderks' },
              { label: 'Crypto', href: '/blog' },
              { label: 'Linux', href: '/blog' },
              { label: 'Cybersecurity', href: '/blog' },
              { label: 'Web3', href: '/techderks' },
              { label: 'Docker', href: '/techderks' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-white text-xl font-semibold py-3 border-b border-white/10 flex items-center justify-between"
              >
                {item.label}
                <Icon name="ChevronRightIcon" size={18} className="text-accent" />
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href="https://blog.theweb3tech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-4 rounded-2xl text-base font-bold"
            >
              Visit Full Blog
              <Icon name="ArrowTopRightOnSquareIcon" size={16} />
            </a>
            <a
              href="https://techderksinsights.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-4 rounded-2xl text-base font-semibold"
            >
              TechDerks Insights
              <Icon name="ArrowTopRightOnSquareIcon" size={16} />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((cat) => (
              <span
                key={cat}
                className="tag-pill bg-white/10 text-white/60 border border-white/10"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div
        className={`search-overlay ${searchOpen ? 'open' : ''} fixed inset-0 z-50 bg-primary/90 backdrop-blur-xl flex flex-col items-center justify-start pt-28 px-4`}
      >
        <button
          onClick={() => setSearchOpen(false)}
          className="absolute top-6 right-6 p-2 text-white/60 hover:text-white"
          aria-label="Close search"
        >
          <Icon name="XMarkIcon" size={28} />
        </button>

        <div className="w-full max-w-2xl">
          <p className="font-mono-tag text-accent mb-4">Search TheWeb3Tech</p>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts, topics, guides..."
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white text-lg placeholder:text-white/30 focus:outline-none focus:border-accent transition-all"
            />
            <button
              type="submit"
              className="absolute right-3 top-3 bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold"
            >
              Search
            </button>
          </form>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Cybersecurity', 'Linux', 'Web3', 'Docker', 'Crypto', 'Ubuntu'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="tag-pill bg-white/10 text-white/70 border border-white/15 hover:bg-accent/20 hover:text-accent transition-all"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Quick nav links in search */}
          <div className="mt-8">
            <p className="font-mono-tag text-white/40 mb-3">Quick Navigation</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'TheWeb3Tech Blog', href: '/blog' },
                { label: 'TechDerks Insights', href: '/techderks' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setSearchOpen(false)}
                  className="flex items-center gap-2 glass-card-dark rounded-2xl px-4 py-3 text-sm font-semibold text-white/70 hover:text-accent transition-colors"
                >
                  <Icon name="DocumentTextIcon" size={14} className="text-accent flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}