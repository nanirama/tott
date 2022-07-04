import { ApolloClient, InMemoryCache } from '@apollo/client';
import Layout from "../../components/layout"
import BlogMainIndex from '../../components/Blog/BlogMainIndex';

import { BLOGS_DATA, TOTAL_BLOGS, CATEGORIES_LIST } from "../../lib/graphql/queries";



export default function Blog(props) {
  return (
    <Layout>     
      <BlogMainIndex categoriesList={props.categoriesList}/>
    </Layout>
  )
}

export async function getStaticProps(){
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });
    const categoriesList = await client.query({
            query: CATEGORIES_LIST
    });  
    return {
            props: {
              categoriesList: categoriesList.data.categories.data
            }
          } 
}