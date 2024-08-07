import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
