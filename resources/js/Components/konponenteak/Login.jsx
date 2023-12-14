import "../style/login.css";
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import logo from "../images/logo.png";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    pasahitza: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.email === 'mateito@gmail.com' && credentials.pasahitza === 'mateu') {
      Inertia.visit('/Logged');
    } else {
      alert('Usuario edo pasahitza ez dira zuzenak');
    }
  };

  return (
    <section className="vh-87 gradient-custom">
      <header>
        <div className="howmuch h-100 mt-3">
          <a className="navbar-brand text-white display-1 fw-bolder text-center" href="/">
            <img src={logo} width="50" height="40" alt="" />
            How Much
          </a>
        </div>
      </header>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card transparent text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Sartu zure kontua</p>

                  <form onSubmit={handleSubmit} className="form">
                    <label>Email:</label><br />
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                    /><br /><br />

                    <label>Pasahitza:</label><br />
                    <input
                      placeholder="Pasahitza"
                      type="password"
                      name="pasahitza"
                      value={credentials.pasahitza}
                      onChange={handleChange}
                      required
                    /><br /><br /><br />

                    <button
                      className="login btn"
                      type="submit"
                      style={{
                        width: '120px'
                      }}
                    >
                      Login
                    </button>
                  </form>
                </div>

                <div>
                  <p className="mb-0">Ez duzu konturik? <a href="Signup" className="text-white-50 fw-bold">Sign Up</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
