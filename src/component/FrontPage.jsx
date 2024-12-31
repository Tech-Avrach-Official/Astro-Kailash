import moon from "../assets/ay.png";
import shiva from "../assets/shiva.png";

export default function FrontPage() {
  return (
    <div className="bg-custom-gradient flex justify-center items-center h-screen">
      <div
        style={{
          backgroundImage: `url(${moon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          width: "500px",
        }}
        className="flex justify-center items-center"
      >
        <img src={shiva} alt="Site logo" className="p-[6rem]" />
      </div>
    </div>
  );
}
