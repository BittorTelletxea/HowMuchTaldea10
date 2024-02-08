import React from 'react';
import '@/Components/style/headerl.css'
import { InertiaLink } from '@inertiajs/inertia-react';
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const HeaderLDark = () => {
    const currentPath = window.location.pathname;

  return (
    <header className="dark fixed-col pt-4 d-flex "style={{ backgroundColor: '#121212' }}>
        <div className="howmuch h-100 ">
            <a className="text-white navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={"/images/logo.png"} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav>
            <a href="Tasazioa" className="buruz11 text-white  ">TASAZIOA</a>
            
            <a href="Denda" className="buruz11 text-white ">DENDA</a>
            <a href="Kontaktua" className="buruz11 text-white ">KONTAKTUA</a>
        </nav>
        <div className=" navbar2 text-center">
            <div className="d-flex">
            <a href="Perfil" className="text-white" style={{ fontSize: '2.5em', marginTop: '6%' }}><i class="bi bi-person-bounding-box"></i></a>
            
            <InertiaLink
      href={route('logout')}
      method="post"
      as="button"
      type="button"
      className="logout"
    ><div className="pt-1 ">
    <button className="log btn btn-light btn-lg btn-block" style={{ width:'150px', marginLeft: '-5%' , fontWeight: 'bold', fontSize: '15px'}} type="submit">AMAITU SAIOA</button>
  </div>
    </InertiaLink>
</div>  
      </div>
  </header>

  );
};
