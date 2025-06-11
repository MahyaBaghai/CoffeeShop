import { FaInstagram } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
export default function ContactBtn() {
  const sozial = [
    { id: 1, icon: FaInstagram, address: "@golden_Café" },
    { id: 2, icon: RiTelegram2Line, address: "@golden_Café" },
  ];
  return (
    <>
      {sozial.map((item) => (
        <div key={item.id} className="flex 2xl:px-5 lg:px-3 xs:px-5 px-1 py-2.5 gap-x-2 border-[1px] border-orange-300 rounded-xl items-center text-orange-300 hover:bg-linear-to-l from-orange-200 to-orange-300 hover:text-zinc-700 cursor-pointer">
          <div className="font-PoppinsRegular font-medium 2xl:text-lg xl:text-base lg:text-sm sm:text-base text-sm">{item.address}</div>
          <div >{<item.icon className="2xl:w-7 2xl:h-7 lg:w-6 lg:h-6 sm:w-7 sm:h-7 w-6 h-6"/>}</div>
        </div>
      ))}
    </>
  );
}
