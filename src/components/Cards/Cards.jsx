import { FaRegStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";
import { useCart } from "./../../Context/CartContext";

export default function Cards({
  dark,
  id,
  img,
  name,
  price,
  discount,
  grade,
  stock,
  finalPrice,
}) {
  const { addToCart } = useCart();
  const { t } = useTranslation();
  return (
    <>
      <div
        className={`flex flex-col md:p-5 p-3 justify-center shadow-normal rounded-2xl cursor-pointer ${
          dark ? "bg-zinc-700" : "bg-white"
        }`}
      >
        {/* image section */}
        <div className="flex mb-5 relative ">
          {discount > 0 && (
            <div className="flex items-center justify-center absolute left-0 rounded-full md:w-13.5 md:h-7.5 w-9 h-5 bg-orange-300 xl:m-1">
              <div
                className={`font-PoppinsMedium md:text-base text-xs ${
                  dark
                    ? "text-zinc-700 font-semibold"
                    : "text-white font-medium"
                }`}
              >
                {discount}%
              </div>
            </div>
          )}
          <div className="flex items-center ">
            <img src={img} alt={name} loading="lazy" />
          </div>
        </div>
        {/* Title section */}

        <div className=" flex flex-col mb-4">
          <div
            className={`font-PoppinsMedium md:text-lg text-base font-medium line-clamp-2 md:h-14 h-12 mb-2.5 ${
              dark ? "text-white" : "text-zinc-700"
            }`}
          >
            {name}
          </div>

          {/* price section */}
          {/* price with discount */}
          {stock && discount > 0 && (
            <div className="flex flex-row gap-x-7">
              {/* original price section*/}

              <div
                className={`flex gap-x-0.5 font-PoppinsMedium items-center ${
                  dark ? "text-emerald-500" : "text-teal-600"
                }`}
              >
                <div className="font-semibold md:text-xl text-lg">
                  {finalPrice}
                </div>
                <div className="font-normal md:text-base text-xs">€</div>
              </div>

              {/* previous Price section */}
              <div className="flex font-PoppinsRegular font-normal text-gray-400 items-center relative">
                <div className="md:text-xl text-lg"> {price}</div>
                <div className="md:text-sm text-xs">€</div>
                <div className="border-t-[1px] border-red-500 md:w-12 w-10 absolute right-0 left-0"></div>
              </div>
            </div>
          )}
          {/* price wihout discountsection */}
          {stock && discount === 0 && (
            <div
              className={`flex gap-x-0.5 font-PoppinsMedium items-center ${
                dark ? "text-emerald-500" : "text-teal-600"
              }`}
            >
              <div className="font-semibold md:text-xl text-lg">
                {finalPrice}
              </div>
              <div className="font-normal md:text-base text-xs">€</div>
            </div>
          )}

          {/* Unavailable */}
          {!stock && (
            <div className="font-PoppinsMedium font-normal md:text-base text-sm text-red-400">
              {t("Unavailable")}
            </div>
          )}
        </div>

        {/* icons Section */}
        <div className="flex justify-between items-center lg:gap-x-2 gap-x-1 mb-1.5">
          {/* shopping & change icon */}
          <div className="flex items-center xl:gap-x-2 gap-x-1 transition-all duration-300">
            {/* shooping cart group */}
            <div
              className={`flex items-center justify-center lg:w-12 lg:h-12 xs:w-11 xs:h-11 2xs:w-10 2xs:h-10 w-8 h-8 rounded-full relative ${
                dark
                  ? "bg-zinc-800 hover:bg-emerald-500 active:bg-emerald-500"
                  : "bg-gray-100 hover:bg-teal-600 active:bg-teal-600"
              }`}
            >
              <HiOutlineShoppingCart
                onClick={(e) => {
                  e.stopPropagation();
                  if (stock) {
                    addToCart({
                      id: id,
                      img: img,
                      name: name,
                      price: price,
                      discount: discount,
                      finalPrice: finalPrice,
                    });
                  }
                }}
                className="xs:w-7 xs:h-7 2xs:w-6 2xs:h-6 w-5 h-5 cursor-pointer text-gray-400 hover:text-white active:text-white"
              />
            </div>
            <LiaExchangeAltSolid
              className={` xs:w-6 xs:h-6 2xs:w-5 2xs:h-5 w-4 h-4 cursor-pointer text-gray-400 ${
                dark
                  ? "hover:text-emerald-500 active:text-emerald-500"
                  : "hover:text-teal-600 active:text-teal-600"
              }`}
            />
          </div>

          {/* stars icon */}
          <div className="flex xl:gap-x-0.3">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaRegStar
                key={index}
                className={`xl:w-6 xl:h-6 lg:w-5.5 lg:h-5.5 2xs:w-5 2xs:h-5 w-4 h-4  ${
                  5 - 1 - index < grade
                    ? "text-yellow-400"
                    : dark
                    ? "text-gray-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
