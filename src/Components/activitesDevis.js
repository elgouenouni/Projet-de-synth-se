import React from 'react';
import '../CssStyles/AccueilFondateur.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export default function ActivitesDevis() {
  return (
    <>
      <div className='DIV'>
        <main>
          <div className='container-fluid themed-container ' id='divAccuiel'>
            <h3>Reservation1</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
            </p>
            <Link to="/choisDvis" className='a'>voir Devis</Link>
          </div>
        </main>
      </div>
      <div className='DIV'>
        <main>
          <div className='container-fluid themed-container' id='divAccuiel'>
            <h3>Reservation1</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
            </p>
            <Link to="/choisDvis" className='a'>voir Devis</Link>
          </div>
        </main>
      </div>
    </>
  );
}
