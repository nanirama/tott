import { gql } from "@apollo/client";

export const JOBS_LISTING_QUERY = gql`
  query {
    jobs {
      data {
        id
        attributes {
          title
          slug
          type
          isThisJobIsRemote
          location
          short_description
          description
          createdAt
          updatedAt
          publishedAt
          department {
            data {
              id
              attributes {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;
