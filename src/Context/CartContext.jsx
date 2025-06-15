import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openShoppingCart, setOpenShoppingCart] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const openMenuInMobile = () => {
    setOpenMobileMenu(true);
  };

  const closeMenuInMobile = () => {
    setOpenMobileMenu(false);
  };

  const openShoppingCartInMobile = () => {
    setOpenShoppingCart(true);
    setShowNotification(false); 
  };

  const closeShoppingCartInMobile = () => {
    setOpenShoppingCart(false);
  };


  let toggleSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };

  const clearNotification =()=>{
    setShowNotification(false)
  }


  // add to shoppingCart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        //  if(existing) => increase
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // if(!existing) == 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setShowNotification(true);
  };
// items in shopping cart
  const CartItemCounter = ()=>{
    return cartItems.length
    
   }

  // incerase product
  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // decrease product
  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.id === productId) {
            // if(product==1) => delete
            return item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };
// go to home section
  const goToHome = () => {
    setTimeout(() => {
      const element = document.getElementById("home-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
    closeMenuInMobile();
  };
// go to club section
  const goToClub = () => {
    setTimeout(() => {
      const element = document.getElementById("club-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
    closeMenuInMobile();
  };
// go to about section
  const goToAbout = () => {
    setTimeout(() => {
      const element = document.getElementById("about-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
    closeMenuInMobile();
  };
// go to contact section
  const goToContact = () => {
    setTimeout(() => {
      const element = document.getElementById("contact-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
    closeMenuInMobile();
  };
// go to product section
  const goToproducts = () => {
    setTimeout(() => {
      const element = document.getElementById("products-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
    closeMenuInMobile();
    closeShoppingCartInMobile();
  };
// go to best product section
  const goToBestProducts = () => {
    setTimeout(() => {
      const element = document.getElementById("best-products-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
    closeMenuInMobile();
  };
// go to banner section
  const goToBanner = () => {
    setTimeout(() => {
      const element = document.getElementById("banner-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
    closeMenuInMobile();
  };
// go to accrssories section
  const goToAccrssories = () => {
    setTimeout(() => {
      const element = document.getElementById("accrssories-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
    closeMenuInMobile();
  };
// go to head section in mobile
  const goToHeader = () => {
    setTimeout(() => {
      const element = document.getElementById("Head-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
    closeMenuInMobile();
  };

  return (
    <CartContext.Provider
      value={{
        openMobileMenu,
        openShoppingCart,
        openMenuInMobile,
        closeMenuInMobile,
        openShoppingCartInMobile,
        closeShoppingCartInMobile,
        openSubMenu,
        toggleSubMenu,
        cartItems,
        showNotification,
        clearNotification,
        CartItemCounter,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        goToHome,
        goToClub,
        goToAbout,
        goToContact,
        goToproducts,
        goToBestProducts,
        goToBanner,
        goToAccrssories,
        goToHeader,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
