import man from "../assets/man.jpeg"
import man2 from "../assets/man2.jpeg"

// const Testinominal = () => {
//     const testimonials = [
//       {
//         name: "Harry Hank",
//         button: "Astrologer",
//         image: man,
//         text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
//       },
//       {
//         name: "Jane Doe",
//         button: "Astrologer",
//         image: man2,
//         text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//       },
//       // Add more testimonials as needed
//     ];
  
//     return (
//       <div className="bg-secondary text-white py-16">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-semibold">Testimonial</h2>
//           <p className="mt-4 text-lg text-gray-300">
//             Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
  
//           <div className="mt-12 grid md:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="hover:bg-purple-700 p-8 rounded-lg shadow-lg border-accent border-2"
//               >
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-20 h-20 mx-auto rounded-full"
//                 />
//                 <p className="mt-6 italic">{testimonial.text}</p>
//                 <h3 className="my-2 text-lg font-semibold">{testimonial.name}</h3>
//                 <button className="text-purple-300 bg-purple-950 px-5 py-2 rounded-3xl hover:bg-[#2c0735]">{testimonial.button}</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Testinominal;
  

// "use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testinominal = () => {
  // Dynamic data for the cards
  // const cardData = [
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800,h_800/v1735581280/x_bytenoon_assets/course-logo/y8hqgiferbykkxkoua9j.png",
  //     title: "JavaScript",
  //     description: "Complete JavaScript course",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735579891/x_bytenoon_assets/course-logo/wsgxsmluc0tsc4ja4zom.png",
  //     title: "Python",
  //     description: "Basic to advanced Python course",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_1400/v1735580395/x_bytenoon_assets/course-logo/wkmae0wmrcuwug7ltchj.png",
  //     title: "React Js",
  //     description: "React Js course for beginners",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735581080/x_bytenoon_assets/course-logo/ftu5ybqlwj2k6tnaqd5c.png",
  //     title: "Node.js",
  //     description: "Node.Js Backend course",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735581080/x_bytenoon_assets/course-logo/l5rek75in9ec5quemlwu.svg",
  //     title: "Java",
  //     description: "Core and Advanced Java course",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735581080/x_bytenoon_assets/course-logo/qqvxd160towwkswoibhh.png",
  //     title: "C++",
  //     description: "Core Knowledge of C++",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800,h_600/v1735579891/x_bytenoon_assets/course-logo/emk6uhgytmsgd2vlxxwg.svg",
  //     title: "ReactNative",
  //     description: "React Native course for beginners",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735624734/x_bytenoon_assets/course-logo/vxwy1i0ui6q90hovjm5n.jpg",
  //     title: "DSA",
  //     description: "Data Structures and Algorithms course",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735624736/x_bytenoon_assets/course-logo/j89sxlbxeorwbas4pubx.png",
  //     title: "Video Editing",
  //     description: "Professional Video Editing course",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735624733/x_bytenoon_assets/course-logo/f9tviczqffqek6vmp0ck.jpg",
  //     title: "Digital Marketing",
  //     description: "Complete Digital Marketing course",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735624733/x_bytenoon_assets/course-logo/gtpvulcg7ksjhyaiecii.png",
  //     title: "Graphics Design",
  //     description: "Expert Graphics Design course",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735624733/x_bytenoon_assets/course-logo/s6z6wrefngrwtyzpflxd.png",
  //     title: "Tally",
  //     description: "In-depth Tally course",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735624736/x_bytenoon_assets/course-logo/cefxxrmc8he7njf1izte.jpg",
  //     title: "Advanced Excel",
  //     description: "Advanced Excel course for professional work",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/f_auto,q_auto:low,c_scale,w_800/v1735624732/x_bytenoon_assets/course-logo/alfgrwfbp08nwrtloabl.webp",
  //     title: "Basic Computer",
  //     description: "Basic Computer course for absolute biginners",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/ddnb10zkq/image/upload/v1735625678/x_bytenoon_assets/course-logo/fbga1estzslqzvcnt30q.jpg",
  //     title: "Spoken English",
  //     description: "Spoken English course for beginners",
  //   },
  // ];

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
    <div className="w-full h-full cursor-pointer px-5 p-2 lg:px-40 lg:py-20">
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