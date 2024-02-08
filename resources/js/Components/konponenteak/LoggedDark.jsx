import "@/Components/style/estiloa.css"
import "@/Components/style/tasazioa.css";


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