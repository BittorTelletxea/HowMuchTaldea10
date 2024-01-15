import React from 'react'; // Import React if not already imported
import '../style/salmentak.css';
import { Perfila } from './Perfila';
import bizikleta from "../images/bizikleta.png"
import patinete from "../images/patinete.png"


export const Erosketak = () => {
  return (
    <div>
      <Perfila />
      <div className="container">
        <div className='salmentanav'>
        <nav className="navbar navbar-light  justify-content-between">
          <a className="navbar-brand display-6">Erosketak</a>
          <form className="form-inline d-flex">
            <input className="form-control mr-sm-2" type="search" placeholder="Bilatu" aria-label="Search" />
            <button className="btn btn-outline my-2 my-sm-0" type="submit">Bilatu</button>
          </form>
        </nav>
      </div>
      <div>
      <div className='mt-5'><h2><b>Oraindik ez duzu ezer erosi!</b></h2></div>
      </div>
      </div>
    </div>

  );
};
