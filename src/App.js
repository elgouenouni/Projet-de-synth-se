import React from "react";
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Accueil from "./Components/Accueil";
import Projet from "./Components/Projet";
import Navigation from "./Components/Navigation";
import Login from "./Components/login";
import Inscription from "./Components/inscription";
import Produits from "./Components/Produits"
import Reservations from "./Components/Reservations";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import ListeClient from "./Components/listeClient";
import ListeFondateur from "./Components/listeFondatur";
import ListePrestataire from "./Components/listePrestataire";
import Devis from "./Components/Devis";
import AccueilFondateur from "./Components/AccuielFondateur";
import ProfilFondateur from "./Components/ProfilFondateur";
import Loginfondateur from "./Components/login-fondateur"
import Admine from "./Components/Admin"
import Detail from "./Components/Detail"
import ProfilClient from "./Components/ProfileClient";
export default function App(){


  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/Projet" element={<Projet />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/incri" element={<Inscription />}/>
          <Route path="/produits" element={<Produits />}/>
          <Route path="/Reservations" element={<Reservations />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/serviecs" element={<Services />} />

           {/* lespace admine */}
           <Route path="/Detail" element={<Detail/>}/>
           <Route path="/Admine" element={<Admine/>}/>
           <Route path="/ProfileClient" element={<ProfilClient/>}/>
          <Route path="/listeClient" element={<ListeClient/>}/>
          <Route path="/listeFonsa" element={<ListeFondateur/>}/>
          <Route path="/ListePrest" element={<ListePrestataire/>}/>
          <Route path="/Loginfondateur" element={<Loginfondateur/>}/>
           {/* Espace Fondateur */}

          <Route path="/accueilDevis" element={<AccueilFondateur/>}/>
          <Route path="/Devis" element={<Devis/>}/>
          <Route path="/ProfilDevis" element={<ProfilFondateur/>} />
          
        </Routes>
      </Router>
    </div>
  )
}