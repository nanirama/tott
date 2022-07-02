import { ApolloClient, InMemoryCache } from "@apollo/client";
import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import BlogIndex from "../../components/Blog";

import { BLOGPOST_DATA } from "../../lib/graphql/queries";

export default function Blog(props) {
  const { data } = props;
  return (
    <Layout>
      <BlogIndex data={data} />
    </Layout>
  );
}
export async function getStaticPaths() {
  const response = await fetch("https://tott-web-cms.herokuapp.com/api/posts");
  const articles = await response.json();
  return {
    paths: articles?.data?.map((article) => ({
      params: {
        slug: article?.attributes?.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: BLOGPOST_DATA,
    variables: { slug },
  });
  return {
    props: { data: data.posts.data[0].attributes, slug },
    revalidate: 1,
  };
}
