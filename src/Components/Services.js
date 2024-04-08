// export default Service;
import React, { useState } from "react";
import Navigation from "./Navigation";
import { Fade } from "react-awesome-reveal";
import { FaShare,FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CssStyles/services.css'
import Footer from './Footer';
import {serviceData} from './ServiseData'
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const [title, settitle] = useState('rien');
  const [List, setlist] = useState(serviceData);
  const liste=List.filter((element)=>element.title===title )

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
         <Navigation/>
   
    <section className="services section" >
       
      <Fade direction="down">
        <h2 className="section_title">Nos Services</h2>
        <span className="section_subtitle">ce que j'offre</span>
      </Fade>
      <div className="container mt-2" >
       <select class="form-select" aria-label="Default select example" onChange={(e)=>settitle(e.target.value)}  >
            <option selected value="rien"defaultValue >choisi une service</option>
             <option value="appartement">appartement</option>
              <option value="Bureau">Bureau</option>
              <option value="villas">villas</option>
              <option value="maquete">maquete</option>
              {/* <option value="villas">villas</option> */}
         </select>
         {/* <select onChange={(e)=>settitle(e.target.value)}>
            <option selected value="rien"defaultValue >choisi une service</option>
            <option value="appartement">appartement</option>
              <option value="Bureau">Bureau</option>
              <option value="villas">villas</option>
              <option value="maquete">maquete</option>
            </select> */}
        </div>
         {title === 'rien' ? (
          List.map((element, index) => (
        <div className="services_container container grid">
          <div className="services_content">
            
            <h3 className="services_title"> {element.title}</h3> 
            <img src={element.image} className="image_service"  />
            <hr/>
            <p> Une entreprise intervenant dans le cadre d'un nettoyage de bureaux propose plusieurs services complémentaires comme le dépoussiérage, le rangement, le débarras d'encombrants, et le vidage des corbeilles. Ces services peuvent s’étendre aux zones de repos, salles de réunion, ascenseurs ou halls d’accueil &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="services_button" onClick={() => toggleTab(1)}><i className="uil uil-arrow-right services_button-icon">lire plus< FaShare/></i> </span>
            </p>
          
          
            <div
              className={ toggleState === 1  ? "services_modal active-modal": "services_modal"}>
              <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"><FaTimes/></i>
                <h3 className="services_modal-title"> {element.title}</h3>
                {/* <p className="services_modal-description">
                Nettoyage du mobilier .
                </p> */}
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                   
                  </li>
                  <li className="services_modal-service">
                    <p className="services_modal-info">Vidage des corbeilles.</p>
                  </li>
                  <li className="services_modal-service">
                    <p className="services_modal-info"> Essuyage des portes.</p>
                  </li>
                    
                 
                  <li className="services_modal-service">
                    <p className="services_modal-info">Bringing user interactions to life.</p>
                  </li>
              
                </ul>
              </div>
            </div>
          </div>
        
         

            {/* </div> */}
          </div>
          ) )):(
           
              liste.map((element, index) => (
            <div className="services_container container grid">
              <div className="services_content">
                
                <h3 className="services_title"> {element.title}</h3> 
                <img src={element.image} className="image_service"  />
                <hr/>
                <p> Une entreprise intervenant dans le cadre d'un nettoyage de bureaux propose plusieurs services complémentaires comme le dépoussiérage, le rangement, le débarras d'encombrants, et le vidage des corbeilles. Ces services peuvent s’étendre aux zones de repos, salles de réunion, ascenseurs ou halls d’accueil &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="services_button" onClick={() => toggleTab(1)}><i className="uil uil-arrow-right services_button-icon">lire plus< FaShare/></i> </span>
            </p>
                <div
                  className={ toggleState === 1  ? "services_modal active-modal": "services_modal"}>
                  <div className="services_modal-content">
                    <i
                      onClick={() => toggleTab(0)}
                      className="uil uil-times services_modal-close"><FaTimes/></i>
                    <h3 className="services_modal-title"> {element.title}</h3>
                    {/* <p className="services_modal-description">
                    Nettoyage du mobilier .
                    </p> */}
                    <ul className="services_modal-services grid">
                 
                  <li className="services_modal-service">
                    <p className="services_modal-info">Vidage des corbeilles.</p>
                  </li>
                  <li className="services_modal-service">
                    <p className="services_modal-info"> Essuyage des portes.</p>
                  </li>
                    
                 
                  <li className="services_modal-service">
                    <p className="services_modal-info">Bringing user interactions to life.</p>
                  </li>
              
                </ul>
                  </div>
                </div>
              </div>
            
             
    
                {/* </div> */}
              </div>
              ))  ) }
 {/* </div> */}
    </section>
    <Footer/>
    </div>
  );
};

export default Services;
