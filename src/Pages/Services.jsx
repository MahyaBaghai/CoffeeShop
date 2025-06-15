import serviceItems from "../Utility/ServicesItems";
import { useTranslation } from "react-i18next";

export default function Services({ dark }) {
  const { t } = useTranslation();
  return (
    <>
      <section className="@container">
        <div className="@8xl:w-[1260px] @8xl:mx-auto @3xl:mx-10 mx-4">
          <div className="mb-28 grid lg:grid-cols-4 grid-cols-2 sm:justify-between  md:gap-10 sm:gap-x-10 gap-x-4 gap-y-12">
            {serviceItems.map((serviceItem) => (
              <div
                key={serviceItem.id}
                className="flex sm:flex-row flex-col justify-center items-center  gap-4 xl:w-[270px] lg:w-[248px] mx-auto cursor-pointer"
              >
                <div>{<serviceItem.img dark={dark} />}</div>
                {/* service texts */}
                <div
                  className={`font-PoppinsMedium flex flex-col gap-1 max-sm:text-center ${
                    dark ? "text-white" : "text-zinc-700"
                  } `}
                >
                  <div className="font-semibold  xl:text-lg sm:text-base text-sm">
                    {t(serviceItem.title)}
                  </div>
                  <div className="font-normal sm:text-sm text-xs ">
                    {t(serviceItem.txt)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
