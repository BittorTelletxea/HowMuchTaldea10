import logo from "../images/logo.png"
import Logged  from "../images/perfil.png";
import { NavButton } from "./NavButton";
import '../style/headerl.css'
import LogoutButton from "./LogoutButton";
export const HeaderDark = () => {
    const currentPath = window.location.pathname;

  return (
    <header className=" fixed-col pt-4 d-flex "style={{ backgroundColor: '#121212' }}>
        <div className="howmuch h-100 ">
            <a className="text-white navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={logo} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav>
            <a href="Login" className="buruz1 text-white  ">TASAZIOA</a>
            
            <a href="Login" className="buruz1 text-white ">DENDA</a>
            <a href="Login" className="buruz1 text-white ">KONTAKTUA</a>
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
