import Layout from "../components/layout"

import GetInTouchSection from "../components/Contact/GetInTouch"
import Contactussection from "../components/Contact/ContactUs"
import Lovetohearsection from "../components/Contact/LoveToHear"
import MapSection from "../components/Elements/MapSection"
import Locations from "../components/Elements/locations"
import LetsLevelUpsection from "../components/Contact/LetsLevelup"
import FriendlyTeamsection from "../components/Contact/FriendlyTeam"
import FriendlyTeamsection2 from "../components/Contact/FriendlyTeam2"

export default function Contact() {
    return (
        <Layout>
            <GetInTouchSection />
            <Contactussection />
            <Lovetohearsection />
            <MapSection />
            <Locations />
            <LetsLevelUpsection />
            <FriendlyTeamsection />
            <FriendlyTeamsection2 />
        </Layout>
    )

}