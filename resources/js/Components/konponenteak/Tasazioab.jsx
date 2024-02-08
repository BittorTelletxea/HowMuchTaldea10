import React from "react";
import { Header } from "../konponenteak/Header";
import { Footer } from "../konponenteak/Footer";
import sol from "../images/sol-1.jpg";
import luna from "../images/luna-1.jpg"
import "@/Components/style/tasazioab.css";

export const Tasazioab = () => {
  return (
    <div className="bg-black">
      <Header />
      <div className="tasatu bg-black">
        <div>
          <h2 className="text-white"><b>TASATU</b></h2>
        </div>

        <form className="bg-transparent">
          <label htmlFor="tipoVehiculo text-white">Tipo de Vehículo:</label>
          <input type="text" id="tipoVehiculo" name="tipoVehiculo" required />

          <label htmlFor="marcaVehiculo text-white">Marca del Vehículo:</label>
          <input type="text" id="marcaVehiculo" name="marcaVehiculo" required />
         
          <label htmlFor="marcaVehiculo text-white">Modelo del Vehículo:</label>
          <input type="text" id="marcaVehiculo" name="marcaVehiculo" required />

          <label htmlFor="kilometrajeVehiculo text-white">
            Kilometraje del Vehículo :
          </label>
          <input
            type="number"
            id="kilometrajeVehiculo"
            name="kilometrajeVehiculo"
            max="900000"
            required
          />

          <label htmlFor="anioVehiculo text-white">Año del Vehículo:</label>
          <input
            type="number"
            id="anioVehiculo"
            name="anioVehiculo"
            max="50"
            required
          />

          <label htmlFor="estadoVehiculo text-white">Estado del Vehículo:</label>
          <select id="estadoVehiculo" name="estadoVehiculo" required>
            <option value="" disabled selected>
              Selecciona el estado
            </option>
            <option value="perfecto">Perfecto</option>
            <option value="buenEstado">Buen Estado</option>
            <option value="bueno">Bueno</option>
            <option value="malo">Malo</option>
            <option value="deplorable">Deplorable</option>
          </select>

          <button type="submit" className="submit">Enviar</button>
        </form>
      </div>
      <Footer />
      <div className="button-container">
        <button className="toggle-mode-button">
          <img src={sol} width={20} height={20} alt="" />
        </button>
        <button className="toggle-mode-button">
          <a href="/tasazioab"><img src={luna} width={20} height={20} alt=""/></a>
        </button>
      </div>
    </div>
  );
};

