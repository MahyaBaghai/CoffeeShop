import { useTranslation } from 'react-i18next';

export default function ShoppingCartFooter({ dark, cartItems }) {
  const { t } = useTranslation();
   const total = cartItems.reduce(
    (sum, item) => sum + (item.finalPrice * item.quantity), 
    0
  );
  return (
    <>
      <div className="flex items-center justify-between md:pb-5 md:mx-7 mx-2 ">
        {/* order button section*/}
        <div
          className={`flex items-center justify-center xl:w-36 xl:h-14 w-32 h-12 rounded-xl xl:text-xl md:text-lg text-base text-white font-normal font-PoppinsRegular cursor-pointer
                ${
                  dark
                    ? "bg-emerald-500 hover:bg-emerald-600"
                    : "bg-teal-600 hover:bg-teal-700"
                }`}
        >
          {t('Order')}
        </div>
        {/* Total price section*/}
        <div className="flex flex-col items-center font-PoppinsMedium">
          <div className="xl:text-sm text-xs font-medium  text-gray-300">
            {t('Amount')}
          </div>
          <div
            className={`flex items-center gap-x-1  ${
              dark ? "text-white" : "text-zinc-700"
            }`}
          >
             <div className="xl:text-xl md:text-lg text-base font-semibold">
              {total.toFixed(2)}
            </div>
            <div className="xl:text-sm text-xs  font-text-base"> €</div>
           
          </div>
        </div>
      </div>
    </>
  );
}
