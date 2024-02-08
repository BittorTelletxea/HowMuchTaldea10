import { useState, useEffect } from 'react';
import {  useForm } from '@inertiajs/react';
import "@/Components/style/login.css";

export function Pasahitza({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    // Estado del contador
    const [counter, setCounter] = useState(600); // 10 minutos en segundos

    useEffect(() => {
        const interval = setInterval(() => {
            // Decrementar el contador cada segundo
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
    }, []);

    // Formatear el tiempo restante en minutos y segundos
    const minutes = Math.floor(counter / 60);
    const seconds = counter % 60;

    return (
        <div className='dena bg-light'>
            <section className="vh-100 bg-light">
                <header>
                    <div className="howmuch h-100 mt-3">
                        <a className="navbar-brand text-black display-1 fw-bolder text-center" href="/">
                            <img src={"/images/logoL.png"} width="50" height="40" alt="" />
                            How Much
                        </a>
                    </div>
                </header>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-75">
                        <div className="col col-xl-10">
                            <div className="card p-lg-5 text-black">
                                <form>
                                    <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Autentifikatu</h5>
                                    <div className="mb-4">
                                        <p className="text-black" htmlFor="form2Example17">Autentikazio mezua zure email helbidera ailegatu da, ea zu zaren jakiteko</p>
                                        <p className='contador'>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
                                    </div>
                                    <div className="pt-1 mb-4">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
