import React, { useState } from "react";
import { FooterL } from "../konponenteak/FooterL";
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/tasazioa.css";
import "../style/login.css"
import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import LogoutButton from "./LogoutButton";
import { HeaderL } from "../konponenteak/HeaderL";




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
      reset(); // Limpiar los datos del formulario
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
     
       <header className="bg-light fixed-col pt-4 d-flex" style={{ justifyContent: 'space-between', marginLeft: '9%', marginRight: '9%' }}>
        <div className="howmuch h-100 ">
            <a className="navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={"/images/logoL.png"} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav >
            <a href="Tasazioa" className="buruz text-black  " style={{ padding: '3%' }}>TASAZIOA</a>
            <a href="Denda" className="buruz1 text-black " style={{ padding: '3%' }}>DENDA</a>
            <a href="Kontaktua" className="buruz1 text-black " style={{ padding: '3%' }}>KONTAKTUA</a>
        </nav>
        <div className=" navbar2 text-center">
            <div className="d-flex">
            <a href="Perfil" className="text-black" style={{ fontSize: '2.5em', marginTop: '6%' }}><i class="bi bi-person-bounding-box"></i></a>
            
            <LogoutButton />
</div>
            
      </div>
  </header>

      <div className="tasatu bg-light">
        <div>
        </div>
        <div className="d-flex">
          <div className="tiempo d-flex">
            <div className="p d-flex">
            </div>
            <img src={'/images/lupa.png'} alt="" className="lupa" />
            <img src={"/images/zigzag.png"} width='20%' height='40%' alt="" className="linea"/>
            <div>
              <img src={'/images/carta.png'} width='20%' alt="" className="carta" /><br />
              <img src={'/images/prezioa.png'} width='20%' alt="" className="prezioa"/>
            </div>
          </div>
          <div>
            <h2>TASATU</h2>
            <form className="bg-transparent mb-5" onSubmit={submit}>
              <div className="mb-4">
                <label className="form-label" htmlFor="mota">Produktu mota</label>
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
                <label className="form-label" htmlFor="marka">Produktu marka</label>
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
                <label className="form-label" htmlFor="marka">Produktu modeloa</label>
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
                <label className="form-label" htmlFor="marka">Produktu urtea</label>
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
                <label className="form-label" htmlFor="marka">Ibilgailua bada kilometrajea, ezean 0 jarri</label>
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
                <label className="form-label" htmlFor="egoera">Produktuaren egoera:</label>
                <select
                  id="egoera"
                  onChange={(e) => setData('egoera', e.target.value)}
                  name="egoera"
                  required
                >
                  <option value="" disabled selected>
                    Produktuaren egoera
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
      
    </div>
  );
};
