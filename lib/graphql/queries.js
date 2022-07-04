import { gql } from '@apollo/client';

const CATEGORY_ITEM_DATA = gql`
query CategoryItemData($slug: String) {
  categories(filters: { slug: { eq: $slug } }) {
    data {
      attributes {
        name
        posts {
          data {
            attributes {
              publishedAt
              reading_time
              title
              slug
              short_description
              feature_image {
                data {
                  attributes {
                    url
                  }
                }
              }
              categories {
                data {
                  attributes {
                    name
                    slug
                  }
                }
              }
              users_permissions_user {
                data {
                  attributes {
                    username
                    image{
                      data{
                        attributes{
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`
const CATEGORIES_LIST = gql`
    query CategoriesData{
      categories{
        data{
          attributes{
            slug
            name
          }
        }
      }
}`;

const BLOGPOST_DATA = gql`
    query BlogPostData( $slug: String) {
      posts(filters: { slug: { eq: $slug } }){
        data{
          attributes{
            publishedAt
            reading_time
            title
            slug
            short_description
            description
            feature_image{
              data{
                attributes{
                  url
                }
              }
            }
            categories{
              data{
                attributes{
                  name
                }
              }
            }
            users_permissions_user{
              data{
                attributes{
                  username
                  image{
                      data{
                        attributes{
                          url
                        }
                      }
                    }
                }
              }
            }  
            contributors{
              name
              title
              image{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
            tags{
              data{
                attributes{
                  name
                }
              }
            }
          }
        }
      }
}`;
const POST_DATA_FRAGMENT = gql`
fragment PostDataFragment on post{
    data{
      attributes{
        publishedAt
        reading_time
        title
        slug
        short_description
        feature_image{
          data{
            attributes{
              url
            }
          }
        }
        categories{
          data{
            attributes{
              name
            }
          }
        }
        users_permissions_user{
          data{
            attributes{
              username
              image{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }        
      }
    }
}
`
const BLOGS_DATA = gql`
    query BlogsData($limit: Int, $start: Int) {
      posts( pagination: { limit:$limit, start:$start}){
        data{
          attributes{
            publishedAt
            reading_time
            title
            slug
            short_description
            feature_image{
              data{
                attributes{
                  url
                }
              }
            }
            categories{
              data{
                attributes{
                  name
                }
              }
            }
            users_permissions_user{
              data{
                attributes{
                  username
                  image{
                      data{
                        attributes{
                          url
                        }
                      }
                    }
                }
              }
            }        
          }
        }
      }  
    }`;
const TOTAL_BLOGS = gql`
query TotalBlogsData{
  posts( pagination: { pageSize:250000}){
    data{
      attributes{
        title
        slug
      }
    }
  }
}`;

const HOME_DATA = gql`
    query HomeData {
      home{
        data{
          attributes{
            hero_section{
              id
              title
              sub_title
              description
              image{
                data{
                  id
                  attributes{
                    url
                  }
                }
              }
            } 
            
            cta_section{
              title
              sub_title
              buttons{
                button_text
                button_url
              }
            }
            faq_section{
              title
              sub_title
              questions{
                question
                answer
              }
              button{
                button_text
                button_url
              }
              faq_help{
                title
                sub_title
                image{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
            }
            all_in_one_finance {
              title
              sub_title
              buttons{
                button_url
                button_text
              }
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            newsletter{
              title
              sub_title
            }   
          }
        }
      }
    }`;
const FOOTER_DATA = gql`
query FooterData {
  footer{
      data{
         attributes{
         createdAt
         updatedAt
         publishedAt
         description
         copyright_disclaimer
         logo{
            data{
               id
               attributes{
                  name
                  caption
                  width
                  height
                  formats
                  url
               }
            }
         }
         nav_items{
            heading
            items{
               button_text
               button_url
            }
         }
         social_links{
            platform{
               button_text
               button_url
            }
         }
         }
      }
   }
}`;

export { HOME_DATA, BLOGS_DATA, TOTAL_BLOGS, BLOGPOST_DATA, CATEGORIES_LIST, CATEGORY_ITEM_DATA, FOOTER_DATA };


