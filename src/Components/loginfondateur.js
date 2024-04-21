import React, { useEffect } from "react";
import "../CssStyles/loginstyle.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function UseEffectLogin(props){
  const {dataFondateur, setdataFondateur , dataAdmine}=props

  const [inscri,setinscri]=useState(false)
  const [login , setlogin]=useState("")
  const [password , setpassword]=useState("")
  const navigate=useNavigate()

  // les hooks pour linscrire 
  const [cin, setcin]=useState()
  const [tele, settele]=useState()
  const [nom, setNom]=useState()
  const [prenom, setprenom]=useState()
  const [loginIsci, setloginIsci]=useState()
  const [passwordInsr, setpasswordInsr]=useState()

  function valide(){
    const fondExist=dataFondateur.find((element => element.login == login.trim()))
    const AdminExist=dataAdmine.find((element => element.login == login.trim()))

    if (fondExist)
    {
      navigate("/accueilDevis")
    }
    else if(AdminExist){
      navigate("/listeFonsa")
    }
    else if(login== "" && password==""){
      toast.error("doit remplir les champs ", {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    else{
      toast.error("utilisateur non exists ", {
        position: toast.POSITION.TOP_RIGHT
      })
    }

  }

  function inscrire (e){
    e.preventDefault()

    axios.post('http://127.0.0.1:8000/api/fondateur', {cin,nom,prenom,loginIsci,passwordInsr,tele})
    .then(response => {
        setdataFondateur([...setdataFondateur,{cin,nom,prenom,loginIsci,passwordInsr,tele}]);
        setcin('');
        setNom("");
        setprenom("");
        setloginIsci("");
        setpasswordInsr("");
        settele("")
        alert ("inscrire avec succée")
    })
    .catch(error => {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
      alert("error lor de linscription ")
    });
  }


  return(
    <div>
      <div className="Containerlogin" >
      <div className="div12Log" style={{ display: inscri  ? "block" : "none" }}>
          <h2>Bonjour</h2>
          <p>Devenir un de nos Utilisateurs et S'inscrire  </p>
          <form>
            <div className="input1login">
              <input type="text" placeholder="CIN"  value={cin} onChange={(e)=>setcin(e.target.value)} required/>
            </div>
            <div className="input1login">
              <input type="text" placeholder="Nom"   value={nom} onChange={(e)=>setNom(e.target.value)} required/>
            </div>
            <div className="input1login">
              <input  type="text" placeholder="Prenom"  value={prenom} onChange={(e)=>setprenom(e.target.value)}  required/>
            </div>
            <div className="input1login">
              <input  type="tele" placeholder="tele"  value={tele} onChange={(e)=>settele(e.target.value)}  required/>
            </div>
            <div className="input1login">
              <input  type="text" placeholder="login"   value={loginIsci} onChange={(e)=>setloginIsci(e.target.value)}  required/>
            </div>
            <div className="input2login">
              <input type="password" placeholder="Password"  value={passwordInsr} onChange={(e)=>setpasswordInsr(e.target.value)} required />
            </div>
            <div className="boutonlogin">
              <input type="submit" value="s'inscrire" onClick={(e)=>inscrire(e)} />
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
              <input type="text" placeholder="login" value={login} onChange={(e)=>setlogin(e.target.value)} required />
            </div>
            <div className="input2login">
              <input style={{marginTop:"15px"}} type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} required />
              <Link className="PASOublier"  >Oublier MotDePass ?</Link>
            </div>
            <div className="boutonlogin">
              <input type="submit" value="Login" onClick={valide}  />
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