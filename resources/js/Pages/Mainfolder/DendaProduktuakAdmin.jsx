import React, { useState } from 'react';
import axios from 'axios';
import tres from '../../Components/images/trespoint.png';
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const DendaProduktuakAdmin = ({ productId, productos, searchTerm }) => {
  const filteredProductos = productos.filter(
    (producto) =>
      producto && producto.name && producto.name.includes(searchTerm)
  );
  
  const confirmDeleteProduct = (productId) => {
    // Configuración de la solicitud
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Puedes incluir otros encabezados si es necesario
      },
      // No es necesario incluir el cuerpo para una solicitud DELETE, pero puedes hacerlo si es necesario
      // body: JSON.stringify({}),
    };
  
    // Realizar la solicitud
    fetch(`/api/products/${productId}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          // Si la respuesta no es exitosa, lanzar un error
          throw new Error(`Error al eliminar el producto. Código de estado: ${response.status}`);
        }
        // Puedes devolver la respuesta si es necesario
        return response.json();
      })
      .then(data => {
        // Manejar la respuesta del servidor, por ejemplo, actualizar la lista de productos
        console.log('Producto eliminado exitosamente', data);
      })
      .catch(error => {
        // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
        console.error('Error al eliminar el producto', error.message);
      });
  };
  return (
    <div>
      <div className='denboraldikoak'>
        {filteredProductos.slice(0, 4).map((producto, index) => (
          <div key={index} className='denbproad d-flex'>
            <div className='d-flex' style={{ justifyContent: 'space-between', width: '100%' }}>
              <img src={producto.image} width='300px' height='75%' />
              <div className='middle-content'>
                <p className="izena"> {producto.name}</p>
                <p className='prezioa'><b> {producto.price}€</b></p>
              </div>
              <button className='btn btn-outline-dark h-50 p-2' onClick={() => confirmDeleteProduct(producto.id)}>                  <div className='d-flex'>
                <i className="bi bi-trash" style={{ fontSize: '2em', cursor: 'pointer' }}></i>              </div>
              </button>
              <button className='btn btn-outline-dark h-50 p-2'>
                <div className='d-flex'>
                <i className="bi bi-brush" style={{ fontSize: '2em', cursor: 'pointer' }}></i>              </div>
              </button>
              <hr />
            </div>
          </div>
        ))}
      </div>

      <div className='denboraldikoak'>
        {filteredProductos.slice(4, 8).map((producto, index) => (
          <div key={index} className='denbproad d-flex'>
            <div className='d-flex' style={{ justifyContent: 'space-between', width: '100%' }}>
              <img src={producto.image} width='200px' height='5%' />
              <div className='middle-content'>
                <p className="izena">Izena: {producto.name}</p>
                <p><b>Prezioa: {producto.price}€</b></p>
              </div>
              <div className="dropdown">
                <button className="" style={{ backgroundColor: 'transparent' }} type="button" id={`dropdownMenuButton${index}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={tres} width={20} alt="" />
                </button>
                <div className="dropdown-menu" aria-labelledby={`dropdownMenuButton${index}`}>
                  <a className="dropdown-item text-red" href="#">Editatu</a>
                  <a href="#"><hr /></a>
                  <a className="dropdown-item" style={{ color: 'red' }} onClick={() => confirmDeleteProduct(producto.id)}>Ezabatu</a>
                </div>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
