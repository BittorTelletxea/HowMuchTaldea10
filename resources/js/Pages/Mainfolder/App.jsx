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


function App() {
  return (
    <>
      <Header />
      <Nagusia />
      <Norgara />
      <Produktuak />
      <Zeregin />
      <Tarifak />
      <Footer />
    </>
  );
}

export default App;
