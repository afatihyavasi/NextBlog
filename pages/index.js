import Layout from '../components/Layout';
import Header from '../components/Header';
import SinglePost from '../components/SinglePost';

export default function Home({ data }) {
   return (
      <Layout>
         <Header title={'NextJS Sample Blog'} />
         <div className={'my-20'}>
            {data.map((post) => (
               <SinglePost post={post} key={post.id} />
            ))}
         </div>
      </Layout>
   );
}

export async function getStaticProps() {
   const response = await fetch(
      'https://nextjs-blog-afatihyavasi.herokuapp.com/posts'
   );
   const data = await response.json();

   return {
      props: { data },
   };
}
