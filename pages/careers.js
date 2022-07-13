import Layout from "../components/layout";
import Career1 from "../components/Elements/Career1";
import Career2 from "../components/Elements/Career2";
import Career3 from "../components/Elements/career3";
import Team3 from "../components/Elements/Team3";
import Stats3 from "../components/Elements/Stats3";
import Philosophy from "../components/Elements/Philosophy";
import Career4 from "../components/Elements/career4";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CAREER_PAGE_DATA } from "../lib/graphql/queries/careers";

export default function AboutUs({ pageData }) {
  const {
    open_positions,
    current_jobs,
    jobs_grid_section,
    team_section,
    stats,
    mission_section,
    seo
  } = pageData;
  return (
    <div className="lg:mt-20 mt-16">
      <Layout seo={seo}>
        <Career2 openPositions={open_positions} />
        <Career1 currentJobs={current_jobs} />
        <Career3 currentJobs={jobs_grid_section} />
        <Team3 teamInfo={team_section} />
        <Stats3 stats={stats} />
        <Philosophy ourMission={mission_section} />
        <Career4 openPositions={open_positions} />
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({ query: CAREER_PAGE_DATA });
  return {
    props: {
      pageData: data?.career?.data?.attributes,
    },
  };
};
