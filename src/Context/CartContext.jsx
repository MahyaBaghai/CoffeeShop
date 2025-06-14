
import  { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // add to shoppingCart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
      //  if(existing) => increase
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // if(!existing) == 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    console.log(product);
    
  };

// incerase product
  const increaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // decrease product
  const decreaseQuantity = (productId) => {
    setCartItems(prevItems => {
      return prevItems
        .map(item => {
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

  const goToHome = () => {
    setTimeout(() => {
      const element = document.getElementById('home-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);    
   
  };

  const goToClub = () => {
    setTimeout(() => {
      const element = document.getElementById('club-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);    
  };

  const goToAbout= () => {
    setTimeout(() => {
      const element = document.getElementById('about-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);    
  };

  const goToContact= () => {
    setTimeout(() => {
      const element = document.getElementById('contact-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);    
  };


  

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      goToHome,
      goToClub,
      goToAbout,
      goToContact
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);