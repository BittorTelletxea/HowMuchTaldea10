import '../style/denda.css';
import '../style/headerl.css'
import "../style/tasazioa.css";
import logo from "../images/logoL.png"
import '../style/dendah.css'
import buscador from "../images/buscador.png";
import plus from "../images/plus.png"
import { HeaderL } from './HeaderL';
import  DendaProduktuak  from '../../Pages/Mainfolder/DendaProduktuak';
import  Gustukoenak  from '../../Pages/Mainfolder/Gustukoenak';
import LogoutButton from './LogoutButton';
import Logged  from "../images/perfil.png";
import { FooterL } from './FooterL';
import React, { useState } from 'react';
import { DendaProduktuakAdmin } from "../../Pages/Mainfolder/DendaProduktuakAdmin";
import { BrowserRouter as Router } from 'react-router-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
import { HeaderAdmin } from './HeaderAdmin';


export const DendaAdmin = ({ productos }) =>{
    const [searchTerm, setSearchTerm] = useState('');

    return(
        <div className='denda bg-light'>
     <HeaderAdmin />
  <div className='head fixed d-flex' style={{}}>
    <div className='bilatzailea'>
        <div className="input-group rounded" style={{ width: '1000px' }}>
            <input
                type="search"
                className="form-control rounded"
                placeholder="Bilatu"
                aria-label="Search"
                aria-describedby="search-addon"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="" id="search-addon">
                <img src={buscador} width={50} alt="" />
            </span>
        </div>
    </div>
    </div>

    <div className='produktua'>
        <h2><b>PRODUKTUAK</b></h2><br />
        <Router>
            <DendaProduktuakAdmin productos={productos} searchTerm={searchTerm} />
        </Router>
        
    </div>
   
    <div className="button-container">
        
        <button className="toggle-mode-button">
          <a href="/gehitu" className='text-white'><img src={plus} width={40} height={40} alt="" /><b>IGO PRODUKTUA</b></a>
        </button>
        </div>
        
    </div>
    
    );
}