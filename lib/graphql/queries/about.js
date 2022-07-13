import { gql } from "@apollo/client";

export const ABOUT_PAGE_DATA = gql`
  query {
    about {
      data {
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
          title
          sub_title
          feature_image {
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
          contact {
            title
            sub_title
            phone_or_email
          }
          office_locations {
            title
            sub_title
            locations {
              country
              location
            }
          }
          our_team {
            title
            sub_title
            team_member {
              profile_image {
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
              name
              post
            }
          }
          first_jobs_section {
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
          growing_stats {
            title
            sub_title
            stats_card {
              title
              sub_title
              figures
            }
          }
          testimonials {
            client_name
            client_company_name
            rating
            feedback
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
          free_trial_banner {
            heading
            description
            action_buttons {
              button_text
              button_url
              is_active
            }
          }
        }
      }
    }
  }
`;
