import LogoType from "../Icons/LogoType";
import { FaArrowRight } from "react-icons/fa6";
import blogItems from "./../../Utility/BlogItems";
import { useTranslation } from 'react-i18next';

export default function BlogCards({ dark }) {
   const { t } = useTranslation();
  return (
    <>
    {blogItems.map(blogItem => (
       <div
       key={blogItem.id}
        className={`${
          dark ? "bg-zinc-700" : "bg-white"
        } shadow-normal rounded-2xl p-2.5  flex sm:flex-col max-sm:gap-3 max-2xs:gap-2 items-center`}
      >
        {/* image section */}
        <div className="relative group cursor-pointer">
          <div className="rounded-2xl rounded-br-5xl shrink-0 max-sm:w-[180px] max-sm:h-[180px] max-xs:w-[160px] max-xs:h-[160px] max-2xs:w-[140px] max-2xs:h-[140px]  overflow-hidden">
            <img src={blogItem.img} alt={blogItem.title} className="rounded-2xl rounded-br-5xl h-full object-cover" />
          </div>
          {/* overlay section */}
          <div className="hidden group-hover:block group-focus:block bg-linear-to-r from-orange-300/70 to-orange-200/70 absolute inset-0 rounded-2xl transition-all duration-300 delay-75 w-full h-full">
            <LogoType className="text-amber-900 w-[50%] h-[50%] absolute inset-0 m-auto" />
          </div>
        </div>

        {/* Texts section */}
        <div className="flex max-sm:flex-col sm:items-center mt-4 mb-2 max-sm:mx-5 max-xs:mx-3 max-2xs:mx-1 font-PoppinsMedium max-sm:w-full">
          {/* Title section */}
          <div
            className={`xl:font-medium md:font-normal font-light md:text-base sm:text-sm 2xs:text-base text-sm
             xl:line-clamp-3 xs:line-clamp-4 line-clamp-3   ${
              dark ? "text-white" : "text-zinc-700"
            }`}
          >
            {t(blogItem.title)}
          </div>

          {/* border section */}
          <div
            className={`sm:border-l-[1px] border-t-[1px] ${
              dark ? "border-white/10" : "border-gray-100"
            } sm:h-15 lg:mx-4 sm:mx-3 max-sm:my-6 `}
          ></div>

          {/* footer section */}
          <div className="max-sm:flex max-sm:justify-between max-sm:gap-2 max-sm:items-center ">
            {/* date section */}
            <div
              className={`flex lg:flex-col sm:items-center sm:pr-3 max-sm:gap-1 max-lg:gap-2 ${
                dark ? "text-emerald-500" : "text-teal-600"
              }`}
            >
              <div className="lg:text-2xl md:text-4xl sm:text-3xl 2xs:text-sm xs:text-base text-xs font-normal sm:font-semibold">
                {blogItem.day}
              </div>
              <div className="flex sm:flex-col lg:items-center max-sm:gap-1">
                <div className="md:text-base 2xs:text-sm xs:text-base text-xs  font-normal">
                  {blogItem.month}
                </div>
                <div className="md:text-base 2xs:text-sm xs:text-base text-xs font-normal">
                  {blogItem.year}
                </div>
              </div>
            </div>
            {/* btn Read more section */}
            <div className="flex sm:hidden text-orange-300 items-center justify-end bg-orange-200/20 px-2  py-0.5 rounded-md">
              <div className="font-PoppinsMedium text-xs 2xs:text-sm font-medium">{t('BlogRead')}</div>
              <FaArrowRight className="2xs:w-3 2xs:h-3 w-2.5 h-2.5" />
            </div>
          </div>
        </div>
      </div>
    ))}
     
    </>
  );
}
