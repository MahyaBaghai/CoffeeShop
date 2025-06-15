import { HiXMark } from "react-icons/hi2";
import { useTranslation } from 'react-i18next';
import { useCart } from './../../../../Context/CartContext'
export default function MobShoppingCartHeader({dark}) {
  const { t } = useTranslation();
  const { closeShoppingCartInMobile} = useCart();
  return (
    <>
    <div
        className={`flex justify-between items-center py-5 mx-5 border-b-[1px] ${
          dark ? "border-white/10" : "border-gray-300"
        }`}
      >
        <HiXMark
          onClick={closeShoppingCartInMobile}
          className={`w-5 h-5 shrink-0 transition-all duration-300 cursor-pointer ${
            dark ? "text-white" : "text-zinc-600"
          }`}
        />

        <div className={`text-base shrink-0 font-PoppinsRegular font-medium 
            ${dark ? 'text-white' :'text-zinc-700'}`}>
          {t('ShoppingCart')}
        </div>
      </div>
      
    </>
  )
}
