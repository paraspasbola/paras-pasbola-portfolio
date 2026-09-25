import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesTicker from "./components/ServicesTicker";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import WebsiteTypes from "./components/WebsiteTypes";
import FAQ from "./components/FAQ";

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <ServicesTicker />
      <WebsiteTypes />
      <Services />
      <Projects />
      <About />
      <Process />
      <WhyWorkWithMe />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;