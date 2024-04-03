import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Accueil from "./AccuielDevis";
import Devis from "./Devis";
import Profil from "./ProfilDevis";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function AppDevis(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/accueilDevis" element={<Accueil/>}/>
            <Route path="/Devis" element={<Devis/>}/>
            <Route path="/ProfilDevis" element={<Profil/>} />
        </Routes>
        </BrowserRouter>
    )
}


