import React from 'react';
import { Link } from 'react-router-dom';

export default function AccueilDevis(){
  return(
    <div className='DIV'>
        <nav>
                <div className='Divlinks'>
                <img src="/media/logo (1).png" width="250px" id='img'/>
                <h1>PurtéPro</h1>
                </div>
                <Link to="/ProfilDevis" className='anav'><img src="/media/profil.jpg" width="70px"/></Link>
                <Link to="" className='deconnecter'>Deconnecter</Link>
        </nav>
        <div className='divh3'>
            <h3>Bienvenue Monsieur dans votre espace</h3>
        </div>
        
        <main>
        <div className='container-fluid themed-container' id='divAccuiel'>
            <h3>Reservation1</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                 dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas 
                 ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
            </p>
            <Link to="/Devis" className='a'>Remplir  Devis</Link>
        </div>
        <div className='container-fluid themed-container' id='divAccuiel'>
            <h3>Reservation2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                 dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas 
                 ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie </p>
            <Link to="/Devis" className='a'>Remplir  Devis</Link>
        </div>
        <div className='container-fluid themed-container' id='divAccuiel'>
            <h3>Reservation3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                 dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas 
                 ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie </p>
            <Link to="/Devis" className='a'>Remplir  Devis</Link>
        </div>
        <div className='container-fluid themed-container' id='divAccuiel'>
            <h3>Reservation4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                 dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas 
                 ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie </p>
            <Link to="/Devis" className='a'>Remplir  Devis</Link>
        </div>
        <div className='container-fluid themed-container' id='divAccuiel'>
            <h3>Reservation5</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                 dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas 
                 ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie</p>
            <Link to="/Devis" className='a'>Remplir  Devis</Link>
        </div>
        </main>
    </div>
  )
};









