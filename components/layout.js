import Header from "./header"
import Footer from "./footer"
import Seo from "./seo"

const Layout = ({ children, seo }) => (
  <>
    <Seo seo={seo}/>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout