import DesSubMenu from "./DesSubMenu";
import { useTranslation } from 'react-i18next';
import { useCart } from './../../../../Context/CartContext'

export default function DesMenu({ dark }) {
  const { t } = useTranslation();

    const { goToHome, goToClub, goToAbout, goToContact} = useCart();

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
            <li 
             onClick={goToHome}
            className="font-medium text-orange-200 font-PoppinsMedium">
              {t('Home')}
            </li>

            <li className="relative group">
              {t('Shop')}
              <DesSubMenu dark={dark} />
            </li>

            
            <li onClick={goToClub}> {t('Club')}</li>
            <li onClick={goToAbout}>  {t('About')} </li>
            <li onClick={goToContact}> {t('Contact')} </li>
          </ul>
        </div>
      </div>
    </>
  );
}
