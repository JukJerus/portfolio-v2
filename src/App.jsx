import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import { useState, useEffect } from "react";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  return (
    // <div>
    //   {loading ? (
    //     <div className="flex justify-center items-center h-screen bg-gray-900 text-white text-xl">
    //       <Loading />
    //     </div>
    //   ) : (
    <div className="bg-linear-to-b from-gray-950 to-gray-800">
      <Navbar />
      <Jumbotron />
      <About />
      <Skill />
      <Project />
      <Certificate />
      <Contact />
      <Footer />
    </div>
    //   )}
    // </div>
  );
}

export default App;
