import React from "react";
import "../style/footerl.css"
import logo from "../images/logo.png";
import instagram from "../images/instagraml.png";
import tiktok from "../images/tiktokl.png";
import youtube from "../images/youtubel.png";
import facebook from "../images/facebookl.png";

export const FooterL = () => {
  return (
      <div className="bg-light footer d-flex flex-column mx-auto py-5" style={{ width: "90%" }}>
        <div className="footer d-flex flex-wrap justify-content-between">
          <div className="align-self-center">
            
            <div className="redes mt-5">
              <img src={instagram} style={{ width: "15%", marginRight: "8%" }} alt="" />
              <img src={facebook} style={{ width: "10%", marginRight: "8%" }} alt="" />
              <img src={tiktok} style={{ width: "10%", marginRight: "8%" }} alt="" />
              <img src={youtube} style={{ width: "15%", marginRight: "8%" }} alt="" />
            </div>
          </div>
          <div className="kontak">
            <p className="h5 mb-4 text-black" style={{ fontWeight: 600 }}>Info gehiago</p>
            <ul className="p-0" style={{ listStyle: 'none', cursor: 'pointer' }}>
              <li className="my-2">
                <a className="" href="/">howmuch@gmail.com</a>
              </li>
              <li className="my-2">
                <a className="" href="/">+34 644 54 76 34</a>
              </li>
              <li className="my-2">
                <a className="" href="/">IES Zubiri Manteo, Donostia</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3">
              <p className="h5 mb-4 text-black" style={{ fontWeight: 600 }}>Gurekin kontaktatu</p>
              <label htmlFor="firstName "><p className="" placeholder="izena"></p></label>
              <input type="text" id="firstName " className="form-control rounded-top"  placeholder="Izena" />

              <label htmlFor="lastName " ><p className=""></p></label>
              <input type="email" id="email" className="form-control"  placeholder="Gmail" />
            </div>
            <div className="mb-3">
              <label htmlFor="message "><p className="" placeholder="Mezua"></p></label>
              <textarea id="message" className="form-control rounded-bottom" rows="2"  placeholder="Mezua"></textarea>
            </div>
            <button className="mezua btn btn-dark btn-lg btn-block w-2 w-50" type="submit" >
            <b>BIDALI</b>
          </button>            </div>
        </div>
        <small className=" mt-5">&copy; How Much</small>
      </div>
  );
};
