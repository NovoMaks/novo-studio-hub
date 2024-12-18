export enum PrismaSchemas {
  'tildaWidgetsPost' = 'tildaWidgetsPost',
}

export type Post = {
  title: string;
  status: 'draft' | 'published';
  author: {
    name: string;
    picture: string;
  };
  slug: string;
  description: string;
  coverImage: string;
  publishedAt: Date;
  price: string;
  category: string;
  tags?: string;
  content?: string;
};
