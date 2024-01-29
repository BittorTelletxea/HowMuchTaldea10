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
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/products/${productId}`);
      console.log('Producto eliminado exitosamente');
      // Puedes actualizar la interfaz de usuario según tus necesidades
    } catch (error) {
      console.error('Error al eliminar el producto', error);
    }
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
              <button className='btn btn-outline-danger h-50 p-2' onClick={handleDelete}>
                <div className='d-flex'>
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
