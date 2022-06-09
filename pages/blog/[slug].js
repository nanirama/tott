import { ApolloClient, InMemoryCache } from '@apollo/client';
import Layout from "../../components/layout"

import BlogIndex from '../../components/Blog';

import { BLOGPOST_DATA } from "../../lib/graphql/queries";



export default function Blog(props) {
    const { data } = props
    console.log('single slug', data)
  return (
    <Layout>     
      <BlogIndex data={data}/> 
    </Layout>
  )
}


export async function getServerSideProps(context) {
    const { slug } = context.query

    const client = new ApolloClient({
        uri: process.env.STRAPI_GRAPHQL_URL,
        cache: new InMemoryCache()
    });
    const { data } = await client.query({
        query: BLOGPOST_DATA,
        variables: { slug },
    });
    return {
        props: {
            slug,
            data: data.posts.data[0].attributes
          }
    }
  
}