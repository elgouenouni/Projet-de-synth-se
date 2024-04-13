
// 
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navigation from "./Navigation";
import { Fade } from "react-awesome-reveal";
import { FaShare, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CssStyles/services.css';
import Footer from './Footer';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const [title, setTitle] = useState('rien');
  const [list, setList] = useState([]);
  
  useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/services")
          .then(response => {
              setList(response.data);
          })
          .catch(error => {
              console.error('Error fetching services:', error);
          });
  }, []);

  const toggleTab = (index) => {
    setToggleState(toggleState === index ? 0 : index);
  };

  // Define filteredList based on the title
  const filteredList = title === 'rien' ? list : list.filter(element => element.nom_service.toLowerCase().includes(title.toLowerCase()));

  return (
    <div className="servicesbackgand">
      <Navigation />
      <section className="services section">
        <Fade direction="down">
          <div id="fehjkl"></div>
          <h2 className="section_title">Nos Services</h2>
          <span className="section_subtitle">Ce que nous offrons</span>
        </Fade>
        {/* <div className="container mt-2">
          <select className="form-select" aria-label="Default select example" onChange={(e) => setTitle(e.target.value)}>
            <option value="rien">Choisir un service</option>
            <option value="appartement">Appartement</option>
            <option value="bureau">Bureau</option>
            <option value="villas">Villas</option>
            <option value="maquette">Maquette</option>
          </select>
        </div> */}
        <div>
        <div
  class="relative group rounded-lg w-64 bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]"
id="difjhds">
  {/* <svg
    y="0"
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    width="100"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
    height="100"
    class="w-8 h-8 absolute right-0 -rotate-45 stroke-pink-300 top-1.5 group-hover:rotate-0 duration-300"
  > */}
    {/* <path
      stroke-width="4"
      stroke-linejoin="round"
      stroke-linecap="round"
      fill="none"
      d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
      class="svg-stroke-primary"
    ></path> */}
  {/* </svg> */}
  <select  id="selectservice2" onChange={(e) => setTitle(e.target.value)}
    class="appearance-none hover:placeholder-shown:bg-emerald-500 relative text-pink-400 bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
  >
      <option value="rien">Choisir un service</option>
            <option value="appartement">Appartement</option>
            <option value="bureau">Bureau</option>
            <option value="villas">Villas</option>
            <option value="maquette">Maquette</option>
  </select>
</div>
        </div>
        {filteredList.map((element, index) => (
          <div key={index} className="services_container">
            <div className="services_content">
              <img src='./image/Photo-Generale-2.jpg' alt={element.nom_service} className="image_service" />
              <hr />
              <h3 className="services_title">{element.nom_service}</h3>
              <p>
                {element.descriptionS}
                <span className="services_button" onClick={() => toggleTab(index + 1)}>
                  <i className="uil uil-arrow-right services_button-icon">lire plus <FaShare /></i>
                </span>
              </p>
              <div className={toggleState === index + 1 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content">
                  <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"><FaTimes /></i>
                  <h3 className="services_modal-title">{element.nom_service}</h3>
                  <ul className="services_modal-services grid">
                    {/* Additional details could be mapped here if available */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Services;
