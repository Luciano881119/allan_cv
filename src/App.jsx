import { useState } from "react";
import "./App.css";
import HeadShotBio from "./components/HeadShotBio";
import { TimeLineAccordion } from "./components/TimeLineAccordion";
import Bio from "./components/Bio";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeadShotBio />
      <Bio />
      <TimeLineAccordion />
      <Footer/>
    </>
  );
}

export default App;
