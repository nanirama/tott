import Layout from "../components/layout";
import FeatureSection1 from "../components/Benifits/features1";
import FeatureSection2 from "../components/Benifits/features2";
import FeatureSection3 from "../components/Benifits/features3";

import Feature6 from "../components/Elements/Features6";

import CtaSection6 from "../components/Elements/CtaSection6";
import CtaSection8 from "../components/Elements/CtaSection8";

export default function Benifits() {
  return (
    <Layout>
      <FeatureSection1 />
      <FeatureSection2 />
      {/* <Feature6 /> */}
      <FeatureSection3 />
      <CtaSection6 />
      <CtaSection8 />
    </Layout>
  );
}
