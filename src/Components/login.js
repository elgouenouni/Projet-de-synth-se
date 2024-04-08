import React from 'react';
import Navigation from './Navigation';
import "../CssStyles/login.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Footer';
import { Link } from 'react-router-dom';


function Connexion() {
  return (
    <div>
      <Navigation/>
      <div className="container44">
        <div className="row justify-content-center">
          <div className="col">
            <div className="login-container">
              <h2>Connexion</h2>
              <form className="login-form" action="#" method="POST">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Nom d'utilisateur" required />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Mot de passe" required />
                </div>
                <Link className="siscid" href="/inscription">s'inscrire</Link>
                <Link className="siscid2" href="inscrire.html">Mode de passe oublier</Link>
                <button type="submit" className="btn btn-login">Se connecter</button>
              </form>
            </div>
          </div>
          <div className="col">
            <div>
              <img id="hhhhh" src="Screenshot 2024-02-09 131326.png" alt="Profile Image" />
            </div>
          </div>
        </div>
      </div>
  
      <App/>
      
    </div>
  );
}

export default Connexion;