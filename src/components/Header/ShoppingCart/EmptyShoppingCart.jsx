import { PiShoppingCartSimple } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router'

export default function EmptyShoppingCart({ dark , closeShoppingCartInMobile}) {
  const { t } = useTranslation();
  

  const goToProducts = () => {
     
    setTimeout(() => {
      const element = document.getElementById('products-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50); 
    
  };

  return (
    <>
      {/* content empty shopping cart section */}
      <div className="flex flex-col items-center gap-10 py-14 md:px-18 px-5">
        {/* icon & text group section */}
        <div className="flex flex-col items-center gap-3 ">
          <div className="text-gray-300">
            <PiShoppingCartSimple className="w-20 h-20 rotate-y-180" />
          </div>
          <div
            className={` font-PoppinsMedium font-medium text-base ${
              dark ? "text-white" : "text-zinc-700"
            }`}
          >
            {t('EmptyCart')}
          </div>
        </div>
        {/* button empty shopping cart section */}

        <div className="mx-5 ">
          <button
            onClick={goToProducts}
            className={` xl:w-64 md:w-54 w-47 h-14 rounded-xl font-PoppinsMedium xl:text-xl text-lg font-normal text-white text-center
             ${
               dark
                 ? "bg-emerald-500 hover:bg-emerald-600 "
                 : "bg-teal-600 hover:bg-teal-700"
             }`}
          >
             {t('ViewShopPage')}
          </button>
        </div>
      </div>
    </>
  );
}
