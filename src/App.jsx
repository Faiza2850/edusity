import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import {Programs} from './components/Programs/Programs'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container"> <Programs/></div>
    </>
  );
}

export default App;
