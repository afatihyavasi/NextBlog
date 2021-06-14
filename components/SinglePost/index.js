import Link from 'next/link';
const SinglePost = ({ post }) => {
   return (
      <Link
         href={{
            pathname: '/posts/[slug]',
            query: { slug: post.slug },
         }}
      >
         <a>
            <section
               className={
                  'group flex justify-between items-center border-2 rounded-md my-5 p-3 cursor-pointer transition hover:border-purple-500 '
               }
            >
               <h4 className={'ml-5 font-light text-gray-600 '}>
                  {post.title}
               </h4>

               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5  text-purple-500 opacity-0 group-hover:opacity-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
               >
                  <path
                     fillRule="evenodd"
                     d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                     clipRule="evenodd"
                  />
               </svg>
            </section>
         </a>
      </Link>
   );
};

export default SinglePost;
