import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";

export default function DesFullShoppingCart({dark}) {
  return (
    <>
    <div
        className={`flex flex-col xl:w-90 w-73 [&>*]:border-b-[1px] px-2 ${
          dark ? "[&>*]:border-white/10 " : "[&>*]:border-gray-200"
        }`}
      >
        <div className={`flex items-center pt-3`}>
          {/* product picture section*/}
          <div className="xl:w-50 xl:h-35 w-23 h-25 ">
            <img src="/images/products/p2.png" alt="Ben Mano Espresso Coffee" />
          </div>

          {/* product explain section*/}
          <div className="flex flex-col gap-y-3 items-center h-28 xl:w-full w-50  ">
            {/* product title section*/}
            <div
              className={`text-sm xl:text-base font-medium font-PoppinsMedium mr-auto line-clamp-2 ${
                dark ? "text-white" : "text-zinc-700"
              }`}
            >
              Ben Mano Espresso Coffee, Prisca Model, 250 Grams
            </div>

            {/* another information section*/}
            <div className="flex xl:w-62 w-53 xl:gap-x-7 gap-x-3 ">
              {/* counter product section*/}
              <div className="flex items-center justify-evenly font-PoppinsMedium font-medium xl:text-xl text-lg rounded-[100px] xl:w-22 w-19 xl:h-11 h-9 border-[1px] border-gray-300 text-orange-300">
               
                <div>
                  <GoPlus className="xl:w-5 xl:h-5 w-4 h-4 stroke-1" />
                </div>
                <div> 2 </div>
                <div>
                  <HiOutlineMinus className="xl:w-5 xl:h-5 w-4 h-4 stroke-2" />
                </div>

              </div>
              {/* price informatin section*/}
              <div className="flex flex-col justify-between font-PoppinsMedium  ">
                <div
                  className={`xl:text-sm text-xs  font-normal ${
                    dark ? "text-emerald-500 " : " text-teal-600"
                  }`}
                >
                  
                  $ 0.18 discount
                </div>
                <div
                  className={`flex items-center gap-x-1  ${
                    dark ? "text-white" : "text-zinc-700"
                  }`}
                >
                  <div className="xl:text-sm text-xs  font-text-base"> $</div>
                  <div className="xl:text-xl text-lg font-semibold"> 2.36 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
