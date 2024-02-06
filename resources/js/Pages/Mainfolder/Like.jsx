import './App.css'
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HeaderL } from '@/Components/konponenteak/HeaderL';
import { FooterL } from '@/Components/konponenteak/FooterL';

const Like = ({productos}) => {
    
    console.log(productos);
    return (
        <section className="bg-light">
      <HeaderL />
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="/Logged" className="text-black">Hasiera</a></li>
                <li className="breadcrumb-item " ><a href="/Perfil" className="text-black">Usuario Perfila</a></li>
                <li className="breadcrumb-item active " aria-current="like">Gustuko produktuak</li>
              </ol>
            </nav>
          </div>
        </div>

        <div>
            <div className='denboraldikoak d-flex'>
                {productos.slice(0,3).map((producto, index) => (
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
            <div className='denboraldikoak d-flex'>
                {productos.slice(3,6).map((producto, index) => (
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
            <div className='denboraldikoak d-flex'>
                {productos.slice(6,9).map((producto, index) => (
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
            </div>
      <FooterL />
    </section>
        
    );
}

export default Like;