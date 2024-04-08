import React from "react";
import "../CssStyles/listeFondateurStyle.css"
import { BsSearch,BsPersonFillCheck,BsPersonFillX ,BsPersonFillAdd,BsPersonCircle} from "react-icons/bs";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

export default function ListeClient(){
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
            
        <nav>
           
          <div className="side_navbar">
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
          
          
          
          <div className="promo_card">
            <h1>Bienvenu dans la liste<br/> des Fondateurs  </h1>
            <button>Ajouter Fondateurs</button>
            
          </div> 

          <div className="history_lists">
            <div className="list1">
              <div className="rowListeCli">
                <h4 >La listes des Prestataires </h4>
                
              </div>
              <div className="wrap">
              <table>
                <thead>
                  <tr>
                    <th>CIN</th>
                    <th>Nom Complet</th>
                    <th>Telephone</th>
                    <th>Salaire</th>
                    <th>Situation</th>
                    <th> &nbsp;&nbsp;&nbsp;&nbsp;Détail</th>
                    <th> &nbsp;&nbsp;&nbsp;&nbsp;Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td > <p className="indispo">indisponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td > <p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                  
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td > <p className="indispo">indisponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td > <p className="indispo">indisponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td >< p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td > <p className="indispo">indisponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td > <p className="indispo">indisponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  <tr>
                    <td>EE123879</td>
                    <td>Nom Complet</td>
                    <td>0653728392 </td>
                    <td>5000</td>
                    <td><p className="dispo">disponible</p></td>
                    <td><button className="buttonMod">détail</button></td>
                    <td><button className="ButtonRes">supp</button></td>
                  </tr>
                  
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