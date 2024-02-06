
import { useState, useEffect } from "react";

import './App.css';
import { Signup } from "@/Components/konponenteak/Signup";
import { SignupDark } from "@/Components/konponenteak/SignupDark";
import { LoggedDark } from "@/Components/konponenteak/LoggedDark";
import { Logged } from "@/Components/konponenteak/Logged";

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
      {darkMode ? <SignupDark /> : <Signup />}
    </>
  );
}

export default App;
