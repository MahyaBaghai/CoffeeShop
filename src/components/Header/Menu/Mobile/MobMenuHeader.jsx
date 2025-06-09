import Logo from "../../../Icons/Logo";
import LogoType from "../../../Icons/LogoType";
import { HiXMark } from "react-icons/hi2";

export default function MobMenuHeader({dark ,closeMenuInMobile}) {
  return (
    <>
      <div
        className={`flex justify-between items-center py-3 mx-4 border-b-[1px] ${
          dark ? "border-white/10" : "border-gray-100"
        }`}
      >
        <div className="flex gap-x-2 w-30 h-10 [&>*]:text-orange-300">
          <Logo />
          <LogoType />
        </div>
        <HiXMark
          
          onClick={closeMenuInMobile}
          className={`w-5 h-5 shrink-0 transition-all duration-300 ${
            dark ? "text-white" : "text-zinc-600"
          }`}
        />
      </div>
    </>
  )
}
