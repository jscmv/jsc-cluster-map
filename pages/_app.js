import { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "next/head";

import "../styles/style.css";

import { polyfill } from "smoothscroll-polyfill";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    polyfill();
},[])
  return (
    <>
      <Head></Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
