import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
                    <div className='d-flex' style={{ justifyContent: 'space-between' , padding: '10px' }}>
                    <div>
                    <p className="izena">{producto.name}</p>
                    <p><b>{producto.price}€</b></p>
                    </div>
                    <div>
                    <button type="button" className=" btn " value="Erosi" style={{ borderColor: 'transparent' }}><i className="bi bi-heart   "    style={{ padding: '0', fontSize: '20px', cursor: 'pointer' }}></i> </button>
                    </div>
                    </div>
                </div>
            ))}
            </div>
            <div className='denboraldikoak d-flex'>
  {filteredProductos.slice(4, 8).map((producto, index) => (
                <div key={index} className='denbpro'>
                    <img src={producto.image} width='400px' height='45%' />
                    <p className="izena">{producto.name}</p>
                    <p><b>{producto.price}€</b></p>
                    <a href="/Erosi"><button type="button" className="toggle-mode-button" value="Erosi">Erosi</button></a>
                </div>
            ))}
            </div>
            </div>
        
    );
};

export default DendaProduktuak;

