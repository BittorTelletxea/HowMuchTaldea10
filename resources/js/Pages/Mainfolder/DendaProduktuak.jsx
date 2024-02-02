import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useForm } from '@inertiajs/inertia-react';

const DendaProduktuak = ({ productos, searchTerm }) => {
    const { setData, post } = useForm({
        id: '',
    });

    const submit = (e, productId) => {
        e.preventDefault();
        setData('id', productId);
        post(route('likeman'));
    };

    return (
        <div>
            <form onSubmit={(e) => submit(e, productos.id)}>
                <div className='denboraldikoak d-flex'>
                    {productos.slice(0, 4).map((producto, index) => (
                        <div key={index} className='denbpro' style={{ marginRight: '3%' }}>
                            <img src={producto.image} width='400px' height='70%' />
                            <div className='d-flex' style={{ justifyContent: 'space-between', padding: '10px' }}>
                                <div>
                                    <p className="izena">{producto.name}</p>
                                    <p><b>{producto.price}€</b></p>
                                </div>
                                <button
                                    type="submit"
                                    className="btn"
                                    value="like"
                                    style={{ borderColor: 'transparent' }}
                                >
                                    <i className="megusta bi bi-heart" style={{ padding: '0', fontSize: '20px', cursor: 'pointer', transition: 'color 0.3s ease' }}></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </form>

            <form onSubmit={(e) => submit(e, productos.id)}>
                <div className='denboraldikoak d-flex'>
                    {productos.slice(4, 8).map((producto, index) => (
                        <div key={index} className='denbpro' style={{ marginRight: '3%' }}>
                            <img src={producto.image} width='400px' height='35%' />
                            <div className='d-flex' style={{ justifyContent: 'space-between', padding: '10px' }}>
                                <div>
                                    <p className="izena">{producto.name}</p>
                                    <p><b>{producto.price}€</b></p>
                                </div>
                                <button
                                    type="submit"
                                    className="btn"
                                    value="like"
                                    style={{ borderColor: 'transparent' }}
                                >
                                    <i className="megusta bi bi-heart" style={{ padding: '0', fontSize: '20px', cursor: 'pointer', transition: 'color 0.3s ease' }}></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default DendaProduktuak;


