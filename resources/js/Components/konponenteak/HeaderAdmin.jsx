
import '../style/headerl.css'
import LogoutButton from "./LogoutButton";
export  const HeaderAdmin = () => {
  return (
    <header className="bg-light fixed-col pt-4 d-flex">
        <div className="howmuch h-100 ">
            <a className="navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={"/images/logoL.png"} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav>
            <a href="produktuak" className="buruz1 text-black  ">PRODUKTUAK</a>
            <a href="KontaktuaAdmin" className="buruz1 text-black ">MEZUAK</a>
            <a href="errekuperazioa" className="buruz1 text-black ">BEZEROAK</a>


        </nav>
        <div className=" navbar2 text-center">
            <div className="d-flex">
            <a href="Perfil"className="text-black" style={{ fontSize: '2.5em', marginTop: '6%' }}><i class="bi bi-person-bounding-box"></i></a>
            
            <LogoutButton />
</div>
            
      </div>
  </header>

  );
};
