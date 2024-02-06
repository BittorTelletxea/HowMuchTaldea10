import React, { useEffect, useState } from 'react';
import { Header } from "@/Components/konponenteak/Header";
import { Nagusia } from "../../Components/konponenteak/Nagusia";
import { NorgaraLog } from "@/Components/konponenteak/NorgaraLog";
import { Tarifak } from "../../Components/konponenteak/Tarifak";
import { FooterL } from "@/Components/konponenteak/FooterL";
import { HeaderDark } from "@/Components/konponenteak/HeaderDark";
import '../../Components/style/bootstrap.min.css';
import { NagusiaDark } from '@/Components/konponenteak/NagusiaDark';
import { Norgara } from '@/Components/konponenteak/Norgara';
import { NorgaraDark } from '@/Components/konponenteak/NorgaraDark';
import { TarifakDark } from '@/Components/konponenteak/TarifakDark';
import { FooterDark } from '@/Components/konponenteak/FooterDark';


function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    console.log('Dark mode changed:', darkMode);
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [localStorage.getItem('darkMode')]);

  return (
    <>
      {darkMode ? <HeaderDark /> : <Header />}
      {darkMode ? <NagusiaDark /> : <Nagusia />}
      {darkMode ? <NorgaraDark />: <Norgara /> }
      {darkMode ? <TarifakDark />: <Tarifak /> }
      {darkMode ? <FooterDark />: <FooterL /> }


    </>
  );
}

export default App;
