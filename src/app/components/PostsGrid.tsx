'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  source: 'theweb3tech' | 'techderks';
  url: string;
  internalUrl: string;
  image?: string;
  excerpt?: string;
  colSpan?: number;
  rowSpan?: number;
}

const allPosts: Post[] = [
{
  id: 1,
  slug: 'the-hidden-toolkit-5-cybersecurity',
  title: 'The Hidden Toolkit: 5 Cybersecurity Resources the Pros Keep Quiet About',
  date: 'May 10, 2026',
  category: 'Cybersecurity',
  source: 'theweb3tech',
  url: 'https://blog.theweb3tech.com/2026/05/the-hidden-toolkit-5-cybersecurity.html',
  internalUrl: '/blog/the-hidden-toolkit-5-cybersecurity',
  image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAWCQ37iOYRY2GduY56DZQ34EFMzLxqluEjgaFLHL9QLxVdA9Emo0lPiT8iUWupkQNzZVl5KPZPqNhf8FWaG_lltLs7_1L8RsYrOJFThOTY_dj7lP9xp1dckeBYOt_2b6C9uunFwAf0P6umCPULpiOqUhCJRw_HII3AOaffy4istF4C1T0Fw1zFKE5qns/s249/cyberimage.jpeg',
  excerpt: 'In a world where data breaches are the new normal, relying on basic antivirus software is like bringing a toothpick to a sword fight. These five lesser-known tools are in every pro\'s bookmarks.',
  colSpan: 2
},
{
  id: 2,
  slug: 'googles-secret-weapon-aluminum-os',
  title: 'Google\'s Secret Weapon: "Aluminum OS"',
  date: 'May 10, 2026',
  category: 'Tech',
  source: 'theweb3tech',
  url: 'https://blog.theweb3tech.com/2026/05/googles-secret-weapon-aluminum-os.html',
  internalUrl: '/blog/googles-secret-weapon-aluminum-os',
  image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKHGmM4VNJTtTuKoyiUtkf9OSAQzMzd9T0AJmB8uqvy5-rw86DitKMn9o0BVSxJj41vHcmvroGPv7BgEgHKjV5pZ_oxdLMKK7r90IEH1g9AUsy__sqZaJ0cZ7uCVpVuEWbjmWKVbLQFPOgkogqi_ODWWcNJNc7DzLdzKbcQV7gVyp5KosbxuZwVGA3_qQ/w239-h320/What%20is%20aluminum%20OS%20top%20art%20(Lenovo%20Chromebook%20Plus%2014_OnePlus%20Pad%203)%20122025%20SOURCE%20Lenovo_Amazon_Android.webp',
  excerpt: 'Google\'s new lightweight OS is reshaping how Chromebooks and Android tablets work together. Here\'s what Aluminum OS means for your workflow.'
},
{
  id: 3,
  slug: 'why-researching-before-you-invest',
  title: 'Why Researching Before You Invest Is the Most Important Step in Protecting Your Money',
  date: 'May 05, 2026',
  category: 'Crypto',
  source: 'theweb3tech',
  url: 'https://blog.theweb3tech.com/2026/05/why-researching-before-you-invest-is.html',
  internalUrl: '/blog/why-researching-before-you-invest',
  image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPwdvAYzjnrdK4uUZPeEIQX8eq9UAjbGFWeSqiqbmUnzss2CAyHukSsElia1ZiJ2XfcWxrdDg2NYKSlDbO87fRDbgvZfUy9NR47fPycHUR10PAQruNZTmsbzXL4M3QpxXgg8tP_f97HMfghUzHp4IBv7N_zh9CiKNW7YHicAsShUG7ZOB4ecU-q2cmTH4/s320/DYOR.webp',
  excerpt: 'Research is your first line of defense. DYOR is not a meme — it is the most important habit you can build before putting a single dollar into any asset.'
},
{
  id: 4,
  slug: 'manual-partitioning-ubuntu-2004',
  title: '🟣 Manual Partitioning in Ubuntu 20.04 (Step-by-Step)',
  date: 'April 03, 2026',
  category: 'Linux',
  source: 'theweb3tech',
  url: 'https://blog.theweb3tech.com/2026/04/manual-partitioning-in-ubuntu-2004.html',
  internalUrl: '/blog/manual-partitioning-ubuntu-2004',
  excerpt: 'A complete walkthrough of manually partitioning your drive during Ubuntu installation — swap, root, home, and EFI explained clearly.'
},
{
  id: 5,
  slug: 'purpose-of-software-in-computer-architecture',
  title: '💡 Purpose of Software in Computer Architecture',
  date: 'April 03, 2026',
  category: 'IT',
  source: 'theweb3tech',
  url: 'https://blog.theweb3tech.com/2026/04/purpose-of-software-in-computer.html',
  internalUrl: '/blog/purpose-of-software-in-computer-architecture',
  excerpt: 'How software layers interact with hardware from firmware up to applications — the foundational knowledge every IT professional needs.'
},
{
  id: 6,
  slug: 'tailsos-how-to-create-bootable-tailsos-usb-with-persistent-storage',
  title: '🛡️ TailsOS — How to Create a Bootable TailsOS USB With Persistent Storage (Full Guide)',
  date: 'January 2026',
  category: 'Security',
  source: 'techderks',
  url: 'https://techderksinsights.blogspot.com/2026/01/tailsos-how-to-create-bootable-tailsos.html',
  internalUrl: '/techderks/tailsos-how-to-create-bootable-tailsos-usb-with-persistent-storage',
  image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmbLXbz8e17uwhhYq0mlhrVr49_MfRDjC8t1oeIbTM-rLHqsyW-qJIlhuqAi7qNG1t162dzY4AnsOwGL4q2NP_YZpejjXQ7-Be0UcjSM2-FogqefZdPMFCuzjMl2hP_yXWTOUsXatKt8RcVNIXVeYlrDxeJHnzNbsF4yWeC8URP-ghbpc2WFsd_8BAk7BNp2Ow/s30-p/forthosewhoneedit.jpg',
  excerpt: 'Full guide: create a persistent TailsOS USB drive so your settings and files survive reboots. Privacy by design, explained step by step.',
  colSpan: 2
},
{
  id: 7,
  slug: 'critical-aspect-of-working-as-it-support',
  title: '⭐ Critical Aspect of Working as an IT Support Specialist',
  date: 'April 02, 2026',
  category: 'IT',
  source: 'theweb3tech',
  url: 'https://blog.theweb3tech.com/2026/04/critical-aspect-of-working-as-it.html',
  internalUrl: '/blog/critical-aspect-of-working-as-it-support',
  excerpt: 'What separates average IT support from excellent — the soft skills, diagnostic mindset, and documentation habits that matter most.'
},
{
  id: 8,
  slug: 'how-to-fix-unable-to-locate-package-docker-compose-plugin',
  title: 'How to Fix "Unable to locate package docker-compose-plugin" on Linux (Debian)',
  date: 'March 23, 2026',
  category: 'Docker',
  source: 'techderks',
  url: 'https://techderksinsights.blogspot.com/2026/03/how-to-fix-unable-to-locate-package.html',
  internalUrl: '/techderks/how-to-fix-unable-to-locate-package-docker-compose-plugin',
  excerpt: "Ubuntu/Debian's default repos don't include this package. Add Docker's official GPG key and repository, run apt update — full commands included."
},
{
  id: 9,
  slug: 'reliable-way-to-change-where-ubuntu-stores-default-user-folders',
  title: 'Reliable Way To Change Where Ubuntu Stores Your Default User Folders',
  date: 'March 2026',
  category: 'Linux',
  source: 'techderks',
  url: 'https://techderksinsights.blogspot.com/2026/03/reliable-way-to-change-where-ubuntu.html',
  internalUrl: '/techderks/reliable-way-to-change-where-ubuntu-stores-default-user-folders',
  excerpt: 'Move your Documents, Downloads, and Desktop to a different partition or drive without breaking your session or losing data.'
},
{
  id: 10,
  slug: 'why-rufus-says-access-to-drive-is-denied',
  title: '🔍 Why Rufus Says "Access To The Drive Is Denied" And Error: ISO Image Extraction Failure',
  date: 'March 24, 2026',
  category: 'Tools',
  source: 'theweb3tech',
  url: 'https://blog.theweb3tech.com/2026/03/why-rufus-says-access-to-drive-is.html',
  internalUrl: '/blog/why-rufus-says-access-to-drive-is-denied',
  excerpt: 'The three most common causes of this Rufus error and exactly how to fix each one — no reformatting required in most cases.'
},
{
  id: 11,
  slug: 'majorgeeks-powerful-trusted-software-hub-2026-guide',
  title: 'MajorGeeks.com: A Powerful, Trusted & No-Nonsense Software Hub (2026 Guide)',
  date: 'Sept 2025',
  category: 'Tools',
  source: 'techderks',
  url: 'https://techderksinsights.blogspot.com/2025/09/majorgeekscom-majorgeeks.html',
  internalUrl: '/techderks/majorgeeks-powerful-trusted-software-hub-2026-guide',
  excerpt: 'Why MajorGeeks has been trusted by IT pros for 20+ years and which sections of the site are worth bookmarking right now.'
},
{
  id: 12,
  slug: 'benefits-of-googles-advanced-protection-program',
  title: "Benefits of Google's Advanced Protection Program",
  date: 'Aug 2025',
  category: 'Security',
  source: 'techderks',
  url: 'https://techderksinsights.blogspot.com/2025/08/benefits-of-googles-advanced-protection.html',
  internalUrl: '/techderks/benefits-of-googles-advanced-protection-program',
  image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRfa5I3PiirxwOVSbHvpOD4PhuGytEyV8iTubaiG5kBSQKbG-KTqzWu00YXDqFmdJFylZdO48duqGPxrmE-7UKfChjDE3Dqgls34AV23cRP-mK1ybVgVamiA8s8stRF8d3ZHA7Np1CHd9P5X27R_8ZdA6IlKBxOYdYzi5k42S5mZrvyieVWrJtplSGo5U/s30-p/ai%20data%20extraction.png',
  excerpt: "Google's strongest account protection is free and most people don't know it exists. Here's what it does and who should turn it on today."
},
{
  id: 13,
  slug: 'how-to-setup-docker-to-interact-with-ethereum-blockchain',
  title: 'How to SetUp Docker to Interact with Ethereum BlockChain',
  date: 'Aug 4, 2025',
  category: 'Web3',
  source: 'techderks',
  url: 'https://techderksinsights.blogspot.com/2025/08/how-to-setup-docker-to-interact-with.html',
  internalUrl: '/techderks/how-to-setup-docker-to-interact-with-ethereum-blockchain',
  excerpt: 'Run an Ethereum node inside a Docker container — the cleanest way to experiment with Web3 without polluting your main system.'
},
{
  id: 14,
  slug: 'from-scams-to-safeguards-strengthening-crypto-onboarding',
  title: '🛡️ From Scams to Safeguards: Strengthening Crypto Onboarding Through Community-Driven Narratives',
  date: 'Aug 2025',
  category: 'Crypto',
  source: 'techderks',
  url: 'https://techderksinsights.blogspot.com/2025/08/from-scams-to-safeguards-strengthening.html',
  internalUrl: '/techderks/from-scams-to-safeguards-strengthening-crypto-onboarding',
  excerpt: 'Real stories from crypto newcomers who got scammed — and what the community learned from each incident to build better onboarding.'
},
{
  id: 15,
  slug: 'extract-data-from-smart-contract',
  title: 'Extract Data from a Smart Contract',
  date: 'June 2025',
  category: 'Web3',
  source: 'techderks',
  url: 'https://techderksinsights.blogspot.com/2025/06/extract-data-from-contract.html',
  internalUrl: '/techderks/extract-data-from-smart-contract',
  image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJMAwXSuqJixJeYQ1_bAfRN3Q2T88skNaHzB7c9fY09a42BkY2vduS_orHJh_S39X0m_NfY1Zx8uxVHnQFtl0M0I8qdsP4k4jqW-XH3Fd5i6icYfCuzjMl2hP_yXWTOUsXatKt8RcVNIXVeYlrDxeJHnzNbsF4yWeC8URP-ghbpc2WFsd_8BAk7BNp2Ow/s30-p/diagram%20of%20smart%20contract%20integration.png',
  excerpt: 'Using ethers.js and web3.js to read on-chain data from a deployed contract. Practical code examples you can run today.'
},
{
  id: 16,
  slug: 'interact-with-deployed-smart-contract-on-any-network',
  title: 'Interact with a Deployed Smart Contract on Any Network',
  date: 'June 2025',
  category: 'Web3',
  source: 'techderks',
  url: 'https://techderksinsights.blogspot.com/2025/06/interact-with-deployed-smart-contract.html',
  internalUrl: '/techderks/interact-with-deployed-smart-contract-on-any-network',
  image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8gYXga_Xh-PWMO-nWcXvxROT3xZwYmSamI0hYrQ9NIWVEjLfq1PRkV0xb-5yHWMLbItCNcZpFsqAsG2hk5-abrKIlAJ9bBOnTvOs_e6JteJaq8jnXaVCkCXvj7p6ubccrGqq_-dz7ot71TfHc6BaCgjZdimIHMAx5PBPFCa7tRg/s30-p/klayten_ether.jscloud_images.png',
  excerpt: 'Connect to Mainnet, Polygon, or any EVM-compatible chain and call contract functions with a few lines of JavaScript.'
},
{
  id: 17,
  slug: 'how-do-i-use-container-to-interact-with-smart-contracts',
  title: 'How Do I Use a Container to Interact with Smart Contracts?',
  date: 'June 2025',
  category: 'Docker',
  source: 'techderks',
  url: 'https://techderksinsights.blogspot.com/2025/06/how-do-i-use-container-to-interact-with.html',
  internalUrl: '/techderks/how-do-i-use-container-to-interact-with-smart-contracts',
  excerpt: 'Containerizing your Web3 development environment with Docker — isolated, reproducible, and ready to deploy.',
  colSpan: 3
}];


