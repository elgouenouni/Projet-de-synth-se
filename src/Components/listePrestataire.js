import React from "react";
import "../CssStyles/listePrestataireStyle.css"
import { BsSearch,BsPersonFillCheck,BsPersonFillX ,BsPersonFillAdd,BsPersonCircle} from "react-icons/bs";
import ListeClient from "./listeClient"
import { useState ,useEffect} from "react";
import axios from "axios";


export default function ListeClientt(){

  const [listeprestataire , setlisteprestataire]=useState()

  const [listeService , setlisteService]=useState()
  const [search ,setsearch]=useState("")
  const [resultatSearch,setresultatSearch]=useState(0)
  const [vide,setvide]=useState("")
  const [listePrestataireParService, setlistePrestataireParService]=useState()

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/prestataire")
    .then(response => {
      const data = response.data;
      setlisteprestataire(data);
    })
    .catch(error => console.error('Error fetching cleints:', error));
  },[])

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/services")
    .then(response => {
      const data = response.data;
      setlisteService(data);
    })
    .catch(error => console.error('Error fetching cleints:', error));
  },[])

  function suppretionFondat(id){
    const isConfirmed = window.confirm('Êtes-vous sûr de vouloir supprimer ce prestataire ?');
    if(isConfirmed){
      axios.delete(`http://127.0.0.1:8000/api/prestataire/${id}`)
      .then(response => {
        // alert("fondateur bien supprimer")
        window.location.reload();
      })
      .catch(error => console.error('Error supprition de prestataire :', error));
    }
    
  }

  function searchPrestataire(e){
    e.preventDefault()
    setresultatSearch(listeprestataire.filter(element => element.cin == search))
    setvide(search)

  }

  function PrestataireParService(id){

    axios.get(`http://127.0.0.1:8000/api/PerstataireService/${id}`)
    .then(response => {
      const data = response.data;
      setlistePrestataireParService(data);
      console.log(listePrestataireParService)
    })
    .catch(error => console.error('Error recuparation data de prestataire :', error));
  }


  return( 
    <div>
      {window.location.pathname === '/listeClient' && <ListeClient />}
      <header className="header">
        <div className="logo">
        <img class="imglogo" src="logo.png" alt="Logo" />
          <a className="a1"  href="#">PuretéPro</a>
          <div className="search_boxx">
            <form onSubmit={(e)=>searchPrestataire(e)}>
              <input type="text" placeholder="Search PuretéPro" onChange={(e)=>setsearch(e.target.value)} />
              <i><BsSearch /></i>
            </form>
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
                  <select className="selectServ"  onChange={(e)=>PrestataireParService(e.target.value)}>
                    <option selected>Choisir service </option>
                    {
                      listeService && listeService.map((element , index) =><option value={element.id}  key={index}>{element.nom_service}</option>)
                    }
                    
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
                { resultatSearch.length > 0 ? (
                      resultatSearch.map(element =>
                          <tr>
                          <td>{element.cin}</td>
                           <td>{element.nom} {element.prenom}</td>
                           <td>{element.telephone}</td>
                           <td> <p className={element.situation == "disponible" ? "dispo" : "indispo" }>{element.situation}</p></td>
                           <td><button className="buttonMod">Détail</button></td>
                           <td><button className="ButtonRes" onClick={()=>suppretionFondat(element.id)} >supp</button></td>
                        </tr> 
                        ))
                        :  resultatSearch == 0 && vide !=="" ? (
                            <tr>
                              <td colspan="6">Aucun prestataire trouver </td>
                            </tr> 
                        )
                         :
                         ( listePrestataireParService ? ( 
                                                       listePrestataireParService && listePrestataireParService.map((element,index)=>
                                                        <tr>
                                                          <td>{element.cin}</td>
                                                          <td>{element.nom} {element.prenom}</td>
                                                          <td>{element.telephone}</td>
                                                          <td> <p className={element.situation == "disponible" ? "dispo" : "indispo" }>{element.situation}</p></td>
                                                          <td><button className="buttonMod">Détail</button></td>
                                                          <td><button className="ButtonRes" onClick={()=>suppretionFondat(element.id)} >supp</button></td>
                                                        </tr>
                                                      ) )
                                                      
                                                      :
                                                      (listeprestataire && listeprestataire.map((element,index)=>
                                                          <tr>
                                                            <td>{element.cin}</td>
                                                            <td>{element.nom} {element.prenom}</td>
                                                            <td>{element.telephone}</td>
                                                            <td> <p className={element.situation == "disponible" ? "dispo" : "indispo" }>{element.situation}</p></td>
                                                            <td><button className="buttonMod">Détail</button></td>
                                                            <td><button className="ButtonRes" onClick={()=>suppretionFondat(element.id)} >supp</button></td>
                                                          </tr>
                                                    ))
                         )
                        
                  }
                  
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