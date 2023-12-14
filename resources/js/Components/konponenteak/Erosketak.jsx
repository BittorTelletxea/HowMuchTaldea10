import React from 'react'; // Import React if not already imported
import '../style/salmentak.css';
import { Perfila } from './Perfila';
import bizikleta from "../images/bizikleta.png"
import patinete from "../images/patinete.png"


export const Erosketak = () => {
  return (
    <div>
      <Perfila />
      <div className="container">
        <div className='salmentanav'>
        <nav className="navbar navbar-light  justify-content-between">
          <a className="navbar-brand display-6">Erosketak</a>
          <form className="form-inline d-flex">
            <input className="form-control mr-sm-2" type="search" placeholder="Bilatu" aria-label="Search" />
            <button className="btn btn-outline my-2 my-sm-0" type="submit">Bilatu</button>
          </form>
        </nav>
      </div>
      <div>
      <div className="row row-cols-1 row-cols-sm-2 ">
      <div className="salmentak">
            <img src={bizikleta} width='100%' height='50%' alt="" />
                    <h4 className="">Bicicleta</h4>
                    <p className="">Bicicleta en perfecto estado, ideal para hacer carreras contra Iker</p>
                    <p>Prezioa: 3999€</p>               
            </div>
            <div className="salmentak">
            <img src={patinete} width='100%' height='50%' alt="" />
                    <h4 className="">Patinete electrico</h4>
                    <p className="">Patienete electrico en perfecto estado, ideal para realizar carreras con Eneko</p>
                    <p>Prezioa: 499€</p>               
            </div>
            
      </div>
      </div>
    </div>
    </div>

  );
};
