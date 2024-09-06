import Hero from "../../components/shared/Hero/index";
import Stats from "../../components/shared/Stats/index";
import News from "../../components/shared/News/index";
import Faq from "../../components/shared/FAQ/index";
import Testimonials from "../../components/shared/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Testimonials/>
      {/* <Stats /> */}
      <News />
      <Faq />
    </>
  );
};

export default Home;
