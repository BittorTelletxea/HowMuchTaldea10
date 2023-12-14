import perfil from "../images/perfildark.png"
import flecha from "../images/flechadark.png";
import "../style/perfil.css"
import { Perfilnav } from "./Perfilnav";

export const Perfila = () => {
  return (
    <div>
    <div className="perfil bg-black">
      <header className="d-flex ">
        <button className="zoom" ><a href="Logged"><img src={flecha} alt="" width={'40px'} /></a></button>
      </header>
      <div className="image d-flex">
      <img src={perfil}/>
      <Perfilnav />

      <a href="#" className="display-6 underlined text-white">Perfila Editatu</a>
      </div>
    </div>
</div>

  );
};
