// import AboutJyotish from "../component/AboutJyotish";
import BackGround from "../component/BackGround";
import OurServices from "../component/OurServices";
import LatestArticles from "../component/LatestArticles";
import Horoscope from "../component/Horoscope";
import WorkingProcess from "../component/WorkingProcess";
import Testinominal from "../component/Testinominal";
import AboutJyotish from "../component/AboutJyotish";
import CelestialPage from "../component/CelestialPage";
import { Feature } from "../component/Feature";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <BackGround title="About Us" />
      <AboutJyotish />
      <CelestialPage />
      <Feature />
      <WorkingProcess />
      <Testinominal/>
    </div>
  );
}
