import ShopIcon from "../../../Icons/ShopIcon";
import Moon from "../../../Icons/Moon";
import ArrowLeftEnd from "../../../Icons/ArrowLeftEnd";
import Sun from "../../../Icons/Sun";
import MainShoppingCart from "../../ShoppingCart/MainShoppingCart";

export default function DesLoginMenu({ dark, toggleTheme }) {
  return (
    <>
      <div className="flex items-center justify-between gap-x-5 xl:gap-x-9 text-orange-200 ">
        {/* icons section */}
        <div className="flex gap-x-3 xl:gap-x-4 items-center ">
          <div className="relative group">
            <div className="py-3">
              <ShopIcon className="xl:w-8 xl:h-8 w-7 h-7 rotate-y-180 cursor-pointer" />
            </div>

            <div><MainShoppingCart dark={dark} /></div>
          </div>

          <button
            onClick={toggleTheme}
            className="transition-all duration-300 ease-in-out cursor-pointer"
          >
            {dark ? (
              <Sun className="xl:w-8.5 xl:h-8 w-7.5 h-7 " />
            ) : (
              <Moon className="xl:w-8.5 xl:h-8 w-7.5 h-7 rotate-y-180 " />
            )}
          </button>
        </div>

        <div className="border-[1px] h-14 text-white/20"></div>

        {/* login section */}

        <div className="flex gap-x-2.5 items-center hover:bg-orange-200/10 hover:h-14 hover:rounded-4xl hover:px-6 transition-all duration-300 ease-in-out cursor-pointer">
          <ArrowLeftEnd className="xl:w-8 xl:h-8 w-7 h-7" />
          <div className="font-PoppinsRegular font-normal lg:text-lg xl:text-xl hidden lg:block">
            Login | Register
          </div>
        </div>
      </div>
    </>
  );
}
