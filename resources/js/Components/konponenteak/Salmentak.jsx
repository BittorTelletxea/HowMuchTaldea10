import React from 'react'; // Import React if not already imported
import '../style/salmentak.css';
import { Perfila } from './Perfila';
import seatleon from "../images/seatleon.png"
import bmw from "../images/bmw.png"
import cani from "../images/cani.png"
import motocani from "../images/motocani.png"

export const Salmentak = () => {
  return (
    <div>
      <Perfila />
      <div className="container">
        <div className='salmentanav'>
        <nav className="navbar navbar-light  justify-content-between">
          <a className="navbar-brand display-6">Salmentak</a>
          <form className="form-inline d-flex">
            <input className="form-control mr-sm-2" type="search" placeholder="Bilatu" aria-label="Search" />
            <button className="btn btn-outline my-2 my-sm-0" type="submit">Bilatu</button>
          </form>
        </nav>
      </div>
      <div>
      <div className="row row-cols-1 row-cols-sm-2 ">
            <div className="salmentak">
            <img src={seatleon} width='100%' height='50%' alt="" />
                    <h4 className="">SEAT LEON 1.9 TDI</h4>
                    <p className="">Perfecto para cani autentico</p>
                    <p>Prezioa: 1499€</p>                 
            </div>
            <div className="salmentak">
            <img src={bmw} width='100%' height='50%' alt="" />
                    <h4 className="">BMW E36</h4>
                    <p className="">Ideal para ser un cani de verdad</p>
                    <p>Prezioa: 2399€</p>               
            </div>
            <div className="salmentak">
            <img src={cani} width='100%' height='50%' alt="" />
                    <h4 className="">CANI SUPREMO</h4>
                    <p className="">El autentico rey de los canis</p>
                    <p>Prezioa: 2999€</p>
            </div>
            <div className="salmentak">
            <img src={motocani} width='100%' height='50%' alt="" />
                    <img src="" alt="" />
                    <h4 className="">Motillo de locos</h4>
                    <p className="">Motillo en perfecto estado para ti o para tu cani de confianza</p>
                    <p>Prezioa: 499€</p>               
            </div>
      </div>
      </div>
    </div>
    </div>

  );
};
