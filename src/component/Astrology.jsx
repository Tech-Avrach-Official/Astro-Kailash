import chakkar from "../assets/chakkar.png";
import bg from "../assets/bg.jpg";
export default function Astrology() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 px-5 sm:px-10 xl:px-28 py-10 md:py-20 bg-[#020013]"
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="flex justify-center items-center">
        <img src={chakkar} alt="" className="w-[30rem]" />
      </div>
      <div >
        <h3 className="text-white text-3xl lg:text-5xl font-bold text-center sm:text-start">We know Everthing About Astrology</h3>
        {/* <h3 className="text-white text-2xl sm:text-5xl font-bold text-center px-9 sm:text-start ">About Astrology</h3> */}
        <p className="text-gray-400 mt-5 text-sm md:text-lg text-center sm:text-start ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi
          atque nam officiis quod mollitia culpa omnis dolor itaque hic minima
          ad, veniam dolorum! A expedita ea nihil dolorem placeat? quod mollitia culpa omnis dolor itaque hic minima
          ad, veniam dolorum! A expedita ea nihil dolore 
          Lorem ipsum dolor sit amet.
        </p>
        <div className="flex justify-center md:justify-normal">
        <button className="rounded-3xl mt-5 bg-[rgb(217,158,54)] text-white py-2 px-4">Read More</button>
        </div>
      </div>
    </div>
  );
}
