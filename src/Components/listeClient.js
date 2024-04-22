import React,{useEffect ,useState} from "react";
import "../CssStyles/listePrestataireStyle.css"
import "../CssStyles/listeFondateurStyle.css"
import axios from "axios";

import { BsSearch,BsPersonFillCheck,BsPersonFillX ,BsPersonFillAdd,BsPersonCircle} from "react-icons/bs";


export default function ListeClient(){
  const [listeClient , setlisteClient]=useState()
  const [listereservation , setlistereservation]=useState()
  const [search ,setsearch]=useState("")
  const [resultatSearch,setresultatSearch]=useState(0)
  const [vide,setvide]=useState("")

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/client")
    .then(response => {
      const data = response.data;
      setlisteClient(data);
    })
    .catch(error => console.error('Error fetching cleints:', error));
  },[])

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/reservatins")
    .then(response => {
      const data = response.data;
      setlistereservation(data);
    })
    .catch(error => console.error('Error fetching cleints:', error));
  },[])

  function searchClient(e){
    e.preventDefault()
    setresultatSearch(listeClient.filter(element => element.cin == search))
    setvide(search)

  }

  return( 
    <div>
      <header className="header">
        <div className="logo">
        <img class="imglogo" src="logo.png" alt="Logo" />
          <a className="a1"  href="#">PuretéPro</a>
          <div className="search_boxx">
            <form onSubmit={(e)=>searchClient(e)}>
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
            <a href="#">Réservations</a>
            <a href="#">Nos Préstataires</a>
            <a href="">Nos fondateur</a>
            <a href="#">Nos Clients</a>
    
            
          </div>
        </nav>
    
        <div className="main-body">
          
          
          
          <div className="promo_cardClient">
            <h1>Bienvenu dans la liste<br/> des clients  </h1>
            {/* <span>les types des clients : </span><br/> */}
            <div className="diviconee">
                <p className="iconeCFidéle"> &nbsp; &nbsp; <BsPersonFillCheck /> </p>&nbsp;Client fidéle
                <p className="iconeCnormale"> &nbsp; &nbsp; <BsPersonFillAdd /></p>&nbsp;Client normale 
                <p className="iconeCblack"> &nbsp; &nbsp; <BsPersonFillX /></p>&nbsp;Client blackList
            </div>
            

          </div> 

          <div className="history_lists">
            <div className="list1">
              <div className="rowListeCli">
                <h4>La listes des Clients </h4>
              </div>
              <div className="wrapC">

             
              <table className="tableClienI">
                <thead>
                  <tr>
                    <th>Type Client</th>
                    <th>Cin</th>
                    <th>Nom Complet</th>
                    <th>Adress</th>
                    <th>Email</th>
                    <th>Telephone</th>
                    <th> &nbsp;&nbsp;&nbsp;&nbsp;Réservation</th>
                  </tr>
                </thead>
                <tbody>
                  
                { resultatSearch.length > 0 ? (
                      resultatSearch.map(element =>
                          <tr>
                              <td>
                              {
                                listereservation && listereservation.filter(res => res.id_client === element.id).length >= 5 ?
                                <p className="iconeCFidéle">&nbsp; &nbsp; <BsPersonFillCheck /></p> :
                                <p className="iconeCnormale">&nbsp; &nbsp; <BsPersonFillAdd /></p>
                              }
                                
                              </td>
                              <td>{element.cin } </td>
                              <td>{element.nom } {element.prenom }  </td>
                              <td>{element.adress } </td>
                              <td>{element.nom }email</td>
                              <td>{element.tele }</td>
                              <td><button className="ButtonRes">Reservation</button></td>
                          </tr>
                        ))
                        :  resultatSearch == 0 && vide !=="" ? (
                            <tr>
                              <td colspan="6">Aucun prestataire trouver </td>
                            </tr> 
                        )
                         :
                         (listeClient && listeClient.map((element,index)=>
                            <tr>
                              <td>
                              {
                                listereservation && listereservation.filter(res => res.id_client === element.id).length >= 5 ?
                                <p className="iconeCFidéle">&nbsp; &nbsp; <BsPersonFillCheck /></p> :
                                <p className="iconeCnormale">&nbsp; &nbsp; <BsPersonFillAdd /></p>
                              }
                                
                              </td>
                              <td>{element.cin } </td>
                              <td>{element.nom } {element.prenom }  </td>
                              <td>{element.adress } </td>
                              <td>{element.nom }email</td>
                              <td>{element.tele }</td>
                              <td><button className="ButtonRes">Reservation</button></td>
                          </tr>
                        ))
                  }
                    
                  
                  {/* <tr>
                    <td><p className="iconeCblack"> &nbsp; &nbsp; <BsPersonFillX /></p></td>
                    <td>Nom Complet</td>
                    <td>SYBA Marrakech </td>
                    <td>email@gmail.com</td>
                    <td>0653728392</td>
                    <td><button className="ButtonRes">Reservation</button></td>
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