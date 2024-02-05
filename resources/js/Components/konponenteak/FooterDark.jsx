import React, { useRef, useEffect } from "react";
import logo from "../images/logo.png";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import instagram from "../images/instagram.png";
import tiktok from "../images/tiktok.png";
import youtube from "../images/youtube.png";
import facebook from "../images/facebook.png";

export const FooterDark = () => {
  const mapContainerStyle = {
    height: "200px",
    width: "200px"
  };

  const center = {
    lat: 43.3270543,
    lng: -1.9720582
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true
  };

  return (
    <footer className="page-footer shadow " style={{ backgroundColor: '#121212' }}>
      <div className="d-flex flex-column mx-auto py-5" style={{ width: "80%" }}>
        <div className="footer d-flex flex-wrap justify-content-between">
          <div className="align-self-center">
            <div className="redes mt-5">
              <img src={instagram} style={{ width: "15%", marginRight: "8%" }} alt="" />
              <img src={facebook} style={{ width: "10%", marginRight: "8%" }} alt="" />
              <img src={tiktok} style={{ width: "10%", marginRight: "8%" }} alt="" />
              <img src={youtube} style={{ width: "15%", marginRight: "8%" }} alt="" />
            </div>
          </div>
          <div>
            <p className="h5 mb-4 text-black" style={{ fontWeight: 600 }}>Info gehiago</p>
            <ul className="p-0" style={{ listStyle: 'none', cursor: 'pointer' }}>
              <li className="my-2">
                <a className="text-black" href="/">howmuch@gmail.com</a>
              </li>
              <li className="my-2">
                <a className="text-black" href="/">+34 644 54 76 34</a>
              </li>
              <li className="my-2">
                <a className="text-black" href="/">IES Zubiri Manteo, Donostia</a>
              </li>
            </ul>
            <LoadScript googleMapsApiKey="AIzaSyCAhaOBpaLF0dvD2YXb-PBJAQkkIeO28Mk">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
                options={options}
              >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
          </div>
          <div>
            <div className="mb-3 text">
              <p className="h5 mb-4 text-white" style={{ fontWeight: 600 }}>Gurekin kontaktatu</p>
              <label htmlFor="firstName "><p className="text-white" placeholder="izena"></p></label>
              <input type="text" id="firstName text-white" className="form-control rounded-top"  placeholder="Izena" />

              <label htmlFor="lastName text-white" ><p className="text-white"></p></label>
              <input type="email" id="email" className="form-control"  placeholder="Gmail" />
            </div>
            <div className="mb-3">
              <label htmlFor="message text-white"><p className="text-white" placeholder="Mezua"></p></label>
              <textarea id="message" className="form-control rounded-bottom" rows="2"  placeholder="Mezua"></textarea>
            </div>
            <button className="btn btn-outline-light ">Bidali</button>
          </div>
        </div>
        
        <small className="text-center text-white mt-5">&copy; How Much</small>
      </div>
    </footer>
  );
};
