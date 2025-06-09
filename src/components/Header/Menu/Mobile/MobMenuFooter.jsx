import ArrowLeftEnd from "../../../Icons/ArrowLeftEnd";
import Moon from "../../../Icons/Moon";
import Sun from "../../../Icons/Sun";
import ShopIcon from "../../../Icons/ShopIcon";

export default function MobMenuFooter({ dark, toggleTheme }) {
  return (
    <>
      <ul className="flex flex-col items-start [&_*]:inline-flex [&_*]:cursor-pointer  mx-6.5 mt-7 [&_*]:gap-x-2 [&_*]:space-y-6 [&_*]:text-orange-300">
        <li>
          <ArrowLeftEnd className="w-6 h-6 rotate-y-180" />
          <span>Login | Register</span>
        </li>

        <li
          onClick={toggleTheme}
          className="transition-all duration-300 ease-in-out  "
        >
          {dark ? (
            <div>
              <Sun className="w-6.5 h-6 " />
              <span>Light mode</span>
            </div>
          ) : (
            <div>
              <Moon className=" w-6.5 h-6 " />
              <span>Dark mode</span>
            </div>
          )}
        </li>

        <li>
          <ShopIcon className=" w-6 h-6" />
          <span>Shopping cart</span>
        </li>
      </ul>
    </>
  );
}
