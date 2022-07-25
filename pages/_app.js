import { useEffect, createContext } from "react";
import Head from "next/head";
import Script from "next/script";
import TagManager from "react-gtm-module";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/graphql/apolloClient";
import "../styles/globals.css";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-N9MM9XQ" });
  }, []);

  return (
    <GlobalContext.Provider>
       <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </GlobalContext.Provider>
  );
};
export default MyApp;
