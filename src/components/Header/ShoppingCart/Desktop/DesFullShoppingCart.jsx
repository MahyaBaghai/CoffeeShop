import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { useTranslation } from 'react-i18next';
import { useCart } from './../../../../Context/CartContext'

export default function DesFullShoppingCart({ item, dark }) {
  const { t } = useTranslation();
  const { increaseQuantity, decreaseQuantity} = useCart();

   
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
            <img src={item.img} alt={item.name}  />
          </div>

          {/* product explain section*/}
          <div className="flex flex-col gap-y-3 items-center h-28 xl:w-full w-50  ">
            {/* product title section*/}
            <div
              className={`text-sm xl:text-base font-medium font-PoppinsMedium mr-auto line-clamp-2 ${
                dark ? "text-white" : "text-zinc-700"
              }`}
            >
              {item.name}
            </div>

            {/* another information section*/}
            <div className="flex xl:w-62 w-53 xl:gap-x-7 gap-x-5 ">
              {/* counter product section*/}
              <div className="flex items-center justify-evenly ml-3 font-PoppinsMedium font-medium xl:text-xl text-lg rounded-[100px] xl:w-22 w-19 xl:h-11 h-9 border-[1px] border-gray-300 text-orange-300">
               
                <div>
                  <GoPlus 
                  onClick={() => increaseQuantity(item.id)}
                  className="xl:w-5 xl:h-5 w-4 h-4 stroke-1 cursor-pointer" />
                </div>
                <div > {item.quantity} </div>
                <div>
                  <HiOutlineMinus
                  onClick={() => decreaseQuantity(item.id)}
                  className="xl:w-5 xl:h-5 w-4 h-4 stroke-2 cursor-pointer" />
                </div>

              </div>
              {/* price informatin section*/}
              <div className="flex flex-col justify-between font-PoppinsMedium  ">
                <div
                  className={`xl:text-sm text-xs  font-normal ${
                    dark ? "text-emerald-500 " : " text-teal-600"
                  } 
                  ${item.discount >0 ? 'block' : 'hidden'}`
                }
                >
                  
                   {item.discount > 0 ? t('Discount') + item.discount + '€' : ''}  
                </div>
                <div
                  className={`flex items-center gap-x-1  ${
                    dark ? "text-white" : "text-zinc-700"
                  }
                  ${item.discount == 0 && 'mt-2'}
                  `}
                >
                  <div className="xl:text-xl text-lg font-semibold"> {(item.quantity * item.finalPrice).toFixed(2)}</div>
                  <div className="xl:text-sm text-xs  font-text-base"> €</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
