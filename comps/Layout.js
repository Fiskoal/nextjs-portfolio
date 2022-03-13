import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from 'next/head'

const Layout = ({ children }) => {
  console.log(children.type.name);
  return (
      <>
      <Head>
        <title>Jakob Knicley | {children.type.name}</title>
        <meta name='keywords' content='list'></meta>
      </Head>
      <Navbar />
      <div className="content">
        { children }
      <Footer />
      </div>
    </>
   );
}
 
export default Layout;