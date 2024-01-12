import logo from "../images/logo.png"
import { NavButton } from "./NavButton";
import '../style/estiloa.css'
export const Header = () => {
  return (
    <header className="bg-black fixed-col pt-4 d-flex">
        <div className="howmuch h-100 ">
            <a className="navbar-brand text-white display-1 fw-bolder text-center" >
            <img src={logo} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav>
            <a href="Login" className="guri"><NavButton value="Tasazioa"/></a>
            <a href="Login" className="guri"><NavButton value="Produktuak"/></a>
            <a href="Login" className="guri"><NavButton value="Kontaktua"/></a>
        </nav>
        <div className="howmuch navbar2 text-center">
        <div className="d-flex">
        <button
        className="login btn rounded-pill "
        style={{
          width: '120px'
        }}
        
      > 
      <a href="Login">

      Log In
      </a>
      </button>
        <button 
        className="signup btn  rounded-pill  "
        style={{
          borderWidth: '2px',
          width: '120px',
          height: '40px'
        }}
      >
        <a href="Signup">
        Sign In
        </a>
      </button>
      </div>
        </div>
  </header>

  );
};
