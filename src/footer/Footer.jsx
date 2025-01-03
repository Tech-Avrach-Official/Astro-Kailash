import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#020013] text-white py-10 md:py-20 px-5 md:px-28">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
      <div className="lg:w-[30rem]">
          <h1 className="text-lg text-center lg:text-start font-bold mb-4">AstralVue</h1>
          <p className="text-sm text-center lg:text-start mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
          </p>
        </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
         
        {/* Product Links */}
        <div>
          <h2 className="font-bold text-center lg:text-start mb-4">Product</h2>
          <ul className="space-y-2">
            <li><p className="hover:text-gray-300 text-center lg:text-start">Features</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Pricing</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Case studies</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Reviews</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Updates</p></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="font-bold mb-4 text-center lg:text-start">Company</h2>
          <ul className="space-y-2">
            <li><p className="hover:text-gray-300 text-center lg:text-start">About</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Contact us</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Careers</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Culture</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Blog</p></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h2 className="font-bold mb-4 text-center lg:text-start">Support</h2>
          <ul className="space-y-2">
            <li><p className="hover:text-gray-300 text-center lg:text-start">Getting started</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Help center</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Server status</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Report a bug</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Chat support</p></li>
          </ul>
        </div>

        {/* Downloads Links */}
        <div>
          <h2 className="font-bold mb-4 text-center lg:text-start">Downloads</h2>
          <ul className="space-y-2">
            <li><p className="hover:text-gray-300 text-center lg:text-start">iOS</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Android</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Mac</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Windows</p></li>
            <li><p className="hover:text-gray-300 text-center lg:text-start">Chrome</p></li>
          </ul>
        </div>
      </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
        <p>
          Copyright © 2024 Astroguru | All Rights Reserved |
          <a href="#" className="hover:text-gray-300"> Terms and Conditions</a> |
          <a href="#" className="hover:text-gray-300"> Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
