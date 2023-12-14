import '../style/datuak.css';
import perfil from '../images/perfil.png';


export const Datuak = () =>{
    return(
    <div className="container">
        <div className="row">
            <div className=" col1">
                <div className='perfila d-flex'>
                    <p>Argazki publikoa:</p>
                    <img src={perfil} width={'20%'} alt="" />
                    <button
                    className="login btn btn-outline-primary rounded-pill "
                    style={{
                    width: '120px'
                    }}
        
                    > 
                    Aldatu
                    </button>
            </div>
            <div className='izena d-flex mt-4'>
                    <p>Gmail:</p>
                    <input className="gmail-input" type="text" value="mateito@gmail.com"/>                    
            </div>
            <div className='izena d-flex mt-4'>
                    <p>Izena:</p>
                    <input className="gmail-input" type="text" value="Mateu Laoz"/>                    
            </div>
            <div className='izena d-flex mt-4'>
                    <p>Pasahitza:</p>
                    <input className="gmail-input" type="password" value="mateu"/>                    
                </div>
                <div className='izena d-flex mt-4'>
                    <p>Kontua:</p>
                    <select name="mota" id="">
                        <option value="Arrunta">Arrunta</option>
                        <option value="Premium">Premium</option>
                        <option value="V.I.P">V.I.P</option>

                    </select>                    
            </div>
            </div>
                <div className='gorde'>
                <button
                        className="gorde btn btn-outline-primary mt-5"
                        style={{
                        borderWidth: '2px',
                  }}
                > Gorde </button>
                </div>
            </div>
        </div>
    );
}