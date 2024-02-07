import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useHistory } from 'react-router-dom';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Transition } from '@headlessui/react';
import SoftDeleteForm from '../../Pages/Profile/Partials/SoftDeleteForm';


const Bezeroak = ({ bezeroa }) => {
    console.log(bezeroa)
    const handleRestore = () => {
        console.log('Usuario restaurado');
        window.location.href = '/'
      };
    
      const handleForceDelete = () => {
      
        console.log('Usuario eliminado forzadamente');
      };
    return (
        <div>
            <div className='denboraldikoak d-flex'>
                {bezeroa.map((bezeroa, index) => (
                    <div key={index} className='denbpro' style={{ marginRight: '3%' }}>
                        <div className='d-flex' style={{ justifyContent: 'space-between', padding: '10px' }}>
                            <div>
                                <p className="izena">{bezeroa.name}</p>
                                
                                <SoftDeleteForm
                                    userId={bezeroa.id}
                                    onRestore={handleRestore}
                                    onForceDelete={handleForceDelete}
                                />
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default Bezeroak;
