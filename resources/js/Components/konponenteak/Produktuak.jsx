import seatleon from "../images/seatleon.png"
import bmw from "../images/bmw.png"
import cani from "../images/cani.png"
import motocani from "../images/motocani.png"
import patinete from "../images/patinete.png"
import bizikleta from "../images/bizikleta.png"


export const Produktuak = () => {
  return (
    <div className='produktuak bg-black'>
    <h2 className="text-white">Produktuak</h2>
    <div className="container text-center rounded-left">
        <div className="row row-cols-1 row-cols-sm-2 ">
            <div className="produktuak-mota zoom">
               <img src={seatleon} width='100%' height='50%' alt="" />
                    <h4 className="text-white">SEAT LEON 1.9 TDI</h4>
                    <p className="text-white">Perfecto para cani autentico</p>
                    <button
                    className="btn btn-outline-primary rounded-pill mt-5"
                    style={{
                    borderWidth: '2px',
              }}
            > 1299€ </button>                 
            </div>
            <div className="produktuak-mota zoom">
            <img src={bmw} width='100%' height='50%' alt="" />
                    <h4 className="text-white">BMW E36</h4>
                    <p className="text-white">Ideal para ser un cani de verdad</p>
                    <button
                    className="btn btn-outline-primary rounded-pill mt-5"
                    style={{
                    borderWidth: '2px',
              }}
            > 2399€ </button>                 
            </div>
            <div className="produktuak-mota zoom">
            <img src={cani} width='100%' height='50%' alt="" />
                    <h4 className="text-white">CANI SUPREMO</h4>
                    <p className="text-white">El autentico rey de los canis</p>
                    <button
                    className="btn btn-outline-primary rounded-pill mt-5"
                    style={{
                    borderWidth: '2px',
              }}
            > 2399€ </button>                 
            </div>
            <div className="produktuak-mota zoom">
            <img src={motocani} width='100%' height='50%' alt="" />
                    <h4 className="text-white">Motillo de locos</h4>
                    <p className="text-white">Motillo en perfecto estado para ti o para tu cani de confianza</p>
                    <button
                    className="btn btn-outline-primary rounded-pill mt-5"
                    style={{
                    borderWidth: '2px',
              }}
            > 499€  </button>                 
            </div>
            <div className="produktuak-mota zoom">
            <img src={patinete} width='100%' height='50%' alt="" />
                    <h4 className="text-white">Patinete electrico</h4>
                    <p className="text-white">Patienete electrico en perfecto estado, ideal para realizar carreras con Eneko</p>
                    <button
                    className="btn btn-outline-primary rounded-pill mt-5"
                    style={{
                    borderWidth: '2px',
              }}
            > 599€  </button>                 
            </div>
            <div className="produktuak-mota zoom">
            <img src={bizikleta} width='100%' height='50%' alt="" />
                    <h4 className="text-white">Bicicleta</h4>
                    <p className="text-white">Bicicleta en perfecto estado, ideal para hacer carreras contra Iker</p>
                    <button
                    className="btn btn-outline-primary rounded-pill mt-5"
                    style={{
                    borderWidth: '2px',
              }}
            > 1299€  </button>                 
            </div>
        </div>
    </div>
    <button
        className="btn btn-outline-primary rounded-pill mt-5"
        style={{
            borderWidth: '2px',
        }}
    >
        Ikusi gehiago
    </button>
    </div>
  );
};
