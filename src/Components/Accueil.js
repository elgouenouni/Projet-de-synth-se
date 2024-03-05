import React from "react";
import "../CssStyles/acueil.css";
import { BsFillPersonCheckFill ,BsFacebook,BsShop,BsUnion} from "react-icons/bs";
import { AiFillSmile ,AiFillInstagram ,AiFillTwitterCircle ,AiOutlineWindows ,AiOutlineHome} from "react-icons/ai";
import { FiSlack  } from "react-icons/fi";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { useRef } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";


export default function Accueil() {
  const lire=useRef(null)
  const services=useRef(null)
  const produits=useRef(null)
  const projets=useRef(null)


  function scrollToSection(elementRef){
    window.scrollTo({
      top : elementRef.current.offsetTop,
      behavior:"smooth"
    })
  }


  
  
  return (
    <div>

      <header>
        <div class="container1">
          <div class="div11">
            <img class="imglogo" src="logo.png" alt="Logo"/>
            <Link class="li2" to="/">PuretéPro</Link>
          </div>
          <ul class="ul1">
            <li class="li1"><Link class="a" onClick={()=>scrollToSection(services)} to="">Service</Link></li>
            <li class="li1"><Link class="a" onClick={()=>scrollToSection(produits)} to="">Produit</Link></li>
            <li class="li1"><Link class="a" to="/Reservations">Reservation</Link></li>
            <li class="li1"><Link class="a"onClick={()=>scrollToSection(projets)} to="">Projet</Link></li>
            <li class="li1"><Link class="a" to="/Contact">Contact</Link></li>
            <div class="li12">
            <li class="li13"><Link class="a1" to="/login">Login</Link></li>
            <li class="li14"><Link class="a2" to="/incri">inscrire</Link></li>
            </div>
            
          </ul>
        </div>
      </header>  
      <div className="parag">
        <h1 className="h11">Entreprise Nettoyage<br /> et Entretien </h1>
        <p className="pH"> Transformez votre espace en un havre de propreté et Optez pour<br /> la tranquillité d'esprit avec notre équipe de nettoyage<br /> qualifiée et dévouée.</p>
        <button class="bbHome" onClick={()=>scrollToSection(lire)}> Lire plus </button>
      </div>
          
      <img className="imghome" src="Screenshot 2024-02-09 131326.png" alt="Image Accueil" /><br />

    <div ref={lire}>
      <img className="image" src="istockphoto-1204688985-612x612.jpg" alt="Image Accueil"  /><br />
      <div className="mes" >
        <h1 className="h12">Nous Vous Apportons</h1>
        <div className="buy">
          <p className="icone1"><BsFillPersonCheckFill /></p>
          <h4 >Un Service Professionnel</h4>
          <p className="para">Un service hautement professionnel assuré par une équipe des agents d’entretien compétents, bénéficiant d’une expérience et d’une formation approfondies pour répondre à tous les besoins de nettoyage.</p>
        </div>
        <div className="onlineread">
          <p className="icone2"> <AiFillSmile /></p>
          <h4>Gain De Temps</h4>
          <p className="para">Économisez du temps avec la flexibilité de notre équipe d’experts, assurant un nettoyage rapide et approfondi de vos surfaces.</p>
        </div>
        <div className="web">
          <p className="icone3"><FiSlack /></p>
          <h4>Bonnes Conditions De Travail</h4>
          <p className="para">Il est nécessaire d’évoluer dans un cadre de travail agréable et sain.</p>
        </div>
      </div><br />

      

     
      <div>
        <div>
          <img className="imgpeo" src="istockphoto-1212744296-612x612.jpg" alt=""></img>
        </div>
        <div className="cont" ref={projets}>
          <p>____ REUSSITE DES PROJETS</p>
          <h3 className="h2P">Expérience incroyable avec nous</h3>
          <p className="pPRO">Grâce à une planification minutieuse et une exécution assidue, nous avons <br/>
            réalisé des projets exceptionnels qui ont abouti à des résultats remarquables<br/>
            et nous avons réussi à livrer des projets de haute qualité, surpassant les attentes<br/>
            et générant des résultats positifs.<a className="A" href="#">lire plus</a></p>
            <img className="imgPr1"  src="Screenshot 2024-02-10 233438.png " alt=""></img>
            <img className="imgPr1"  src="Screenshot 2024-02-10 233455.png " alt=""></img>
            <img className="imgPr1"  src="Screenshot 2024-02-10 233239.png " alt=""></img>
            <img className="imgPr1"  src="Screenshot 2024-02-10 233301.png" alt=""></img>
            
        </div>
      </div><br/>

      <div className="slide" ref={services}>
      <img className="imageserv" src="20220221005602_cleaning_industry.jpg" alt="Image Accueil"  /><br />
      <div className="Tservice">
            <p style={{color:"rgb(250, 211, 39)",fontWeight:"bolder"}}>__Nos Services</p>
            <h1 className="h1S">Offrir le meilleur Cleaning <br/>Services </h1>
            <p className="pservice">Nous proposons tous types de solutions de nettoyage pour toutes  les petites et grandes entreprises, organisations et foyers.</p>
            <button className="b1" >MORE SERVICES</button>
          </div><br/>
          <div className="divSeryn">
              <Carousel>
                    <Carousel.Item>
                          <div className="service1">
                          <br/>
                            <BsUnion className="iconeservices" />
                            <p className="tit">Nettoyage bureau</p>
                            <img className="imageS1" src="towfiqu-barbhuiya--9gPKrsbGmc-unsplash.jpg" alt=""/>
                            
                          
                          </div>
                      <Carousel.Caption>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="service1">
                    <br/>
                            <AiOutlineHome className="iconeservices" />
                            <p className="tit">Nettoyage appartement</p>
                            <img className="imageS1" src="téléchargement (1).jpeg" alt=""/>
                            
                          
                          </div>
                          

                      <Carousel.Caption>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="service1">
                      <br/>
                      <BsShop className="iconeservices" />
                      <p className="tit">Nettoyage villa</p>
                        <img className="imageS1" src="téléchargement.jpeg" alt=""/>
                    </div>
                      <Carousel.Caption>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="service1">
                      <br/>
                        <AiFillHome  className="iconeservices"/>
                        <p className="tit">Nettoyage marbre</p>
                        <img className="imageS1" src="istockphoto-1248895540-170667a.webp" alt=""/>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="service1">
                      <br/>
                        <AiOutlineWindows  className="iconeservices"/>
                        <p className="tit">Nettoyage cristalisation</p>
                        <img className="imageS1" src="istockphoto-1147976285-170667a.webp" alt=""/>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="service1">
                      <br/>
                        <AiFillHome  className="iconeservices"/>
                        <p className="tit">Nettoyage restaurant</p>
                        <img className="imageS1" src="images.jpeg" alt=""/>
                    </div>
                    </Carousel.Item>
                  </Carousel>
                  </div>    
            </div>
      
     


<div className="cProduits" ref={services}>
          <div className="Tproduit">
            <p>____  Services</p>
            <h1 className="h1po">Offrir le meilleur<br/>Cleaning Produits </h1>
            <p className="pproduit">NExplorez notre gamme complète de produits de nettoyage haut de gamme, <br/>spécialement conçus pour offrir des solutions efficaces et durables à tous<br/> vos besoins en matière d'entretien.</p>
            <button className="b1PP" >Plus Produits</button>
          </div><br/>
          <div className="produitttt">
            <div className="produit1">
              <img className="imageP1" src="istockphoto-1154590421-612x612.jpg" alt=""></img>
              <h4 className="tit">Product title</h4><br/>
              <p className="titP2">Product description and details</p>
            </div>
            <div className="produit2">
              <img className="imageP1" src="istockphoto-1343389826-612x612.jpg" alt=""></img>
              <h4 className="tit">Product title</h4><br/>
              <p className="titP">Product description and details</p>
            </div>
            <div className="poduit3">
              <img className="imageP1" src="istockphoto-1314472395-612x612.jpg" alt=""></img>
              <h4 className="tit">Product title</h4><br/>
              <p className="titP">Product description and details</p>
            </div>
            
          </div><br/>
          <p className="pp">Fournir un ensemble complet de services pour les entreprises et les particuliers</p>
      </div> 
    </div>



   
    <Footer/>
   
  </div>
  );
}