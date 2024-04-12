import React, { useEffect } from "react";
import "../CssStyles/loginstyle.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function UseEffectLogin(){

  const [inscri,setinscri]=useState(false)

  



  
  


  return(
    <div>
      <div className="Containerlogin" >
      <div className="div12Log" style={{ display: inscri  ? "block" : "none" }}>
          <h2>Bonjour</h2>
          <p>Devenir un de nos Utilisateurs et S'inscrire  </p>
          <form>
            <div className="input1login">
              <input type="text" placeholder="CIN"  />
            </div>
            <div className="input1login">
              <input type="text" placeholder="Nom"  />
            </div>
            <div className="input1login">
              <input  type="text" placeholder="Prenom"  />
            </div>
            <div className="input1login">
              <input  type="text" placeholder="login"   />
            </div>
            <div className="input2login">
              <input type="password" placeholder="Password"  />
            </div>
            <div className="boutonlogin">
              <input type="submit" value="s'inscrire" />
            </div>
            <div>
              <p className="pseco" > <Link onClick={()=> setinscri(false)}>se connecter</Link></p>
            </div>
              
            
          </form>
        </div>
        <div className={inscri === false ? "div1Log" :"div1SLog" }> 
          <img className="imgonda" src="imgloginI.png" alt="" />
          <h2 className="h2div1SLog">Gestions Des Rservations </h2>
          <p className="pdiv1SLog">Ce site donner la possibilité de gérer les Reservation d'une façons trés simple et meilleurs </p>
        </div>
        <div className="div2Log" style={{ display: inscri  ? "none" : "block" }}>
          <h2>Bonjour</h2>
          <p>Bienvenue Dans l'espace de Gestion des Reservations </p>
          <form>
            <div className="input1login" >
              <input type="text" placeholder="login"  />
            </div>
            <div className="input2login">
              <input style={{marginTop:"15px"}} type="password" placeholder="Password" />
              <Link className="PASOublier"  >Oublier MotDePass ?</Link>
            </div>
            <div className="boutonlogin">
              <input type="submit" value="Login"  />
            </div>
            <div>
              <p className="pinscr">Vous n'avez pas de compte ? <Link onClick={()=> setinscri(true)}>s'inscrire</Link></p>
            </div>
            
          </form>
        </div>

      </div>
      <ToastContainer />
    </div>
  )
}