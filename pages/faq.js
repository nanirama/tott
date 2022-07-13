import { ApolloClient, InMemoryCache } from "@apollo/client";
import Layout from "../components/layout";

import HelpSection from "../components/Faq/HelpSection";
import FaqSection1 from "../components/Faq/FaqSection1";
import Testimonial6 from "../components/Elements/Testimonials6";
import FaqSection2 from "../components/Faq/FaqSection2";
import CtaSection7 from "../components/Elements/CtaSection7";
import BottomBanners from "../components/Faq/BottomBanners";
import { FAQ_PAGE_DATA } from "../lib/graphql/queries/faq";

export default function Faq({ pageData }) {
  const {
    banner,
    support,
    faq_testimonial,
    frequently_questions,
    free_trial_banner,
  } = pageData;

  return (
    <Layout>
      <HelpSection data={banner || {}} />
      <FaqSection1 data={support || {}} />
      <Testimonial6 data={faq_testimonial || {}} />
      <FaqSection2 data={frequently_questions || {}} />
      <CtaSection7 data={free_trial_banner || {}} />
      <BottomBanners />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({ query: FAQ_PAGE_DATA });
  return {
    props: {
      pageData: data?.faq?.data?.attributes || {},
    },
  };
};
