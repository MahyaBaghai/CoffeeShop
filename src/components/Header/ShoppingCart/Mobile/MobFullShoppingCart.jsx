import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { useTranslation } from 'react-i18next';
import { useCart } from "./../../../../Context/CartContext"

export default function MobFullShoppingCart({ item, dark }) {
   const { t } = useTranslation();
   const { increaseQuantity, decreaseQuantity, removeItem } = useCart();
  return (
    <>
     <div
        className={`flex flex-col items-center mx-5 pr-5 py-5 border-b-[1px] 
        ${dark ? "border-white/10" : "border-gray-100"}`}
      >
        {/* products in shopping list */}
        <div className="flex ">
          {/* image of product */}
          <div className="w-25 h-25 shrink-0">
            <img
              src={item.img} 
              alt={item.name}
            />
          </div>

          <div className="[&_*]:font-PoppinsMedium space-y-1 pr-2">
            <div
              className={`text-sm font-medium line-clamp-2 shrink-0
                        ${dark ? "text-white" : "text-zinc-700"}`}
            >
             {item.name}
            </div>

            <div
              className={`font-medium text-xs ${
                dark ? "text-emerald-500" : "text-teal-600"
              }`}
            >
             {t('Discount')}   {item.quantity}  €
            </div>

            <div className="flex justify-between items-center mr-5 gap-x-2">
              <div
                className={`flex items-center ${
                  dark ? "[&_*]:text-white" : "[&_*]:text-zinc-700"
                }`}
              >
                <div className="text-base font-medium">{(item.quantity * item.finalPrice).toFixed(2)} </div>
                <div className="text-xs font-normal">€</div>
              </div>

              {/* couter section */}

              <div className="flex items-center justify-evenly font-PoppinsMedium font-medium text-base rounded-[100px]  w-17 h-8 border-[1px] border-gray-300 text-orange-300">
                <div>
                  <GoPlus 
                  onClick={() => increaseQuantity(item.id)}
                  className="xl:w-5 xl:h-5 w-4 h-4 stroke-1 cursor-pointer" />
                </div>
                <div> {item.quantity}</div>
                <div>
                  <HiOutlineMinus 
                  onClick={() => decreaseQuantity(item.id)}
                  className="xl:w-5 xl:h-5 w-4 h-4 stroke-2 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
