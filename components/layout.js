import Header from "./header"
import Seo from "./seo"



const Layout = ({ children, seo }) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout