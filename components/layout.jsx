
import Footer from "./footer"
import Header from "./header"
import TopNav from "./topnav"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <TopNav />
      { children}
      <Footer />
    </div>
  )
}

export default Layout