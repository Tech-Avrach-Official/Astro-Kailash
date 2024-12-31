import plan from "../assets/plane.svg";
export default function WorkingProcess() {
  return (
    <div className="bg-secondary space-y-6 py-6 px-5 md:px-10 lg:px-20 xl:px-40">
      <h5 className="text-accent text-center text-lg">How we Works</h5>
      <h1 className="text-white text-center text-5xl font-bold">
        Our Working Process
      </h1>
      <p className="text-gray-600 text-center md:px-56">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic magni
        illum molestias vel dignissi laboriosam, minima quas perferendis
        corrupti sapiente neque!
      </p>
      <div className="grid md:grid-cols-4 gap-4 grid-cols-2">

        <div className="border-2 border-accent p-5  space-y-3">
         <div className="md:px-20"> <img src={plan} /></div>
          <h2 className="text-white text-center font-semibold text-2xl">Choose Your Plan</h2>
          <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
       <div className="border-2 border-accent p-5  space-y-3">
         <div className=" md:px-20"> <img src={plan} /></div>
          <h2 className="text-white text-center font-semibold text-2xl">Make Appointment</h2>
          <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="border-2 border-accent p-5  space-y-3">
         <div className="md:px-20"> <img src={plan} /></div>
          <h2 className="text-white text-center font-semibold text-2xl">Pay Your Plan</h2>
          <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="border-2 border-accent p-5  space-y-3">
         <div className="md:px-20"> <img src={plan} /></div>
          <h2 className="text-white text-center font-semibold text-2xl">Get Amazing Plan</h2>
          <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
    </div>
  );
}
