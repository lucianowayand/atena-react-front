import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PageSorter from "./pages/Form/PageSorter";
import Login from "./pages/Login/Login";
import Application from "./pages/Application/Application";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cadastro' element={<PageSorter/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Application/> } />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
      
   
      
  );
}
