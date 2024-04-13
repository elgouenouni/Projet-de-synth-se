import React from 'react';
import '../CssStyles/choisDevis.css';
import { AiFillHome } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChoisDvis() {
  return (
    <>
     
      <div className='DIV'>
      <h1 className='h33'>DEVIS</h1>
     
      </div>
     <div className='divbu'> <button id='idbutton' className="btn btn-primary  ">accepter</button>
        <button id='idbutton2' className="btn btn-danger">refuser</button></div>
    </>
  );
}
