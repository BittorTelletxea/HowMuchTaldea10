import { useEffect, useState } from 'react';

import {  Link, useForm } from '@inertiajs/react';
import "../style/login.css";
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { router } from '@inertiajs/react';
import InputError from '../InputError';


export function Login({ status, canResetPassword }) {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode.toString());
        window.location.reload();
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });


    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);


    const submit = (e) => {
        e.preventDefault();
        const response = post(route('login'));
        if(response.ok){
        try {
            const userEmail = data.email;
            router.get('Logged', { userEmail });
        } catch (error) {
            console.error('Cannot login');
        } 
    }
        if (response.ok) {
            try {
                const userEmail = data.email;
                router.get('Logged', { userEmail });
            } catch (error) {
                console.error('Cannot login');
            } 
        }
    };


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
                <div className="container " style={{ marginLeft: '38%' }}>
                    <div className="row d-flex justify-content-center align-items-center h-75">
                        <div className="col col-xl-10" style={{ marginLeft: '-35%' }}>
                            <div className=" p-lg-5 text-black">
                                <form onSubmit={submit} className='card'>
                                    <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sartu zure kontua</h5>


                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="form2Example17">Email helbidea</label>
                                        <input
                                            type="email"
                                            id="form2Example17"
                                            className="input1"
                                            placeholder='Email'

                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                        />
                                        <InputError message={errors.email} className="mt-2" />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form2Example27">Pasahitza</label>
                                        <input
                                            type="password"
                                            id="form2Example27"
                                            className="input1"
                                            placeholder='Pasahitza'
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                        />
                                        
                                        <InputError message={errors.password} className="mt-2" />
                                    </div>
                                    <Link href="/Pasahitza"
                                        style={{ color: 'grey', fontSize: '14px' }}>Pasahitza ez duzu gogoratzen?</Link><br /><br />


                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-dark btn-lg btn-block" type="submit">SARTU</button>
                                    </div>


                                    <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Ez duzu konturik? <Link href="/Signup"
                                        style={{ color: '#393f81' }}>Erregistratu hemen</Link></p>
                                    <Link href="/" className="small text-muted">HowMuch</Link>
                                </form>
                            </div>
                            <div className='button-container-dark'>
                                <button className="toggle-mode-button-dark" onClick={toggleDarkMode}>
                                    <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'}`}></i>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}