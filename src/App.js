import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PageSorter from "./components/PageSorter";
import Login from "./components/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cadastro' element={<PageSorter/>} />
        <Route path='/' element={<Login/>} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
      
   
      
  );
}
