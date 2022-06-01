import App from "next/app"
import Head from "next/head"
import { createContext } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import "../styles/globals.css"



// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  return (
    <>
    
      <Head>
        {/* <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} /> */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> 
      </Head>
      <GlobalContext.Provider>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}
export default MyApp