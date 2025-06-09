import { useState } from "react";
import DesMainHeader from "../components/Header/DesMainHeader";
import MobMainHeader from "../components/Header/MobMainHeader";
import Curve from "../components/Icons/Curve";
import Circles from "../components/Icons/Circles";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Home({ dark, toggleTheme }) {
  return (
    <>
    <DesMainHeader dark={dark} toggleTheme={toggleTheme} />
        <MobMainHeader dark={dark} toggleTheme={toggleTheme} />
      <section className="@container relative max-md:mt-16 md:bg-[url(/images/headerBgDesktop.webp)] bg-[url(/images/headerBgMobile.webp)] bg-no-repeat bg-cover bg-center md:min-h-screen h-50 xs:aspect-2/1 xs:h-auto md:aspect-auto ">
        {/* Headers in Desktop & Mobile */}

        {/* The Texts on the Header Image */}
        <div className="@8xl:w-[1260px] @8xl:mx-auto @3xl:mx-10 @3xs:mx-4 md:min-h-screen xs:min-h-[300px] min-h-[200px] flex items-center overflow-hidden relative">
          <div className="text-white">
            <div className="font-Oswald italic font-bold text-xl xs:text-3xl md:text-4xl xl:text-5xl md:mb-2">
              Tanzanian Arabica Coffee
            </div>
            <div className="font-Oswald font-light italic text-lg xs:text-2xl md:text-3xl xl:text-4xl mb-2 md:mb-8 lg:mb-11 ">
              A cup of balance!
            </div>
            <div
              className="font-PoppinsRegular italic font-normal text-xs xs:text-base lg:text-lg xl:text-xl 
            w-[220px] xs:w-[300px] md:w-[370px] lg:w-[425px] xl:w-[520px]"
            >
              You have certainly heard the familiar name Arabica. Arabica is one
              of the coffee varieties cultivated in various regions of the
              coffee belt.
            </div>
          </div>

          {/* Circles Icon  */}
          <div className="hidden md:block absolute bottom-0 left-0 right-0 mx-auto">
            <Circles />
          </div>
          
        </div>
        {/* Icons under the Header Image */}
        <div
          className={`hidden md:block absolute -bottom-1 left-0 right-0 w-25 h-6 mx-auto ${
            dark ? "text-zinc-800" : "text-gray-100 "
          }`}
        >
          <Curve />
        </div>
        {/* circle with arrow down icon */}
        <div className="w-[30px] h-[30px] border-2 border-orange-300 rounded-full hidden md:flex items-center justify-center absolute bottom-0 left-0 right-0 mx-auto  z-50 translate-y-1/2">
          <MdKeyboardArrowDown className={`w-5 h-5 ${dark ? 'text-white' : 'text-zinc-700'}`} />
        </div>
      </section>

    </>
  );
}
