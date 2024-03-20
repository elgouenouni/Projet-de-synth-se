import React from "react";
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Accueil from "./Components/Accueil";
import Projet from "./Components/Projet";
import Navigation from "./Components/Navigation";
import Login from "./Components/login";
import Inscription from "./Components/inscription";
import Produits from "./Components/Produits"
import Reservations from "./Components/Reservations";
import Contact from "./Components/contact"
import Services from "./Components/Services";
import ListeClient from "./Components/listeClient";
import ListeFondateur from "./Components/listeFondatur";
import ListePrestataire from "./Components/listePrestataire";



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

          <Route path="/listeClient" element={<ListeClient/>}/>
          <Route path="/listeFonsa" element={<ListeFondateur/>}/>
          <Route path="/ListePrest" element={<ListePrestataire/>}/>
        </Routes>
      </Router>
    </div>
  )
}
