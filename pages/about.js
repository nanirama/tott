import { ApolloClient, InMemoryCache } from "@apollo/client";

import Layout from "../components/layout";
import MapSection from "../components/About/MapSection";
import Locations from "../components/About/locations";
import Team from "../components/About/OurTeam";
import Career1 from "../components/Elements/Career1";
import Contact from "../components/About/contact";
import Team2 from "../components/Elements/Team2";
import Stats from "../components/Elements/Stats2";
import Testimonial4 from "../components/Elements/Testimonials4";
import Team3 from "../components/Elements/Team3";
import Career2 from "../components/Elements/Career2";
import Testimonial5 from "../components/Elements/Testimonials5";
import { ABOUT_PAGE_DATA } from "../lib/graphql/queries/about";

export default function AboutUs({ pageData }) {
  const {
    title,
    sub_title,
    feature_image: {
      data: { attributes: mapImage },
    },
    contact,
    office_locations,
    our_team,
    first_jobs_section,
    team_section,
    growing_stats,
    testimonials,
    open_positions,
  } = pageData;
  return (
    <Layout>
      <MapSection
        title={title}
        subTitle={sub_title}
        mapImage={mapImage}
        contacts={contact}
      />
      <Locations officeLocations={office_locations} />
      <Team2 ourTeam={our_team} />
      <Career1 currentJobs={first_jobs_section} />
      <Contact />
      <Team teamInfo={team_section} />
      <Stats stats={growing_stats} />
      <Testimonial4 testimonials={testimonials} />
      <Team3 teamInfo={team_section} />
      <Career2 openPositions={open_positions} />
      <Testimonial5 />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({ query: ABOUT_PAGE_DATA });
  return {
    props: {
      pageData: data?.about?.data?.attributes,
    },
  };
};
