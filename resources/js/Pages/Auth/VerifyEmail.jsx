import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import LogoutButton from '@/Components/konponenteak/LogoutButton';
import '../../Components/style/headerl.css';
import logo from "../../Components/images/logoL.png";


export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <div className='bg-light flex items-center justify-center h-screen'>
            <header>
                   <div className="howmuch h-100 mt-3 text-center">
                       <a className="navbar-brand text-black display-1 fw-bolder text-center" href="/">
                           <img src={logo} width="50" height="40" alt="" />
                           How Much
                       </a>
                   </div>
               </header>
            <Head title="Email Verification" />

            <form onSubmit={submit} className='verify card'>
                <div className="mb-4 text-sm text-gray-600">
                    <h4 className='text-center mt-1'><b>Autentifikazioa</b></h4>
                    <p className='text-center'>Eskerrik asko kontua sortzeagatik, ea zu zaren jakiteko email bat bidali dizugu</p>
                </div>
                <div className="mt-4 flex items-center ">
                    <button disabled={processing} className='berbidali btn btn-dark'>
                        Berbidali email-a
                    </button>
                </div>
            </form>
        </div>
    );
}
