export default function CategoryItems({ dark }) {
  const items = [
    {
      id: 1,
      image: "/images/categories/category1.png",
      title: "Turkish coffee",
    },
    {
      id: 2,
      image: "/images/categories/category2.png",
      title: "Coffee tester pack",
    },
    {
      id: 3,
      image: "/images/categories/category3.png",
      title: "Espresso maker",
    },
    {
      id: 4,
      image: "/images/categories/category4.png",
      title: "Accessories and equipment",
    },
    {
      id: 5,
      image: "/images/categories/category5.png",
      title: "Brewed coffee and espresso",
    },
  ];
  return (
    <>
      <section className="@container">
        <div className="@8xl:w-[1260px] @8xl:mx-auto @3xl:mx-10 mx-4">
          <div className="flex flex-wrap  lg:justify-between justify-center lg:gap-x-9 md:gap-x-18 sm:gap-x-19 xs:gap-x-12 2xs:gap-x-8 gap-x-5  gap-y-4 mb-10 2xs:mb-15 md:mb-18 lg:mb-25">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col gap-2.5 h-full
               xl:w-45 lg:w-40 sm:w-35 xs:w-30 2xs:w-25 w-22 ">
                <div className="flex      ">
                  <img src={item.image} alt={item.title} />
                </div>
                <div
                  className={`text-center font-PoppinsMedium text-xs xs:text-sm md:text-base lg:text-lg xl:text-xl font-medium  ${
                    dark ? "text-white" : "text-zinc-700"
                  }`}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
