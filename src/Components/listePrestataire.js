import React from "react";
import "../CssStyles/listePrestataireStyle.css"
import { BsSearch,BsPersonFillCheck,BsPersonFillX ,BsPersonFillAdd,BsPersonCircle} from "react-icons/bs";


export default function ListeClient(){
  return( 
    <div>
      <header className="header">
        <div className="logo">
        <img class="imglogo" src="logo.png" alt="Logo" />
          <a className="a1"  href="#">PuretéPro</a>
          <div className="search_box">
            <input type="text" placeholder="Search PuretéPro"/>
            <i><BsSearch /></i>
          </div>
        </div>
    
        <div className="header-icons">
          <i className="fas fa-bell"></i>
          <div className="account">
            {/* <img src="./pic/img.jpg" alt=""/> */}
            <h4>Jhon Viek</h4>
            <p className="iconeAdmin"><BsPersonCircle/></p>
           
          </div>
        </div>
      </header>
      <div className="container">
        <nav>
          <div className="side_navbar">
            <span>Main Menu</span>
            <a href="#" className="active">Acceuil</a>
            <a href="#">Profil</a>
            <a href="#">réservation</a>
            <a href="#">Préstataires</a>
            <a href="#">Fondateurs</a>
            <a href="#">Clients</a>
    
            
          </div>
        </nav>
    
        <div className="main-body">
          
          
          
          <div className="promo_card">
            <h1>Bienvenu dans la liste<br/> des Prestataires  </h1>
            <button>Ajouter Prestataire</button>
            
          </div> 

          <div className="history_lists">
            <div className="list1">
              {/* <div className="row"> */}
                <h4 className="h4list">La listes des Prestataires </h4>
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
                
              {/* </div> */}
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
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}