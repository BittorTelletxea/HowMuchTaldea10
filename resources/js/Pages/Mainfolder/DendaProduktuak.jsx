import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useHistory } from 'react-router-dom';

const DendaProduktuak = ({ productos, searchTerm }) => {
    const filteredProductos = productos.filter(
        (producto) =>
            producto &&
            producto.name &&
            producto.name.includes(searchTerm)
    );

    const likeEman = (id) => {

        history.push(`/likes/${id}`);
        
    }

 

    return (
        <div>
            <div className='denboraldikoak d-flex'>
                {filteredProductos.slice(0, 4).map((producto, index) => (
                    <div key={index} className='denbpro' style={{ marginRight: '3%' }}>
                        <img src={producto.image} width='400px' height='70%' />
                        <div className='d-flex' style={{ justifyContent: 'space-between', padding: '10px' }}>
                            <div>
                                <p className="izena">{producto.name}</p>
                                <p><b>{producto.price}€</b></p>
                            </div>
                            <div>
                                <button type="button" className="btn" value="like" onClick={likeEman(producto.id)} style={{ borderColor: 'transparent' }} >
                                    <i className="megusta bi bi-heart" style={{ padding: '0', fontSize: '20px', cursor: 'pointer', transition: 'color 0.3s ease' }}></i>
                                </button></div>
                    </div>
                </div>
            ))}
            </div>
            <div className='denboraldikoak d-flex'>
            {filteredProductos.slice(4, 8).map((producto, index) => (
                <div key={index} className='denbpro' style={{ marginRight: '3%' }}>
                    <img src={producto.image} width='400px' height='35%' />
                    <div className='d-flex' style={{ justifyContent: 'space-between' , padding: '10px' }}>
                    <div>
                    <p className="izena">{producto.name}</p>
                    <p><b>{producto.price}€</b></p>
                    </div>
                    <div>
                    <button type="button" className=" btn " value="Erosi" style={{ borderColor: 'transparent' }}>                                    <i className="megusta bi bi-heart" style={{ padding: '0', fontSize: '20px', cursor: 'pointer', transition: 'color 0.3s ease' }}></i> </button>
                    </div>
                    </div>
                </div>
            ))}
            </div>
            </div>
        
    );
};

export default DendaProduktuak;

