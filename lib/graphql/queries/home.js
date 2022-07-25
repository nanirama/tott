import { gql } from "@apollo/client";

export const HOME_PAGE_DATA = gql`
  query {
    home {
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
          hero_section {            
            title
            description
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
          service_companies {
            title
            button {
              button_text
              button_url
              is_active
            }
            profiles {
              username
              position
              short_description
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
              facebook_profile_link
              instagram_profile_link
              twitter_profile_link
              linkedin_profile_link
              personal_website_link
            }
            free_trial_banner {
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
          }
          feature_style_one {
            title
            description
            features {
              title
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

          faq_section {
            title
            description
            questions {
              heading
              description
            }
            confusion_banner {
              title
              description
              button {
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
          }

          one_finance {
            title
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
          feature_style_two {
            title
            description
            features {
              title
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
          }
          feature_style_three {
            title
            description
            features {
              title
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
          }
          feature_style_four {
            title
            description
            features {
              title
              description
              action_buttons {
                button_text
                button_url
                is_active
              }
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
          feature_style_five {
            title
            description
            features {
              title
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
          feature_style_six {
            title
            description
            features {
              title
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
          feature_style_seven {
            title
            description

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

          integration_style_one {
            title
            description
            action_buttons {
              button_text
              button_url
              is_active
            }
            images {
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
          integration_style_two {
            title
            description
            integrations {
              title
              description
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
            title
            description
            stats_numbers {
              title
              url
              figures
            }
          }

          pricing_plans_style_one {
            title
            description
            action_buttons {
              button_url
              button_text
              is_active
            }
            plans {
              name
              billing_cycle
              price
              description
              action_buttons {
                button_text
                button_url
                is_active
              }
              plan_features {
                name
              }
              mark_popular
            }
          }
          pricing_plans_style_two {
            title
            description
            action_buttons {
              button_url
              button_text
              is_active
            }
            plans {
              name
              billing_cycle
              price
              description
              action_buttons {
                button_text
                button_url
                is_active
              }
              plan_features {
                name
              }
              mark_popular
            }
          }

          promotional_banner {
            title
            description
            action_buttons {
              button_text
              button_url
              is_active
            }
            images {
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
          promotional_banner_two {
            title
            key_features {
              name
            }
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
          promotional_banner_three {
            title
            key_features {
              name
            }
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
            testimonials {
              client_name
              client_company_name
              rating
              feedback
            }
          }
          testimonials {
            testimonial {
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
            company_logos {
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
          customers {
            banner {
              heading
              description
              action_buttons {
                button_text
                button_url
                is_active
              }
            }
            profiles {
              name
              company
              post
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
          testimonials_style_two {
            testimonial {
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
          }
          nominations {
            title
            company_images {
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
          client_companies {
            title
            company_images {
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
      }
    }
  }
`;
