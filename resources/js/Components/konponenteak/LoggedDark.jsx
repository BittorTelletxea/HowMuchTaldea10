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
import { HeaderLDark } from "./HeaderLDark";
import { NagusiaDark } from "./NagusiaDark";
import { NorgaraDark } from "./NorgaraDark";
import { TarifakDark } from "./TarifakDark";
import { FooterDark } from "./FooterDark";
export const LoggedDark = () =>{
    return(
        <div>
        <HeaderLDark />
  <NagusiaDark />
  <NorgaraDark />
  <TarifakDark />
  <FooterDark />
  </div>
    );
}