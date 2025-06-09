import DesSubMenu from "./DesSubMenu";

export default function DesMenu({ dark }) {
  return (
    <>
      <div className="flex gap-x-4 lg:gap-x-6 xl:gap-x-9 h-14">
        {/* logo section */}
        <div className="flex cursor-pointer shrink-0">
          <img src="images/app-logo.png" alt="Golden Coffee" />
        </div>
        {/* subMenu section */}
        <div className="flex ">
          <ul className="flex h-full items-center gap-x-5 lg:gap-x-6 xl:gap-x-9 text-gray-300 font-PoppinsRegular font-normal text-lg xl:text-xl [&_li]:leading-[56px] [&_li]:hover:cursor-pointer [&_li]:hover:text-orange-300 ">
            <li className="font-medium text-orange-200 font-PoppinsMedium">
              Home
            </li>

            <li className="relative group">
              Store
              <DesSubMenu dark={dark} />
            </li>

            <li> Dictionary </li>
            <li> Blog</li>
            <li> About </li>
            <li> Contact </li>
          </ul>
        </div>
      </div>
    </>
  );
}
