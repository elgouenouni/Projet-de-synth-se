import React from 'react';
import "../CssStyles/contact.css"
import Navigation from './Navigation';
import Footer from './Footer';
function Contact() {
  return (

   <>
   <Navigation/>    
    <div className="container11" >
      
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
              <input type="text" className="form-control" id="name" name="name" required />
              
            
                <label htmlFor="email"  className='label1'>Email</label>
                <input type="email" className="form-control" id="email" name="email" required />
            
             
                <label htmlFor="message"  className='label1'>Message</label>
                <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
             
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