import plan from "../assets/plane.svg";
import girl from "../assets/girl.jpeg";

const workingSteps = [
  {
    id: 1,
    title: "Choose Your Plan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imgSrc: plan,
  },
  {
    id: 2,
    title: "Make Appointment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imgSrc: plan,
  },
  {
    id: 3,
    title: "Pay Your Plan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imgSrc: plan,
  },
  {
    id: 4,
    title: "Get Amazing Plan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imgSrc: plan,
  },
];

export default function WorkingProcess() {
  return (
    <div className="bg-white space-y-6 py-20 px-40">
      <h5 className="text-yellow-600 text-center text-lg">How we Works</h5>
      <h1 className="text-black text-center text-5xl font-bold">
        Our Working Process
      </h1>
      <p className="text-gray-600 text-center md:px-56">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic magni
        illum molestias vel dignissi laboriosam, minima quas perferendis
        corrupti sapiente neque!
      </p>
      <div className="grid md:grid-cols-4 gap-4 grid-cols-2">
        {workingSteps.map((step) => (
          <div
            key={step.id}
            className="relative pt-7"
          >
           <div className="border-2  border-yellow-600 px-5 py-8 space-y-5">
           <div>
              <img src={girl} className="w-20 h-20 mx-auto" alt={step.title} />
            </div>
            <h2 className="text-yellow-600 text-center font-serif font-semibold text-2xl">
              {step.title}
            </h2>
            <p className="text-gray-600 text-lg line-clamp-2 text-center ">
              {step.description}
            </p>
           </div>
           <div className="absolute top-0 left-5 h-14 w-14 bg-yellow-600 flex items-center justify-center">
            <h2 className="text-2xl text-white font-bold">0{step.id}</h2>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
}
