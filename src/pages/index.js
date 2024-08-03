import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Navbar from "../components/navBar";
import Hero from "../components/hero";
import Info from "../components/info";
import Services from "../components/service";
import Footer from "../components/footer";

const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="h-screen ">
      <Navbar />
      <Hero />
      <Info />
      <Services />
      <Footer />
    </div>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
