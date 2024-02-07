// En tu archivo Logged.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderL } from "./HeaderL";
import { FooterL } from "./FooterL";
import { Nagusia } from "./Nagusia";
import { Norgara } from "./Norgara";
import { Tarifak } from "./Tarifak";
import { HeaderAdmin } from "./HeaderAdmin";
import { Footer } from "./Footer";
import '../style/headerl.css'

import { NorgaraLog } from "./NorgaraLog";

export const Logged = ({ userEmail }) => {
  return (
    <div>
      {userEmail && userEmail.toLowerCase() === 'ramirosantos@gmail.com' ? (
        <HeaderAdmin />
      ) : (
        <HeaderL />
      )}
      <Nagusia />
      <Norgara />
      <Tarifak />
      <FooterL />
    </div>
  );
};
