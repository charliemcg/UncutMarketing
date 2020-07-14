import Header from "../components/Header/";
import Main from "../components/Main";
import Services from "../components/Services";
import Quote from "../components/Quote";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/sass/universalStyles.scss";

const IndexPage = () => (
  <div id="universal-styles">
    <Header />
    <Main />
    <Services />
    <Quote />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default IndexPage;
