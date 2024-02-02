import logo from "../images/logoL.png"
import Logged from "../images/perfil.png"
import { NavButton } from "./NavButton";
import '../style/headerl.css'
import '../style/denda.css';
import '../style/headerl.css'
import "../style/tasazioa.css";
import '../style/dendah.css'
import buscador from "../images/buscador.png";
import plus from "../images/plus.png"
import  DendaProduktuak  from '../../Pages/Mainfolder/DendaProduktuak';
import  Gustukoenak  from '../../Pages/Mainfolder/Gustukoenak';
import LogoutButton from './LogoutButton';
import { FooterL } from './FooterL';
import React, { useState } from 'react';

export const HeaderL = () => {
  return (
    <header className="bg-light fixed-col pt-4 d-flex">
        <div className="howmuch h-100 ">
            <a className="navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={logo} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav>
            <a href="Tasazioa" className="buruz text-black  ">TASAZIOA</a>
            <a href="Denda" className="buruz text-black ">DENDA</a>
            <a href="Kontaktua" className="buruz text-black ">KONTAKTUA</a>
        </nav>
        <div className=" navbar2 text-center">
            <div className="d-flex">
            <a href="Perfil"><img src={Logged} width='40' height='40' className=" mt-2"></img></a>
            
            <LogoutButton />
</div>
            
      </div>
  </header>

  );
};
