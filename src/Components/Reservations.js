import React, { useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import Footer from './Footer';

function Reservation() {
    const [nom,setNom]=useState('');
    const [tele,settele]=useState('');
    const [email,setemail]=useState('');
    const [adress,setadress]=useState('');
    const [service1,setservice1]=useState();
    const [service2,setservice2]=useState();
    const [service3,setservice3]=useState();
    const [service4,setservice4]=useState();
    const [service5,setservice5]=useState();
    const [service6,setservice6]=useState();
    const [service7,setservice7]=useState();
    const [service8,setservice8]=useState();

    const id_client=2
   
     

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nom || !adress || !tele || !email) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        const formData={nom:nom,service1:service1,service2:service2,service3:service3,service4:service4,service5:service5,service6:service6,service7:service7,service8:service8,tele:tele,adress:adress,email:email,id_client:id_client}
        axios.post('http://127.0.0.1:8000/api/reservation', formData)
            .then(response => {
                console.log('Reservation successful:', response.data);
                alert('Reservation successful')
                // Optionally, clear the form or show a success message
            })
            .catch(error => {
                console.error('Error submitting reservation:', error);
                // Optionally, show an error message to the user
                alert('Error submitting reservation')
            });
    };
                                                                                                                  
    return (
        <div className="servicesbackgand">
             {/* <div  > */}
            <Navigation/>
        <div className='pageREs'>
            <div class="div2reservation">
            <img src="./image/image.png" alt="" width="550px"  class="imagereservation"/>
            <form id="formreservation" onSubmit={handleSubmit}>
            <p class="heading">Réservez votre prestation des maintenant! <br/> Merci  de nous laisser vos infos pour que notre équipe puisse vous recontacter dès que possible.</p>
                     <div class="div1reservation">
                         <input placeholder="entrez le nom" type="text" name="nom" value={nom} onChange={(e)=>setNom(e.target.value)} class="inputreservation"/>
                         <input placeholder="entrez le Téléphone" type="tel" name="tel" value={tele} onChange={(e)=>settele(e.target.value)}  class="inputreservation"/>
                    </div>
                {/* <input type="text" name="nom" value={formData.nom} onChange={handleChange} class="inputreservation"/>
                <input type="tel" name="tele" value={formData.tele} onChange={handleChange} class="inputreservation" /> */}
                <input type="email" name="email" placeholder="entrez email" value={email} onChange={(e)=>setemail(e.target.value)} class="inputreservationA"/>
                <input type="text" name="adress" placeholder="Entrez l'adresse" value={adress} onChange={(e)=>setadress(e.target.value)} class="inputreservationA" />
                <p class="heading">Votre demande concerne :</p>
                    {/* <select class="selectreservation">
                         <option> en fois </option>
                         <option> par semainee </option>
                         <option> par mois</option>
                    </select> */}
                
                <table className='tablereservation'>
                    <div class="divrreservation">
                        
                        <label class="containerreservation">
                            <p class="p1p">Bureaux:&nbsp;&nbsp;&nbsp;&nbsp;</p>
                           
                             <input type="checkbox" name="services" value="bureaux"  onChange={(e)=>setservice1(e.target.value)} />
                            <svg viewBox="0 0 64 64" height="30px" width="20px"class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                           
                        </label>
                        <label class="containerreservation">
                            <p class="p1p">Appartement:&nbsp;&nbsp;</p>
                             <input type="checkbox" name="services" value="appartement ||  "  onChange={(e)=>setservice2(e.target.value)}/>
                            <svg viewBox="0 0 64 64" height="30px" width="20px"class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        </label>
                        <label class="containerreservation">
                            <p class="p1p">villas:&nbsp;&nbsp;</p> <input type="checkbox" name="services" value="villas"  onChange={(e)=>setservice3(e.target.value)} />
                            <svg viewBox="0 0 64 64" height="30px" width="20px"class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        </label>
                        </div>
                        <div class="divrreservation">
                        <label class="containerreservation">
                            <p class="p1p">maison:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> <input type="checkbox" name="services" value="maison"  onChange={(e)=>setservice4(e.target.value)} />
                            <svg viewBox="0 0 64 64" height="30px" width="20px" class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        </label>
                        <label class="containerreservation">
                            <p class="p1p">Restaurant&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</p> <input type="checkbox" name="services" value="restaurant"  onChange={(e)=>setservice5(e.target.value)}/>
                            <svg viewBox="0 0 64 64" height="30px" width="20px" class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        
                        </label>
                        
                        <label class="containerreservation">
                            <p class="p1p">Hotel:&nbsp;&nbsp;</p> <input type="checkbox" name="services" value="hotel"  onChange={(e)=>setservice6(e.target.value)} />
                            <svg viewBox="0 0 64 64" height="30px" width="20px" class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        
                        </label>
                        </div>
                        <div class="divrreservation">
                  
                     
                        <label class="containerreservation">
                            <p class="p1p">Immeuble:&nbsp;&nbsp;</p> <input type="checkbox" name="services" value="Immeuble"  onChange={(e)=>setservice7(e.target.value)} />
                            <svg viewBox="0 0 64 64" height="30px" width="20px" class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        </label>
                          <label class="containerreservation">
                            <p class="p1p">Salle d'évènement:&nbsp;&nbsp;</p> <input type="checkbox" name="services" value="Salle d'évènement"  onChange={(e)=>setservice8(e.target.value)}/>
                            <svg viewBox="0 0 64 64" height="30px" width="20px" class="checkbox">
                            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                            </svg>
                        
                        </label>
                        
                        </div>
                        </table>
                    
                    
               
                <button type="submit" class="buttonnreservation">ENVOYER</button>
                {/* <button type="submit" class="buttonnreservation">ENVOYER</button> */}
            </form>
        </div>
        </div>

        </div>
    );
}

export default Reservation;




