import { Login } from "../Components/konponenteak/Login";
import { LoginDark } from "../Components/konponenteak/LoginDark";
import { useState, useEffect } from "react";

import './Mainfolder/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedValue = localStorage.getItem('darkMode');
    return storedValue ? storedValue === 'true' : false;
  });

  useEffect(() => {
    console.log('Dark mode changed:', darkMode);
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <>
      {darkMode ? <LoginDark /> : <Login />}
    </>
  );
}

export default App;
