import React from "react";
import "../CssStyles/Detailstyle.css";

export default function Detail(){
    return(
       
        <body>
            <h1>Détail de la réservation N°2516</h1>
            <div class="container">
        
                <div class="info-client">
                    <h3>Informations sur le client :</h3>
                    <div class="form">
                        <div class="input">
                            <b> Nom du client : </b>
                            <input type="text"/>
            
                        </div>
                        <div class="input">
                            <b> Prénom du client : </b>
                            <input type="text"/>
                        </div>
                        <div class="input">
                            <b>Téléphone du client : </b>
                            <input type="text"/>
                        </div>
                        <div class="input">
                            <b>E-mail du client :</b>
                            <input type="text"/>
                        </div>
                        <div id="input4" class="input">
                            <b>Adresse du client : </b>
                            <input type="text"/>
                        </div>
                    </div>
                </div>
        
                <div class="info-expert">
                    <h3>Choix de l'expert : </h3>
                    <div class="expert">
                        <div class="form2">
                            <div class="input">
                                <b> Date de la visite : </b>
                                <input type="date"/>
                            </div>
                            <div class="input">
                                <b> Choisissez un expert : </b>
                                <select>
                                    <option>expert1</option>
                                    <option>expert2</option>
                                    <option>expert3</option>
                                </select>
                            </div>
                            <div class="input">
                                <b>l'expert disponible est:</b>
                                <input type="text"/>
                            </div>
                        </div>
                        <div >
                            <button class="devis">DEVIS</button>
                        </div>
                    </div>
                    
                    <div class="button">
                        <button class="Accepter">Accepter</button>
                        <button class="Annuler">Annuler</button>
                    </div>
                </div>
                
                <div class="Info-employe">
                    <h3>Affectation des employés aux services : </h3>
                    <div class="employe">
                        <div class="form3">
                            <div class="input">
                                <b> Date de la visite : </b>
                                <input type="date"/>
                            </div>
                            <div class="input">
                                <b> Choisissez le service : </b>
                                <select>
                                    <option>service1</option>
                                    <option>service2</option>
                                    <option>service3</option>
                                </select>
                            </div>
                            <div class="input">
                                <b>Choisissez un employé : </b>
                                <select>
                                    <option>employe1</option>
                                    <option>employe2</option>
                                    <option>employe3</option>
                                </select>
                                
                            </div>
                            <button class="buttonA">Ajouter</button>
        
                        </div>
                        <table class="table">
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
                                    
                                    <button class="supprimer">supprimer</button>
                                </td>
                                
                              </tr>
                              <tr class="resnonlu">
                                
                                <td>29, July, 2022</td>
                                <td>service2</td>
                                <td>Silver</td>
                                <td>
                                    
                                    <button class="supprimer">supprimer</button>
                                </td>
                                
                              </tr>
                              <tr>
                                
                                <td>15, July, 2022</td>
                                <td>service3</td>
                                <td>Jhon David</td>
                                <td>
                                    
                                    <button class="supprimer">supprimer</button>
                                </td>
                               
                              </tr>
                              <tr>
                                
                                <td>5, July, 2022</td>
                                <td>service4</td>
                                <td>Salina Gomiz</td>
                                <td>
                                    
                                    <button class="supprimer">supprimer</button>
                                </td>
                                
                              </tr>
                              <tr>
                                
                                <td>29, June, 2022</td>
                                <td>service5</td>
                                <td>Gomiz</td>
                                <td>
                                    
                                    <button class="supprimer">supprimer</button>
                                </td>
                            
                              </tr>
                             
                            </tbody>
                          </table>          
                        <button class="valider">valider</button>
                    
                        
        
                    
                </div>
        
            </div>
        </div>
        
        </body>
        

    );
}