import "../style/estiloa.css"
import "../style/tasazioa.css";

import logo from "../images/logo.png"
import logged from "../images/login.png"
import { NavButton } from "./NavButton";
import { Footer } from "./Footer";
import { Nagusia } from "./Nagusia";
import { Norgara } from "./Norgara";
import { Produktuak } from "./Produktuak";
import { Tarifak } from "./Tarifak";
import { Zeregin } from "./Zeregin";
import { HeaderL } from "./HeaderL";
import { FooterL } from "./FooterL";
import { NorgaraLog } from "./NorgaraLog";
export const Logged = () =>{
    return(
        <div>
        <HeaderL />
  <Nagusia />
  <Norgara />
  <Tarifak />
  <FooterL />
  </div>
    );
}