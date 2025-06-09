import MobNavbar from "./Menu/Mobile/MobNavbar";
import MobMenu from "./Menu/Mobile/MobMenu";
import { useState } from "react";
import MainShoppingCart from "./ShoppingCart/MainShoppingCart";

export default function MobHeader({ dark, toggleTheme }) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openShoppingCart, setOpenShoppingCart] = useState(false);

  const openMenuInMobile = () => {
    setOpenMobileMenu(true);
  };

  const closeMenuInMobile = () => {
    setOpenMobileMenu(false);
  };

  const openShoppingCartInMobile = () => {
    setOpenShoppingCart(true);
  };

  const closeShoppingCartInMobile = () => {
    setOpenShoppingCart(false);
  };
  return (
    <>
      {!openShoppingCart && !openMobileMenu && (
        <MobNavbar
          dark={dark}
          openMenuInMobile={openMenuInMobile}
          openShoppingCartInMobile={openShoppingCartInMobile}
        />
      )}

      {openMobileMenu && (
        <MobMenu
          dark={dark}
          toggleTheme={toggleTheme}
          closeMenuInMobile={closeMenuInMobile}
        />
      )}

      {openShoppingCart && (
        <MainShoppingCart
          dark={dark}
          closeShoppingCartInMobile={closeShoppingCartInMobile}
        />
      )}
    </>
  );
}
