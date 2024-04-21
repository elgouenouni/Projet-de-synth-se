import React, { useEffect, useState } from "react";
import "../CssStyles/listeFondateurStyle.css"
import { BsSearch,BsPersonFillCheck,BsPersonFillX ,BsPersonFillAdd,BsPersonCircle} from "react-icons/bs";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListeClient(){
  const navigate=useNavigate()
  const [listefondateur , setlistefondateur ]=useState()
  const [ajou ,setajou]=useState(false)

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/fondateur")
    .then(response => {
      const data = response.data;
      setlistefondateur(data);
    })
    .catch(error => console.error('Error fetching cleints:', error));
  },[])


  function suppretionFondat(id){
    axios.delete(`http://127.0.0.1:8000/api/fondateur/${id}`)
    .then(response => {
      alert("fondateur bien supprimer")
    })
    .catch(error => console.error('Error supprition de fondateur :', error));
    // alert( "bien supprimer"+id)
  }

  function ajouterFondateur(){
    setajou(true)
  }


  return( 
    <div>
      <header className="header">
        <div className="logo">
          <img class="imglogo" src="logo.png" alt="Logo" />
          <a className="a1"  href="#">PuretéPro</a>
          <div className="search_boxx">
            <input type="text" placeholder="Search PuretéPro"/>
            <i><BsSearch /></i>
          </div>
        </div>
    
        <div className="header-icons">  
          <i className="fas fa-bell"></i>
          <div className="account">
            {/* <img src="./pic/img.jpg" alt=""/> */}
            <h6>Jhon Viek</h6>
            <p className="iconeAdmin"><BsPersonCircle/></p>
           
          </div>
        </div>
      </header>
      <div className="containerListefon">
            
        <nav className="navI">
           
          <div className="sideInavbar">
            <input type="checkbox" id="checke" />
            <label for="checke">
              <AiOutlineMenu className="btnice" />
              <AiOutlineClose className="cancele"/>
              
            </label><br/>
            <span>Main Menu</span>
            <a href="#" className="active">Acceuil</a>
            <a href="#">Profil</a>
            <a href="#">réservation</a>
            <a href="#">Nos Préstataires</a>
            <a href="#">Nos Fondateurs</a>
            <a href="#">Nos Clients</a>
    
            
          </div>
        </nav>
    
        <div className="main-body">
          
          
          
          <div className="promo_cardFOnda">
            <h1>Bienvenu dans la liste<br/> des Fondateurs  </h1>
            
          </div> 

          <div className="history_lists">
            <div className="list1">
              <div className="rowListeCli">
                <h4 >La listes des Prestataires </h4>
                
              </div>
              <div className="wrap">
              <table className="tablelistefondta">
                <thead>
                  <tr>
                    <th>CIN</th>
                    <th>Nom Complet</th>
                    <th>Telephone</th>
                    <th>Situation</th>
                    <th> &nbsp;&nbsp;&nbsp;&nbsp;Détail</th>
                    <th> &nbsp;&nbsp;&nbsp;&nbsp;Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  {listefondateur && listefondateur.map((element,index)=>
                      <tr key={index}>
                        <td>{element.cin}</td>
                        <td>{element.prenom} {element.nom}</td>
                        <td>{element.tele}</td>
                        <td> <p className={element.situation == "disponible" ? "dispo" : "indispo" }>{element.situation}</p></td>
                        <td><button className="buttonMod" onClick={ajouterFondateur}>détail</button></td>
                        <td><button className="ButtonRes" onClick={()=>suppretionFondat(element.id)}>supp</button></td>
                      </tr>
                  )}
                </tbody>
              </table>
            </div>
            </div>
          </div>


          
        </div>
        {
          ajou == true ?
              <div className="divAjoutF">
                  <AiOutlineClose className="XFond" onClick={()=>setajou(false)} />
              </div>
          :""
        }
      
      </div>
    </div>
  )
}