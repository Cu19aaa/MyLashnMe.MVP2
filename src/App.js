import TextParallaxContentExample from "./components/TextParallaxContent";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import AboutTheBusiness from "./components/AboutTheBusiness"
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
    return (
        <div>
          <Navbar />
          <Hero/>
          <AboutMe/>
          <AboutTheBusiness/>
          
          <div style={{ paddingTop: '80px' }}>
            <TextParallaxContentExample />
          </div>
          <Contact/>
          <Footer/>
        </div>
    );
}

export default App;
