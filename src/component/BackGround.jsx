import { Link } from "react-router-dom";
import dark from "../assets/darkroom.jpeg";


export default function BackGround() {
  return (
    <div>
        <div
        style={{
          backgroundImage: `url(${dark})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
        className="relative"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Content */}
        <div className="relative flex flex-col justify-center items-center h-full">
          <h5 className="font-extrabold text-white text-4xl mb-4">About Us</h5>
          <div className="flex space-x-2 text-white">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span>|</span>
            <Link to="/About" className="hover:underline">About</Link>
            <span>|</span>
            <Link to="/ContactUs" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
