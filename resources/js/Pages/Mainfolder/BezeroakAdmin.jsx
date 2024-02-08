import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useHistory } from 'react-router-dom';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Transition } from '@headlessui/react';
import SoftDeleteForm from '@/Pages/Profile/Partials/SoftDeleteForm';
import LogoutButton from '@/Components/konponenteak/LogoutButton';


const Bezeroak = ({ bezeroa }) => {
    console.log(bezeroa)
    const handleRestore = () => {
        console.log('Usuario restaurado');
        window.location.href = 'bezeroa'
        
      };
    
      const handleForceDelete = () => {
      
        console.log('Usuario eliminado forzadamente');
      };
    return (
        <div>
            <header className="bg-light fixed-col pt-4 d-flex" style={{ justifyContent: 'space-between', marginLeft: '9%', marginRight: '9%' }}>
        <div className="howmuch h-100 ">
            <a className="navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={"/images/logoL.png"} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav >
            <a href="produktuak" className="buruz text-black  " style={{ padding: '3%' }}>PRODUKTUAK</a>
            <a href="KontaktuaAdmin" className="buruz1 text-black " style={{ padding: '3%' }}>MEZUAK</a>
            <a href="Bezeroa" className="buruz1 text-black " style={{ padding: '3%' }}>BEZEROAK</a>
        </nav>
        <div className=" navbar2 text-center">
            <div className="d-flex">
            <a href="Perfil" className="text-black" style={{ fontSize: '2.5em', marginTop: '6%' }}><i class="bi bi-person-bounding-box"></i></a>
            
         <LogoutButton />
</div>
            </div>
            </header>
            <div className='produktua'>
        <h2 style={{ textAlign: 'left', marginTop: '5%', marginLeft: '2%' }}>
          <b>BEZEROAK</b>
        </h2>
        <br />
      </div>
      <div className='denboraldikoak'>
        {bezeroa.map((bezeroa, index) => (
          <div key={index} className='denbpro'>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', marginLeft: '19%', marginTop: '3%' }}>
              <p className="izena" style={{ width: '50%', fontSize: '1.5em', fontWeight: 'bold'}}>{bezeroa.name}</p>
              <hr />
              <p style={{ width: '50%' }}>
              <SoftDeleteForm
              
                userId={bezeroa.id}
                onRestore={handleRestore}
                onForceDelete={handleForceDelete}
              />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bezeroak;
