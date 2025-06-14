import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useCart } from "./../../../../Context/CartContext"

export default function DesShoppingCartHeader() {
  const { t } = useTranslation();
  const { cartItems } = useCart();

  const CartItemCounter = ()=>{
    return cartItems.length
    
   }
  return (
    <>
      <div className="flex justify-between items-center text-xs xl:text-sm font-medium font-PoppinsMedium">
        {/* header/Product count section*/}
        <div className=" text-gray-300 pl-2 ">{CartItemCounter()} {t("Item")}</div>

        {/* header/viwe shopping cart section*/}
        <div className="flex items-center justify-center text-orange-300 cursor-pointer ">
          <div>{t("ViewCart")}</div>
          <MdKeyboardArrowRight className="w-6 h-6" />
        </div>
      </div>
    </>
  );
}
