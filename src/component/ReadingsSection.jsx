import natal from "../assets/cardt.jpeg";
import card from "../assets/tarot.jpeg";
import ball from "../assets/ball.jpeg";

const ReadingsSection = () => {
  return (
    <div className="bg-[#020013] text-black py-16 px-4 lg:px-28">
      <h5 className="text-yellow-600 text-xl font-semibold">SERVICES</h5>
      <div className="flex items-center justify-between py-6 lg:flex-row flex-col">
        <h5 className="text-4xl text-white font-serif pb-3">
          Discover Your Path in the stars with Us
        </h5>
        <button className="border-yellow-600 border-2 px-4 py-2 rounded-lg bg-yellow-600 text-white ">
          See All Services
        </button>
      </div>
      <div className="">
        {/* Natal Chart Readings */}
        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-10">
          {/* <h2 className="text-green-400 text-lg font-semibold lg:w-1/12">01</h2> */}
          <div className="w-full lg:w-1/2 flex gap-20">
            <div className="text-yellow-600 text-2xl font-bold">
              01
            </div>
            <div className="lg:pr-20">
            <h3 className="text-2xl text-white font-bold">Natal Chart Readings</h3>
            <p className="text-gray-300">
              We generate your natal chart and interpret the positions of the
              planets, signs, and houses to give you insights into your
              personality, strengths, weaknesses, and life path.
            </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={natal}
              alt="Natal Chart"
              className="rounded-lg w-full h-[350px] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center mt-20 gap-10">
          {/* <h2 className="text-green-400 text-lg font-semibold lg:w-1/12">01</h2> */}
          <div className="w-full lg:w-1/2">
            <img
              src={natal}
              alt="Natal Chart"
              className="rounded-lg w-full h-[350px] object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 flex gap-20">
            <div className="text-yellow-600 text-2xl font-bold">
              02
            </div>
            <div className="lg:pr-20">
            <h3 className="text-2xl text-white font-bold">Natal Chart Readings</h3>
            <p className="text-gray-300">
              We generate your natal chart and interpret the positions of the
              planets, signs, and houses to give you insights into your
              personality, strengths, weaknesses, and life path.
            </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-20 gap-10">
          {/* <h2 className="text-green-400 text-lg font-semibold lg:w-1/12">01</h2> */}
          <div className="w-full lg:w-1/2 flex gap-20">
            <div className="text-yellow-600 text-2xl font-bold">
              03
            </div>
            <div className="lg:pr-20">
            <h3 className="text-2xl text-white font-bold">Natal Chart Readings</h3>
            <p className="text-gray-300">
              We generate your natal chart and interpret the positions of the
              planets, signs, and houses to give you insights into your
              personality, strengths, weaknesses, and life path.
            </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={natal}
              alt="Natal Chart"
              className="rounded-lg w-full h-[350px] object-cover"
            />
          </div>
        </div>

        {/* Compatibility Readings */}
        
      </div>
    </div>
  );
};

export default ReadingsSection;
