'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const labels = [
'Blockchain', 'Chrome OS', 'Crypto', 'Cryptocurrency',
'Cybersecurity', 'DYOR', 'Docker', 'Ethereum',
'Google', 'IT Support', 'Kali Linux', 'Linux',
'Malware', 'Networking', 'Privacy', 'Security',
'Smart Contracts', 'Snap', 'TailsOS', 'Ubuntu',
'USB', 'Virtual Machines', 'Web3', 'Windows',
'Workflow', 'Bootable Drive', 'Partitioning', 'API',
'Containers', 'Data Extraction', 'Decentralized', 'Node'];


const labelColors = [
'bg-accent/10 text-accent border-accent/20',
'bg-violet-100 text-violet-700 border-violet-200',
'bg-amber-100 text-amber-700 border-amber-200',
'bg-emerald-100 text-emerald-700 border-emerald-200',
'bg-red-100 text-red-700 border-red-200',
'bg-sky-100 text-sky-700 border-sky-200',
'bg-orange-100 text-orange-700 border-orange-200',
'bg-slate-100 text-slate-600 border-slate-200'];


const archiveMonths = [
{ label: 'May 2026', count: 3, url: 'https://blog.theweb3tech.com/2026/05/' },
{ label: 'April 2026', count: 5, url: 'https://blog.theweb3tech.com/2026/04/' },
{ label: 'March 2026', count: 4, url: 'https://blog.theweb3tech.com/2026/03/' },
{ label: 'January 2026', count: 2, url: 'https://techderksinsights.blogspot.com/2026/01/' },
{ label: 'September 2025', count: 2, url: 'https://techderksinsights.blogspot.com/2025/09/' },
{ label: 'August 2025', count: 4, url: 'https://techderksinsights.blogspot.com/2025/08/' },
{ label: 'June 2025', count: 3, url: 'https://techderksinsights.blogspot.com/2025/06/' }];


