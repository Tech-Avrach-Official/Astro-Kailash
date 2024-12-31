import man from "../assets/man.jpeg"
import man2 from "../assets/man2.jpeg"

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
      // Add more testimonials as needed
    ];
  
    return (
      <div className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Testimonial</h2>
          <p className="mt-4 text-lg text-gray-300">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
  
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="hover:bg-purple-700 p-8 rounded-lg shadow-lg border-accent border-2"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto rounded-full"
                />
                <p className="mt-6 italic">{testimonial.text}</p>
                <h3 className="my-2 text-lg font-semibold">{testimonial.name}</h3>
                <button className="text-purple-300 bg-purple-950 px-5 py-2 rounded-3xl hover:bg-[#2c0735]">{testimonial.button}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Testinominal;
  