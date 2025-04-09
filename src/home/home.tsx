import { Hero } from "../components/home/Hero";
import { Features } from "../components/home/Features";
import { Comparison } from "../components/home/Comparison";
import ChoosePath from "../components/home/ChoosePath";

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Comparison />
      <ChoosePath />
    </>
  );
};
