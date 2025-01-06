import Zodiac1 from "../assets/zodiac1.svg";
import Zodiac2 from "../assets/zodiac2.svg";
import Zodiac3 from "../assets/zodiac3.svg";
import Zodiac4 from "../assets/zodiac4.svg";
import Zodiac5 from "../assets/zodiac5.svg";

const vastuBenefits = [
  {
    id: 1,
    imgSrc: Zodiac1,
    title: "Bringing in Good Fortune",
    description:
      "Following Vastu advice when it comes to property can help bring good fortune to the space",
  },
  {
    id: 2,
    imgSrc: Zodiac2,
    title: "Spread Positivity",
    description:
      "Following Vastu advice when it comes to property can help bring good fortune to the space",
  },
  {
    id: 3,
    imgSrc: Zodiac3,
    title: "Keeps Negativity at Bay",
    description:
      "Following Vastu advice when it comes to property can help bring good fortune to the space",
  },
  {
    id: 4,
    imgSrc: Zodiac4,
    title: "Harmonizing Energies",
    description:
      "Following Vastu advice when it comes to property can help bring good fortune to the space",
  },
  {
    id: 5,
    imgSrc: Zodiac5,
    title: "Healthy Relationships",
    description:
      "Following Vastu advice when it comes to property can help bring good fortune to the space",
  },
];

export default function Vastu() {
  return (
    <div className="py-10 md:py-20 px-5 lg:px-28 space-y-10 bg-white flex flex-col text-white">
      <h6 className="text-2xl text-yellow-600 text-center font-bold">Why Vastu Consultation is Crucial?</h6>
      <div className="flex items-center justify-center lg:justify-between lg:flex-nowrap flex-wrap gap-5">
        {vastuBenefits.map((benefit) => (
          <div
            key={benefit.id}
            className="p-5 w-[300px] lg:w-full flex justify-center items-center flex-col bg-[#020013] text-center rounded shadow hover:scale-105 duration-200"
          >
            <img src={benefit.imgSrc} alt={benefit.title} />
            <h5 className="text-sm md:font-bold py-3">{benefit.title}</h5>
            <p className="text-zinc-400 text-[12px]">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
