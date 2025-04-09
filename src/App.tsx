import "./App.css";
import ChoosePath from "./components/ChoosePath";
import { Comparison } from "./components/Comparison";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <Hero />
      <Features />
      <Comparison />
      <ChoosePath />
    </>
  );
}

export default App;
