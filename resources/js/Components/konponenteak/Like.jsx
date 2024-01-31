import { useParams } from 'react-router-dom';

const Like = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Detalles del producto que le gusta al usuario con id: {id}</h1>
            {}
        </div>
    );
}

export default Like;
