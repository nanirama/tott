import Layout from "../components/layout"

import HelpSection from "../components/Faq/HelpSection"
import FaqSection1 from "../components/Faq/FaqSection1"
import Testimonial6 from "../components/Elements/Testimonials6"
import FaqSection2 from "../components/Faq/FaqSection2"
import CtaSection7 from "../components/Elements/CtaSection7";
import BottomBanners from "../components/Faq/BottomBanners"

export default function Faq() {
    return (
        <Layout>
            <HelpSection />
            <FaqSection1 />
            <Testimonial6 />
            <FaqSection2 />
            <CtaSection7 />
            <BottomBanners />
        </Layout>

    )
}