export default function TopicsSidebar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [wikiQuery, setWikiQuery] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSent, setContactSent] = useState(false);
  const [labelsExpanded, setLabelsExpanded] = useState(false);
  const [archiveExpanded, setArchiveExpanded] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal-init').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setContactForm({ name: '', email: '', message: '' });
    setTimeout(() => setContactSent(false), 4000);
  };

  const handleWikiSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (wikiQuery.trim()) {
      window.open(
        `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(wikiQuery)}`,
        '_blank'
      );
    }
  };

  const visibleLabels = labelsExpanded ? labels : labels.slice(0, 16);

  const faqs = [
  {
    q: 'What topics does TheWeb3Tech cover?',
    a: 'Crypto investing basics, Web3 development, Linux administration, cybersecurity tools, Docker containers, smart contracts, and IT support — all written from a practitioner\'s perspective.'
  },
  {
    q: 'Who writes these posts?',
    a: 'Derek R Samuel (TheWeb3Tech) and Derrk Samuel (TechDerks Insights) — independent technicians writing from real hands-on experience, not marketing copy.'
  },
  {
    q: 'Are the guides beginner-friendly?',
    a: 'Most posts include step-by-step commands and explanations. Some are intermediate-level, but they always explain the why, not just the how.'
  },
  {
    q: 'How often is new content published?',
    a: 'Multiple times per month across both sites. Bookmark the site or check back regularly — there\'s always something new dropping.'
  }];


  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="scroll-reveal-init flex items-center gap-3 mb-12">
          <div className="h-px w-8 bg-accent" />
          <span className="font-mono-tag text-accent">Explore & Connect</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT COLUMN: Topics + Archive + FAQ */}
          <div className="lg:col-span-8 space-y-8">
            {/* Topics / Labels */}
            <div className="scroll-reveal-init bg-background rounded-4xl p-6 sm:p-8 border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-foreground text-lg">Browse by Topic</h3>
                <span className="font-mono-tag text-muted">{labels.length} topics</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {visibleLabels.map((label, i) =>
                <a
                  key={label}
                  href={`https://blog.theweb3tech.com/search/label/${encodeURIComponent(label)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`tag-pill border category-chip ${
                  labelColors[i % labelColors.length]}`
                  }>
                  
                    {label}
                  </a>
                )}
              </div>
              {!labelsExpanded &&
              <button
                onClick={() => setLabelsExpanded(true)}
                className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline">
                
                  Show all {labels.length} topics
                  <Icon name="ChevronDownIcon" size={14} />
                </button>
              }
            </div>

            {/* Archive */}
            <div className="scroll-reveal-init stagger-2 bg-background rounded-4xl p-6 sm:p-8 border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                  <Icon name="ArchiveBoxIcon" size={18} className="text-accent" />
                  ArcHivE
                </h3>
              </div>
              <div className="space-y-2">
                {(archiveExpanded ? archiveMonths : archiveMonths.slice(0, 5)).map((month) =>
                <a
                  key={month.label}
                  href={month.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2.5 px-4 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all group">
                  
                    <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      {month.label}
                    </span>
                    <span className="tag-pill bg-accent/10 text-accent border-accent/20">
                      {month.count}
                    </span>
                  </a>
                )}
              </div>
              {!archiveExpanded &&
              <button
                onClick={() => setArchiveExpanded(true)}
                className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline px-4">
                
                  Show older months
                  <Icon name="ChevronDownIcon" size={14} />
                </button>
              }
            </div>

            {/* FAQ */}
            <div className="scroll-reveal-init stagger-3 bg-background rounded-4xl p-6 sm:p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="font-bold text-foreground text-lg">Common Questions</h3>
              </div>
              <div className="space-y-2">
                {faqs.map((faq, i) =>
                <div key={i} className="border border-border rounded-2xl overflow-hidden">
                    <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-background/80 transition-colors">
                    
                      <span className="text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                      <div
                      className={`flex-shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center transition-all ${
                      faqOpen === i ? 'bg-accent border-accent text-white' : 'text-muted'}`
                      }>
                      
                        <Icon name={faqOpen === i ? 'MinusIcon' : 'PlusIcon'} size={14} />
                      </div>
                    </button>
                    <div className={`faq-content ${faqOpen === i ? 'open' : ''}`}>
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                        <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sidebar widgets */}
          <div className="lg:col-span-4 space-y-6">
            {/* Author Profiles */}
            <div className="scroll-reveal-init bg-background rounded-4xl p-6 border border-border">
              <h3 className="font-bold text-foreground text-base mb-5 flex items-center gap-2">
                <Icon name="UserGroupIcon" size={16} className="text-accent" />
                Authors
              </h3>
              <div className="space-y-4">
                {[
                {
                  name: 'Derek R Samuel',
                  handle: 'TheWeb3Tech',
                  desc: 'Crypto, Web3, Security & Digital Innovation',
                  url: 'https://www.blogger.com/profile/04486400705337085333',
                  initials: 'DS'
                },
                {
                  name: 'Derrk Samuel',
                  handle: 'TechDerks Insights',
                  desc: 'Linux, Docker, Networking & IT Support',
                  url: 'https://www.blogger.com/profile/11476457670769994888',
                  initials: 'DS'
                }].
                map((author) =>
                <a
                  key={author.name}
                  href={author.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-2xl hover:bg-card transition-all group border border-transparent hover:border-border">
                  
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent font-bold text-sm flex-shrink-0">
                      {author.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors">
                        {author.name}
                      </div>
                      <div className="font-mono-tag text-muted mt-0.5">{author.handle}</div>
                      <div className="text-xs text-muted mt-1 leading-snug">{author.desc}</div>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Wikipedia Search */}
            <div className="scroll-reveal-init stagger-2 bg-background rounded-4xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-white border border-border">
                  <AppImage
                    src="https://resources.blogblog.com/img/widgets/icon_wikipedia_w.png"
                    alt="Wikipedia logo"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                    unoptimized />
                  
                </div>
                <h3 className="font-bold text-foreground text-base">Un/Hidden/--WiKi</h3>
              </div>
              <p className="text-xs text-muted mb-4">Search Wikipedia for any tech topic</p>
              <form onSubmit={handleWikiSearch} className="flex gap-2">
                <input
                  type="text"
                  value={wikiQuery}
                  onChange={(e) => setWikiQuery(e.target.value)}
                  placeholder="e.g. Blockchain, TailsOS..."
                  className="flex-1 text-sm bg-card border border-border rounded-xl px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors" />
                
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-accent transition-colors flex-shrink-0">
                  
                  Search
                </button>
              </form>
            </div>

            {/* Kali Linux Feature */}
            <div className="scroll-reveal-init stagger-3 bg-primary rounded-4xl overflow-hidden border border-border relative group">
              <div className="absolute inset-0 overflow-hidden">
                <AppImage
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwm9SwtqOToih-yXA6_i6WmmaaSrD2mY1wHHnPkKb-hXPjAuAyXnCtyJ9JT2j9NtF_9ltSVOo3wpYxyq0f015F1oaQBgRrcNxWqWJkWSnk3lZmsrFp0ZiAIQgprTUD3GTEPPv3QVS1V1XE4CMweKHQc4w60p5yYWOzXGIAPtXEPi9w/s1600/kali-linux.jpg"
                  alt="Kali Linux wallpaper — dark atmospheric cybersecurity desktop environment with deep shadows and purple glow"
                  fill
                  className="object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 33vw" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
              </div>
              <div className="relative z-10 p-6">
                <div className="w-12 h-12 mb-4">
                  <AppImage
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeC3LLaUlzLDXARjMN6nvTptt0MewfpqGvaaazDZPH1RZySVhtmDfZV-7oGmWYjDHE-kH6qnwYbW78YsCMoMU2z1Ac0czaXmUKCkKuO2b52KVgCcXGhMPoVVqQG_dMmsGxs_VfJwWdEpQF8Uf8pulDuN06WiLN2UrrAAEd3l48algqmMo/s1600/kali-purple-stickerbitch.png"
                    alt="Kali Linux dragon logo sticker"
                    width={48}
                    height={48}
                    className="object-contain"
                    unoptimized />
                  
                </div>
                <h3 className="font-bold text-white text-lg mb-1">LinuX</h3>
                <p className="text-white/60 text-xs mb-4">A kool wallpaper. The hacker&apos;s OS.</p>
                <a
                  href="https://www.kali.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-xl text-xs font-bold hover:bg-accent hover:text-white transition-all">
                  
                  Visit Kali.org
                  <Icon name="ArrowTopRightOnSquareIcon" size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Blog Search */}
            <div className="scroll-reveal-init stagger-4 bg-background rounded-4xl p-6 border border-border">
              <h3 className="font-bold text-foreground text-base mb-4 flex items-center gap-2">
                <Icon name="MagnifyingGlassIcon" size={16} className="text-accent" />
                Search IT on the SiDe
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = (e.target as HTMLFormElement).querySelector('input') as HTMLInputElement;
                  if (input.value.trim()) {
                    window.open(
                      `https://blog.theweb3tech.com/search?q=${encodeURIComponent(input.value)}`,
                      '_blank'
                    );
                  }
                }}
                className="flex gap-2">
                
                <input
                  type="text"
                  placeholder="Search this blog..."
                  className="flex-1 text-sm bg-card border border-border rounded-xl px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors" />
                
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-accent transition-colors flex-shrink-0">
                  
                  Go
                </button>
              </form>
            </div>

            {/* Contact Form */}
            <div className="scroll-reveal-init stagger-5 bg-background rounded-4xl p-6 border border-border">
              <h3 className="font-bold text-foreground text-base mb-4 flex items-center gap-2">
                <Icon name="EnvelopeIcon" size={16} className="text-accent" />
                Contact Us HERE
              </h3>

              {contactSent ?
              <div className="flex flex-col items-center gap-3 py-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Icon name="CheckIcon" size={20} className="text-emerald-600" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Message sent!</p>
                  <p className="text-xs text-muted">We&apos;ll get back to you soon.</p>
                </div> :

              <form onSubmit={handleContactSubmit} className="space-y-3">
                  <input
                  type="text"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full text-sm bg-card border border-border rounded-xl px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors" />
                
                  <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full text-sm bg-card border border-border rounded-xl px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors" />
                
                  <textarea
                  placeholder="Your Message *"
                  required
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full text-sm bg-card border border-border rounded-xl px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none" />
                
                  <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-xl text-sm font-bold hover:bg-accent transition-colors">
                  
                    Send Message
                  </button>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </section>);

}