import { MetadataRoute } from 'next';
import { allPosts, techDerksPosts } from '@/lib/posts-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theweb3tech.com';

  const blogPostUrls = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const techDerksPostUrls = techDerksPosts.map((post) => ({
    url: `${baseUrl}/techderks/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/techderks`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogPostUrls,
    ...techDerksPostUrls,
  ];
}