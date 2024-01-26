import logo from "../images/logoL.png"
import Logged  from "../images/perfil.png";
import { NavButton } from "./NavButton";
import '../style/headerl.css'
import LogoutButton from "./LogoutButton";
export const HeaderAdmin = () => {
  return (
    <header className="bg-light fixed-col pt-4 d-flex">
        <div className="howmuch h-100 ">
            <a className="navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={logo} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav>
            <a href="produktuak" className="buruz text-black  ">PRODUKTUAK</a>
            <a href="Denda" className="buruz text-black ">BEZEROAK</a>
        </nav>
        <div className=" navbar2 text-center">
            <div className="d-flex">
            <a href="Perfil"><img src={Logged} width='40' height='40' className=" mt-2"></img></a>
            
            <LogoutButton />
</div>
            
      </div>
  </header>

  );
};
