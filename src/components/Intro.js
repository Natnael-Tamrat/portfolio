import React from 'react'
import "./intro.css"
import Typical from 'react-typical'
import profile from "../assets/pomi.jpg"
import {Navbar,Nav} from 'react-bootstrap';
import { BrowserRouter } from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link"
const toggleClicked = ()=>{
    let d=document.querySelector(".active");
   
    if(d != null){
   d.classList.remove("active");
    }
    else
    {
        document.querySelector(".links").classList.add("active");
      
       
    
}}
export default function Intro() {
  return (
      <BrowserRouter>
      <div className="navigation">
    <div className="intro">
        <div className="nav">
            
     <nav className="navbar">
     <a className="toggle-button" onClick={toggleClicked}>
         <span class="bar"></span>
         <span class="bar"></span>
         <span class="bar"></span>
         </a>    
         </nav>
     <div className="links">
         <ul>
             <li><Link to="#">Home</Link></li>
             <li><Link to="#Profile">Profile</Link></li>
             <li><Link to="#Projects">Projects</Link></li>
             <li><Link to="#Contacts">Contacts</Link></li>
         </ul>
     </div>
         
       
        </div>
   
    </div>
    <div className="second">
    <div className="left">
             <h1>Hello I'm <span className="name">Natnael H.</span></h1>
             <Typical 
              loop ={Infinity}
              steps ={[
                  "Full Stack Developer.",2000,
                  "MERN Stack Dev.",2000,
              ]}
              className="typical"
               
             />
        </div>
        <div className="right">
          <img className="img1" src={profile} alt="none"></img>
        </div>
    </div>
   
  </div>
  </BrowserRouter>
  )
}
