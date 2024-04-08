


import "../CssStyles/Devis.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Devis() {
    const [showSurface, setShowSurface] = useState(false);
    const [selectedType, setSelectedType] = useState("");
    const [showInputs, setShowInputs] = useState(false);
    const [selectedArea, setSelectedArea] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedInputs, setSelectedInputs] = useState({});
    const [type,settype]=useState('type');
    

    function handelTypeNettoyage(event) {
        const selectType = event.target.value;
        setSelectedType(selectType);
        setShowSurface(selectType === 'specifique');
        settype(event.target.value);
        if (selectType!=='specifique'){
            setSelectedOption("");
            setSelectedInputs({});
        }
    }


    function handleSpecificArea(event) {
        const selectArea = event.target.value;
        setSelectedArea(selectArea);
        setShowInputs(selectArea !== '');
        
        // Store selected option and reset inputs
        setSelectedOption(selectArea);
        setSelectedInputs({});
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setSelectedInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    
    return (
        <div className='main'>
            <Link to="/accueilDevis" className='link-devis'>Retour</Link>
            <nav className='nav-devis'>
                <img src="/media/logo (1).png" width="260px" id='img' style={{ marginBottom: '190px' }} />
                <h1 className='PurtePro'>PurtéPro</h1>
            </nav>
            <div className='div-main'>
                <h3 className='h3-devis'>Remplir le Devis</h3>
                <p className='p1-devis'>* Tous les champs sont requis.</p>
                <form >
                    <input type='text' placeholder='Nom du Client' className='input-Devis'></input>
                    <input type='text' placeholder='Prenom du client' className='input-Devis'></input>
                    <input type='email' placeholder='Email du client' className='input-Devis'></input>
                    <input type='text' placeholder='Téléphone du client' className='input-Devis'></input>

                    <table className='table-devis'>
                        <thead >
                            <tr className='tr-devis'>
                                <td className='td-devis'>
                                    <img src='/media/icon1.png' width='30px' />&nbsp; &nbsp;<label id="labelDevis">Type De Service </label>
                                </td>
                                <td>
                                    <select id="typeService" name="typeService" > 
                                       
                                            <option className="form-select" >Choisir un Service  </option>
                                           
                                            <option value="Appartement">Nettoyage  D'appartement</option>
                                            <option value="Villas">Nettoyage de Villas</option>
                                            <option value="Maison">Nettoyage de Maison</option>
                                            <option value="Restaurant">Nettoyage de Restaurant</option>
                                            <option value="Bureau">Nettoyage de Bureaux</option>
                                            <option value="Salle d'évènement">Nettoyage de Salle d'évènement</option>
                                            <option value="Maison d'hôte">Nettoyage de Maison d'hôte</option>
                                            <option value="Hôtel">Nettoyage de Hôtel</option>
                                            <option value="Immeuble">Nettoyage de Immeuble</option>
                                            
                                        
                                    </select>
                                       
                                  
                                </td>
                            </tr>
                            <tr className='tr-devis'>
                                <td className='td-devis'>
                                    <img src='/media/icon2.png' width='30px' /> &nbsp; &nbsp; <label htmlFor="typeNettoyage" id="labelDevis">Nombre d'intervention par semaine :</label>
                                </td>
                                <td>
                                    <select id='nomberIntervention' name="nomberIntervention">
                                        <option value="Fréquence">Fréquence</option>
                                        <option value="Journalier">Journalier(5j/Sem)</option>
                                        <option value="plusieur fois">plusieur fois par semaine(2à3j/Sem )</option>
                                        <option value="1 fois ">1 fois par semaine(5j/Sem)</option>
                                        <option value="Occasinnelle">Occasinnelle</option>
                                    </select>
                                </td>
                            </tr>

                            <tr className='tr-devis'>
                                <td className='td-devis'>
                                    <img src='/media/icon4.png' width='34px' />&nbsp; &nbsp; <label htmlFor="typeNettoyage" id="labelDevis">Type de Nettoyage :</label>
                                </td>
                                <td >

                                    <select id="typeNettoyage" name="typeNettoyage" onChange={handelTypeNettoyage}>
                                        <option value="type">Choisir un Type</option>
                                        <option value="Standard">Nettoyage Standard</option>
                                        <option value="specifique">Nettoyage Spécifique</option>
                                    </select>
                                </td>
                            </tr>
                             {selectedType==='Standard'&&(
                                <tr>
                                    <td>
                                      <input type="text" id="surface" name="surface" placeholder='Surface des locaux' className='input-type'/>
                                    </td>
                                    <td>
                                       <input type="text" id="price" name="price" placeholder='Prix total' className='input-type'/>
                                    </td>
                              </tr>
                             )}
                            {showSurface && ( 
                                <tr className='tr-devis'>
                                    <td className='td-devis'>
                                        <label htmlFor="specificArea">Zone spécifique :</label>
                                    </td>
                                    <td >
                                        <select id="specificArea" name="specificArea" onChange={handleSpecificArea}>
                                            <option value="">Choisir une zone</option>
                                            {['chambre', 'coisin', 'salle de bain', 'sallon'].map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            )}

                        </thead>
                    </table>

                    {showInputs && selectedType=='specifique' &&(
                        <div className='showInputs'>
                            
                            <input type='text' name='selectedOption' placeholder='Selected Option' value={selectedOption} readOnly className='input-ShowSurface' />
                            <input type='text' name='number' placeholder='Nombre' value={selectedInputs[selectedOption]?.number || ''} onChange={handleInputChange} className='input-ShowSurface' />
                            <input type='text' name='prix' placeholder="Prix" value={selectedInputs[selectedOption]?.prix || ''} onChange={handleInputChange} className='input-ShowSurface' />
                            
                        </div>
                    )}
                    <div className='div1'>
                        <label className='container-checkbox'>
                            <p className='p1checkbox'>Vitre:</p> <input type='checkbox'  />
                            <svg viewBox="0 0 64 64" height="30px" width="20px"className="checkbox">
                              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                            </svg>
                        </label>
                        <label className='container-checkbox'>
                            <p className='p1checkbox'>marbre:</p> <input type='checkbox' />
                            <svg viewBox="0 0 64 64" height="30px" width="20px"className="checkbox">
                              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                            </svg>
                        </label>
                        <label className='container-checkbox'>
                            <p className='p1checkbox'>cristal:</p><input type='checkbox' />
                            <svg viewBox="0 0 64 64" height="30px" width="20px"className="checkbox">
                              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                            </svg>
                        </label>
                        <label className='container-checkbox'>
                            <p className='p1checkbox'>parquet:</p><input type='checkbox' />
                            <svg viewBox="0 0 64 64" height="30px" width="20px"className="checkbox">
                              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                            </svg>
                        </label>
                        <label className='container-checkbox'>
                            <p className='p1checkbox'>moquette:</p><input type='checkbox' />
                            <svg viewBox="0 0 64 64" height="30px" width="20px"className="checkbox">
                              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                            </svg>
                        </label>
                    </div>
                    <div className='div1'>
                        <label className='container-checkbox'>
                            <p className='p1checkbox'>tapis:</p><input type='checkbox' />
                            <svg viewBox="0 0 64 64" height="30px" width="20px"className="checkbox">
                              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                            </svg>
                        </label>
                        <label className='container-checkbox'>
                            <p className='p1checkbox'>carrelage:</p> <input type='checkbox' />
                            <svg viewBox="0 0 64 64" height="30px" width="20px"className="checkbox">
                              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                            </svg>
                        </label>
                        <label className='container-checkbox'>
                            <p className='p1checkbox'>sols en bois:</p> <input type='checkbox' />
                            <svg viewBox="0 0 64 64" height="30px" width="20px"className="checkbox">
                              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                            </svg>
                        </label>
                        <label className='container-checkbox'>
                            <p className='p1checkbox'>mosaique:</p> <input type='checkbox' />
                            <svg viewBox="0 0 64 64" height="30px" width="20px"className="checkbox">
                              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                            </svg>
                        </label>
                        <label className='container-checkbox'>
                            <p className='p1checkbox'>canapés:</p>  <input type='checkbox' />
                            <svg viewBox="0 0 64 64" height="30px" width="20px"className="checkbox">
                              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                            </svg>
                        </label>
                    </div>

                    <button className='button-devis'> Valider </button>
                </form>
            </div>
        </div>
    );
}

export default Devis;
