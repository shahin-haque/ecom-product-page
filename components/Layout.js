import Head from 'next/head';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title> E-commerce product page |Frontend Mentor </title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <meta
          name="description"
          content="E-commerce product page with next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <NavBar />
      {children}
    </>
  );
};

export default Layout;
