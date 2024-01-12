import React, { useState } from "react";
import { HeaderL } from "../konponenteak/HeaderL";
import { FooterL } from "../konponenteak/FooterL";
import linea from "../images/zigzag.png";
import carta from '../images/carta.png';
import prezioa from '../images/prezioa.png';
import lupa from '../images/lupa.png';
import sol from "../images/sol-1.jpg";
import luna from "../images/luna-1.jpg";
import "../style/tasazioa.css";
import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import logo from "../images/logoL.png";
import "../style/login.css";

export function Tasazioa({ status, canResetPassword }) {
  const [tasatuSuccess, setTasatuSuccess] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    mota: '',
    marka: '',
    modeloa: '',
    kilometrajea: '',
    urtea: '',
    egoera: '',

    remember: false,
  });

  useEffect(() => {
    if (tasatuSuccess) {
      // Realizar alguna acción después del éxito, si es necesario
    }
  }, [tasatuSuccess]);

  const submit = async (e) => {
    e.preventDefault();
    const response = await post(route('tasazioa'));

    if (response.ok) {
      // La solicitud fue exitosa
      setTasatuSuccess(true);
    } else {
      // La solicitud falló, puedes manejar errores si es necesario
    }
  };

  return (
    <div className="bg-light">
      <HeaderL />
      <div className="tasatu bg-light">
        <div>
        </div>
        <div className="d-flex">
          <div className="tiempo d-flex">
            <div className="p d-flex">
            </div>
            <img src={lupa} alt="" className="lupa" />
            <img src={linea} width='20%' height='40%' alt="" className="linea"/>
            <div>
              <img src={carta} width='20%' alt="" className="carta" /><br />
              <img src={prezioa} width='20%' alt="" className="prezioa"/>
            </div>
          </div>
          <div>
            <h2>TASATU</h2>
            <form className="bg-transparent mb-5" onSubmit={submit}>
              <div className="mb-4">
                <label className="form-label" htmlFor="mota">Ibilgailu mota</label>
                <input
                  type="text"
                  id="mota"
                  className="input"
                  value={data.mota}
                  onChange={(e) => setData('mota', e.target.value)}
                />
                <InputError message={errors.mota} className="mt-2" />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="marka">Ibilgailuaren marka</label>
                <input
                  type="text"
                  id="marka"
                  className="input"
                  value={data.marka}
                  onChange={(e) => setData('marka', e.target.value)}
                />
                <InputError message={errors.marka} className="mt-2" />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="marka">Ibilgailuaren modeloa</label>
                <input
                  type="text"
                  id="modeloa"
                  className="input"
                  value={data.modeloa}
                  onChange={(e) => setData('modeloa', e.target.value)}
                />
                <InputError message={errors.modeloa} className="mt-2" />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="marka">Ibilgailuaren urtea</label>
                <input
                  type="date"
                  id="urtea"
                  className="input"
                  value={data.urtea}
                  onChange={(e) => setData('urtea', e.target.value)}
                />
                <InputError message={errors.urtea} className="mt-2" />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="marka">Ibilgailuaren kilometro kantitatea</label>
                <input
                  type="number"
                  id="kilometrajea"
                  className="input"
                  value={data.kantitatea}
                  onChange={(e) => setData('kilometrajea', e.target.value)}
                />
                <InputError message={errors.urtea} className="mt-2" />
              </div>
      
      
              <div className="mb-4">
                <label className="form-label" htmlFor="egoera">Ibilgailuaren egoera:</label>
                <select
                  id="egoera"
                  onChange={(e) => setData('egoera', e.target.value)}
                  name="egoera"
                  required
                >
                  <option value="" disabled selected>
                    Ibilgailuaren egoera
                  </option>
                  <option value="Oso ona">Oso ona</option>
                  <option value="Ona">Ona</option>
                  <option value="Txarra">Txarra</option>
                  <option value="Oso txarra">Oso txarra</option>
                </select>
              </div>

              <button className="editatu btn btn-dark btn-lg btn-block w-2 w-25" type="submit" >
            <b>TASATU</b>
          </button>

          {tasatuSuccess && (
            <div className="tasatu-success-message">
              Produktua tasatu egin da.
            </div>
          )}
            </form>
          </div>
        </div>
      </div>
      <FooterL />
      <div className="button-container">
        <button className="toggle-mode-button">
          <img src={sol} width={20} height={20} alt="" />
        </button>
        <button className="toggle-mode-button">
          <a href="/tasazioab"><img src={luna} width={20} height={20} alt="" /></a>
        </button>
      </div>
    </div>
  );
};
