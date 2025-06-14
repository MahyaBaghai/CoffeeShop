import { SlLocationPin } from "react-icons/sl";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuPhone } from "react-icons/lu";
import ContactBtn from "../Buttons/ContactBtn";
import { useTranslation } from 'react-i18next';

export default function FooterSectionThree() {
  const { t } = useTranslation();
  return (
    <>
      <div id="contact-section" className="flex flex-col  flex-wrap items-start lg:pt-22 pt-12 max-lg:ml-3 ">
        {/* title  */}
        <div className="flex flex-col">
          <div className="font-PoppinsMedium text-xl font-medium text-white mb-7">
             {t('FooterSec3Title')}
          </div>
          {/* address */}
          <div className=" flex text-gray-300 gap-x-2 mb-5">
            <SlLocationPin className="w-6 h-6 shrink-0" />
            <div className="font-PoppinsRegular font-normal xl:text-base text-sm">
              {t('FooterSec3address')}
            </div>
          </div>
          {/* contact */}
          <div className="flex flex-col xs:flex-row lg:flex-col 2xl:flex-row items-start font-medium xl:text-base text-sm text-gray-300 gap-6 ">
            {/* email */}
            <div className="flex gap-x-2 text-orange-300">
              <HiOutlineEnvelope className="w-6 h-6" />
              <span className="font-PoppinsRegular cursor-pointer">info@Coffee.com</span>
            </div>
            {/* telephone */}
            <div className="flex gap-6">
              <div className="flex gap-x-2">
                <LuPhone className="w-5 h-5" />
                <span className="font-PoppinsMedium">0911 558 6164</span>
              </div>
              <div className="font-PoppinsMedium">013 - 34676385</div>
            </div>
          </div>
        </div>

        <div className="flex flex-row  mt-10 2xl:gap-6 lg:gap-3 2xs:gap-5 gap-2  ">
          <ContactBtn />
        </div>
      </div>
    </>
  );
}
