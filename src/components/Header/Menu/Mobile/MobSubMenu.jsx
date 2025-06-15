
import { useTranslation } from 'react-i18next';
import { useCart } from './../../../../Context/CartContext'
export default function MobSubMenu({ dark }) {
  const { t } = useTranslation();
  const { goToproducts , goToBestProducts, goToBanner,goToAccrssories} = useCart();
  return (
    <>
      <div
        className={`relative flex flex-col gap-y-3 pl-4 pt-3 [&>*]:font-PoppinsRegular [&>*]:font-normal [&>*]:text-sm 
          [&_*]:active:text-orange-300 [&_*]:active:pl-2 
           ${dark ? "[&>*]:text-white" : "[&>*]:text-zinc-600"}`}
      >
        <span onClick={goToproducts}>{t('NewestProducts')}</span>
        <span onClick={goToBanner}>{t('BannerTypesOfCoffee')}</span>
        <span onClick={goToBestProducts}>{t('BestProducts')}</span>
        <span onClick={goToBanner}>{t('BannerPowders')}</span>
        <span onClick={goToAccrssories}>{t('ServiceAccessoriesTitle')}</span>
      </div>
    </>
  );
}
