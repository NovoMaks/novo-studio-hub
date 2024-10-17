import { Post } from '@/types/post';
import { getDocuments, getDocumentBySlug, load } from 'outstatic/server';
import markdownToHtml from './markdownToHtml';
import { User } from '@prisma/client';

export function getSortedPostsData({ category }: { category: string; isAdmin?: boolean }) {
  const allPostsData = getDocuments(category, [
    'title',
    'status',
    'author',
    'slug',
    'description',
    'coverImage',
    'publishedAt',
    'price',
    'category',
  ]) as unknown as Post[];

  return allPostsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostContent({ category, slug }: { category: string; slug: string }) {
  const post = getDocumentBySlug(category, slug, [
    'title',
    'status',
    'author',
    'slug',
    'description',
    'coverImage',
    'publishedAt',
    'price',
    'content',
    'category',
  ]) as unknown as Post & { content: string };

  if (!post) return null;

  const content = await markdownToHtml(post.content);

  return {
    ...post,
    content,
  };
}

export async function getMyPurchases({ purchases }: { purchases: User['purchases'] }) {
  const db = await load();
  const allPostsData = ((await db
    .find({
      $or: purchases.map((p) => ({ collection: p.category, slug: p.slug })),
    })
    .project([
      'title',
      'status',
      'author',
      'slug',
      'description',
      'coverImage',
      'publishedAt',
      'price',
      'category',
    ])
    .toArray()) ?? []) as unknown as Post[];

  return allPostsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}
