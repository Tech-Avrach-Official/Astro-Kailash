import man from "../assets/man.jpeg"
import man2 from "../assets/man2.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testinominal = () => {

  const testimonials = [
          {
            name: "Harry Hank",
            button: "Astrologer",
            image: man,
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
          },
          {
            name: "Jane Doe",
            button: "Astrologer",
            image: man2,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          {
            name: "Harry Hank",
            button: "Astrologer",
            image: man,
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
          },
          {
            name: "Jane Doe",
            button: "Astrologer",
            image: man2,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          // Add more testimonials as needed
        ];

  return (
    <div className="w-full h-full cursor-pointer px-5 p-2 lg:px-40 py-10 lg:py-20">
      <div className="text-center">
      <h2 className="text-4xl font-semibold">Testimonial</h2>
           <p className="mt-4 text-lg text-gray-600">
             Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Swiper
        navigation={{
          nextEl: ".custom-swiper-button-prev",
          prevEl: ".custom-swiper-button-next",
        }}
        style={{
          padding: "50px 0px 50px 0px", // Top/bottom and left/right padding
        }}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1000}
        pagination={{ clickable: true }}
        // slidesPerView={2}
        breakpoints={{
          // 1024: { slidesPerView: 2, spaceBetween: 30 }, // Desktop
          // 768: { slidesPerView: 3, spaceBetween: 20 }, // Tablet
          640: { slidesPerView: 2, spaceBetween: 15 }, // Mobile
          0: { slidesPerView: 1, spaceBetween: 10 }, // Extra Small
        }}
        spaceBetween={20}
        className=""
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
             <div
                key={index}
                className="p-8 h-[350px] flex flex-col justify-between rounded-lg shadow-lg border-yellow-600 border-2"
              >
                <div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto rounded-full"
                />
                <h3 className="my-2 text-lg text-center font-semibold">{testimonial.name}</h3>
                <p className="mt-6 line-clamp-4 italic">{testimonial.text}</p>
                </div>

                {/* center button */}
                <div className="flex items-center justify-center">
                <button className="text-white mx-auto bg-yellow-600 px-5 py-2 rounded-3xl">{testimonial.button}</button>
                </div>
              </div>
          </SwiperSlide>
        ))}
        <div className="absolute top-0 z-10 flex gap-2">
          <div className="custom-swiper-button-next bg-primary w-10 h-10 flex items-center justify-center text-white rounded-full">
            {/* <FontAwesomeIcon icon={faArrowLeft} className="text-xl" /> */}
            "👈"
          </div>
          <div className="custom-swiper-button-prev bg-primary w-10 h-10 flex items-center justify-center text-white rounded-full">
            {/* <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
             */}
            "👉"
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Testinominal;