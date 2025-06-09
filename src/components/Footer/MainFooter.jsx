import Curve from "../Icons/Curve";
import { IoIosArrowUp } from "react-icons/io";
import FooterSectionOne from "./FooterSectionOne";
import FooterSectionTwo from "./FooterSectionTwo";
import FooterSectionThree from "./FooterSectionThree";
export default function MainFooter({ dark }) {
  return (
    <>
      <div className="w-full bg-zinc-700 ">
        {/* footer icons */}
        <div className="hidden lg:block relative">
          <Curve
            className={`rotate-x-180 absolute -top-1 left-0 right-0 mx-auto w-25 h-7 ${
              dark ? "text-zinc-800" : "text-gray-100"
            }`}
          />
          <div className="border-2 border-orange-300 w-8 h-8 rounded-full absolute -top-4 left-0 right-0 mx-auto flex justify-center items-center">
            <IoIosArrowUp
              className={`w-5 h-5 ${dark ? "text-white" : "text-zinc-700"}`}
            />
          </div>
        </div>
        <div className="flex flex-col w-[95%] mx-auto ">
          {/* up section */}
          {/* <div className="flex flex-wrap xl:justify-between justify-center  "> */}
          <div className="grid lg:grid-cols-3  grid-cols-1 lg:justify-items-center  ">
            <FooterSectionOne />
            <FooterSectionTwo />
            <FooterSectionThree />
          </div>

          {/* down section */}
          <div className="flex flex-col md:flex-row  justify-between md:items-center items-start font-medium lg:text-sm text-xs text-gray-300 w-full border-t-[1px] border-white/10 py-8 lg:py-10 mt-12 max-lg:mr-10 gap-y-1">
            <div className="flex gap-2.5 items-center">
              <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full border-[1px] border-white/10">
                <div className="flex justify-center items-center w-5 h-5 rounded-full border-[1px] border-white/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-linear-to-t from-orange-200 to-orange-300"></div>
                </div>
              </div>
              <div className="font-PoppinsMedium">
                All rights to this user interface belong to <span className="text-orange-200"> Mahya Baghai</span> .
              </div>
            </div>

            <div className="font-PoppinsRegular max-md:ml-10">
              Copyright © 2024 Golden Coffee. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
