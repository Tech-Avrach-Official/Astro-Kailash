import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="bg-white text-black py-10 px-5 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5 md:mb-16">
          <h2 className="text-2xl md:text-4xl text-yellow-600 font-bold mb-2 md:mb-4">Get In Touch With Us!</h2>
          <div className="h-1 w-24 bg-white mx-auto mb-4 rounded-full"></div>{" "}
          <p className="text-sm md:text-lg text-gray-600 md:px-56">
           
            labore et dolore magna aliqua. Suspendisse ultrices gravida.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae animi quos in culpa eveniet 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <div className="flex items-center mb-6">
              
              <FaLocationDot className=" mr-4 text-xl"/>
              <p>113, JA Street, United States of America</p>
            </div>
            <div className="flex items-center mb-6">
            
              <IoCall className=" mr-4 text-xl"/>
              <div>
                <p>+1-121-235-6245, +1-121-235-7856</p>
                
              </div>
            </div>
            <div className="flex items-center mb-6">
              
              <IoMail className=" mr-4 text-xl"/>
        
              <div>
                <p>support@website.com, info@website.com</p>
                
              </div>
            </div>
            <div className="h-64 w-full bg-gray-400 rounded-lg overflow-hidden">
              
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109871.86829759325!2d-122.08419645!3d37.42199995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5b9f29824d5%3A0x544158203f57a91!2sMountain%20View%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"

                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              ></iframe>
            </div>
          </div>

        
          <div className="bg-white flex flex-col justify-between p-8 rounded-lg shadow-lg">
          
              <div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-400 rounded-md py-2 px-4"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-400 rounded-md py-2 px-4"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-400 rounded-md py-2 px-4"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full border border-gray-400 rounded-md py-2 px-4"
                ></textarea>
              </div>
              </div>
              <div>
              <button
                type="submit"
                className="bg-yellow-600 w-full text-white py-2 rounded-md"
              >
                Send Message
              </button>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
