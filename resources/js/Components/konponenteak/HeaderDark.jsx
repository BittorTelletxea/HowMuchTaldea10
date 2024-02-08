

import '@/Components/style/headerl.css'
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const HeaderDark = () => {
    const currentPath = window.location.pathname;

  return (
    <header className="dark fixed-col pt-4 d-flex "style={{ backgroundColor: '#121212' }}>
        <div className="howmuch h-100 ">
            <a className="text-white navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={"/images/logo.png"} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav className="darkk">
            <a href="Login" className="buruz11 text-white  ">TASAZIOA</a>
            
            <a href="Login" className="buruz11 text-white ">DENDA</a>
            <a href="Login" className="buruz11 text-white ">KONTAKTUA</a>
        </nav>
        <div className="botoia navbar2 text-center">
            <div className="d-flex">
            <a href="Login"><button className="logi btn btn-lg btn-block text-white">LOG IN</button></a>
            <a href="Signup"><button className="sign btn btn-light btn-lg btn-block" style={{ width: '100px' }}>SIGN UP</button></a>
            
            
</div>
            
      </div>
  </header>

  );
};
