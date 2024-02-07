// En tu archivo Logged.js
import { FooterL } from '@/Components/konponenteak/FooterL';
import { HeaderAdmin } from '@/Components/konponenteak/HeaderAdmin';
import { HeaderL } from '@/Components/konponenteak/HeaderL';
import { Nagusia } from '@/Components/konponenteak/Nagusia';
import { Norgara } from '@/Components/konponenteak/Norgara';
import { Tarifak } from '@/Components/konponenteak/Tarifak';
import React from 'react';
import { useLocation } from 'react-router-dom';


const Logged = ({ userEmail }) => {
  console.log(userEmail)
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
export default Logged;
