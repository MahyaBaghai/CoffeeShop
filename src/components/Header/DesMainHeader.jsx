import DesMenu from "./Menu/Desktop/DesMenu";
import DesLoginMenu from "./Menu/Desktop/DesLoginMenu";

export default function DesHeader({ dark, toggleTheme }) {
  return (
    <>
      <div className="hidden md:flex fixed items-center right-0 left-0 top-9 w-[95%] h-20 xl:h-22  mx-auto py-5 px-6 lg:px-7 xl:px-8 2xl:px-10 bg-black/50 backdrop-blur-md rounded-3xl z-50">
        <div className="flex justify-between w-full ">
          {/* menu section */}
          <DesMenu dark={dark} />
          {/* login section */}
          <DesLoginMenu dark={dark} toggleTheme={toggleTheme}/>
        </div>
      </div>
    </>
  );
}
