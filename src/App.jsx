import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
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
    </div>
    //   )}
    // </div>
  );
}

export default App;
