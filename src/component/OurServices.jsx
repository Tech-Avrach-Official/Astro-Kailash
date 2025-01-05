
import service from "../assets/service.png";
import hand from "../assets/hand.png";
import img from "../assets/download.svg";
import img1 from "../assets/download(1).svg";
import img2 from "../assets/download(2).svg";
import img3 from "../assets/download(3).svg";
import img4 from "../assets/download(4).svg";
import img5 from "../assets/download(5).svg";

export default function OurServices() {
  return (
    <div className="bg-[#020013] py-10 md:py-20 px-5 md:px-10 lg:px-20 xl:px-40">
      <h2 className="text-center text-white font-semibold text-3xl md:text-4xl lg:text-5xl">
        Our Services
      </h2>
      <hr className="w-24 md:w-36 lg:w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5" />
      <p className="text-center text-[#494966] pb-5 text-sm md:text-base lg:text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, iure?
        Dolorum repudiandae, <br className="hidden md:block" />
        soluta quaerat excepturi cupiditate eveniet iusto corporis ab
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-10">
        {/* Left Column */}
        <div className="flex flex-col space-y-6">
          <div className="border-accent border-2 rounded-md flex justify-between items-center">
            <div className="flex flex-col justify-start p-3">
              <h3 className="text-white text-lg lg:text-xl">Astrology Tips</h3>
              <p className="text-[#494966] text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
            <div className="p-4">
              <img src={img5} alt="Astrology Tips icon" className="h-16 lg:h-20" />
            </div>
          </div>
          <div className="border-accent border-2 rounded-md flex justify-between items-center">
            <div className="flex flex-col justify-start p-3">
              <h3 className="text-white text-lg lg:text-xl">Gem Stone</h3>
              <p className="text-[#494966] text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
            <div className="p-4">
              <img src={img2} alt="Astrology Tips icon" className="h-16 lg:h-20" />
            </div>
          </div>
          <div className="border-accent border-2 rounded-md flex justify-between items-center">
            <div className="flex flex-col justify-start p-3">
              <h3 className="text-white text-lg lg:text-xl">Vastu Tips</h3>
              <p className="text-[#494966] text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
            <div className="p-4">
              <img src={img1} alt="Astrology Tips icon" className="h-16 lg:h-20" />
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="w-full h-full flex items-center justify-center relative "
        style={{
          backgroundImage: `url(${service})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        >
          {/* <img src={service} alt="Main Service Graphic" className="mx-auto" /> */}
          <img
            src={hand}
            alt="Hand Graphic"
            className="h-full"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-6">
          <div className="border-accent border-2 rounded-md flex justify-between items-center lg:flex-row-reverse">
            <div className="flex flex-col justify-start p-3 lg:text-right">
              <h3 className="text-white text-lg lg:text-xl">Health Tips</h3>
              <p className="text-[#494966] text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
            <div className="p-4">
              <img src={img} alt="Astrology Tips icon" className="h-16 lg:h-20" />
            </div>
          </div>
          <div className="border-accent border-2 rounded-md flex justify-between items-center lg:flex-row-reverse">
            <div className="flex flex-col justify-start p-3 lg:text-right">
              <h3 className="text-white text-lg lg:text-xl">Numerology Tips</h3>
              <p className="text-[#494966] text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
            <div className="p-4">
              <img src={img4} alt="Astrology Tips icon" className="h-16 lg:h-20" />
            </div>
          </div>
          <div className="border-accent border-2 rounded-md flex justify-between items-center lg:flex-row-reverse">
            <div className="flex flex-col justify-start p-3 lg:text-right">
              <h3 className="text-white text-lg lg:text-xl">Kundli Dosha </h3>
              <p className="text-[#494966] text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
            <div className="p-4">
              <img src={img3} alt="Astrology Tips icon" className="h-16 lg:h-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
