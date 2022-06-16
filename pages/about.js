import Layout from "../components/layout"
import MapSection from "../components/About/MapSection"
import Locations from "../components/About/locations"
import Team from "../components/About/OurTeam"

import Career1 from "../components/Elements/Career1"
import Contact from "../components/About/contact"

import Team2 from "../components/Elements/Team2"
import Stats from "../components/Elements/Stats2"
import Testimonial4 from "../components/Elements/Testimonials4"
import Team3 from "../components/Elements/Team3"

import Career2 from "../components/Elements/Career2"

import Testimonial5 from "../components/Elements/Testimonials5";

export default function AboutUs() {
  return (
    <Layout>  
       
      <MapSection />
      <Locations />
      <Team2 />
      <Career1 />
      <Contact />
      <Team/>  
      <Stats />
      <Testimonial4 /> 
      <Team3/>
      <Career2/>
      <Testimonial5 />
    </Layout>
  )
}
