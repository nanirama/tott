import { gql } from "@apollo/client";

export const FAQ_PAGE_DATA = gql`
  query {
    faq {
      data {
        id
        attributes {
          banner {
            title
            sub_title
            action_buttons {
              button_text
              button_url
              is_active
            }
          }
          support {
            title
            description
            questions {
              question
              answer
            }
            confusion {
              heading
              description
              get_in_touch_link
            }
          }
          faq_testimonial {
            testimonial {
              client_name
              client_company_name
              rating
              feedback
              image {
                data {
                  id
                  attributes {
                    width
                    height
                    name
                    caption
                    alternativeText
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
                  width
                  height
                  name
                  caption
                  alternativeText
                  url
                  formats
                }
              }
            }
          }
          frequently_questions {
            heading
            description
            questions {
              heading
              description
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
            image {
              data {
                id
                attributes {
                  width
                  height
                  name
                  caption
                  alternativeText
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
