import logo from "../images/logoL.png"
import Logged  from "../images/perfil.png";
import { NavButton } from "./NavButton";
import '../style/headerl.css'
import LogoutButton from "./LogoutButton";
export const Header = () => {
    const currentPath = window.location.pathname;

  return (
    <header className="bg-light fixed-col pt-4 d-flex">
        <div className="howmuch h-100 ">
            <a className="navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={logo} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav>
            <a href="Login" className="buruz1 text-black  ">TASAZIOA</a>
            
            <a href="Login" className="buruz1 text-black ">DENDA</a>
            <a href="Login" className="buruz1 text-black ">KONTAKTUA</a>
        </nav>
        <div className="botoia navbar2 text-center">
            <div className="d-flex">
            <a href="Login"><button className="logi btn btn-lg btn-block">LOG IN</button></a>
            <a href="Signup"><button className="sign btn btn-dark btn-lg btn-block">SIGN UP</button></a>
            
            
</div>
            
      </div>
  </header>

  );
};
