import MobNavbar from "./Menu/Mobile/MobNavbar";
import MobMenu from "./Menu/Mobile/MobMenu";
import { useCart } from "./../../Context/CartContext";
import MainShoppingCart from "./ShoppingCart/MainShoppingCart";

export default function MobHeader({ dark, toggleTheme }) {
  const { openShoppingCart, openMobileMenu } = useCart();
  return (
    <>
      {!openShoppingCart && !openMobileMenu && <MobNavbar dark={dark} />}
      {openMobileMenu && <MobMenu dark={dark} toggleTheme={toggleTheme} />}
      {openShoppingCart && <MainShoppingCart dark={dark} />}
    </>
  );
}
