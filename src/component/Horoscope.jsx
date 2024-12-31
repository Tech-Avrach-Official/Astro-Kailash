import bg from "../assets/planet.jpeg";
import Zodiac1 from "../assets/zodiac1.svg";
import Zodiac2 from "../assets/zodiac2.svg";
import Zodiac3 from "../assets/zodiac3.svg";
import Zodiac4 from "../assets/zodiac4.svg";
import Zodiac5 from "../assets/zodiac5.svg";
import Zodiac6 from "../assets/zodiac6.svg";
import Zodiac7 from "../assets/zodiac7.svg";
import Zodiac8 from "../assets/zodiac8.svg";
import Zodiac9 from "../assets/zodiac9.svg";
import Zodiac10 from "../assets/zodiac10.svg";
import Zodiac11 from "../assets/zodiac11.svg";

export default function Horoscope() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative"
      >
        
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        
        <div className="relative flex flex-col justify-center items-center p-5 space-y-5 text-white">
          <h6 className="text-5xl font-bold text-center">Horoscope</h6>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing alias dicta
            repellat magni sint odio <br className="md:ac" /> inventore voluptatibus suscipit?
            Numquam nobis distinctio illum laboriosam.
          </p>

          

          <div className="grid lg:grid-cols-6 lg:grid-rows-2  md:grid-cols-4  sm:grid-cols-3 sm:grid-rows-2 grid-cols-2 grid-rows-3 gap-4 md:gap-4 ">
            <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
              <img src={Zodiac1} alt="girl" />
              <h5 className="text-sm md:font-bold py-2">Aries</h5>
            </div>
            <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
              <img src={Zodiac11} alt="girl" />
              <h5 className="text-sm md:font-bold">Taurus</h5>
            </div>
            <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
              <img src={Zodiac2} alt="girl" />
              <h5 className="text-sm md:font-bold py-2">Aries</h5>
            </div>
            <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
              <img src={Zodiac3} alt="girl" />
              <h5 className="text-sm md:font-bold py-2">Cancer</h5>
            </div>
            <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
              <img src={Zodiac4} alt="girl" />
              <h5 className="text-sm md:font-bold py-2">Leo</h5>
            </div>
            <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
              <img src={Zodiac5} alt="girl" />
              <h5 className="text-sm md:font-bold py-2">Virgo</h5>
            </div>
            <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
              <img src={Zodiac6} alt="girl" />
              <h5 className="text-sm md:font-bold">Libra</h5>
            </div>
            <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
              <img src={Zodiac7} alt="girl" />
              <h5 className="text-sm md:font-bold">Scorpio</h5>
            </div>
            <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
              <img src={Zodiac8} alt="girl" />
              <h5 className="text-sm md:font-bold">Saggitarius</h5>
            </div>
            <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
              <img src={Zodiac9} alt="girl" />
              <h5 className="text-sm md:font-bold">Capricon</h5>
            </div>
            <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
              <img src={Zodiac10} alt="girl" />
              <h5 className="text-sm md:font-bold">Aquarius</h5>
            </div>
            <div className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105">
              <img src={Zodiac11} alt="girl" />
              <h5 className="text-sm md:font-bold">Pisces</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
