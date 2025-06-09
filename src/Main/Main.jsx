import Home from "../Pages/Home"
import Products from "../Pages/Products"
import CategoryBanner from '../Pages/CategoryBanner'
import CategoryItems from "../Pages/CategoryItems"
import BestProduct from "../Pages/BestProduct"
import CoffeeClub from "../Pages/CoffeeClub"
import Blog from "../Pages/Blog"
import ContactUs from "../Pages/ContactUs"
import Services from "../Pages/Services"
import MainFooter from "../components/Footer/MainFooter"

export default function Main({ dark, toggleTheme }) {
  return (
    <>
      <Home dark={dark} toggleTheme={toggleTheme}/>
      <Products dark={dark}/>
      <CategoryBanner />
      <CategoryItems dark={dark}/>
      <BestProduct dark={dark}/>
      <CoffeeClub />
      <Blog dark={dark}/>
      <ContactUs dark={dark}/>
      <Services dark={dark} />
      <MainFooter dark={dark}/>
    </>
  ) 
}
