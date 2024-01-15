import React from 'react';

// Componente DendaProduktuak que recibe los datos como props
const DendaProduktuak = ({ productos }) => {
    console.log(productos);

    if (!Array.isArray(productos)) {
        console.error('productos no es un array');
        return null; // o maneja el error de alguna manera
    }
    return (
        <div className='denboraldikoak d-flex'>
            {/* Recorre los productos y renderiza cada uno */}
            {productos.map((producto, index) => (
                <div key={index} className='denbpro'>
                    <img src={producto.image} width='100%' height='80%' alt={producto.name} />
                    <p>{producto.name}</p>
                    <p>{producto.price}€</p>
                </div>
            ))}
        </div>
    );
};

export default DendaProduktuak;

