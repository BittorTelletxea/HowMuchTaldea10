import './App.css'
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Like = ({productos}) => {
    
    console.log(productos);
    return (
        <div>
            <div className='denboraldikoak d-flex'>
                {productos.map((producto, index) => (
                    <div key={index} className='denbpro' style={{ marginRight: '3%' }}>
                        <img src={producto.image} width='400px' height='70%' />
                        <div className='d-flex' style={{ justifyContent: 'space-between', padding: '10px' }}>
                            <div>
                                <p className="izena">{producto.name}</p>
                                <p><b>{producto.price}€</b></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Like;