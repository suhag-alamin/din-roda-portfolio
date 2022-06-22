import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Mission from "../Mission/Mission";
import Portfolio from "../Portfolio/Portfolio";
import Reviews from "../Reviews/Reviews";
import TechSkills from "../TechSkills/TechSkills";

const Home = ({ transparent }) => {
  return (
    <div>
      <Banner transparent={transparent} />
      <TechSkills />
      <Portfolio />
      <Mission />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
