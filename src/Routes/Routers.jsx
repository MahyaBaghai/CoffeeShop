import { Route, Routes } from "react-router";
import Main from "../Main/Main";

export default function Routers({dark , toggleTheme}) {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Main dark={dark} toggleTheme={toggleTheme}/>}/>
       
      </Routes>
    </>
  )
}
