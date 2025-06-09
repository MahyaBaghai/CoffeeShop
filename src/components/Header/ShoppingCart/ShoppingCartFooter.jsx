export default function ShoppingCartFooter({ dark }) {
  return (
    <>
      <div className="flex items-center justify-between md:pb-5 md:mx-7 mx-2">
        {/* order button section*/}
        <div
          className={`flex items-center justify-center xl:w-36 xl:h-14 w-30 h-12 rounded-xl xl:text-xl md:text-lg text-base text-white font-normal font-PoppinsRegular
                ${
                  dark
                    ? "bg-emerald-500 hover:bg-emerald-600"
                    : "bg-teal-600 hover:bg-teal-700"
                }`}
        >
          Ordering
        </div>
        {/* Total price section*/}
        <div className="flex flex-col items-center font-PoppinsMedium">
          <div className="xl:text-sm text-xs font-medium  text-gray-300">
            Amount
          </div>
          <div
            className={`flex items-center gap-x-1  ${
              dark ? "text-white" : "text-zinc-700"
            }`}
          >
            <div className="xl:text-sm text-xs  font-text-base"> $</div>
            <div className="xl:text-xl md:text-lg text-base font-semibold">
              {" "}
              4.37{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
