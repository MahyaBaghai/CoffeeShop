import { RxHamburgerMenu } from "react-icons/rx";
import LogoType from "../../../Icons/LogoType";
import ShopIcon from "../../../Icons/ShopIcon";
import { useCart } from "./../../../../Context/CartContext";

export default function MobNavbar({ dark }) {
  const { openMenuInMobile, openShoppingCartInMobile, showNotification } =
    useCart();
  return (
    <>
      <div
        id="Head-section"
        className={` md:hidden min-w-[336px] flex items-center justify-between fixed z-50 w-full h-16 px-4 sm:px-6 
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
        <div className="relative" onClick={openShoppingCartInMobile}>
          <ShopIcon
            className={`h-6 w-6 sm:h-8 sm:w-8 rotate-y-180 cursor-pointer ${
              dark ? "text-white" : "text-zinc-700"
            }`}
          />
          {showNotification && (
            <span className="absolute -top-2 -right-1">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          )}
        </div>
      </div>
    </>
  );
}
