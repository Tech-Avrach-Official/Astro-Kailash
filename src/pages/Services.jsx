import React from "react";
import BackGround from "../component/BackGround";
import AboutJyotish from "../component/AboutJyotish";
import OurServices from "../component/OurServices";
import CelestialPage from "../component/CelestialPage";
import WorkingProcess from "../component/WorkingProcess";
import { Feature } from "../component/Feature";
import LatestArticles from "../component/LatestArticles";
import Horoscope from "../component/Horoscope";
import Testinominal from "../component/Testinominal";

const Services = () => {
  return (
    <div>
      <BackGround title="Services" />
      <LatestArticles />
      <Horoscope />
      <WorkingProcess />
      <OurServices />
      <Testinominal />
    </div>
  );
};

export default Services;
