import React from "react";
import { BsFillPersonCheckFill ,BsFacebook} from "react-icons/bs";
import { AiFillSmile ,AiFillInstagram ,AiFillTwitterCircle} from "react-icons/ai";
import { FiSlack , FiArrowRight } from "react-icons/fi";


export default function footer(){
  return(
    <div className="footerA">
    <div className="servicefooter">
      <p className="pSer">Nos Services</p>
      <p className="P1">Nettoyage appartement</p>
      <p className="P1">Nettoyage bureau</p>
      <p className="P1">Nettoyage villa</p>
      <p >Nettoyage marbre</p>
    </div>
    <div className="contac">
      <p className="pSer">Restons en Contact</p>
      <p className="P1">0562644549</p>
      <p className="P1">PuretéPro.@gmail.com</p>
      <p className="P1">6 rue de L'invertion, Paris <br /> vil 75007</p>
    </div>
    <div className="horaire">
      <p className="pSer">Les Horaires</p>
      <p className="P1">Lun 8:30 - 6:30</p>
      <p className="P1">Mar 8:30 - 6:30</p>
      <p className="P1">Mer 8:30 - 6:30</p>
      <p className="P1">Jeu 8:30 - 6:30</p>
      <p className="P1">Ven 8:30 - 6:30</p>
      <p className="P1">Sam Fermé</p>
      <p className="P1">Dim Fermé</p>
    </div>
    <div className="conte">
      <p className="pSer">Nos Réseaux</p>
      <p ><span className="iconeF"><BsFacebook /></span>&nbsp;&nbsp;<span  className="P1">PuretéProNettoyage</span></p>
      <p ><span className="iconeF"><AiFillInstagram /></span >&nbsp;&nbsp;<span className="P1">PuretéProNettoyage</span></p>
      <p><span className="iconeF"><AiFillTwitterCircle/></span >&nbsp;&nbsp;<span className="P1">Twiter/pureté</span></p>
    </div>
    <p className="ligne">________________________________________________________________________________________________________________________________</p>
    <p className="copyright">© 2024 Copyright: PuretéPro.com</p>
  </div>
  )
}