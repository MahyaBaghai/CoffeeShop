import DesSubMenu from "./DesSubMenu";
import { useTranslation } from 'react-i18next';


export default function DesMenu({ dark }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex gap-x-4  xl:gap-x-9 h-14">
        {/* logo section */}
        <div className="flex cursor-pointer shrink-0">
          <img src="images/app-logo.png" alt="Golden Coffee" />
        </div>
        {/* subMenu section */}
        <div className="flex ">
          <ul className="flex h-full items-center gap-x-5  xl:gap-x-9 text-gray-300 font-PoppinsRegular font-normal text-base lg:text-lg xl:text-xl [&_li]:leading-[56px] [&_li]:hover:cursor-pointer [&_li]:hover:text-orange-300 ">
            <li className="font-medium text-orange-200 font-PoppinsMedium">
              {t('Home')}
            </li>

            <li className="relative group">
              {t('Shop')}
              <DesSubMenu dark={dark} />
            </li>

            
            <li> {t('Blog')}</li>
            <li> {t('About')} </li>
            <li> {t('Contact')} </li>
          </ul>
        </div>
      </div>
    </>
  );
}
