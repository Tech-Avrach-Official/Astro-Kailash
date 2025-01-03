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

const zodiacSigns = [
  { id: 1, name: "Aries", imgSrc: Zodiac1 },
  { id: 2, name: "Taurus", imgSrc: Zodiac11 },
  { id: 3, name: "Gemini", imgSrc: Zodiac2 },
  { id: 4, name: "Cancer", imgSrc: Zodiac3 },
  { id: 5, name: "Leo", imgSrc: Zodiac4 },
  { id: 6, name: "Virgo", imgSrc: Zodiac5 },
  { id: 7, name: "Libra", imgSrc: Zodiac6 },
  { id: 8, name: "Scorpio", imgSrc: Zodiac7 },
  { id: 9, name: "Sagittarius", imgSrc: Zodiac8 },
  { id: 10, name: "Capricorn", imgSrc: Zodiac9 },
  { id: 11, name: "Aquarius", imgSrc: Zodiac10 },
  { id: 12, name: "Pisces", imgSrc: Zodiac11 },
];

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

        <div className="relative flex flex-col justify-center items-center py-20 space-y-5 text-white">
          <h6 className="text-5xl font-bold text-center">Horoscope</h6>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing alias dicta
            repellat magni sint odio <br className="md:block hidden" /> inventore voluptatibus
            suscipit? Numquam nobis distinctio illum laboriosam.
          </p>

          <div className="grid lg:grid-cols-6 lg:grid-rows-2 md:grid-cols-4 sm:grid-cols-3 sm:grid-rows-2 grid-cols-2 grid-rows-3 gap-4 md:gap-6">
            {zodiacSigns.map((zodiac) => (
              <div
                key={zodiac.id}
                className="p-4 flex justify-center items-center flex-col bg-zinc-500 bg-opacity-30 text-center rounded shadow hover:scale-105"
              >
                <img src={zodiac.imgSrc} alt={zodiac.name} />
                <h5 className="text-sm md:font-bold py-2">{zodiac.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
