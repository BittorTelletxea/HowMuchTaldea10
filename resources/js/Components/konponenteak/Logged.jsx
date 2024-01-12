import "../style/estiloa.css"
import logo from "../images/logo.png"
import logged from "../images/login.png"
import { NavButton } from "./NavButton";
import { Footer } from "./Footer";
import { NagusiaLog } from "./NagusiaLog";
import { Norgara } from "./Norgara";
import { Produktuak } from "./Produktuak";
import { Tarifak } from "./Tarifak";
import { Zeregin } from "./Zeregin";
export const Logged = () =>{
    return(
        <div>
        <header className="bg-black fixed-col pt-4 d-flex">
        <div className="howmuch h-100 ">
            <a className="navbar-brand text-white display-1 fw-bolder text-center" href="Perfil">
            <img src={logo} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav>
            <a href="Tasazioa" className="guri"><NavButton value="Tasazioa"/></a>
            <a href="Denda" className="guri"><NavButton value="Produktuak"/></a>
            <a href="Kontaktua" className="guri"><NavButton value="Kontaktua"/></a>
        </nav>
        <div className="logout navbar2 text-center">
            <div className="d-flex">
            <a href="Perfil"><img src={logged} width='30' height='30' className="perfil mt-2"></img></a>
            
            <button
        className="signup btn  rounded-pill"
        style={{
          borderWidth: '2px',
          width: '200px'
        }}
      >
        <a href="/">
        Log Out
        </a>
      </button></div>
            
      </div>
  </header>
  <NagusiaLog />
  <Norgara />
  <Produktuak />
  <Tarifak />
  <Zeregin />
  <Footer />
  </div>
    );
}