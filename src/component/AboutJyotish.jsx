
import chakkar from "../assets/chakkars.png";

export default function AboutJyotish() {
  return (
    <div className="md:grid md:grid-cols-2 md:py-10 py-5">
      <div className="flex justify-center items-center px-4">
        <img src={chakkar} alt="" className="lg:h-[80vh]" />
      </div>
      <div className="flex flex-col items-center md:items-start py-4 ">
        <h3 className=" text-2xl sm:text-5xl font-normal px-9 underline sm:text-start">
          About <span className="font-bold ">Jyotish</span>
        </h3>
        <h2 className="text-purple-900 md:text-5xl md:font-semibold text-center md:pl-8 md:pt-20 md:px-16 p-2 text-2xl sm:text-start ">+1800-123-123</h2>
        <h2 className="text-xl sm:text-3xl px-9 md:pt-8 font-bold sm:text-start"> Horoscope Revels the will of god</h2>

        <p className="text-gray-600 md:text-xl text-center md:pl-8 md:pb-10 md:pt-7  md:px-16 p-2 sm:text-start ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi
          atque nam officiis quod mollitia culpa omnis dolor itaque hic minima
          
          culpa omnis dolor itaque hic minima ad, veniam dolorum! A expedita ea
          nihil dolore Lorem ipsum dolor sit amet.
          <br/>
          <br/>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit explicabo sapiente, possimus illo itaque aliquid quis non omnis assumenda voluptates totam ea quas ex inventore vitae, facere reiciendis impedit!
        </p>
        <button className="rounded-3xl bg-purple-900 hover:bg-purple-400 hover:text-black text-white py-2 px-7 border-2 md:ml-7 ">
          Read More
        </button>
      </div>
    </div>
  );
}
