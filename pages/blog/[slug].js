import { ApolloClient, InMemoryCache } from '@apollo/client';
import Layout from "../../components/layout"
import { fetchAPI } from "../../lib/api"
import BlogIndex from '../../components/Blog';

import { BLOGPOST_DATA, BLOGS_DATA } from "../../lib/graphql/queries";



export default function Blog(props) {
  const { data, latestPosts } = props
  return (
    <Layout>     
      <BlogIndex data={data} latestPosts={latestPosts}/> 
    </Layout>
  )
}
export async function getStaticPaths() {
  const articles = await fetchAPI("/posts")

  return {
    paths: articles.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const limit = 3;
  const start = 0;
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });
  const latest_blogs = await client.query({
    query: BLOGS_DATA,
    variables: { limit, start },
  });
  const { data } = await client.query({
      query: BLOGPOST_DATA,
      variables: { slug },
  });
  return {
    props: {
      data: data.posts.data[0].attributes,
      slug,
      latestPosts : latest_blogs.data.posts.data
    },
    revalidate: 1,
  }
}
