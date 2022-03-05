import React, { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Navigation from "./Navigation";
import Resume from "./Resume";

const Home = () => {
  const [scroll, SetScroll] = useState();

  useEffect(() => {
    return scroll
      ? document
          .getElementById(scroll)
          .scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          })
      : null;
  }, [scroll]);

  return (
    <>
      <div id="home" className="App flex">
        <div className="bg-[#262526] w-72 fixed h-full">
          <Navigation scroll={scroll} SetScroll={SetScroll} />
        </div>
        <div className="bg-[#1e1e1e] h-full ml-72 w-full">
          <Header scroll={scroll} SetScroll={SetScroll} />
          <About id="About" />
          <Contact id="Contact" />
          <Resume id="Resume" />
          {/* <Projects id="Projects"/> */}
        </div>
      </div>
    </>
  );
};

export default Home;
