import Logo from "../../../Icons/Logo";
import LogoType from "../../../Icons/LogoType";
import { HiXMark } from "react-icons/hi2";
import { useCart } from './../../../../Context/CartContext'

export default function MobMenuHeader({dark}) {
const { closeMenuInMobile , goToHeader} = useCart(); 
  return (
    <>
      <div
        className={`flex justify-between items-center py-3 mx-4 border-b-[1px] ${
          dark ? "border-white/10" : "border-gray-100"
        }`}
      >
        <div 
         onClick={goToHeader}
         className="flex gap-x-2 w-30 h-10 [&>*]:text-orange-300 cursor-pointer">
          <Logo />
          <LogoType />
       </div>
        <HiXMark
          onClick={closeMenuInMobile}
          className={`w-5 h-5 shrink-0 transition-all duration-300 cursor-pointer ${
            dark ? "text-white" : "text-zinc-600"
          }`}
        />
      </div>
    </>
  )
}
