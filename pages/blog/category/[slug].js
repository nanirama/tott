import { ApolloClient, InMemoryCache } from '@apollo/client';
import Layout from "../../../components/layout"
import BlogIndex from "../../../components/Blog/BlogIndex"
import { CATEGORY_ITEM_DATA, TOTAL_BLOGS, CATEGORIES_LIST } from "../../../lib/graphql/queries";

const BlogPost = (props) => {
    return (
        <Layout>
            <BlogIndex data={props} paginationPath={`/blog/category/${props.slug}`} slug={props.slug} />      
        </Layout>
    )
}


export async function getServerSideProps(context) {
    const limit = 9
    const { slug, page } = context.query
    const pageNumber = page ? page : 1
    const start = +pageNumber === 1 ? 0 : (+pageNumber - 1) * limit
    const client = new ApolloClient({
        uri: process.env.STRAPI_GRAPHQL_URL,
        cache: new InMemoryCache()
    });
    const { data } = await client.query({
        query: CATEGORY_ITEM_DATA,
        variables: { slug },
    });
    const total_blogs = await client.query({
        query: TOTAL_BLOGS
     });
    
    const categoriesList = await client.query({
        query: CATEGORIES_LIST
      });
      const totalRecords = parseInt(data.categories.data[0].attributes.posts.data.length)
    return {
        props: {
            slug,
            blogs: data.categories.data[0].attributes.posts.data.slice(start, pageNumber * limit ),
            total: +totalRecords,
            page: +pageNumber,
            numOfPages : Math.round(totalRecords/limit),
            limit,
            categoriesList: categoriesList.data.categories.data
          }
    }
}
export default BlogPost