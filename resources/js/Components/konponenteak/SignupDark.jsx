import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import logo from "../images/logo.png";
import "../style/login.css";
import { HeaderL } from './HeaderL';
import { FooterL } from './FooterL';

export function SignupDark() {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

const toggleDarkMode = () => {
  const newMode = !darkMode;
  setDarkMode(newMode);
  localStorage.setItem('darkMode', newMode.toString());
  window.location.reload(); 
};
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <div className='dena bg-black'>
            <section className="vh-100 bg-black">
            <header>
                   <div className="howmuch h-100 mt-3">
                       <a className="navbar-brand text-black display-1 fw-bolder text-center text-white" href="/">
                           <img src={logo} width="50" height="40" alt="" />
                           How Much
                       </a>
                   </div>
               </header>                <div className="container " >
                    <div className="row d-flex justify-content-center align-items-center h-75">
                        <div className="col col-xl-10"  style={{ marginLeft: '-35%' }}>
                            <div className=" p-lg-5 text-black" style={{ paddingBottom: '1000px' }} >
                                <form onSubmit={submit} className='card' style={{ margin: 'auto', backgroundColor: '#121212' }}>
                                    <h5 className="fw-normal mb-3 pb-3 text-white" style={{ letterSpacing: '1px' }}>Sortu kontu bat</h5>

                                    <div className="mb-4">
                                        <label className="form-label text-white" htmlFor="form2Example17">Izena</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="input11"
                                            placeholder='Izena'

                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                        />
                                        <InputError message={errors.name} className="mt-2" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label text-white" htmlFor="form2Example17">Email helbidea</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="input11"
                                            placeholder='Email'

                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                        />
                                        <InputError message={errors.email} className="mt-2" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label text-white" htmlFor="form2Example27">Pasahitza</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="input11"
                                            placeholder='Pasahitza'
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                        />
                                        <InputError message={errors.password} className="mt-2" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label text-white" htmlFor="form2Example27">Pasahitza konfirmatu</label>
                                        <input
                                            type="password"
                                            id="password_confirmation"
                                            className="input11"
                                            placeholder='Pasahitza konfirmatu'
                                            value={data.password_confirmation}
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                        />
                                        <InputError message={errors.password_confirmation} className="mt-2" />
                                    </div>

                                    <div className="flex items-center justify-end mt-4">
                                        

                                        <div className="pt-1 mb-4">
                   <button className="btn btn-light btn-lg btn-block" type="submit">SORTU</button>
                 </div>

                                    </div>
                                    <p className="mb-5 pb-lg-2 " style={{ color: 'white' }}>Kontua baduzu? <Link href="Login"
                                       style={{ color: '#393f81' }}>Sartu hemen</Link></p>
                                   <Link href="/" className="small text-muted text-white">HowMuch</Link>
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
