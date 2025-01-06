import room from '../assets/room.jpeg'
function CelestialPage() {
  return (
    <div className="bg-white py-10 md:py-20 px-5 lg:px-28 text-black">
      <section className="flex justify-center">
        <img
          src={room}
          alt="Astrology chart with crystals"
          className="rounded-lg h-[300px] md:h-[500px] shadow-lg w-full "
          />
      </section>
          {/* Header Section */}
      {/* <section className="text-center ">
        <h1 className="text-3xl md:text-3xl text-start mt-2">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dignissimos est atque quasi nulla rem eaque repellat. Quos, est dolorem.
        </h1>
      </section> */}

      {/* Commitment Section */}
      <section className="flex flex-col md:flex-row justify-center gap-8 mt-10">
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Providing accurate and insightful astrological readings
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Adipiscing sodales cras
            dictum enim sit neque enim enim. Integer semper pretium felis libero
            magna a ipsum vivamus vitae. Pulvinar dolor nibh tortor ornare
            nullam risus mi.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Delivering timely and reliable guidance for your daily life
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Adipiscing sodales cras
            dictum enim sit neque enim enim. Integer semper pretium felis libero
            magna a ipsum vivamus vitae. Pulvinar dolor nibh tortor ornare
            nullam risus mi.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Continuously learning and growing in the field of astrology
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Adipiscing sodales cras
            dictum enim sit neque enim enim. Integer semper pretium felis libero
            magna a ipsum vivamus vitae. Pulvinar dolor nibh tortor ornare
            nullam risus mi.
          </p>
        </div>
      </section>

      {/* Image Section */}
    </div>
  );
}

export default CelestialPage;
