import React, { useState, useEffect } from 'react';
import { HeaderL } from './HeaderL';
import { FooterL } from './FooterL';
import  UpdateProfileInformation  from '../../Pages/Profile/Partials/UpdateProfileInformationForm';
import { UpdatePasswordForm } from '../../Pages/Profile/Partials/UpdatePasswordForm';
import DeleteUserForm from '../../Pages/Profile/Partials/DeleteUserForm';
import SoftDeleteForm from '../../Pages/Profile/Partials/SoftDeleteForm';
import '../style/perfil.css';

import { Link, useForm, usePage } from '@inertiajs/react';

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
      <HeaderL />
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="/Logged" className="text-black">Hasiera</a></li>
                <li className="breadcrumb-item"><a href="#" className="text-black">Perfila</a></li>
                <li className="breadcrumb-item active" aria-current="page">Usuario perfila</li>
                <li className="breadcrumb-item"><a href="/" className="text-black">Estatistikak</a></li>
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
            <div className="ezabatu card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul>
                    <p className="mt-4"><b>Kontua ezabatu</b></p><br />
                    <p>Kontuz! Kontua ezabatzen baduzu ez duzu berriro eskuratuko</p><br />
                    <DeleteUserForm className="btn-danger delete-user-form" />
                </ul>
              </div>
            </div>
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
        <div>
          <h2>Detalles del Usuario</h2>
           
          <SoftDeleteForm
              userId={user.id}
              onRestore={handleRestore}
              onForceDelete={handleForceDelete}
          />
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
