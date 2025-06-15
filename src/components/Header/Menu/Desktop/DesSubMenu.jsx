import { useTranslation } from 'react-i18next';
import { useCart } from './../../../../Context/CartContext'

export default function DesSubMenu({ dark }) {
  const { t } = useTranslation();
  const { goToproducts , goToBestProducts, goToBanner,goToAccrssories} = useCart();
  return (
    <>
      <div
        className={`absolute top-full w-48 xl:w-53 space-y-5 py-5 px-5 shadow-black/5 rounded-2xl border-t-[3px] border-orange-300 
                     invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all ease-in-out delay-75
                   [&>span]:block [&>span]:leading-none [&>span]:text-sm xl:[&>span]:text-base [&>span]:font-normal [&>span]:hover:font-PoppinsMedium  [&>span]:hover:text-orange-300  
                   ${
                     dark
                       ? "bg-zinc-700 [&>span]:text-white"
                       : "bg-white [&>span]:text-zinc-700"
                   } `}
      >
        {/* subMenu store section */}

        <span onClick={goToproducts}>{t('NewestProducts')}</span>
        <span onClick={goToBanner}>{t('BannerTypesOfCoffee')}</span>
        <span onClick={goToBestProducts}>{t('BestProducts')}</span>
        <span onClick={goToBanner}>{t('BannerPowders')}</span>
        <span onClick={goToAccrssories}>{t('ServiceAccessoriesTitle')}</span>
      </div>
    </>
  );
}
