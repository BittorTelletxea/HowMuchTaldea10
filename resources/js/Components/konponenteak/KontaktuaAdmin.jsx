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
import React, { useState,useEffect } from 'react';
import { DendaProduktuakAdmin } from "../../Pages/Mainfolder/DendaProduktuakAdmin";
import { BrowserRouter as Router } from 'react-router-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
import { HeaderAdmin } from './HeaderAdmin';



export const KontaktuaAdmin = () => {
    const [mezuak, setMezua] = useState([]);

    useEffect(() => {
        console.log('sartu da.');
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/mezuak');
            const data = await response.json();
            setMezua(data);
        };
        fetchData();
    }, [])

    return (
        <div>
            <div className='denda bg-light'>
    <header className="bg-light fixed-col pt-4 d-flex">
            <div className="howmuch h-100 ">
                <a className="navbar-brand display-1 fw-bolder text-center" href="/Logged" >
                <img src={logo} width="40" height="32" alt="" />
                    How Much
                </a>
            </div>
            
            <nav >
                <a href="produktuak" className="buruz1 text-black  ">PRODUKTUAK</a>
                <a href="KontaktuaAdmin" className="buruz text-black ">MEZUAK</a>
                <a href="errekuperazioa" className="buruz1 text-black ">BEZEROAK</a>
    
    
            </nav>
            <div className=" navbar2 text-center">
                <div className="d-flex">
                <a href="Perfil"className="text-black" style={{ fontSize: '2.5em', marginTop: '6%' }}><i class="bi bi-person-bounding-box"></i></a>
                
                <LogoutButton />
    </div>
                
          </div>
      </header>  
      <div className='produktua'>
        <h2><b>BEZEROEN MEZUAK</b></h2><br />
        </div>
        
    </div>
        <div style={{  paddingLeft: '10%', paddingRight: '10%' }}>
        <table class="table table-light" style={{ padding: '100px', backgroundColor: "transparent" }}>
  <thead >
    <tr>
      <th scope="col" className='' style={{ padding: '30px', fontSize: '2em' }}>Email</th>
      <th scope="col"  style={{ padding: '30px', fontSize: '2em' }}>Mezua</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    </tr>
    {mezuak.map((mezua, index)=>(
        <tr key={index}>
            <td>
                <p style={{ padding: '30px', fontSize: '20px', fontWeight: 'bold' }}>{mezua.email}</p>
            </td>
            <td>
                <p style={{ padding: '30px'}}>{mezua.message}</p>
            </td>
        </tr>
    ))}
  </tbody>
</table>


        </div>
        </div>
    );
};
