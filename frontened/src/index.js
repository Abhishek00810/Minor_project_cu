import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from './Registration';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="Register" element={<Registration />} />
    <Route path="*" element={<Registration />} />
    </Routes> 
    </BrowserRouter>
  </React.StrictMode>
)