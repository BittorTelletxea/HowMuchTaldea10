import React, { useState, useEffect } from 'react';
import { HeaderL } from './HeaderL';
import { FooterL } from './FooterL';
import  UpdateProfileInformation  from '@/Pages/Profile/Partials/UpdateProfileInformationForm';
import { UpdatePasswordForm } from '@/Pages/Profile/Partials/UpdatePasswordForm';
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm';
import SoftDeleteForm from '@/Pages/Profile/Partials/SoftDeleteForm';
import '@/Components/style../style/perfil.css';

import { Link, useForm, usePage } from '@inertiajs/react';
import LogoutButton from './LogoutButton';

// Supongamos que getAuthenticatedUser es una función que devuelve la información del usuario autenticado
const getAuthenticatedUser = () => {
  // Implementa la lógica para obtener el usuario autenticado
  // Puedes ajustar esto según tu lógica de autenticación
  return {
    name: 'UsuarioAutenticado',
    email: 'autenticado@example.com',
  };
};

export const Perfila = () => {
  const { props } = usePage();
  const user = usePage().props.auth.user;
   console.log(user.id);
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email,
    password: '', // Add password field
    confirmPassword: '', // Add confirmPassword field
  });
  const handleInputChange = (field, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleUpdateSuccess = () => {
    console.log('Profile updated successfully!');
  };

  const handleRestore = () => {
    console.log('Usuario restaurado');
    window.location.href = '/'
  };

  const handleForceDelete = () => {
  
    console.log('Usuario eliminado forzadamente');
  };


  return (
    <section className="bg-light">
 <header className="bg-light fixed-col pt-4 d-flex" style={{ justifyContent: 'space-between', marginLeft: '9%', marginRight: '9%' }}>
        <div className="howmuch h-100 ">
            <a className="navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={"/images/logoL.png"} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav >
            <a href="Tasazioa" className="buruz1 text-black  " style={{ padding: '3%' }}>TASAZIOA</a>
            <a href="Denda" className="buruz1 text-black " style={{ padding: '3%' }}>DENDA</a>
            <a href="Kontaktua" className="buruz1 text-black " style={{ padding: '3%' }}>KONTAKTUA</a>
        </nav>
        <div className=" navbar2 text-center">
            <div className="d-flex">
            <a href="Perfil" className="text-black" style={{ fontSize: '2.5em', marginTop: '6%' }}><i class="bi bi-person-bounding-box"></i></a>
            
            <LogoutButton />
</div>
            </div>
            </header>      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="/Logged" className="text-black">Hasiera</a></li>
                <li className="breadcrumb-item active" aria-current="page">Usuario Perfila</li>
                <li className="breadcrumb-item"><a href="/Like" className="text-black">Gustuko produktuak</a></li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                  className="rounded-circle img-fluid" style={{ width: '150px' }} />
                <div className="card-body text-center">
      <h5 className="my-3">{data.name}</h5>
      <p className="text-muted mb-1">{data.email}</p>
    </div>
                <div className="d-flex justify-content-center mb-2">
                </div>
              </div>
            </div>
            <div className="ezabatu card mb-4 mb-lg-0 " style={{ height: '34%' }}>
              <div className="card-body p-0">
                <ul>
                    <p className="mt-4"><b>Kontua ezabatu</b></p><br />
                    <p>Kontuz! Kontua ezabatzen baduzu ez duzu berriro eskuratuko</p><br />
                    <DeleteUserForm className="btn-danger delete-user-form" />
                                 </ul>
              </div>
            </div>
            {data.email === 'ramirosantos@gmail.com' && (

            <div className='card' style={{ marginTop: '4%', height: '21%', paddingTop: '3%' }}>
              <b>ADMIN PANEL</b>
              <p>Sartu administratzaile moduan</p>
                    <Link href="produktuak" className="btn btn-success mt-2" style={{ width: '50%', margin: 'auto', marginTop: '3%' }}>
                      ADMIN PANEL
                    </Link>
            </div>
                              )} 

          </div>


          <div className="erabiltzailea col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
          <UpdateProfileInformation
              
              onUpdateSuccess={handleUpdateSuccess}
            />
            </div>
            </div>
              <div className="col-lg-8">
        <div className="pasahitza card mb-4">
          <div className="card-body">
          <div className="card-body">
            <UpdatePasswordForm className="update-password-form" />
        </div>
         
        
          
                
</div>
</div>                
              
            </div>
          </div>
        </div>
      </div>
      <FooterL />
    </section>

  );
};
