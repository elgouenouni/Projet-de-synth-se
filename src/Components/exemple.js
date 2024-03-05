


import React from "react";
import "../CssStyles/acueil.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";

export default function Exemple() {
  return (
    <div className="slide">
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
                    <AiFillHome className="iconeservices" />
                    <p className="tit">Nettoyage bureau</p>
                    <img className="imageS1" src="towfiqu-barbhuiya--9gPKrsbGmc-unsplash.jpg" alt=""/>
                    
                   
                  </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="service1">
            <br/>
                    <AiFillHome className="iconeservices" />
                    <p className="tit">Nettoyage appartement</p>
                    <img className="imageS1" src="téléchargement (1).jpeg" alt=""/>
                    
                   
                  </div>
                  

              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="service1">
              <br/>
              <AiFillHome className="iconeservices" />
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
                <AiFillHome  className="iconeservices"/>
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
  );
}


// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel } from "react-bootstrap";

// export default function Exemple() {
//   return (
//     <Carousel fade>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="téléchargement (2).jpeg"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Some representative placeholder content for the first slide.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="Screenshot 2024-02-10 233438.png"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Some representative placeholder content for the second slide.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="téléchargement (2).jpeg"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>Some representative placeholder content for the third slide.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }












{/* <div className="PServicess" ref={services}>
          <div className="Tservice">
            <p>____  Services</p>
            <h1 className="h1S">Offrir le meilleur<br/>Cleaning Services </h1>
            <p className="pservice">Nous proposons tous types de solutions de nettoyage pour toutes <br/> les petites et grandes entreprises, organisations et foyers.</p>
            <button className="b1" >MORE SERVICES</button>
          </div><br/>
          <div className="servicesss">
            <div className="service1">
              <img className="imageS1" src="towfiqu-barbhuiya--9gPKrsbGmc-unsplash.jpg" alt=""></img>
              <h4 className="tit">Nettoyage bureau</h4><br/>
              <p className="titP">Apatir de <span className="spa">&nbsp;&nbsp;  250 DH </span>  </p>
              <button onClick={f()} className="b2S"><FiArrowRight className="iconS"  /></button>
            </div>
            <div className="service2">
              <img className="imageS1" src="téléchargement (1).jpeg" alt=""></img>
              <h4 className="tit">Nettoyage appartement</h4><br/>
              <p className="titP">Apatir de <span className="spa">&nbsp;&nbsp;  250 DH </span>  </p>
              <button onClick={f()} className="b2S"><FiArrowRight className="iconS"  /></button>
            </div>
            <div className="service3">
              <img className="imageS1" src="téléchargement.jpeg" alt=""></img>
              <h4 className="tit">Nettoyage villa</h4><br/>
              <p className="titP">Apatir de <span className="spa">&nbsp;&nbsp;  250 DH </span>  </p>
              <button onClick={f()} className="b2S"><FiArrowRight className="iconS"  /></button>
            </div>
            <div className="service1">
              <img className="imageS1" src="istockphoto-1248895540-170667a.webp" alt=""></img>
              <h4 className="tit">Nettoyage marbre</h4><br/>
              <p className="titP">Apatir de <span className="spa">&nbsp;&nbsp;  250 DH </span>  </p>
              <button onClick={f()} className="b2S"><FiArrowRight className="iconS"  /></button>
            </div>
            <div className="service2">
              <img className="imageS1" src="istockphoto-1147976285-170667a.webp" alt=""></img>
              <h4 className="tit">Nettoyage cristalisation</h4><br/>
              <p className="titP">Apatir de <span className="spa">&nbsp;&nbsp;  250 DH </span>  </p>
              <button onClick={f()} className="b2S"><FiArrowRight className="iconS"  /></button>
            </div>
            <div className="service3">
              <img className="imageS1" src="images.jpeg" alt=""></img>
              <h4 className="tit">Nettoyage restaurant</h4><br/>
              <p className="titP">Apatir de <span className="spa">&nbsp;&nbsp;  250 DH </span>  </p>
              <button onClick={f()} className="b2S"><FiArrowRight className="iconS"  /></button>
            </div>
          </div><br/>
          <p className="pp">Fournir un ensemble complet de services pour les entreprises et les particuliers</p>
      </div>  */}









