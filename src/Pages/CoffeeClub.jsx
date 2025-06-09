import Discovery from "../components/Icons/Discovery";
import Activity from "../components/Icons/Activity";
import TicketStar from "../components/Icons/TicketStar";
import { IoIosArrowForward } from "react-icons/io";

export default function CoffeeClub() {
  return (
    <>
      <section className="@container">
        <div className="@8xl:w-[1260px] @8xl:mx-auto @3xl:mx-10 mx-4">
          <div className="flex max-md:flex-col items-center bg-linear-to-l from-emerald-500 to-emerald-600 rounded-2xl text-white shadow-normal w-full px-6  py-5 lg:py-8 xl:gap-10 lg:gap-8 xmd:gap-12 md:gap-3 gap-8 my-10 2xs:my-15 md:my-18 lg:my-20 ">
            {/* coffee club logo */}
            <div className="flex items-center gap-x-3 md:gap-x-3 lg:gap-x-5 xl:gap-x-6">
              <img
                src="/images/club/diamond.png"
                alt="Coffee Club"
                className="w-[68px] 2xs:w-[87px] lg:w-[110px] shrink-0 "
              />
              <div className="italic flex flex-col md:gap-2 gap-0.5">
                <div className="font-VolkhovBold font-bold lg:text-4xl xs:text-3xl 2xs:text-2xl text-xl">
                  Coffee Club
                </div>
                <div className="font-VolkhovRegular font-light xl:text-xl lg:text-lg md:text-sm sm:text-base 2xs:text-sm text-xs ">
                  Did you know you can buy coffee with your points?
                </div>
              </div>
            </div>
            {/* club Information */}
            <div className="flex  xl:gap-15 lg:gap-10 xmd:gap-12 md:gap-5 sm:gap-18 xs:gap-16 2xs:gap-6 gap-7">
              {/* buttons */}
              <div className="flex xl:gap-5 lg:gap-3 gap-2">
                <div className="pt-2 xl:pt-5 lg:pt-3 xl:w-27 lg:w-25 2xs:w-20 w-16  bg-white rounded-2xl relative">
                  <Discovery className="lg:w-12 lg:h-12 w-10 h-10  mx-auto" />
                  <div className="xl:font-PoppinsMedium font-PoppinsRegular font-normal lg:text-sm text-xs text-emerald-600 text-center absolute bottom-1 lg:bottom-0  left-0 right-0">Fortune's wheel </div>
                </div>
                <div className="pt-2 xl:pt-5 lg:pt-3  xl:w-27 lg:w-25 2xs:w-20 w-16 bg-white rounded-2xl relative">
                  <Activity className="lg:w-12 lg:h-12 w-10 h-10  mx-auto" />
                  <div className="xl:font-PoppinsMedium font-PoppinsRegular font-normal lg:text-sm text-xs text-emerald-600 text-center absolute 2xs:bottom-5 bottom-3 left-0 right-0">Missions</div>
                </div>
                <div className="pt-2 xl:pt-5 lg:pt-3 xl:w-27 lg:w-25 2xs:w-20 w-16  bg-white rounded-2xl relative">
                  <TicketStar className="lg:w-12 lg:h-12 w-10 h-10 mx-auto" />
                  <div className="xl:font-PoppinsMedium font-PoppinsRegular font-normal lg:text-sm text-xs text-emerald-600 text-center absolute 2xs:bottom-5 bottom-3 left-0 right-0">Awards</div>
                </div>
              </div>

              {/* punkt */}
                    <div className="flex flex-col items-center justify-center text-white font-PoppinsMedium">
                        <div className=" font-semibold xl:text-4xl lg:text-3xl 2xs:text-2xl text-xl">542</div>
                        <div className="font-normal lg:text-base text-xs">Your score</div>
                        <div className="flex items-center justify-center lg:w-35 lg:h-9 sm:w-35 sm:h-9 md:w-18  md:h-7 2xs:w-18 w-16 h-7 bg-linear-to-r from-orange-300 to-orange-200 rounded-full mt-2">
                            <div className="lg:block md:hidden sm:block hidden font-normal text-sm ">Receive a prize</div>
                             <div className="lg:hidden md:block sm:hidden block font-normal text-xs"> prize</div>
                            <IoIosArrowForward className="w-4 h-4"/>
                        </div>

                    </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
