import ShopIcon from "../../../Icons/ShopIcon";
import Moon from "../../../Icons/Moon";
import ArrowLeftEnd from "../../../Icons/ArrowLeftEnd";
import Sun from "../../../Icons/Sun";
import MainShoppingCart from "../../ShoppingCart/MainShoppingCart";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../../LanguageSwitcher";

export default function DesLoginMenu({ dark, toggleTheme }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center justify-between gap-x-3 xl:gap-x-5  text-orange-200 ">
        {/* icons section */}
        <div className="flex gap-x-3 xl:gap-x-4 items-center ">
          {/* language icon */}
          <LanguageSwitcher />
          {/* shop icon & shopping cart */}
          <div className="relative group">
            <div className="py-3">
              <ShopIcon className="xl:w-8 xl:h-8 w-6 h-6 rotate-y-180 cursor-pointer" />
            </div>

            <div>
              <MainShoppingCart dark={dark} />
            </div>
          </div>

          {/* toggle theme icon */}
          <button
            onClick={toggleTheme}
            className="transition-all duration-300 ease-in-out cursor-pointer"
          >
            {dark ? (
              <Sun className="xl:w-8.5 xl:h-8 w-6.5 h-6 " />
            ) : (
              <Moon className="xl:w-8.5 xl:h-8 w-6.5 h-6 rotate-y-180 " />
            )}
          </button>
        </div>

        <div className="border-[1px] h-14 text-white/20"></div>

        {/* login section */}

        <div className="flex gap-x-2.5 items-center hover:bg-orange-200/10 lg:hover:h-14 hover:rounded-4xl lg:hover:px-5 hover:h-10 hover:px-2 transition-all duration-300 ease-in-out cursor-pointer">
          <ArrowLeftEnd className="lg:hidden block w-6 h-6 " />
          <div className="font-PoppinsRegular font-normal lg:text-lg xl:text-xl hidden lg:block">
            {t("Login")} | {t("Register")}
          </div>
        </div>
      </div>
    </>
  );
}
