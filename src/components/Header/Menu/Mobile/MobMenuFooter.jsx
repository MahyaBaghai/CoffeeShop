import ArrowLeftEnd from "../../../Icons/ArrowLeftEnd";
import Moon from "../../../Icons/Moon";
import Sun from "../../../Icons/Sun";
import ShopIcon from "../../../Icons/ShopIcon";
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../../LanguageSwitcher';

export default function MobMenuFooter({ dark, toggleTheme }) {
  const { t } = useTranslation();
  return (
    <>
      <ul className="flex flex-col items-start [&_li]:inline-flex [&_*]:cursor-pointer  mx-6.5 mt-7 [&_*]:gap-x-2  [&_*]:text-orange-300">
        <li className="mb-6">
          <ArrowLeftEnd className=" w-6 h-6 rotate-y-180" />
          <span>{t('Login')} | {t('Register')}</span>
        </li>

        <li
          onClick={toggleTheme}
          className="transition-all duration-300 ease-in-out mb-6 "
        >
          {dark ? (
            <div className="inline-flex">
              <Sun className="w-6.5 h-6 " />
              <span>{t('LightTheme')}</span>
            </div>
          ) : (
            <div className="inline-flex">
              <Moon className=" w-6.5 h-6 " />
              <span>{t('DarkTheme')}</span>
            </div>
          )}
        </li>

        <li className="mb-6">
          <ShopIcon className=" w-6 h-6" />
          <span>{t('ShoppingCart')}</span>
        </li>

       <LanguageSwitcher/>
      </ul>
      
    </>
  );
}
