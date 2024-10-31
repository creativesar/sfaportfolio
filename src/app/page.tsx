import Hero from "./Hero/page";
import About from "./About/page";
import Services from "./Services/page";
import Portfolio from "./Portfolio/page";
import Testimonials from "./Testimonials/page";
import Contact from "./Contact/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
