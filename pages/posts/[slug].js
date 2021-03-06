import Header from '../../components/Header';
import Layout from '../../components/Layout';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

const Post = ({ data, content }) => {
   return (
      <Layout>
         <Header title={data.title} />
         <article
            className={`prose prose-sm prose-purple sm:prose-lg mx-auto my-10`}
         >
            <MDXRemote {...content} />
         </article>
      </Layout>
   );
};

export async function getStaticPaths() {
   const response = await fetch(
      'https://nextjs-blog-afatihyavasi.herokuapp.com/posts'
   );
   const data = await response.json();
   return {
      paths: data.map((post) => {
         return { params: { slug: post.slug } };
      }),
      fallback: false,
   };
}

export async function getStaticProps({ params }) {
   const response = await fetch(
      `https://nextjs-blog-afatihyavasi.herokuapp.com/posts?slug=${params.slug}`
   );
   const data = await response.json();
   const content = await serialize(data[0].content);
   return {
      props: {
         data: data[0],
         content,
      },
   };
}

export default Post;
