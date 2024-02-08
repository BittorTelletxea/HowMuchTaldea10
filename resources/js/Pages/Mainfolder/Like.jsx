import './App.css'
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HeaderL } from '@/Components/konponenteak/HeaderL';
import { FooterL } from '@/Components/konponenteak/FooterL';
import LogoutButton from '@/Components/konponenteak/LogoutButton';

const Like = ({productos}) => {
    
    console.log(productos);
    return (
        <section className="bg-light">
<header className="bg-light fixed-col pt-4 d-flex" style={{ justifyContent: 'space-between', marginLeft: '9%', marginRight: '9%' }}>
        <div className="howmuch h-100 ">
            <a className="navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={"/images/logoL.png"} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav >
            <a href="Produktuak" className="buruz1 text-black  " style={{ padding: '3%' }}>PRODUKTUAK</a>
            <a href="KontaktuaAdmin" className="buruz1 text-black " style={{ padding: '3%' }}>MEZUAK</a>
            <a href="Bezeroa" className="buruz1 text-black " style={{ padding: '3%' }}>BEZEROAK</a>
        </nav>
        <div className=" navbar2 text-center">
            <div className="d-flex">
            <a href="Perfil" className="text-black" style={{ fontSize: '2.5em', marginTop: '6%' }}><i class="bi bi-person-bounding-box"></i></a>
            
            <LogoutButton />
</div>
            </div>
            </header>       <div className="container py-5">
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