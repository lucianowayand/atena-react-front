import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageSorter from "./components/PageSorter";
import Login from "./components/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageSorter/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
      
   
      
  );
}
