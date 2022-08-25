import Head from "next/head";
import Layout from "../components/layout/layout";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default MyApp;
