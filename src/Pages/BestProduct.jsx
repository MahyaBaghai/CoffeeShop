import bestProduct from "../Utility/bestProductInfo";
import Cards from "../components/Cards/Cards";
import { useState, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from 'react-i18next';
import { Navigation } from "swiper/modules";

export default function BestProduct({ dark }) {
  const { t } = useTranslation();
  const [bestProducts, setBestProducts] = useState(bestProduct);

  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const calculatePrice = (price, discount) => {
    if (discount > 0) {
      let newPrice = price * (1 - discount / 100);
      const truncated = Math.trunc(newPrice * 100) / 100;
      return truncated.toFixed(2).replace(/\.?0+$/, "");
    }

    const truncated = Math.trunc(price * 100) / 100;
    return truncated.toFixed(2).replace(/\.?0+$/, "");
  };

  return (
    <>
      <section className="@container">
        <div className="@8xl:w-[1260px] @8xl:mx-auto @3xl:mx-10 mx-4">
          {/* title */}
          <div className={`${dark ? "text-white" : "text-zinc-700"}`}>
            <div className="sectionTitle ">  {t('BestProducts')} </div>
            <div className="flex justify-between items-center gap-x-1 md:pb-12 pb-6">
              <span className="sectionSubtitle">
                 {t('BestCoffeeLovers')}
              </span>
              <div className="flex gap-3 md:gap-5">
                <button
                  className={`md:w-11 md:h-11 w-9 h-9  rounded-full flex items-center justify-center shadow-normal ${
                    dark
                      ? "bg-zinc-700 hover:bg-white hover:[&_*]:text-zinc-700 active:bg-white active:[&_*]:text-zinc-700 "
                      : "bg-white hover:bg-gray-300 active:bg-gray-300"
                  }`}
                >
                  <IoIosArrowBack
                    onClick={handlePrev}
                    className={`md:w-6.5 md:h-6.5 w-5 h-5 cursor-pointer mySwiper prev ${
                      dark
                        ? "text-white  "
                        : "text-zinc-700"
                    }`}
                  />
                </button>

                <button
                  className={`md:w-11 md:h-11 w-9 h-9 rounded-full flex items-center justify-center shadow-normal ${
                    dark
                      ? "bg-zinc-700 hover:bg-white hover:[&_*]:text-zinc-700 active:bg-white active:[&_*]:text-zinc-700 "
                      : "bg-white hover:bg-gray-300 active:bg-gray-300"
                  }`}
                >
                  <IoIosArrowForward
                    onClick={handleNext}
                    className={`md:w-6.5 md:h-6.5 w-5 h-5 cursor-pointer mySwiper ${
                      dark
                        ? "text-white "
                        : "text-zinc-700"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        

          <Swiper
            slidesPerView={2}
            spaceBetween={8}
            breakpoints={{
              400: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation]}
            ref={swiperRef}
            className="mySwiper"
          >
            {bestProducts.map((bestProduct) => (
              <SwiperSlide>
                <Cards
                  key={bestProduct.id}
                  dark={dark}
                  {...bestProduct}
                  finalPrice={calculatePrice(
                    bestProduct.price,
                    bestProduct.discount
                  )}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          
        </div>
      </section>
    </>
  );
}
