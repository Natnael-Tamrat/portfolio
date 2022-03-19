import React from 'react'
import "./Projects.css"
import project1 from "../assets/inj.jpg"
import portfolio from "../assets/portfolio.png"
import github from "../assets/github-logo.png"
import { Figure,Figcaption } from 'react-bootstrap'
export default function Projects() {
  return (
    <div id="Projects" className='projects'>
     <h2 className='text'>My Projects</h2>
     <div className='prj'>
       <div className='part1'>
       <div className='task1' >
               
               <img className="injera" src={project1}></img>
                            
                
                       </div>    
                       <div className='description'>
                         <h2 className="txt" >Restaurant Food Ordering Website</h2>
                           <h3 id="desc">Restaurant Food ordering site made using HTML, CSS, JavaScript and React framework.</h3>
                           <a href="https://github.com/Natnael-Tamrat/injera-app" target="_blank"><img id="git"src={github}></img></a>
                           <a href='https://injera-restaurant.netlify.app/' target="_blank"> <button id="browse">Browse Site</button></a> 

                           </div>        
</div>
<div className='part1'>
       <div className='task1' >
               
               <img className="injera" src={portfolio}></img>
                            
                
                       </div>    
                       <div className='description'>
                         <h2 className="txt2" >Portfolio Website</h2>
                           <h3 id='desc'>Portfolio site made using HTML, CSS, JavaScript and React framework.</h3>
                              <a><img id="git"src={github}></img></a>
                             <button id="browse">Browse Site</button>

                           </div>        
</div>  


     </div>
          


    </div>
  )
}
