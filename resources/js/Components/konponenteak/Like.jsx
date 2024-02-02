import { useParams } from 'react-router-dom';

const Like = ({productos}) => {
    const { id } = useParams();

    return (
        <div>
            <h1>Detalles del producto que le gusta al usuario con id: {id}</h1>
            {productos.map((producto, index) => (
            <div key={index} className='denbpro' style={{ marginRight: '3%' }}>
                        <img src={producto.image} width='400px' height='70%' />
                        <div className='d-flex' style={{ justifyContent: 'space-between', padding: '10px' }}>
                            <div>
                                <p className="izena">{producto.name}</p>
                                <p><b>{producto.price}€</b></p>
                            </div>
                            <div>
                        </div>
                    </div>
                </div>
            ))};
        </div>
    );
}

export default Like;
