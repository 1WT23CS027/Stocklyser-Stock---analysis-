import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './header';
import Homepage from './homepage';
import Footer from './footer';
import './style.css';
import Login_page from './login';
import SignUp_page from './signUp';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import Terms from './terms';
import AboutUs from './aboutUs';
import Gold from './gold';
import Silver from './silver';
import Bitcoin from './Bitcoin';
reportWebVitals();

function RenderAll(){
      return(
      <div>
        <BrowserRouter>
        
        
        
        <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login_page />} />
        <Route path="/aboutUs" element={<AboutUs/>}></Route>
        <Route path="/terms" element={<Terms/>}></Route>
        <Route path="/signUp" element={<SignUp_page/>}></Route>
        <Route path='/gold' element={<Gold/>}></Route>
        <Route path='/silver' element={<Silver/>}></Route>
        <Route path='/Bitcoin' element={<Bitcoin/>}></Route>
      </Routes>

        </BrowserRouter>
      </div>
      )
      
         
      
      
}




const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RenderAll/>);