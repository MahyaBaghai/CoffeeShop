import { MdKeyboardArrowRight } from "react-icons/md";
export default function DesShoppingCartHeader() {
  return (
    <>
    <div className="flex justify-between items-center text-xs xl:text-sm font-medium font-PoppinsMedium">
        {/* header/Product count section*/}
        <div className=" text-gray-300 pl-2">1 Case</div>

        {/* header/viwe shopping cart section*/}
        <div className="flex items-center justify-center text-orange-300  ">
          <div>View shopping cart</div>
          <div className="h-7 items-center">
            <MdKeyboardArrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>
      
    </>
  )
}
