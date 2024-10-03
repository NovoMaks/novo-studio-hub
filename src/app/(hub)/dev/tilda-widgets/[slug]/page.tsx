import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { Divider, Grid, Typography } from '@mui/material';
import PostCard from '@/app/_components/post/PostCard';

export default async function Post({ params }: Params) {
  // const post = getPostBySlug(params.slug);

  // if (!post) {
  //   return notFound();
  // }

  // const content = await markdownToHtml(post.content || '');

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h3'>Basic Cards</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PostCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PostCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PostCard />
      </Grid>
    </Grid>
  );
}

{
  /* <main>
<Container>
  <Header />
  <article className='mb-32'>
    <PostHeader
      title={post.title}
      coverImage={post.coverImage}
      date={post.date}
      author={post.author}
    />
    <PostBody content={content} />
  </article>
</Container>
</main> */
}

type Params = {
  params: {
    slug: string;
  };
};

// export function generateMetadata({ params }: Params): Metadata {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     return notFound();
//   }

//   const title = `${post.title}`;

//   return {
//     title,
//     openGraph: {
//       title,
//       images: [post.ogImage.url],
//     },
//   };
// }

// export async function generateStaticParams() {
//   const posts = getAllPosts();

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