const categories = ['All', 'Crypto', 'Linux', 'Security', 'Web3', 'Docker', 'IT', 'Tech', 'Tools', 'Cybersecurity'];

const categoryColors: Record<string, string> = {
  Crypto: 'bg-amber-100 text-amber-700 border-amber-200',
  Linux: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Security: 'bg-red-100 text-red-700 border-red-200',
  Cybersecurity: 'bg-red-100 text-red-700 border-red-200',
  Web3: 'bg-violet-100 text-violet-700 border-violet-200',
  Docker: 'bg-sky-100 text-sky-700 border-sky-200',
  IT: 'bg-slate-100 text-slate-600 border-slate-200',
  Tech: 'bg-blue-100 text-blue-700 border-blue-200',
  Tools: 'bg-orange-100 text-orange-700 border-orange-200'
};

const sourceLabels: Record<string, string> = {
  theweb3tech: 'TheWeb3Tech',
  techderks: 'TechDerks'
};

function PostCard({ post, large = false }: {post: Post;large?: boolean;}) {
  return (
    <Link
      href={post.internalUrl}
      className="group block bg-card rounded-4xl border border-border card-hover overflow-hidden h-full">
      
      {post.image &&
      <div className={`post-card-img-wrap overflow-hidden ${large ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
          <AppImage
          src={post.image}
          alt={`${post.title} — article thumbnail image`}
          fill
          className="post-card-img object-cover"
          sizes={large ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'} />
        
        </div>
      }

      <div className={`p-5 ${large ? 'sm:p-7' : 'p-5'} flex flex-col h-full ${
      post.image ? '' : 'min-h-[180px]'}`
      }>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span
            className={`tag-pill border ${
            categoryColors[post.category] || 'bg-background text-muted border-border'}`
            }>
            
            {post.category}
          </span>
          <span className="font-mono-tag text-muted-foreground">{post.date}</span>
          <span className="font-mono-tag text-muted-foreground ml-auto hidden sm:block">
            {sourceLabels[post.source]}
          </span>
        </div>

        <h3
          className={`font-bold text-foreground leading-snug mb-2 group-hover:text-accent transition-colors ${
          large ? 'text-xl sm:text-2xl' : 'text-sm sm:text-base'}`
          }>
          
          {post.title}
        </h3>

        {post.excerpt &&
        <p className="text-muted text-xs sm:text-sm leading-relaxed mt-1 flex-1 line-clamp-3">
            {post.excerpt}
          </p>
        }

        <div className="flex items-center gap-1.5 mt-4 text-accent text-xs font-bold group-hover:gap-2.5 transition-all">
          Read Post
          <Icon name="ArrowRightIcon" size={12} />
        </div>
      </div>
    </Link>);

}

export default function PostsGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered =
  activeCategory === 'All' ?
  allPosts :
  allPosts.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal-init').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 60);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="scroll-reveal-init">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-accent" />
              <span className="font-mono-tag text-accent">All Posts</span>
            </div>
            <h2 className="text-section-title text-foreground">Latest from Both Sites</h2>
            <p className="text-muted text-sm mt-2 max-w-md">
              Real guides, honest takes, and practical knowledge from TheWeb3Tech and TechDerks
              Insights combined.
            </p>
          </div>

          <div className="scroll-reveal-init flex items-center gap-4 flex-shrink-0">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground transition-colors">
              
              TheWeb3Tech
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
            <Link
              href="/techderks"
              className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground transition-colors">
              
              TechDerks
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 scroll-reveal-init">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`category-chip tag-pill border ${
            activeCategory === cat ?
            'bg-primary text-primary-foreground border-primary' :
            'bg-card text-muted border-border hover:border-accent/50 hover:text-foreground'}`
            }>
            
              {cat}
            </button>
          )}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
          {filtered.map((post, idx) => {
            const colSpanClass =
            post.colSpan === 3 ?
            'sm:col-span-2 lg:col-span-3' :
            post.colSpan === 2 ?
            'sm:col-span-2' : 'col-span-1';

            const isLarge = post.colSpan === 2 || post.colSpan === 3;

            return (
              <div
                key={post.id}
                className={`scroll-reveal-init ${colSpanClass}`}
                style={{ transitionDelay: `${idx % 6 * 70}ms` }}>
                
                <PostCard post={post} large={isLarge} />
              </div>);

          })}
        </div>

        {/* Browse all */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 scroll-reveal-init">
          <Link
            href="/blog"
            className="flex items-center gap-3 border border-border bg-card text-foreground px-8 py-4 rounded-2xl text-sm font-semibold hover:border-accent hover:text-accent transition-all">
            
            <Icon name="DocumentTextIcon" size={18} />
            Browse TheWeb3Tech Blog
          </Link>
          <Link
            href="/techderks"
            className="flex items-center gap-3 border border-border bg-card text-foreground px-8 py-4 rounded-2xl text-sm font-semibold hover:border-accent hover:text-accent transition-all">
            
            <Icon name="ComputerDesktopIcon" size={18} />
            Browse TechDerks Insights
          </Link>
        </div>
      </div>
    </section>);

}