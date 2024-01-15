import { Header } from "../../Components/konponenteak/Header";
import { Nagusia } from "../../Components/konponenteak/Nagusia";
import { Norgara } from "../../Components/konponenteak/Norgara";
import { Produktuak } from "../../Components/konponenteak/Produktuak";
import { Footer } from "../../Components/konponenteak/Footer";
import { Zeregin } from "../../Components/konponenteak/Zeregin";
import { Tarifak } from "../../Components/konponenteak/Tarifak";
import '../../Components/style/bootstrap.min.css';
import '../../Components/style/estiloa.css';
import './App.css'
import { HeaderL } from "@/Components/konponenteak/HeaderL";
import { FooterL } from "@/Components/konponenteak/FooterL";
import { NorgaraLog } from "@/Components/konponenteak/NorgaraLog";


function App() {
  return (
    <>
      <Header />
      <Nagusia />
      <NorgaraLog />
      <Tarifak />
      <FooterL />
    </>
  );
}

export default App;
