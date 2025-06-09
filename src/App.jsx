import "./index.css";
import 'swiper/css';
import Routers from "./Routes/Routers";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };
  return (
    <>
    <div className={`@container min-h-screen min-w-[336px] ${dark ? " bg-zinc-800" : "bg-gray-100"}`}>

      <Routers dark={dark} toggleTheme={toggleTheme}/>
    </div>
    </>
  );
}

export default App;
