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
import { HeaderAdmin } from "@/Components/konponenteak/HeaderAdmin";

import { FooterL } from "@/Components/konponenteak/FooterL";
import { NorgaraLog } from "@/Components/konponenteak/NorgaraLog";

import React, { useState } from 'react';



function App() {
  const [usuarioEmail, setUsuarioEmail] = useState("btellecheael22wg@ikzubirimanteo.com");

  return (
    <>
      {usuarioEmail === "btellecheael22wg@ikzubirimanteo.com" ? (
        <HeaderAdmin />
      ) : (
        <HeaderL />
      )}
      <Nagusia />
      <NorgaraLog />
      <Tarifak />
      <FooterL />
    </>
  );
}

export default App;
