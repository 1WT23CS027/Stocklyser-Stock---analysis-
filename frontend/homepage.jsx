import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './header';
import Footer from './footer';
import './style.css';
import { Link } from 'react-router-dom';
function Homepage(){
      return(
       
        <div id="stocklyser">
            <Header/>
            <h1 id="Homepagetitle">stockLyser<img id="iconlogo" src="/chart.png" alt="chart"></img></h1>
            <h3 id="homepagedesc">Stock analysis and screening tool for investors !!</h3>
            <div id="buttons">
                <Link to='/gold' ><button id="gold"><img class="image" id="goldimage" src="/gold.png" alt={"Gold"} /></button></Link>
                <Link to='/silver'><button id="silver"><img class="image" id="silverimage" src="/silver.png" alt={"Silver"} /></button></Link>
                <Link to='/Bitcoin'><button id="nifty"><img class="image"id="niftyimage" src="/bitcoin.png" alt="Bitcoin" /></button></Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
           <br></br>
            <Footer/>   
        </div>
        
      )
}

export default Homepage;