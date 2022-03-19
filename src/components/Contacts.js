import React from 'react'
import "./Contacts.css"
import emailjs from "emailjs-com"
import phone from "../assets/phone.png"
import email from "../assets/email.png"
import maps from "../assets/maps.png"
import { Form,Button,FormGroup,FormLabel } from 'react-bootstrap'




export default function Contacts() {
    const sendEmail = (e)=>{
         e.preventDefault();
        emailjs.sendForm('service_yv0y53b', 'template_lokq9le',e.target, 'M_Vf1B7nzY-2I8sB8')
        .then(function(response) {
           alert('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
    }
  return (
    <div id="Contacts" className='contacts'>
       <div className='social'>
           <h2 id='get'>GET IN TOUCH</h2>
          <div className='phone'>
          <img className='imag' src={phone}></img>
          <h2 className='txt'>+48 579 248 004</h2>
          </div>
          <div className='email'>
          <img className='imag' src={email}></img>
          <h2 className='txt'>ntamrat16@gmail.com</h2>
          </div>
          <div className='address'>
          <img className='imag' src={maps}></img>
          <h2 className='txt'>Warsaw,   Poland</h2>
          </div>
       </div>
       <div className='right2'>
           <h2 id='get'>WRITE ME</h2>
           <form onSubmit={sendEmail}>
           <div className='name'> <label for="name">Name </label>
            <input id="name" type="text" name="name"></input>
            </div> 
            <div className='mail'> <label for="email">E-mail</label>
            <input id="email" type="email" name='email'></input>
            </div>  
            <div className='message'> <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>
            </div>  
            <input id="send" type='submit' value="SEND"></input>
            </form>
       </div>
       <div className='cw'><h2  id='copy'>© 2022 ,Natnael Habtemariam ,All Right Reserved. </h2></div>  
    </div>
  )
}
