import React from 'react';

const DendaProduktuak = ({ productos }) => {
    return (
        <div className='denboraldikoak d-flex'>
            {productos.slice(0, 6).map((producto, index) => (
                <div key={index} className='denbpro'>
                    <img src={producto.image} width='100%' height='80%' />
                    <p>{producto.name}</p>
                    <p>{producto.price}€</p>
                </div>
            ))}
        </div>
    );
};

export default DendaProduktuak;

