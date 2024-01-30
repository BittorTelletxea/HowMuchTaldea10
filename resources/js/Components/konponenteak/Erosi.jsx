import React, { useState } from "react";
import { HeaderL } from "../konponenteak/HeaderL";
import { FooterL } from "../konponenteak/FooterL";
import linea from "../images/zigzag.png";
import carta from '../images/carta.png';
import prezioa from '../images/prezioa.png';
import lupa from '../images/lupa.png';
import sol from "../images/sol-1.jpg";
import luna from "../images/luna-1.jpg";
import "../style/tasazioa.css";
import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import logo from "../images/logoL.png";
import "../style/login.css";
import LogoutButton from "./LogoutButton";
import Logged  from "../images/perfil.png";



export function Erosi() {
 

  
  return (
    <div className="bg-light">
       <header className="bg-light fixed-col pt-4 d-flex">
        <div className="howmuch h-100 ">
            <a className="navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={logo} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav>
            <a href="Tasazioa" className="buruz text-black  ">TASAZIOA</a>
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
  <body>
      <div>
        <h1>Produkuten lista</h1>
      </div>
      <div>
        
      </div>


  </body>
      <FooterL />
      
    </div>
  );
};
