import Layout from "../components/layout";
import Link from "next/link";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Faq from "../components/Home/Faq";
import AllInOneFinance from "../components/Home/AllInOneFinance";
import Newsletter from "../components/Home/Newsletter";
import Team from "../components/Home/TeamSection";
import Features1 from "../components/Elements/Features1";
import Features2 from "../components/Elements/Features2";
import Features3 from "../components/Elements/Features3";
import Features4 from "../components/Elements/Features4";
import Features5 from "../components/Elements/Features5";
import Features6 from "../components/Elements/Features6";
import Features7 from "../components/Elements/Features7";

import Pricing1 from "../components/Elements/pricing1";
import Pricing2 from "../components/Elements/pricing2";
import CtaSection1 from "../components/Elements/CtaSection1";
import CtaSection2 from "../components/Elements/CtaSection2";
import CtaSection3 from "../components/Elements/CtaSection3";
import Integration1 from "../components/Elements/integrations1";
import Integrations2 from "../components/Elements/integrations2";

import Stats from "../components/Elements/Stats";

import Testimonial1 from "../components/Elements/Testimonials1";
import Testimonial2 from "../components/Elements/Testimonials2";
import Testimonial3 from "../components/Elements/Testimonials3";

import Client1 from "../components/Elements/Client1";
import Client2 from "../components/Elements/Client2";

import { HOME_PAGE_DATA } from "../lib/graphql/queries/home";

export default function Home({ pageData }) {
  const {
    hero_section,
    service_companies,
    feature_style_one,
    faq_section,
    one_finance,
    feature_style_two,
    feature_style_three,
    feature_style_four,
    feature_style_five,
    feature_style_six,
    feature_style_seven,
    integration_style_one,
    integration_style_two,
    stats,
    pricing_plans_style_one,
    pricing_plans_style_two,
    promotional_banner,
    promotional_banner_two,
    promotional_banner_three,
    seo
  } = pageData;
  console.log("hmepage pageData", pageData)
  return (
    <Layout seo={seo}>
      <Hero data={hero_section || {}} />
      <Team data={service_companies || {}} />
      <Features data={feature_style_one || {}} />
      <Faq data={faq_section || {}} />
      <AllInOneFinance data={one_finance || {}} />
      <Features1 data={feature_style_two || {}} />
      <Features2 data={feature_style_three || {}} />
      <Features3 data={feature_style_four || {}} />
      <Features4 data={feature_style_five || {}} />
      <Features5 data={feature_style_six || {}} />
      <Features6 data={feature_style_seven || {}} />
      <Features7 />

      <Integration1 data={integration_style_one || {}} />
      <Integrations2 data={integration_style_two || {}} />
      <Stats data={stats || {}} />
      <Pricing1 data={pricing_plans_style_one || {}} />
      <Pricing2 data={pricing_plans_style_two || {}} />
      <CtaSection1 data={promotional_banner || {}} />
      <CtaSection2 data={promotional_banner_two || {}} />
      <CtaSection3 data={promotional_banner_three || {}} />
      <Testimonial1 />
      <Testimonial2 />
      <Testimonial3 />
      <Client2 />
      <Client1 />
      {/* {newsletter && <Newsletter data={newsletter} />} */}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({ query: HOME_PAGE_DATA });

  return {
    props: {
      pageData: data.home?.data?.attributes || {},
    },
  };
};
