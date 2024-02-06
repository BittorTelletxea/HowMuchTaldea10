import './App.css'
import { Logged } from "../../Components/konponenteak/Logged";
import { LoggedDark } from "../../Components/konponenteak/LoggedDark";
import { useState, useEffect } from "react";


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
      {darkMode ? <LoggedDark /> : <Logged />}
    </>
  )
}

export default App
