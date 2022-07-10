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
// export async function getServerSideProps({ query: { page = 1 } }) {
//   const limit = 9
//   const start = +page === 1 ? 0 : (+page - 1) * limit
//   const client = new ApolloClient({
//     uri: process.env.STRAPI_GRAPHQL_URL,
//     cache: new InMemoryCache()
//   });
//   const { data } = await client.query({
//     query: BLOGS_DATA,
//     variables: { limit, start },
//   });

//   const total_blogs = await client.query({
//     query: TOTAL_BLOGS
//   });

//   const categoriesList = await client.query({
//     query: CATEGORIES_LIST
//   });
//   const totalRecords = parseInt(total_blogs.data.posts.data.length)
//   return {
//     props: {
//       blogs: data.posts.data,
//       total: +totalRecords,
//       page: +page,
//       numOfPages : Math.round(totalRecords/limit),
//       limit,
//       categoriesList: categoriesList.data.categories.data
//     }
//   }
// }