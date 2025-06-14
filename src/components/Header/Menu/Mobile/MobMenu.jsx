import { useState } from "react";
import MobMenuHeader from "./MobMenuHeader";
import MobMenuBody from "./MobMenuBody";
import MobMenuFooter from "./MobMenuFooter";
import ShopIcon from "../../../Icons/ShopIcon";


export default function MobMenu({dark ,toggleTheme, closeMenuInMobile ,openShoppingCartInMobile}) {

    const [openSubMenu, setOpenSubMenu] = useState(false);

  let toggleSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <>
     {/* open menu in mobile */}

      <div
        className={`md:hidden flex items-center justify-end fixed top-0 left-0 right-0 w-full h-16 px-4 sm:px-6 z-20
        ${dark ? "bg-zinc-700" : "bg-white"}`}
      >
        {/* menu section in mobile */}
        <div
          className={`w-[65%] min-h-screen overflow-y-auto z-40 fixed top-0 left-0 bottom-0  ${
            dark ? "bg-zinc-700" : "bg-white"
          }`}
        >
          {/* menu */}
          <div className="[&_*]:text-base [&_*]:font-normal [&_*]:font-PoppinsRegular ">
            {/* header menu */}
            <MobMenuHeader dark={dark} closeMenuInMobile={closeMenuInMobile} />

            {/* body menu */}
            <MobMenuBody
              dark={dark}
              toggleSubMenu={toggleSubMenu}
              openSubMenu={openSubMenu}
            />

            {/* footer menu */}
            <MobMenuFooter 
            dark={dark} 
            toggleTheme={toggleTheme} 
            closeMenuInMobile={closeMenuInMobile} 
             openShoppingCartInMobile={openShoppingCartInMobile}/>
          </div>
        </div>

        {/* overlay */}
        <div
          
          onClick={closeMenuInMobile}
          className={`w-full min-h-screen z-30 fixed top-0 right-0 bottom-0 transition-all duration-300 bg-black/40`}
        ></div>

        {/* shopping icon */}
        <div className="flex justify-end">
          <ShopIcon
            className={`h-6 w-6 sm:h-8 sm:w-8 rotate-y-180 z-10 ${
              dark ? "text-white" : "text-zinc-700"
            }`}
          />
        </div>
      </div>
    </>
  )
}
