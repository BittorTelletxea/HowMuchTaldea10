// En tu archivo App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Logged } from "../../Components/konponenteak/Logged";
import { LoggedDark } from "../../Components/konponenteak/LoggedDark";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedValue = localStorage.getItem('darkMode');
    return storedValue ? storedValue === 'true' : false;
  });

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    console.log('Dark mode changed:', darkMode);
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <Router>
      <Switch>
        {/* Ruta para el modo oscuro */}
        <Route path="/logged-dark">
          <LoggedDark />
        </Route>

        {/* Ruta para el modo normal */}
        <Route path="/logged">
          <Logged userEmail={userEmail} />
        </Route>

        {/* Otras rutas aquí */}
      </Switch>
    </Router>
  );
}

export default App;
