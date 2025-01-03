import Zodiac from "../component/Zodiac";
import Astrology from "../component/Astrology";
import Services from "../component/Services";
import Vastu from "../component/Vastu";
import CelestialPage from "../component/CelestialPage";
import ReadingsSection from "../component/ReadingsSection";
import FrontPage from "../component/FrontPage";

export default function Home() {
  return (
    <div>
     <FrontPage/>
      <Zodiac />
      <Astrology />
      {/* <Services /> */}
      <Vastu />
      <CelestialPage />
      <ReadingsSection />
    </div>
  );
}
