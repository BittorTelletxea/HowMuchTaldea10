import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import logo from "../images/logoL.png";
import "../style/login.css";



export function Login({ status, canResetPassword }) {
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


   const submit = async (e) => {
    e.preventDefault();

    const response = await post(route('login'));

    if (response.ok) {
        // Navegar a la página de verificación de correo electrónico
        const { route } = usePage();
        route('email-verification');
    }
};


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
                               <form onSubmit={submit}>
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
                       </div>
                   </div>
               </div>
           </section>
       </div>
   );
}
