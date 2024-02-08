
import { FooterL } from './FooterL'
import '@/Components/style/kontaktua.css'
import "@/Components/style/tasazioa.css";
import { useForm } from '@inertiajs/inertia-react';
import 'popper.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/Components/style/kontakh.css'
import LogoutButton from './LogoutButton'
export const Kontaktua = () =>{

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    lastname: '',
    email: '',
    number: '',
    message: '',
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('mezua'));
  }

    return(
        <div className="bg-light">
     <header className="bg-light fixed-col pt-4 d-flex" style={{ justifyContent: 'space-between', marginLeft: '9%', marginRight: '9%' }}>
        <div className="howmuch h-100 ">
            <a className="navbar-brand display-1 fw-bolder text-center" href="/Logged" >
            <img src={"/images/logoL.png"} width="40" height="32" alt="" />
                How Much
            </a>
        </div>
        
        <nav >
            <a href="Tasazioa" className="buruz1 text-black  " style={{ padding: '3%' }}>TASAZIOA</a>
            <a href="Denda" className="buruz1 text-black " style={{ padding: '3%' }}>DENDA</a>
            <a href="Kontaktua" className="buruz text-black " style={{ padding: '3%' }}>KONTAKTUA</a>
        </nav>
        <div className=" navbar2 text-center">
            <div className="d-flex">
            <a href="Perfil" className="text-black" style={{ fontSize: '2.5em', marginTop: '6%' }}><i class="bi bi-person-bounding-box"></i></a>
            
            <LogoutButton />
</div>
            </div>
            </header>
        <div className='izenburu'>
            <h2><b>Kontaktua</b></h2>
        </div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
        <div className="container">
          <div className="contact__wrapper shadow-lg mt-n9">
            <div className="row no-gutters">
              <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                <h3 className="color--white mb-5"><b>Informazio orokorra</b></h3>
  
                <ul className="contact-info__list list-style--none position-relative z-index-101">
                  <li className="mb-4 pl-4">
                    <a href=''> howmuch@gmail.com</a>
                  </li>
                  <li className="mb-4 pl-4">
                    <a href=''>+34 644 34 78 29</a>
                  </li>
                  <li className="mb-4 pl-4">
                    <br /> 2333 Donostia, IES Zubiri Manteo
                    <br /> Euskal Herria
  
                    
                  </li>
                </ul>
  
                <figure className="figure position-absolute m-0 opacity-06 z-index-100" style={{ bottom: '0', right: '10px' }}>
                 
                </figure>
              </div>
  
              <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                <form onSubmit={submit} action="#" className="contact-form form-validate" noValidate="novalidate">
                  <div className="row">
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label className="required-field" htmlFor="firstName">Izena</label>
                        <input type="text" onChange={(e) => setData('name', e.target.value)} className="form-control" id="firstName" name="firstName" placeholder="Izena" />
                      </div>
                    </div>
  
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="lastName">Abizena</label>
                        <input type="text" onChange={(e) => setData('lastname', e.target.value)} className="form-control" id="lastName" name="lastName" placeholder="Abizena" />
                      </div>
                    </div>
  
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label className="required-field" htmlFor="email">Email</label>
                        <input type="text" onChange={(e) => setData('email', e.target.value)} className="form-control" id="email" name="email" placeholder="email@email.com" />
                      </div>
                    </div>
  
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone">Telefono zenbakia</label>
                        <input type="tel" onChange={(e) => setData('number', e.target.value)} className="form-control" id="phone" name="phone" placeholder="(+34)644-34-53-23" />
                      </div>
                    </div>
  
                    <div className="col-sm-12 mb-3">
                      <div className="form-group">
                        <label className="required-field" htmlFor="message">Mezua</label>
                        <textarea onChange={(e) => setData('message', e.target.value)} className="form-control" id="message" name="message" rows="4" placeholder="Kaixo, mezu honekin..."></textarea>
                      </div>
                    </div>
  
                    <div className="col-sm-12 mb-3">
                    <button className="editatu btn btn-dark btn-lg btn-block w-2 w-25" type="submit" >
            <b>BIDALI</b>
          </button>                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <FooterL />

</div>  
    )
}