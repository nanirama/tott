import Layout from "../components/layout"
import Career1 from "../components/Elements/Career1"
import Career2 from "../components/Elements/Career2"
import Career3 from "../components/Elements/career3"
import Team3 from "../components/Elements/Team3"
import Stats3 from "../components/Elements/Stats3"
import Philosophy from "../components/Elements/Philosophy"
import Career4 from "../components/Elements/career4"

export default function AboutUs() {
  return (
    <div className="lg:mt-20 mt-16">
      <Layout>
        <Career2 />
        <Career1 />
        <Career3 />
        <Team3 />
        <Stats3 />
        <Philosophy />
        <Career4 />
      </Layout>
    </div>
  )
}
