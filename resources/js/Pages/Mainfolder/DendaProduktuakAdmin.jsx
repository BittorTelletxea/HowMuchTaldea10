import React, { useState } from 'react';
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export const DendaProduktuakAdmin = ({ productId, productos, searchTerm }) => {
  const history = useHistory();

  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    const token = document.head.querySelector('meta[name="csrf-token"]').content;
    setCsrfToken(token);
  }, []);

  const filteredProductos = productos.filter(
    (producto) =>
      producto && producto.name && producto.name.includes(searchTerm)
  );
  const confirmDeleteProduct = async (productid) => {
    try {
      const response = await fetch(`/api/products/${productid}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
        },
      });

      if (response.ok) {
        console.log('Product deleted successfully');
      } else {
        console.error('Error deleting product:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }
  return (
    <div>
      <div className='denboraldikoak'>
        {filteredProductos.slice(0, 4).map((producto, index) => (
          <div key={index} className='denbpro1 d-flex'>
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
                <i className=" bi bi-brush" style={{ fontSize: '2em', cursor: 'pointer' }}></i>              </div>
              </button>
              <hr />
            </div>
          </div>
        ))}
      </div>

      <div className='denboraldikoak'>
        {filteredProductos.slice(4, 8).map((producto, index) => (
          <div key={index} className='denbpro1 d-flex'>
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
    </div>
  );
};
