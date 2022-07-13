import { gql } from "@apollo/client";

export const CAREER_PAGE_DATA = gql`
  query {
    career {
      data {
        id
        attributes {
          seo{
              metaTitle
              metaDescription
              preventIndexing
              sharedImage{
                media{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
            }
          open_positions {
            heading
            description
            jobs {
              data {
                id
                attributes {
                  title
                  slug
                  type
                  isThisJobIsRemote
                  location
                  salary_range
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
          current_jobs {
            heading
            short_description
            jobs {
              data {
                id
                attributes {
                  title
                  slug
                  type
                  isThisJobIsRemote
                  location
                  salary_range
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
            banner {
              data {
                id
                attributes {
                  name
                  caption
                  alternativeText
                  width
                  height
                  url
                  formats
                }
              }
            }
          }
          jobs_grid_section {
            heading
            short_description
            jobs {
              data {
                id
                attributes {
                  title
                  slug
                  type
                  isThisJobIsRemote
                  location
                  salary_range
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
            banner {
              data {
                id
                attributes {
                  name
                  caption
                  alternativeText
                  width
                  height
                  url
                  formats
                }
              }
            }
          }
          team_section {
            heading
            short_description
            buttons {
              button_text
              button_url
              is_active
            }
            profiles {
              username
              post
              short_description
              facebook_profile_link
              linkedin_profile_link
              instagram_profile_link
              twitter_profile_link
              personal_website_link
              image {
                data {
                  id
                  attributes {
                    name
                    caption
                    alternativeText
                    width
                    height
                    url
                    formats
                  }
                }
              }
            }
          }
          stats {
            heading
            figures
          }
          mission_section {
            heading
            description
            action_buttons {
              button_text
              button_url
              is_active
            }
            image {
              data {
                id
                attributes {
                  name
                  caption
                  alternativeText
                  width
                  height
                  url
                  formats
                }
              }
            }
          }
          seo {
            metaTitle
            metaDescription
            sharedImage {
              alt
              media {
                data {
                  id
                  attributes {
                    name
                    caption
                    alternativeText
                    width
                    height
                    url
                    formats
                  }
                }
              }
            }
            keywords
            preventIndexing
          }
        }
      }
    }
  }
`;
