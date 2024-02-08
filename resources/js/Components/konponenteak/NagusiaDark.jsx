
import '../style/estiloa.css'
import '../style/dark.css'
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect, useState } from 'react';

export const NagusiaDark = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

    const toggleDarkMode = () => {
      const newMode = !darkMode;
      setDarkMode(newMode);
      localStorage.setItem('darkMode', newMode.toString());
      window.location.reload(); 
    };
  return (
    <div className="nagusia text-center vh-100  align-items-center  "style={{ backgroundColor: '#121212' }}>
   <div className="d-flex">
    <div className="kontaktua">
      <h4 className="text-white">HOW MUCH</h4>
      <p className="display-6 text-white">How Much! , esploratu, erosi, tasatu eta saldu.</p>
       <p className="display-6 text-white">Zure produktuak tasatzen  ditugu eta beste batzuk eros ditzakezu. Ezagutu produktuen balioa!</p>

    </div>
    <div className="eslogan margin-top-custom h-100 ">
    <p className=" animated-heading display-4 text-white">EZAGUTU PRODUKTUEN BALIOA</p>

     
      <div>
      </div>
      </div>
    </div>
    <div className="">
        
        <button className="toggle ">
          <a href="/gehitu" className="text-center"><img src={'/images/image (21).png'} width={30} height={30} alt="" /></a>
        </button>
        </div>
        <div className="button-container">
        
        <button className="toggle-mode-button-dark" onClick={toggleDarkMode}>
          <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'}`}></i>
        </button>
        </div>
    </div>
  
  );
};
