import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedArticle from './components/FeaturedArticle';
import PostsGrid from './components/PostsGrid';
import TopicsSidebar from './components/TopicsSidebar';
import BookmarkCTA from './components/BookmarkCTA';

export const metadata: Metadata = {
  title: 'TheWeb3Tech — Bold Insights on Crypto, Tech & Web3',
  description:
    'Practical guides on crypto safety, Linux, Web3, and cybersecurity by working technicians. Real, honest, and actionable — for builders and curious minds.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TheWeb3Tech — Crypto, Tech & Web3 Insights',
    description:
      'Honest, practical guides on crypto, Linux, security, and Web3 for builders and curious minds.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'TheWeb3Tech',
            url: 'https://theweb3tech.com',
            description:
              'Bold insights on crypto, Web3 tools, and emerging tech trends by Derek R Samuel and Derrk Samuel.',
            publisher: {
              '@type': 'Organization',
              name: 'TheWeb3Tech',
              logo: {
                '@type': 'ImageObject',
                url: 'https://blogger.googleusercontent.com/img/a/AVvXsEjpo_thC0fLO1oiw1RdTYoL8ppBZMauZv5yoUx_kiBmhrXC-_jBTUERix1CG2icEe6OkDQK35khtdcIYCrOCIZMZRPbFVGq9YhL27sGHOqmt-KxQGrsXGGQB9oV3rm17838dynCtxSdpqZvukKBkHbGqDkOXOGmnZhtro6hSLb7l5PchTHIjDVfcduF9fJl=s284',
              },
            },
            sameAs: [
              'https://blog.theweb3tech.com',
              'https://techderksinsights.blogspot.com',
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'TheWeb3Tech Blog',
            url: 'https://blog.theweb3tech.com',
            author: [
              {
                '@type': 'Person',
                name: 'Derek R Samuel',
                url: 'https://www.blogger.com/profile/04486400705337085333',
              },
              {
                '@type': 'Person',
                name: 'Derrk Samuel',
                url: 'https://www.blogger.com/profile/11476457670769994888',
              },
            ],
            description:
              'Practical guides on crypto, Linux, Web3, cybersecurity, and IT support.',
          }),
        }}
      />

      <Header />

      <main id="main-content">
        {/* H1 is inside HeroSection — exactly one per page */}
        <HeroSection />
        <FeaturedArticle />
        <PostsGrid />
        <TopicsSidebar />
        <BookmarkCTA />
      </main>

      <Footer />
    </>
  );
}