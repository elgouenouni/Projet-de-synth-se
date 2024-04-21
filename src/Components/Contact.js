import React, { useState } from 'react';
import "../CssStyles/contact.css"
import Navigation from './Navigation';
import Footer from './Footer';

import emailjs from 'emailjs-com';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoi de l'e-mail via EmailJS
    emailjs.sendForm('service_tdmm5kc', 'template_gn8g36h', e.target, 'QrSrBpjq7vCNZ23os')
      .then((result) => {
        console.log(result.text);
        // Gérer la réussite de l'envoi de l'e-mail ici
      }, (error) => {
        console.error(error.text);
        // Gérer les erreurs d'envoi d'e-mail ici
      });
  };
  return (

   <>
   
   <Navigation/>    
    <div className="container11"   onSubmit={handleSubmit}>
      
      <div className="row">
        <div className="col">
          <div className="contact-image">
            <img className="IMGG" src="Screenshot 2024-02-09 131326.png" alt="Contact Image" />
          </div>
        </div>
        
        <div className="col">
          <h2 id='contactt' className="text-center ">Contact Us</h2>
          <div className="contact-form">
            <form action="#" method="POST" className='formulaie'>
             
                <label htmlFor="name" className='label1'>Name</label>
              <input type="text" className="form-control"  value={name} onChange={(e) => setName(e.target.value)}  id="name" name="name" required />
              
            
                <label htmlFor="email"  className='label1'>Email</label>
                <input type="email" className="form-control" id="email"  value={email} onChange={(e) => setEmail(e.target.value)} name="email" required />
            
             
                <label htmlFor="message"  className='label1'>Message</label>
                <textarea className="form-control" id="message" name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
             
              <button type="submit" id="button1" className="btn btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
}

export default Contact;