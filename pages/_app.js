import Head from "next/head";
import Layout from "../components/layout/layout";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Head>
          <title>Home - HJPark</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
