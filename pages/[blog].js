import { ApolloClient, InMemoryCache } from '@apollo/client';
import Layout from "../components/layout"
import BlogIndex from "../components/Blog/BlogIndex"

import { BLOGS_DATA, TOTAL_BLOGS, CATEGORIES_LIST } from "../lib/graphql/queries";



export default function Blog(props) {
    console.log('props', props)
  return (
    <Layout>     
      {/* <BlogIndex data={props} />       */}
    </Layout>
  )
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { page: '1', blog: 'blog' } },
      { params: { page: '2', blog: 'blog' } },
      { params: { page: '3', blog: 'blog' } },
      { params: { page: '4', blog: 'blog' } },
      { params: { page: '5', blog: 'blog' } },
      { params: { page: '6', blog: 'blog' } },
      { params: { page: '7', blog: 'blog' } },
      { params: { page: '8', blog: 'blog' } },
      { params: { page: '9', blog: 'blog' } },
      { params: { page: '10', blog: 'blog' } },
      { params: { page: '11', blog: 'blog' } },
      { params: { page: '12', blog: 'blog' } },            
    ],
    fallback: false
  };
}
export async function getStaticProps(context) {
  // fetch page data 
  return {
    props: { 
      page:JSON.stringify(context.params)
    }, 
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