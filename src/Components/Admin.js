import React from "react";
import "../CssStyles/adminfStyle.css";
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' ;
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Admin(){
    return(
       
        <body class='bodyS'>
      <header class="headerS">
        <div class="logoS">
          <img class="imglogoS" src="c:\Users\dell\Pictures\logo.png" alt="Logo" />
          <a class="a1S"  href="#">PuretéPro</a>
          <div class="search_boxS">
            <input type="text" placeholder="Search PuretéPro"/>
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
    
        <div class="header-iconsS">
          <i class="fas fa-bell"></i>
          <div class="accountS">
            <img src="./pic/img.jpg" alt=""/>
            <h4>Jhon Viek</h4>
          </div>
        </div>
      </header>
      <div class="containerS">
        <nav class="navS">
          <div class="side_navbarS">
            <span>Menu principale</span>
            <a href="#" class="active">Acceuil</a>
            <a href="#">Profil</a>
            <a href="#">réservation</a>
            <a href="#">Préstataire</a>
            <a href="#">My Account</a>
            <a href="#">Documnets</a>
    
            
          </div>
        </nav>
    
        <div class="main-bodyS">
          <h2 class="h1-bodyS">Acceuil</h2>
          <div class="promo_cardS">
            <h1>Welcome to PuretéPro</h1>
            <span>Lorem ipsum dolor sit amet.</span>
            <button>Learn More</button>
          </div>
    
          <div class="history_listsS">
            <div class="list1S">
              <div class="rowS">
                <h4 class="h4S">Les réservations récentes</h4>
                <a class="aTS" href="#">See all</a>
              </div>
              <table class="tableS">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Dates</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Ammount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2, Aug, 2022</td>
                    <td>Sam Tonny</td>
                    <td>Premimum</td>
                    <td>$2000.00</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>29, July, 2022</td>
                    
                    <td>Code Info</td>
                    <td>Silver</td>
                    <td>$5,000.00</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>15, July, 2022</td>
                  
                    <td>Jhon David</td>
                    <td>Startup</td>
                    <td>$3000.00</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>5, July, 2022</td>
                    <td>Salina Gomiz</td>
                    <td>Premimum</td>
                    <td>$7000.00</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>29, June, 2022</td>
                    <td>Gomiz</td>
                    <td>Gold</td>
                    <td>$4000.00</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>28, June, 2022</td>
                    <td>Elyana Jhon</td>
                    <td>Premimum</td>
                    <td>$2000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
    
           
          </div>
        </div>
    
        
      </div>
    </body>
        

    );
}