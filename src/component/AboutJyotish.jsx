import chakkar from "../assets/chakkars.png";
import cardt from "../assets/cardt.jpeg";

export default function AboutJyotish() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-20 py-10 md:py-20 px-5 xl:px-28">
      <div className="lg:w-1/2 h-full">
        <img src={cardt} alt="" className="w-full h-full" />
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-3xl md:text-4xl">
          About <span className="font-bold ">Jyotish</span>
        </h3>
        <h2 className="text-3xl font-bold mt-5 md:mt-10 text-yellow-600">
          +1800-123-123
        </h2>
        <h2 className="text-xl mt-2 font-bold">
          Horoscope Revels the will of god
        </h2>

        <p className="mt-2 text-gray-600 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi
          atque nam officiis quod mollitia culpa omnis dolor itaque hic minima
          culpa omnis dolor itaque hic minima ad, veniam dolorum! A expedita ea
          nihil dolore Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          suscipit explicabo sapiente, possimus illo itaque aliquid quis non
          omnis assumenda voluptates totam ea quas ex inventore vitae, facere
          reiciendis impedit!
        </p>
        <button className="rounded-3xl bg-yellow-600 text-white py-2 px-7 mt-5 ">
          Read More
        </button>
      </div>
    </div>
  );
}
