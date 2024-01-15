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


export function ProduktuaGehitu({ status, canResetPassword }) {
 const { data, setData, post, processing, errors, reset } = useForm({
   name: '',
   price: '',
   image: '',
   remember: false,
 });


 useEffect(() => {
   return () => {
     reset('password');
   };
 }, []);


 const submit = (e) => {
   e.preventDefault();
   post(route('produktuak'));
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
                 <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sartu zure produktua</h5>


                 <div className="mb-4">
                   <label className="form-label" htmlFor="form2Example17">Produktu izena</label>
                   <input
                     type="text"
                     id="name"
                     className="form-control"
                     value={data.name}
                     onChange={(e) => setData('name', e.target.value)}
                   />
                   <InputError message={errors.name} className="mt-2" />
                 </div>


                 <div className="form-outline mb-4">
                   <label className="form-label" htmlFor="form2Example27">Balio</label>
                   <input
                     type="number"
                     id="number"
                     className="form-control"
                     placeholder=''
                     value={data.price}
                     onChange={(e) => setData('price', e.target.value)}
                   />
                   <InputError message={errors.price} className="mt-2" />
                 </div>


                 <div className=" mb-4">
                    <label className="form-label" htmlFor="form2Example27">Produktuaren argazkia</label><br /><br />
                       <input
                           type="file"
                           id="image"
                           className=""
                           placeholder=''
                           onChange={(e) => setData('image', e.target.files[0])}
                       />
                       <InputError message={errors.image} className="mt-2" />
                </div>


                 <div className="pt-1 mb-4">
                   <button className="btn btn-dark btn-lg btn-block" type="submit">GEHITU</button>
                 </div>
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
