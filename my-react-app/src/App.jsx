import React from "react";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Contact from "./component/Contact";
import Skills from "./component/Skills";
import Education from "./component/Eduction"; 
import Project from "./component/Project";

function App() {
  return (
    <> 
      <Nav />
      <Main />
      <Project />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </> 
  );
}

export default App;
