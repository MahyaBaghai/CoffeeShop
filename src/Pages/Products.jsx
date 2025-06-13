import { MdKeyboardArrowRight } from "react-icons/md";
import Cards from "../components/Cards/Cards";
import { useState } from "react";
import productsInfo from "../Utility/productIsnfo";
import { useTranslation } from 'react-i18next';

export default function Products({ dark }) {
  const { t } = useTranslation();

  const [productsData, setProductsData] = useState(productsInfo);

  const calculatePrice = (price, discount) => {
    if (discount > 0) {
      return price * (1 - discount / 100);
    }
    return price;
  };

  return (
    <>
      <section
       id="products-section"
       className="@container min-h-[818px] w-full z-0 xl:bg-[url(/images/body-bg.png)] relative bg-no-repeat bg-cover ">
        {!dark && (
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-gray-100/65 to-gray-100/65"></div>
        )}

        <div className="@8xl:w-[1260px] @8xl:mx-auto @3xl:mx-10 mx-4 relative z-10 lg:pt-40 md:pt-28 pt-8 ">
          {/* title */}
          <div className={`${dark ? "text-white" : "text-zinc-700"}`}>
            <div className="sectionTitle "> {t('NewestProducts')} </div>
            <div className="flex justify-between items-center gap-x-1 md:pb-12 pb-6 ">
              <div className="sectionSubtitle">
                {t('CoffeeBeans')}
              </div>
              <div className="sectionLink">
                <div className="hidden md:block">{t('ViewAllProducts')}</div>
                <div className="md:hidden block">{t('ViewAll')} </div>
                <MdKeyboardArrowRight className="sectionLinkIcon" />
              </div>
            </div>
          </div>

          {/* Cards Data */}
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 2xs:gap-5 gap-2">
            {productsData.map((productData) => (
              <Cards
                key={productData.id}
                dark={dark}
                {...productData}
                finalPrice={calculatePrice(
                  productData.price,
                  productData.discount
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
