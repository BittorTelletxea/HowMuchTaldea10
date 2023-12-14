import '../style/login.css';
import logo from "../images/logo.png"

export const Signup = () =>{
    return(
        <section className="vh-80 gradient-custom">
        <header>
        <div className="howmuch h-100 mt-3">
          <a className="navbar-brand text-white display-1 fw-bolder text-center" href="/">
            <img src={logo} width="50" height="40" alt="" />
            How Much
          </a>
        </div>
      </header>
        <div className="container py-4 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card transparent text-white" style={{ borderRadius: '1rem' }}>                        <div className="card-body p-5 text-center">
      
                  <div className="mb-md-5 mt-md-4 pb-5">
      
                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                    <p className="text-white-50 mb-5">Sortu kontu bat</p>
      
                    <div className="form-outline form-white mb-4">
                    <label className="form-label" >Email</label>
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="Email" />
                    </div>
                    <div className="form-outline form-white mb-4">
                    <label className="form-label" >Usuario izena</label>
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="Usuario izena" />
                    </div>
      
                    <div className="form-outline form-white mb-4">
                        <label className="form-label" >Pasahitza</label>
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder="Pasahitza" />
                    </div>
                    <div className="form-outline form-white mb-4">
                        <label className="form-label" >Pasahitza errepikatu</label>
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder="Pasahitza" />
                    </div>
            
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Sortu</button>
      
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                    </div>
                    <div>
                        <p className="mb-0">Kontu bat baduzu? <a href="Login" className="text-white-50 fw-bold">Log In</a>
                        </p>
                      </div>
                  </div>
      
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}