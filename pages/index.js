import Layout from "../components/layout"
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Hero from "../components/Home/Hero"
import Features from "../components/Home/Features"
import Cta from "../components/Home/Cta"
import Faq from "../components/Home/Faq"
import AllInOneFinance from "../components/Home/AllInOneFinance"
import Newsletter from "../components/Home/Newsletter"

import { HOME_DATA } from "../lib/graphql/queries";


export default function Home(props) {
  console.log('Props', props.pageData.data.attributes)
  //const { hero_section, features_section, cta_section, faq_section } = props.pageData.data.attributes
  const { hero_section, features_section, cta_section, faq_section, all_in_one_finance, newsletter } = props.pageData.data.attributes
  return (
    <Layout>
      { hero_section && <Hero data={hero_section}/>}
      { features_section && <Features data={features_section}/> }
      { cta_section && <Cta data={cta_section}/> }
      { faq_section && <Faq data={faq_section}/> }        
      { all_in_one_finance && <AllInOneFinance data={all_in_one_finance}/> }
      { newsletter && <Newsletter data={newsletter}/> }
    </Layout>
  )
}

export const getStaticProps = async () => {

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({ query: HOME_DATA });

  return {
    props: {
      pageData: data.home
    }
  }
}
