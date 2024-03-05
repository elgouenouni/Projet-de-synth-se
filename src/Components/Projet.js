import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../CssStyles/projet.css"

export default function Projet() {
  return (
    <div>
      <Navigation />
      <div className="contP">
        <div className="h1P">
          <h1>Visitez nos superbes projets<br /> de nettoyage</h1>
          <p>Photos avant / après de prestations de nettoyage pour<br /> nos clients entreprises ou copropriétés. <br />Nos équipes assurent la propreté des bureaux, <br />immeubles, locaux, ...</p>
        </div>
        <img className="imgheader" src="pngwing.com (1).png" alt=""/>
      </div>

      <div className="contPho">
        <h1 className="h12P">Nous avons réalisé de nombreux<br /> derniers projets</h1>
        <div className="photos">
          <div className="image-containerP">
            <img className="imgP1" src="Screenshot 2024-02-10 220244.png" alt=""/>
          </div>
          <p className="text">Avant le nettoyage, l'appartement semblait plongé dans un état de négligence, avec des surfaces ternies par la poussière, des sols encombrés et une atmosphère générale de désordre. Après notre intervention, l'appartement rayonne de propreté et de fraîcheur.</p>
          <div className="image-container1">
            <img className="imgP1" src="Screenshot 2024-02-10 220228.png" alt=""/>
          </div>
        </div>
        <div className="photos">
          <div className="image-containerP">
            <img className="imgP1" src="Screenshot 2024-02-10 232533.png" alt=""/>
          </div>
          <p className="text">Avant le nettoyage, le bureau semblait plongé dans un état de négligence, avec des surfaces ternies par la poussière, des sols encombrés et une atmosphère générale de désordre. Après notre intervention, l'appartement rayonne de propreté et de fraîcheur.</p>
          <div className="image-container1">
            <img className="imgP1" src="Screenshot 2024-02-10 232548.png" alt=""/>
          </div>
        </div>
        <div className="photos">
          <div className="image-containerP">
            <img className="imgP1" src="Screenshot 2024-02-10 233239.png" alt=""/>
          </div>
          <p className="text">Avant le nettoyage, l'appartement semblait plongé dans un état de négligence, avec des surfaces ternies par la poussière, des sols encombrés et une atmosphère générale de désordre. Après notre intervention, l'appartement rayonne de propreté et de fraîcheur.</p>
          <div className="image-container1">
            <img className="imgP1" src="Screenshot 2024-02-10 233301.png" alt=""/>
          </div>
        </div>
        <div className="photos">
          <div className="image-containerP">
            <img className="imgP1" src="Screenshot 2024-02-10 233438.png" alt=""/>
          </div>
          <p className="text">Avant le nettoyage, l'appartement semblait plongé dans un état de négligence, avec des surfaces ternies par la poussière, des sols encombrés et une atmosphère générale de désordre. Après notre intervention, l'appartement rayonne de propreté et de fraîcheur.</p>
          <div className="image-container1">
            <img className="imgP1" src="Screenshot 2024-02-10 233455.png" alt=""/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
 
