import Head from 'next/head';

const Header = ({ title, color }) => {
   return (
      <div className={'text-center'}>
         <Head>
            <title>{title}</title>
         </Head>
         <h1
            className={`text-3xl font-thin bg-purple-50 text-purple-600 px-3 py-2 rounded-md border border-${color}-600`}
         >
            {title}
         </h1>
      </div>
   );
};

export default Header;
