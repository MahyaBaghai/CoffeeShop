
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // افزودن محصول به سبد خرید
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // اگر محصول وجود دارد، تعداد را افزایش می‌دهیم
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // اگر محصول وجود ندارد، با مقدار اولیه 1 اضافه می‌کنیم
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // افزایش تعداد محصول
  const increaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // کاهش تعداد محصول
  const decreaseQuantity = (productId) => {
    setCartItems(prevItems => {
      return prevItems
        .map(item => {
          if (item.id === productId) {
            // اگر تعداد 1 بود، حذف می‌شود
            return item.quantity > 1 
              ? { ...item, quantity: item.quantity - 1 } 
              : null;
          }
          return item;
        })
        .filter(Boolean); // حذف آیتم‌های null
    });
  };

  // حذف کامل محصول
  const removeItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeItem
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);