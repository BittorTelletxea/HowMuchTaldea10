import React, { useState, useEffect } from 'react';
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useHistory } from 'react-router-dom';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Transition } from '@headlessui/react';
import axios from 'axios';


export const DendaProduktuakAdmin = ({ productos, searchTerm }) => {
  const history = useHistory();
  const [csrfToken, setCsrfToken] = useState('');
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: '',  
    price: '', 
  });

  useEffect(() => {
    const token = document.head.querySelector('meta[name="csrf-token"]').content;
    setCsrfToken(token);

    setData('name', '');
    setData('price', ''); 

    return () => clearInterval(reloadIntervalId);
  }, []);

  const filteredProductos = productos.filter(
    (producto) =>
      producto && producto.name && producto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const confirmDeleteProduct = async (productId) => {

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
        },
      });

      if (response.ok) {
        window.location.reload();

        console.log('Product deleted successfully');
      } else {
        console.error('Error deleting product:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const submit = async (e, productId) => {
    e.preventDefault();
    console.log(data.name)
    try {
      const response = await axios.patch(`/api/products/${productId}`, {
        name: data.name,
        price: data.price,
        
      });
  
      if (response.status === 200) {
        onUpdateSuccess();
      } else {
        console.error('Error updating product:', response.statusText);
      }
    } catch (error) {
      if (error.response) {
        console.error('Validation errors:', error.response.data);
      } else {
        console.error('Error updating product:', error.message);
      }
    }
  };
  const onUpdateSuccess = () => {
    console.log('Product updated successfully');
  };  const likeEman = (id) => {
    history.push(`/likes/${id}`);
  };

  return (
    <div>
      <div className='denboraldikoak'>
        {filteredProductos.map((producto, index) => (
          <div key={index} className='denbpro1 d-flex'>
            <div className='d-flex' style={{ justifyContent: 'space-between', width: '100%' }}>
              <img src={producto.image} width='35%' height='90%' />
              <div className='middle-content'>
                <div className="mt-6 space-y-6" style={{ width: '1000px', marginLeft: '23%' }}>
                  <InputLabel htmlFor="name" value="" />
                  <TextInput
                    id="name"
                    width="1000px"
                    className="mt-1 mb-3 form-control w-50"
                    value={data.name || producto.name}
                    onChange={(e) => {setData('name', e.target.value); console.log(e.target.value)}}
                    isFocused
                    autoComplete="name"
                  />
                  <InputError className="mt-2" message={errors.name} />

                  <InputLabel htmlFor="price" value="" />
                  <TextInput
                    id="price"
                    className="mt-1 mb-3 form-control w-50"
                    value={data.price || producto.price}
                    onChange={(e) => setData('price', e.target.value)}
                    isFocused
                    autoComplete="price"
                  />

                  <div>
                    <button className="editatu btn btn-dark btn-lg btn-block w-2" style={{ marginTop: '2%' }} type="submit" disabled={processing} onClick={(e) => submit(e, producto.id)}>
                      <b>GORDE</b>
                    </button>
                    <button className="editatu btn btn-outline-danger btn-lg btn-block w-2" style={{ marginLeft: '32%', marginTop: '2%' }} onClick={() => confirmDeleteProduct(producto.id)}>
                      <b>EZABATU</b>
                    </button>
                    <Transition
                      show={recentlySuccessful}
                      enter="transition ease-in-out"
                      enterFrom="opacity-0"
                      leave="transition ease-in-out"
                      leaveTo="opacity-0"
                    >
                      <p className="text-sm text-gray-600">Aldaketak gorde dira.</p>
                    </Transition>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </div>

      {/* Otros bloques de código o componentes que puedas tener aquí */}

    </div>
  );
};
