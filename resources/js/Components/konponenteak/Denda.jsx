import '../style/denda.css';
import '../style/headerl.css'
import "../style/tasazioa.css";
import buscador from "../images/buscador.png";
import plus from "../images/plus.png"
import { HeaderL } from './HeaderL';
import { DendaProduktuak } from './DendaProduktuak';
import { Gustukoenak } from './Gustukoenak';

export const Denda = () =>{
    return(
        <div className='denda bg-light'>
    <HeaderL />
    <div className='head d-flex'>
        <nav>
            <ul>
                <li>
                    <a href=''>Autoak</a>
                    <a href="">Motorrak</a>
                    <a href="">Bizikletak</a>
                    <a href="">Patineteak</a>
                    <a href="">Besteak</a>
                </li>
            </ul>
        </nav>
        <div className='bilatzailea'>
        <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Bilatu" aria-label="Search" aria-describedby="search-addon" />
  <span class="" id="search-addon">
    <img src={buscador} width={50} alt="" />
  </span>
</div>  
        </div>
    </div>
    <div className='produktua'>
        <h2><b>Denboraldikoak</b></h2><br />
        <DendaProduktuak />
    </div>
    <div className='gustukoenak'>
        <h2><b>Gustukoenak</b></h2><br />
        <Gustukoenak />
    </div>
    <div className="button-container">
        
        <button className="toggle-mode-button">
          <a href="/gehitu"><img src={plus} width={40} height={40} alt="" /><b>IGO PRODUKTUA</b></a>
        </button>
        </div>
    </div>
    
    );
}