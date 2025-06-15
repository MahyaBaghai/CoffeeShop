import Logo from "../Icons/Logo";
import LogoType from "../Icons/LogoType";
import { useTranslation } from "react-i18next";

export default function FooterSectionOne() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col text-gray-300 pt-15 max-lg:ml-3 ">
        <div className="flex gap-x-4 mb-7 group cursor-pointer">
          <Logo className=" w-14 h-13 group-hover:text-orange-300 group-active:text-orange-300  transition-all" />
          <LogoType className=" w-34 h-13 group-hover:text-orange-300 group-active:text-orange-300 transition-all" />
        </div>
        <div className="font-PoppinsRegular font-normal xl:text-base/8 text-sm/8">
          {t("FooterSec1")}
        </div>
      </div>
    </>
  );
}
