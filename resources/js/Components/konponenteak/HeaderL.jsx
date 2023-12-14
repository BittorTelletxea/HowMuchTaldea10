import logo from "../images/logo.png"
import login from "../images/login.png"
import { NavButton } from "./NavButton";

export const Header = () => {
  return (
    <header className="light bg-light fixed-col">
        <div className="howmuch h-100">
            <a className="navbar-brand text-black display-1 fw-bolder text-center" href="../perfil.html">
            <img src={logo} width="50" height="40" alt="" />
                How Much
            </a>
        </div>
        
        <nav>
            <a href="gureburuz.html" className="guri"><NavButton value="Guri Buruz"/></a>
            <a href="produktuak.html" className="guri"><NavButton value="Produktuak"/></a>
            <a href="kontaktua.html" className="guri"><NavButton value="Kontaktua"/></a>
        </nav>
        <div className="howmuch navbar2 text-center">
        <div className="d-flex">
        <button
        className="login btn btn-outline-primary rounded-pill mt-5 "
        style={{
          width: '120px'
        }}
        
      > 
      Log In
      </button>
        <button
        className="signup btn btn-outline-primary rounded-pill mt-5 "
        style={{
          borderWidth: '2px',
          width: '120px'
        }}
      >
        Sign In
      </button>
      </div>
        </div>
  </header>

  );
};
