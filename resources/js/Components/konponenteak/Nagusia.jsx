import logo from "../images/logo.png"
import nagusia from "../images/nagusia.png"
import flecha from '../images/flexha.png'
import '../style/estiloa.css'
export const Nagusia = () => {
  return (
    <div className="nagusia text-center vh-100  align-items-center bg-light ">
   <div className="d-flex">
    <div className="kontaktua">
      <h4>HOW MUCH</h4>
      <p className="display-6 text-black">How Much! , esploratu, erosi, tasatu eta saldu.</p>
       <p className="display-6 text-black">Zure produktuak tasatzen  ditugu eta beste batzuk eros ditzakezu. Ezagutu produktuen balioa!</p>

    </div>
    <div className="eslogan margin-top-custom h-100 ">
    <p className=" animated-heading display-4">EZAGUTU PRODUKTUEN BALIOA</p>

     
      <div>
      </div>
      </div>
    </div>
    <div className="">
        
        <button className="toggle ">
          <a href="/gehitu" className="text-center"><img src={flecha} width={30} height={30} alt="" /></a>
        </button>
        </div>
    </div>
  
  );
};
