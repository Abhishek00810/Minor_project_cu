import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Registration from './Registration';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App hasEnter = {false}/>} />
    <Route path="/Registration" element={<Registration />} />
    </Routes>
    </BrowserRouter>
)
