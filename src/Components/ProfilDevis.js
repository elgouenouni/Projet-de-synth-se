import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope,FaPhone,FaBuilding ,FaRegFileAlt,FaMapMarkerAlt} from 'react-icons/fa'
export default function ProfilDevis(){
    return(
        <div className="mainprofil">
            <Link to="/accueilDevis" className="linkProfil">Retour</Link>
            <div className='div2'>
                <div className='div3'>
                    <FaEnvelope style={{ marginTop: 4}}/> &nbsp;&nbsp;&nbsp;
                    <div className='divh'><p>Email :<p>  eattayef@gmail.com</p></p></div>
                </div>
                <div className='div3'>
                    <FaPhone style={{ marginTop: 4,}}/> &nbsp;&nbsp;&nbsp;
                    <div className='divh'><p>téléphone :<p>  +212728934521</p></p></div>
                </div>
                <div className='div3'>
                    <FaMapMarkerAlt style={{ marginTop: 4}} />&nbsp;&nbsp;&nbsp; 
                    <div className='divh'><p>Adresse professionnelle :<p>  MARRAKECH</p></p></div>
                </div>
            </div>
            <div className="div4">
                <img src="/media/profil-devis.png" width='300px' className="imageprofil"></img>
                <h2>Bonjour Madame Samira</h2>
                <h4>vous ete une fondatrice dans l'entreprise PurtéPro</h4>
                <button className="buttonProfil">Modifier votre coordonnée</button>
            </div>
              
             
                      {/* <div class="image-container">
                       <img src="./media/profil.jpg" alt="Description de votre image" className='imagg'/>
                      </div>
                    <div class="cardprofil cart">
                    <label class="titleprofil"> Informations</label> 
                    <hr/>
                        <div className='div2'>
                                    <div className='div3'>
                                        <FaEnvelope style={{ marginTop: 4,}}/> 
                                        <div className='divh'><p>Email :<p>  eattayef@gmail.com</p></p></div>
                                    </div>
                                    <div className='div3'>
                                        <FaPhone style={{ marginTop: 4,}}/> 
                                        <div className='divh'><p>téléphone :<p>  +212728934521</p></p></div>
                                    </div>
                                    <div className='div3'>
                                        <FaBuilding style={{ marginTop: 4,}}/> 
                                        <div className='divh'><p>Entreprise :<p>  PurtePro</p></p></div>
                                    </div>
                                
                        </div>
                        <div className='div2'>
                                   <div className='div3'>
                                        <FaMapMarkerAlt style={{ marginTop: 4}}/> 
                                        <div className='divh'><p>Adresse professionnelle :<p>  MARRAKECH</p></p></div>
                                    </div>
                                  
                                    
                                    
            
                         </div>
                         <button id="Modifier">Modifier</button>
                 </div> 

                 
    </div>*/}
            <form action="" method="post" id="form">
                <table className="table table-borderless mt-5">
                  
                   <tr>
                        <label className="form-label labele">Nom:</label>
                        <td><input type="text" name="nom" id="nom" className="form-control" /></td>
                        
                   </tr>
                   <tr>
                        <label  className="form-label labele">Adresse:</label>
                        <td><input type="text" name="adresse" id="adresse" className="form-control" /></td>
                        
                  </tr>

                  <tr>
                       <label  className="form-label labele">Ville:</label>
                        <td><input type="text" name="ville" id="ville" className="form-control" /></td>
                        
                  </tr>
                  <tr>
                        <label  className="form-label labele">Téléphone:</label>
                        <td><input type="text" name="tel" id="tel" className="form-control" /></td>
                        
                  </tr>
                  <tr>
                        <label  className="form-label labele">Login:</label>
                        <td><input type="text" name="login" id="login" className="form-control" /></td>
                       
                  </tr>
                    <tr>
                       <label  className="form-label  labele">Mot de passe:</label>
                        <td><input type="text" name="pass" id="pass" className="form-control"/></td>
                      
                    </tr>
                    
             </table>
             <button id="Valider">Valider</button>
          </form> 
     
      </div>
    )}

  