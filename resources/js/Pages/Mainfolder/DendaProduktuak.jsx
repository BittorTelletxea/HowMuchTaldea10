const DendaProduktuak = ({ productos, searchTerm }) => {
    const filteredProductos = productos.filter(
        (producto) =>
            producto &&
            producto.name &&
            producto.name.includes(searchTerm)
    );

    return (
        <div>
        <div className='denboraldikoak d-flex'>
            {filteredProductos.slice(0, 4).map((producto, index) => (
                <div key={index} className='denbpro'>
                    <img src={producto.image} width='400px' height='70%' />
                    <p className="izena">{producto.name}</p>
                    <p><b>{producto.price}€</b></p>
                </div>
            ))}
            </div>
            <div className='denboraldikoak d-flex'>
  {filteredProductos.slice(4, 8).map((producto, index) => (
                <div key={index} className='denbpro'>
                    <img src={producto.image} width='400px' height='45%' />
                    <p className="izena">{producto.name}</p>
                    <p><b>{producto.price}€</b></p>
                </div>
            ))}
            </div>
            <div className='denboraldikoak d-flex'>
{filteredProductos.slice(8, 16).map((producto, index) => (
                <div key={index} className='denbpro'>
                    <img src={producto.image} width='400px' height='30%' />
                    <p className="izena">{producto.name}</p>
                    <p><b>{producto.price}€</b></p>
                </div>
            ))}</div>
            </div>
        
    );
};

export default DendaProduktuak;

