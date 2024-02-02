import logo from "../images/logoL.png"
import nagusia from "../images/nagusia.png"
import flecha from '../images/flexha.png'
import '../style/estiloa.css'
import { HeaderL } from "./HeaderL";
import React, { useState } from 'react';
import buscador from "../images/buscador.png";
import Logged  from "../images/perfil.png";
import LogoutButton from './LogoutButton';

export const Editatu = () => {
    const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
<header className="bg-light fixed-col pt-4 d-flex">
        <div className="howmuch h-100 ">
            <a className="navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={logo} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav className="text-center">
            <a href="Tasazioa" className="buruz1 text-black  ">TASAZIOA</a>
            <a href="Denda" className="buruz1 text-black ">DENDA</a>
            <a href="Kontaktua" className="buruz1 text-black ">KONTAKTUA</a>
        </nav>
        <div className=" navbar2 text-center">
            <div className="d-flex">
            <a href="Perfil"><img src={Logged} width='40' height='40' className=" mt-2"></img></a>
            
            <LogoutButton />
</div>
            
      </div>
  </header>
        
<form className="card w-75 mt-5">
    <div className="d-flex">
    <i class="bi bi-arrow-bar-left" style={{ fontSize: '2em' }}></i>    
<img src={nagusia} width={'20%'} alt="" />
        <div>
            <p>Ejemplo</p>
            <p>Precio</p>
        </div>
        </div>
        </form>
    </>
  );
};
