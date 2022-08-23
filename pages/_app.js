import Head from "next/head";
import Layout from "../components/layout/layout";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <ThemeProvider>
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
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
