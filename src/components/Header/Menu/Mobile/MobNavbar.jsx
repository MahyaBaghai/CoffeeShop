import { RxHamburgerMenu } from "react-icons/rx";
import LogoType from "../../../Icons/LogoType";
import ShopIcon from "../../../Icons/ShopIcon";

export default function MobNavbar({
  dark,
  openMenuInMobile,
  openShoppingCartInMobile,
}) {
  return (
    <>
      
        <div
        id="Head-section"
          className={` md:hidden min-w-[336px] flex items-center justify-between absolute w-full h-16 px-4 sm:px-6 
            ${dark ? "bg-zinc-700" : "bg-white"}`}
        >
          {/* hamburger icon */}
          <div onClick={openMenuInMobile}>
            <RxHamburgerMenu
              className={`h-6 w-6 sm:h-8 sm:w-8 transition-all duration-300 cursor-pointer  ${
                dark ? "text-white" : "text-zinc-700"
              }`}
            />
          </div>
          {/* golden coffee logo icon */}
          <div>
            <LogoType className="w-25 h-10 text-orange-300 cursor-pointer" />
          </div>
          {/* shopping cart icon */}
          <div onClick={openShoppingCartInMobile}>
            <ShopIcon
              className={`h-6 w-6 sm:h-8 sm:w-8 rotate-y-180 cursor-pointer ${
                dark ? "text-white" : "text-zinc-700"
              }`}
            />
          </div>
        </div>
      
    </>
  );
}
