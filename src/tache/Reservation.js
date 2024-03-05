import React from 'react';
import './style.css'

function Reservation() {
    return (
        <div>
             <div class="div1">
            <img src="./image/image.png" alt="" width="500px"  class="imagereservation"/>
                <from class="form">
                    <p class="heading">Réservez votre prestation dès maintenant ! <br/> Merci  de nous laisser vos infos pour que notre équipe puisse vous recontacter dès que possible.</p>
                    <div class="div1">
                        <input placeholder="entrez le nom" type="text"  class="inputreservation"/>
                        <input placeholder="entrez le Téléphone" type="tel"  class="inputreservation"/>
                    </div>
                    <input placeholder="entrez email" type="email"  class="inputreservationA"/>
                    <input placeholder="entrez Address" type="text"  class="inputreservationA"/>
                    <p class="heading">Votre demande concerne :</p>
                    <div class="div1">
                        <label class="containerr">
                            <p class="p1p">Bureaux :&nbsp;&nbsp;</p> <input type="checkbox" class="checkbox"/>
                            <svg viewBox="0 0 64 64" height="30px" width="20px"class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        </label>
                        <label class="containerr">
                            <p class="p1p">Résidence :&nbsp;&nbsp;</p> <input type="checkbox" />
                            <svg viewBox="0 0 64 64" height="30px" width="20px"class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        </label>
                        <label class="containerr">
                            <p class="p1p">Résidence :&nbsp;&nbsp;</p> <input type="checkbox" />
                            <svg viewBox="0 0 64 64" height="30px" width="20px"class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        </label>
                        </div>
                        <div class="div1">
                        <label class="containerr">
                            <p class="p1p">Magasin :&nbsp;&nbsp;</p> <input type="checkbox"/>
                            <svg viewBox="0 0 64 64" height="30px" width="20px" class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        </label>
                        <label class="containerr">
                            <p class="p1p">Moquette :&nbsp;&nbsp;</p> <input type="checkbox"/>
                            <svg viewBox="0 0 64 64" height="30px" width="20px" class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        
                        </label>
                        
                        <label class="containerr">
                            <p class="p1p">Moquette :&nbsp;&nbsp;</p> <input type="checkbox"/>
                            <svg viewBox="0 0 64 64" height="30px" width="20px" class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        
                        </label>
                        </div>
                        <div class="div1">
                        <label class="containerr">
                            <p class="p1p">Magasin :&nbsp;&nbsp;</p> <input type="checkbox"/>
                            <svg viewBox="0 0 64 64" height="30px" width="20px" class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        
                        </label>
                        <label class="containerr">
                            <p class="p1p">Moquette :&nbsp;&nbsp;</p> <input type="checkbox"/>
                            <svg viewBox="0 0 64 64" height="30px" width="20px" class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        
                        </label>
                        <label class="containerr">
                            <p class="p1p">Moquette :&nbsp;&nbsp;</p> <input type="checkbox"/>
                            <svg viewBox="0 0 64 64" height="30px" width="20px" class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        </label>
                        </div>
                    
                        <button class="buttonn">ENVOYER</button>
             </from>
    
       </div>
 </div>
    );
}

export default Reservation;