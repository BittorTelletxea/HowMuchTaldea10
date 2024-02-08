import React, { useRef, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "@/Components/style/footerl.css";

export  const FooterL = () => {
  const mapContainerStyle = {
    height: "200px",
    width: "400px",
  };

  const center = {
    lat: 43.3274937,
    lng: -1.9709828,
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  return (
    <div className="bg-light footer d-flex flex-column mx-auto py-5" style={{ width: "90%" }}>
      <div className="footer d-flex flex-wrap justify-content-between">
        <div className="align-self-center">
          <div className="redes mt-5">
          <img src={"/images/instagraml.png"} style={{ width: "15%", marginRight: "8%" }} alt="" />
              <img src={"/images/facebookl.png"} style={{ width: "10%", marginRight: "8%" }} alt="" />
              <img src={"/images/tiktokl.png"} style={{ width: "10%", marginRight: "8%" }} alt="" />
              <img src={"/images/youtubel.png"} style={{ width: "15%", marginRight: "8%" }} alt="" />
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
          <button className="mezua btn btn-dark btn-lg btn-block w-2 w-50" type="submit">
            <b>BIDALI</b>
          </button>
        </div>
      </div>
     
      <small className=" mt-5">&copy; How Much</small>
    </div>
  );
};

