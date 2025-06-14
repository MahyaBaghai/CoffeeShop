import EmptyShoppingCart from "./EmptyShoppingCart";
import MobShoppingCartHeader from "./Mobile/MobShoppingCartHeader";
import ShoppingCartFooter from "./ShoppingCartFooter";
import DesShoppingCartHeader from "./Desktop/DesShoppingCartHeader";
import DesFullShoppingCart from "./Desktop/DesFullShoppingCart";
import MobFullShoppingCart from "./Mobile/MobFullShoppingCart";
import { RxHamburgerMenu } from "react-icons/rx";
import { useCart } from  './../../../Context/CartContext'


export default function MainShoppingCart({ dark, closeShoppingCartInMobile }) {
   const { cartItems } = useCart();
  return (
    <>
      {/* shopping cart in desktop */}
      <div
        className={`md:block absolute right-0 top-full w-80 xl:w-100 max-h-[calc(100vh-8rem)] overflow-y-auto overflow-x-hidden shadow-normal rounded-2xl border-t-[3px] border-orange-300 z-30 
        invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all ease-in-out delay-75
              ${dark ? "bg-zinc-700 " : "bg-white "} `}
      >
        {cartItems.length === 0 ? ( 
          <EmptyShoppingCart dark={dark} />
        ) : 
        ( <>
          <div className="flex flex-col my-4 mx-3 ">
        <DesShoppingCartHeader dark={dark} />
        {cartItems.map(item => (
          <DesFullShoppingCart
          key={item.id} 
          item={item} 
          dark={dark} />
        ))}
        </div>
        <ShoppingCartFooter 
        dark={dark} 
        cartItems={cartItems} /> 
        </>
        )}
       
       
      </div>

      {/* /////////////////////////// */}

      {/* shopping cart in Mobile */}
      <div
        
        className={`md:hidden flex items-center fixed top-0 left-0 right-0 w-full h-16 px-4 sm:px-6 z-50
        ${dark ? "bg-zinc-700" : "bg-white"}`}
      >
        {/* Shopping Lists- Empty or full */}
        <div
          className={`min-h-screen flex flex-col w-[65%] fixed top-0 right-0 bottom-0 z-30 ${
            dark ? "bg-zinc-700" : "bg-white"
          }`}
        >

         <div className={`flex-1 overflow-y-auto`}>
            {/* shopping cart header in mobile */}
             <MobShoppingCartHeader
              dark={dark}
              closeShoppingCartInMobile={closeShoppingCartInMobile}
            />
            {cartItems.length === 0 ? ( 
              <EmptyShoppingCart dark={dark} closeShoppingCartInMobile={closeShoppingCartInMobile}/>
            ): 
            (<>
              {cartItems.map(item => (
                <MobFullShoppingCart 
                  key={item.id} 
                  item={item} 
                  dark={dark} 
                />
              ))}
              <div className={`sticky bottom-0 w-full px-3 py-5  ${dark ? "bg-zinc-700" : "bg-white"} `}>
            <ShoppingCartFooter 
                dark={dark} 
                cartItems={cartItems} 
              />
          </div>
              
            </>
          )}

            
          </div>

           
        </div>

        {/* overlay */}
        <div
          onClick={closeShoppingCartInMobile}
          className={`w-full min-h-screen z-20 fixed top-0 left-0 bottom-0 transition-all duration-300 bg-black/40`}
        ></div>

        {/* hambuger icon */}
        <div className="flex ">
          <RxHamburgerMenu
            className={`h-6 w-6 sm:h-8 sm:w-8 z-10 ${
              dark ? "text-white" : "text-zinc-700"
            }`}
          />
        </div>
      </div>
    </>
  );
}
