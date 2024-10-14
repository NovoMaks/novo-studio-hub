import { Post } from '@/types/post';
import { getDocuments, getDocumentBySlug } from 'outstatic/server';
import markdownToHtml from './markdownToHtml';

export function getSortedPostsData({ category, isAdmin }: { category: string; isAdmin?: boolean }) {
  const allPostsData = getDocuments(category, [
    'title',
    'status',
    'author',
    'slug',
    'description',
    'coverImage',
    'publishedAt',
    'isFree',
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
    'isFree',
    'content',
  ]) as unknown as Post & { content: string };

  if (!post) return null;

  const content = await markdownToHtml(post.content);

  return {
    ...post,
    content,
  };
}
