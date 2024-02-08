import React, { useEffect, useState } from 'react';
import '@/Components/style/estiloa.css';

export const Nagusia = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    window.location.reload(); 
  };

  return (
    <div className="nagusia text-center vh-100 align-items-center bg-light ">
      <div className="d-flex">
        <div className="kontaktua">
          <h4>HOW MUCH</h4>
          <p className="display-6 text-black">How Much! , esploratu, erosi, tasatu eta saldu.</p>
          <p className="display-6 text-black">Zure produktuak tasatzen ditugu eta beste batzuk eros ditzakezu. Ezagutu produktuen balioa!</p>
        </div>
        <div className="eslogan margin-top-custom h-100 ">
          <p className=" animated-heading display-4">EZAGUTU PRODUKTUEN BALIOA</p>
          <div></div>
        </div>
      </div>
      <div className="">
        <button className="toggle">
          <a href="/gehitu" className="text-center"><img src={'/images/flexha.png'} width={30} height={30} alt="" /></a>
        </button>
      </div>
      <div className="button-container-dark">
        <button className="toggle-mode-button-dark" onClick={toggleDarkMode}>
          <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'}`}></i>
        </button>
      </div>
    </div>
  );
};
