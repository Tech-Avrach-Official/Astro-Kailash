import service1 from "../assets/service-01.svg";
import service2 from "../assets/service-02.svg";
import service3 from "../assets/service-03.svg";
import service4 from "../assets/service-04.svg";
import service5 from "../assets/service-05.svg";
import service6 from "../assets/service-06.svg";
export default function Zodiac() {
  return (
    <div className="bg-slate-50 flex items-center justify-center flex-col py-10 md:py-20 px-5 lg:px-32">
      <div>
        <h1 className="text-center text-black text-3xl md:text-5xl font-medium ">Our services</h1>
        <p className="text-zinc-600 text-center text-sm md:text-base py-4 ">At Lintense, we provide consultations and various services by experienced <br className="hidden sm:block"/> fortune tellers, psychics and astrologers. Read on to find out more.</p>
      </div>
      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:max-w-5xl">
        <div className="flex items-center justify-center flex-col border-2 border-[rgb(191,157,80)] p-4 ">
          <img src={service1} alt="" />
          <h3 className="text-[rgb(191,157,80)] text-base md:text-[20px] font-medium py-1 text-center tracking-wider leading-tight">Personal consultation</h3>
          <p className="text-gray-600 text-sm text-center">Get a confidence boost and solid advice with a personal consultations from the best fortune tailors at lintense</p>
        </div>
        <div className="flex items-center justify-center flex-col border-2 border-[rgb(191,157,80)] p-4 ">
          <img src={service2} alt="" />
          <h3 className="text-[rgb(191,157,80)] text-[20px] font-medium py-1 text-center tracking-wider leading-tight">Face reading</h3>
          <p className="text-gray-600 text-sm text-center">Get a confidence boost and solid advice with a personal consultations from the best fortune tailors at lintense</p>
        </div>
        <div className="flex items-center justify-center flex-col border-2 border-[rgb(191,157,80)] p-4 ">
          <img src={service3} alt="" />
          <h3 className="text-[rgb(191,157,80)] text-[20px] font-medium text-center tracking-wide leading-tight py-1">Kundli Dosha</h3>
          <p className="text-gray-600 text-sm text-center">Get a confidence boost and solid advice with a personal consultations from the best fortune tailors at lintense</p>
        </div>
        <div className="flex items-center justify-center flex-col border-2 border-[rgb(191,157,80)] p-4 ">
          <img src={service4} alt="" />
          <h3 className="text-[rgb(191,157,80)] text-[20px] font-medium text-center tracking-wider leading-tight">Daily horoscope</h3>
          <p className="text-gray-600 text-sm text-center">Get a confidence boost and solid advice with a personal consultations from the best fortune tailors at lintense</p>
        </div>
        <div className="flex items-center justify-center flex-col border-2 border-[rgb(191,157,80)] p-4 ">
          <img src={service5} alt="" />
          <h3 className="text-[rgb(191,157,80)] text-[20px] font-medium py-1 text-center tracking-wider leading-tight">Talismans & Amuets</h3>
          <p className="text-gray-600 text-sm text-center">Get a confidence boost and solid advice with a personal consultations from the best fortune tailors at lintense</p>
        </div>
        <div className="flex items-center justify-center flex-col border-2 border-[rgb(191,157,80)] p-4 ">
          <img src={service6} alt="" />
          <h3 className="text-[rgb(191,157,80)] text-[20px] font-medium py-1 text-center tracking-wider leading-tight">Manglik Dosha</h3>
          <p className="text-gray-600 text-sm text-center">Get a confidence boost and solid advice with a personal consultations from the best fortune tailors at lintense</p>
        </div>
      </div>
    </div>
  );
}
