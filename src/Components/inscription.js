import React from 'react';
import "../CssStyles/inscription.css"
import Navigation from './Navigation';
import Footer from './Footer';


function InscriptionClient() {
  return (
    <div>
     <Navigation/>  
      <div className="containerInscri">
        <div className="row justify-content-center" id='spacearoud'>
          <div className="col">
            <div className="card">
              <div className="card-headerr">
                <h2 className="card-titlee">Inscription</h2>
              </div>
              <div className="card-body">
                <form className='formm'>
                  <div className="form-group">
                    <input type="login" className="form-control" placeholder="login " />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="nom" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Prénom" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Adresse email" />
                  </div>
                  <div className="form-group">
                    <input type="adress" className="form-control" placeholder="Adresse " />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Mot de passe" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">S'inscrire</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col">
            <img src="Screenshot 2024-02-09 131326.png" alt="Description de la photo" className="img-fluid" />
          </div>
        </div>
      </div>
     <Footer/>
    </div>
  );
}

export default InscriptionClient;