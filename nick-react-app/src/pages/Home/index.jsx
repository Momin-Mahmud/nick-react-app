import FAQ from "./FAQ";
import Hero from "./Hero";
import News from "./News";
import Stats from "./Stats";
const Home = () => {
  return (
    <div className="">
      <Hero />
      <Stats/>
      <News />
      <FAQ/>
    </div>
  );
};

export default Home;
