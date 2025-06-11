import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FiPhoneOutgoing } from "react-icons/fi";
import MobSubMenu from "./MobSubMenu";
import { useTranslation } from 'react-i18next';

export default function MobMenuBody({ dark, toggleSubMenu, openSubMenu}) {
   const { t } = useTranslation();
  return (
    <>
    <div className="flex items-center gap-x-2 pl-2.5 h-10 mx-4 mt-6 mb-4 rounded-md text-orange-300 bg-orange-200/20">
        <HiOutlineHome className="w-5 h-5 cursor-pointer" />
        <span className="cursor-pointer">{t('Home')}</span>
      </div>

      <ul
        className={` mx-6.5 space-y-6 pb-6 [&_*]:flex [&_*]:gap-x-2 border-b-[1px] [&>li]:cursor-pointer
        [&>*]:active:text-orange-300
          ${
            dark
              ? "border-white/10 [&>*]:text-white"
              : "border-gray-100 [&>*]:text-zinc-700"
          }
             `}
      >
        <li className="flex-col ">
          <div
            className={`flex items-center justify-between transition-all duration-300 
              ${openSubMenu && "text-orange-300"} `}
            onClick={toggleSubMenu}
            
          >
            <div>
              <HiOutlineShoppingBag className="w-5 h-5" />
              <div>{t('Shop')} </div>
            </div>
            <MdOutlineKeyboardArrowDown />
          </div>

          {/* Submenu Store */}
          {openSubMenu && <MobSubMenu dark={dark} />}
        </li>

        <li>
          <HiOutlineBriefcase className="w-5 h-5" />
          <span> {t('Blog')}</span>
        </li>

        <li>
          <HiOutlineDocumentText className="w-5 h-5" />
          <span>{t('About')}</span>
        </li>

        <li>
          <FiPhoneOutgoing className="w-4.5 h-4.5" />
          <span>{t('Contact')}</span>
        </li>
      </ul>
      
    </>
  )
}
