import girl from "../assets/girl.jpeg";

const services = [
  { id: 1, title: "General Consultation", imgSrc: girl },
  { id: 2, title: "Personal Life Advice", imgSrc: girl },
  { id: 3, title: "Annual Forecast", imgSrc: girl },
  { id: 4, title: "Work, Career, Finance", imgSrc: girl },
  { id: 5, title: "Forecast of Future", imgSrc: girl },
  { id: 6, title: "Current Life Situation", imgSrc: girl },
];

export default function Services() {
  return (
    <div className="py-20 px-32 space-y-10 bg-slate-50 flex flex-col">
      <div className="flex flex-col justify-center items-center space-y-5">
        <button className="bg-[rgb(217,158,54)] py-2 px-3 rounded-3xl text-slate-900 uppercase">
          Services
        </button>
        <h3 className="text-yellow-600 text-3xl text-center font-bold">
          Astrology is just a finger <br /> pointing at reality
        </h3>
      </div>
      <div className="grid md:grid-cols-6 md:grid-rows-1 sm:grid-cols-3 sm:grid-rows-2 grid-cols-2 grid-rows-3 gap-4 md:gap-6 md:px-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-4 bg-gray-200 text-center rounded shadow hover:scale-105 duration-200"
          >
            <img src={service.imgSrc} alt={service.title} />
            <h5 className="text-black mt-2 text-sm md:font-bold">
              {service.title}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
