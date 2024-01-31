import React, { useState, useEffect } from 'react';

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
import { BrowserRouter as Router } from 'react-router-dom';





function App() {
  const [userEmail, setUserEmail] = useState(null);

  // Assume you have a function to fetch user information
  const fetchUserData = async () => {
    // Fetch user information or perform any other check
    // Simulating a fetch, replace this with your actual logic
    const response = await fetch('/api/user');
    const userData = await response.json();

    // Set the user email to the state
    setUserEmail(userData.email);
  };

  useEffect(() => {
    fetchUserData();
  }, []); // Run the fetch when the component mounts

  return (
    <>
    <Router>
      <Header />
      <Nagusia />
      <NorgaraLog />
      <Tarifak />
      <FooterL />
      </Router>
    </>
  );
}

export default App;
