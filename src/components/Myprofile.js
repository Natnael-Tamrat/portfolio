import React from 'react'
import photo from '../assets/photo.jpg'
import js from '../assets/js.png'
import react from '../assets/atom.png'
import node from '../assets/nodejs.png'
import db from '../assets/database.png'
import mongo from '../assets/mongo.png'
import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import cv from '../assets/natnael cv.pdf'
import './MyProfile.css'
export default function Myprofile() {
  return (
    <div id="Profile" className='my-profile'>
       <h1 className='profile'>My Profile</h1> 
         <p>Why choose me?</p>
         <div className='horizontal'></div>
         <div className='scroll'></div>
         <div className="frame">
             <div className="image">
                 <img className='left' src={photo}></img> 
             </div>
             <div className='skills'>
               <h2 className='detail'>I am a last year Bachelor degree Computer science student and Full stack developer intern seeking oppportunities to maximise my skills.</h2>
               <h1 className='skills'>Skills</h1>
               
                <img className="lang" src={html}></img>
                <img className="lang" src={css}></img>
                <img className="lang" src={js}></img>
                <img className="lang" src={react}></img>
                <img className="lang" src={db}></img>
                <img className="lang" src={mongo}></img>
                <img className="lang" src={node}></img>
                 
                
             </div>
         </div>
         <div className='btn'>
                 <a href={cv}><button className='resume'>Download Resume</button></a>
                     </div>    
        </div>
  )
}
