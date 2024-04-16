import React from "react";
import "../CssStyles/listePrestataireStyle.css"
import { BsSearch,BsPersonFillCheck,BsPersonFillX ,BsPersonFillAdd,BsPersonCircle} from "react-icons/bs";
import ListeClient from "./listeClient"
import { useState ,useEffect} from "react";
import axios from "axios";


export default function ListeClientt(){

  const [listeprestataire , setlisteprestataire]=useState()
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/prestataire")
    .then(response => {
      const data = response.data;
      setlisteprestataire(data);
    })
    .catch(error => console.error('Error fetching cleints:', error));
  },[])


  return( 
    <div>
      {window.location.pathname === '/listeClient' && <ListeClient />}
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
      <div className="containerAdmine">
        <nav>
          <div className="sideInavbar">
            <span>Main Menu</span>
            <a href="#" className="active">Acceuil</a>
            <a href="#">Profil</a>
            <a href="#">réservation</a>
            <a href="#">Préstataires</a>
            <a href="#">Fondateurs</a>
            <a href="/listeClient">Clients</a>
    
            
          </div>
        </nav>
    
        <div className="main-body">
          
          
          
          <div className="promo_cardClient">
            <h1>Bienvenu dans la liste<br/> des Prestataires  </h1>
            <button>Ajouter Prestataire</button>
            
          </div> 

          <div className="history_lists">
            <div className="list1">
              {/* <div className="rowListeCli"> */}
                <h4 className="h4list">La listes des Prestataires </h4>
              {/* </div> */}
                  <select className="selectServ">
                    <option selected>Service Nettoyage </option>
                    <option>Service bureau </option>
                    <option>Service villa </option>
                    <option>Service appartement </option>
                    <option>Service restaurant </option>
                    <option>Service cristalisation </option>
                    <option>Service marbre </option>
                    <option>Service imeuble </option>
                  </select>
                
            <div className="wrapC">
              <table className="tableClienI">
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
                  {listeprestataire && listeprestataire.map((element,index)=>
                    <tr>
                      <td>{element.cin}</td>
                      <td>{element.nom} {element.prenom}</td>
                      <td>{element.telephone}</td>
                      <td> <p className={element.situation == "disponible" ? "dispo" : "indispo" }>{element.situation}</p></td>
                      <td><button className="buttonMod">Détail</button></td>
                      <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  )}
                  
                  {/* <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td > <p className="indispo">indisponible</p></td>
                    <td><button className="buttonMod">Détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                  
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td > <p className="indispo">indisponible</p></td>
                    <td><button className="buttonMod">Détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td > <p className="indispo">indisponible</p></td>
                    <td><button className="buttonMod">Détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td > <p className="indispo">indisponible</p></td>
                    <td><button className="buttonMod">Détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td > <p className="indispo">indisponible</p></td>
                    <td><button className="buttonMod">Détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td > <p className="indispo">indisponible</p></td>
                    <td><button className="buttonMod">Détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">Détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">Détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">Détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">Détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">Détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">Détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">Détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">Détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr> */}
                  
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}