import React from "react";
import "../CssStyles/Detailstyle.css";

export default function Detail(){
    return(
       
        <body class="bodyD">
            <h1>Détail de la réservation N°2516</h1>
            <div class="containerD">
        
                <div class="info-clientD">
                    <h3>Informations sur le client :</h3>
                    <div class="formD">
                        <div class="inputD">
                            <b> Nom du client : </b>
                            <input type="text" className="input-Detail" />
            
                        </div>
                        <div class="inputD">
                            <b> Prénom du client : </b>
                            <input type="text" className="input-Detail"/>
                        </div>
                        <div class="inputD">
                            <b>Téléphone du client : </b>
                            <input type="text" className="input-Detail"/>
                        </div>
                        <div class="inputD">
                            <b>E-mail du client :</b>
                            <input type="text" className="input-Detail"/>
                        </div>
                        <div id="input4D" class="inputD">
                            <b>Adresse du client : </b>
                            <input type="text" className="input-Detail"/>
                        </div>
                    </div>
                </div>
        
                <div class="info-expertD">
                    <h3>Choix de l'expert : </h3>
                    <div class="expertD">
                        <div class="form2D">
                            <div class="inputD">
                                <b> Date de la visite : </b>
                                <input type="date" className="input-Detail"/>
                            </div>
                            <div class="inputD">
                                <b> Choisissez un expert : </b>
                                <select className="select-Detail">
                                    <option>expert1</option>
                                    <option>expert2</option>
                                    <option>expert3</option>
                                </select>
                            </div>
                            <div class="inputD">
                                <b>l'expert disponible est:</b>
                                <input type="text" className="input-Detail"/>
                            </div>
                        </div>
                        <div >
                            <button class="devisD">DEVIS</button>
                        </div>
                    </div>
                    
                    <div class="buttonD">
                        <button class="AccepterD">Accepter</button>
                        <button class="AnnulerD">Annuler</button>
                    </div>
                </div>
                
                <div class="Info-employeD">
                    <h3>Affectation des employés aux services : </h3>
                    <div class="employeD">
                        <div class="form3D">
                            <div class="inputD">
                                <b> Date de la visite : </b>
                                <input type="date" className="input-Detail"/>
                            </div>
                            <div class="inputD">
                                <b> Choisissez le service : </b>
                                <select className="select-Detail">
                                    <option>service1</option>
                                    <option>service2</option>
                                    <option>service3</option>
                                </select>
                            </div>
                            <div class="inputD">
                                <b>Choisissez un employé : </b>
                                <select className="select-Detail">
                                    <option>employe1</option>
                                    <option>employe2</option>
                                    <option>employe3</option>
                                </select>
                                
                            </div>
                            <button class="buttonAD">Ajouter</button>
        
                        </div>
                        <table class="tableD">
                            <thead>
                              <tr>
                                
                                <th>Date
        </th>
                                <th>service</th>
                                <th>Employé </th>
                                
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                
                                <td>2, Aug, 2022</td>
                                <td>service1</td>
                                <td>Sam Tonny</td>
                                <td>
                                    
                                    <button class="supprimerD">supprimer</button>
                                </td>
                                
                              </tr>
                              <tr class="resnonluD">
                                
                                <td>29, July, 2022</td>
                                <td>service2</td>
                                <td>Silver</td>
                                <td>
                                    
                                    <button class="supprimerD">supprimer</button>
                                </td>
                                
                              </tr>
                              <tr>
                                
                                <td>15, July, 2022</td>
                                <td>service3</td>
                                <td>Jhon David</td>
                                <td>
                                    
                                    <button class="supprimerD">supprimer</button>
                                </td>
                               
                              </tr>
                              <tr>
                                
                                <td>5, July, 2022</td>
                                <td>service4</td>
                                <td>Salina Gomiz</td>
                                <td>
                                    
                                    <button class="supprimerD">supprimer</button>
                                </td>
                                
                              </tr>
                              <tr>
                                
                                <td>29, June, 2022</td>
                                <td>service5</td>
                                <td>Gomiz</td>
                                <td>
                                    
                                    <button class="supprimerD">supprimer</button>
                                </td>
                            
                              </tr>
                             
                            </tbody>
                          </table>          
                        <button class="validerD">valider</button>
                    
                        
        
                    
                </div>
        
            </div>
        </div>
        
        </body>
        

    );
}