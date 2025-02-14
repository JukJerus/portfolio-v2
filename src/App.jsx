import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Skill from './components/Skill';
function App() {
  return (
    <div className="h-full bg-linear-to-b  from-gray-950 to-gray-800">
      <Navbar />
      <Jumbotron />
      <About />
      <Skill />
    </div>
  );
}

export default App
