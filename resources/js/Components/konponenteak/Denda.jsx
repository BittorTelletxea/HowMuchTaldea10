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


export const Denda = ({ productos }) =>{
    const [searchTerm, setSearchTerm] = useState('');

    return(
        <div className='denda bg-light'>
     <header className="bg-light fixed-col pt-4 d-flex">
        <div className="howmuch h-100 ">
            <a className="navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={logo} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav>
            <a href="Tasazioa" className="buruz1 text-black  ">TASAZIOA</a>
            <a href="Denda" className="buruz text-black ">DENDA</a>
            <a href="Kontaktua" className="buruz1 text-black ">KONTAKTUA</a>
        </nav>
        <div className=" navbar2 text-center">
            <div className="d-flex">
            <a href="Perfil"><img src={Logged} width='40' height='40' className=" mt-2"></img></a>
            
            <LogoutButton />
</div>
            
      </div>
  </header>
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
            
            {/* Renderiza el componente DendaProduktuak aquí */}

    </div>

    <div className='produktua'>
        <h2><b>DENDA</b></h2><br />
        <DendaProduktuak productos={productos} searchTerm={searchTerm} />
        
    </div>
   
    <div className="button-container">
        
        <button className="toggle-mode-button">
          <a href="/gehitu" className='text-white'><img src={plus} width={40} height={40} alt="" /><b>IGO PRODUKTUA</b></a>
        </button>
        </div>
        <FooterL />
    </div>
    
    );
}