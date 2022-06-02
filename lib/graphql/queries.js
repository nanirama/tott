import { gql } from '@apollo/client';

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
            features_section {
              title
              sub_title
              description
              first_image {
                data {
                  attributes {
                    url
                  }
                }
              }
              second_image {
                data {
                  attributes {
                    url
                  }
                }
              }
              features_list {
                title
                description
                url
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

export { HOME_DATA };


