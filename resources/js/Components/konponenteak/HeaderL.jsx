import logo from "../images/logoL.png"
import { NavButton } from "./NavButton";
import '../style/headerl.css'
import LogoutButton from "./LogoutButton";
export const HeaderL = () => {
  return (
    <header className="bg-light fixed-col pt-4 d-flex">
        <div className="howmuch h-100 ">
            <a className="navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={logo} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav>
            <a href="Tasazioa" className="buruz text-black  ">TASAZIOA</a>
            <a href="Denda" className="buruz text-black ">DENDA</a>
            <a href="Kontaktua" className="buruz text-black ">KONTAKTUA</a>
        </nav>
        <div className=" navbar2 text-center">
            <div className="d-flex">
            <a href="Perfil"><i class="bi bi-person-bounding-box"></i></a>
            
            <LogoutButton />
</div>
            
      </div>
  </header>

  );
};
