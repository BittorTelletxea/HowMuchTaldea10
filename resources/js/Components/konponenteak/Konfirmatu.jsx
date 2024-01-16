import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import logo from "../images/logoL.png";
import "../style/login.css";
import { HeaderL } from './HeaderL';
import { FooterL } from './FooterL';


export function Konfirmatu({ status, canResetPassword }) {
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

  

 
   return (
       <div className='dena bg-light'>
           <section className="vh-100 bg-light">
               <header>
                   <div className="howmuch h-100 mt-3">
                       <a className="navbar-brand text-black display-1 fw-bolder text-center" href="/">
                           <img src={logo} width="50" height="40" alt="" />
                           How Much
                       </a>
                   </div>
               </header>
               <div className="container h-100">
                   <div className="row d-flex justify-content-center align-items-center h-75">
                       <div className="col col-xl-10">
                           <div className="card p-lg-5 text-black">
                           <form >
                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sartu kodea</h5>
                <div className="mb-4">
                    <label className="form-label" htmlFor="form2Example17">Email helbidea</label>
                    <input type="text" className="form-control" id="email" name="email" placeholder="email@email.com" />
                </div>
                <div className="pt-1 mb-4">
                </div>
            </form>
            <a href="/Konfirmatu"><button className="btn btn-dark btn-lg btn-block" type="submit">KONFIRMATU</button></a>

                           </div>
                       </div>
                   </div>
               </div>
           </section>
       </div>
   );
}
