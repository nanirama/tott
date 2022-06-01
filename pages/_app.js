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
      <GlobalContext.Provider>
        <Component {...pageProps} />
      </GlobalContext.Provider>
  )
}
export default MyApp