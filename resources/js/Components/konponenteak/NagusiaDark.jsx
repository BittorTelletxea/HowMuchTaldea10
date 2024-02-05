import logo from "../images/logo.png"
import nagusia from "../images/nagusia.png"
import flecha from '../images/image (21).png'
import '../style/estiloa.css'
import '../style/dark.css'
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import sol from '../images/image (22).png'

export const NagusiaDark = () => {
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
          <a href="/gehitu" className="text-center"><img src={flecha} width={30} height={30} alt="" /></a>
        </button>
        </div>
        <div className="button-container-dark">
        
        <button className="toggle-mode-button-dark">
          <a href="/gehitu" className=''></a>
        </button>
        </div>
    </div>
  
  );
};
