import React, { useRef, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


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
              <img src={"/images/instagram.png"} style={{ width: "15%", marginRight: "8%" }} alt="" />
              <img src={"/images/facebook.png"} style={{ width: "10%", marginRight: "8%" }} alt="" />
              <img src={"/images/tiktok.png"} style={{ width: "10%", marginRight: "8%" }} alt="" />
              <img src={"/images/youtube.png"} style={{ width: "15%", marginRight: "8%" }} alt="" />
            </div>
          </div>
          <div className="text-center">
            <p className="h5 mb-4 text-white" style={{ fontWeight: 600 }}>Info gehiago</p>
            <ul className="p-0" style={{ listStyle: 'none', cursor: 'pointer' }}>
              <li className="my-2">
                <a className="text-white" href="/">howmuch@gmail.com</a>
              </li>
              <li className="my-2">
                <a className="text-white" href="/">+34 644 54 76 34</a>
              </li>
              <li className="my-2">
                <a className="text-white" href="/">IES Zubiri Manteo, Donostia</a>
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