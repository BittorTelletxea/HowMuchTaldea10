import React, { useState } from 'react';
import tres from '../../Components/images/trespoint.png';
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const DendaProduktuakAdmin = ({ productos, searchTerm }) => {
  const filteredProductos = productos.filter(
    (producto) =>
      producto && producto.name && producto.name.includes(searchTerm)
  );

  return (
    <div>
      <div className='denboraldikoak'>
        {filteredProductos.slice(0, 4).map((producto, index) => (
          <div key={index} className='denbproad d-flex'>
            <div className='d-flex' style={{ justifyContent: 'space-between', width: '100%' }}>
              <img src={producto.image} width='300px' height='75%' />
              <div className='middle-content'>
                <p className="izena">Izena: {producto.name}</p>
                <p className='prezioa'><b>Prezioa: {producto.price}€</b></p>
              </div>
              <button className='btn btn-outline-danger h-25 p-2'>
                <div className='d-flex'>
                <i className="bi bi-trash" style={{ fontSize: '2em', cursor: 'pointer' }}></i>              </div>
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
