import React from 'react'; // Import React if not already imported
import '../style/estatistikak.css';
import { Perfila } from './Perfila';



export const Estatistikak = () => {
  return (
    <div className=''>
      <div className="estatistikak">
        <div>
            <h3><b>ESTATISTIKAK</b></h3>
        </div>
        <div className='stats'>
            <div className='kontusorketa d-flex'>
                <p>Kontu sorketa data:</p>
                <p>2023 / 12 / 03</p>

            </div>
            <div className='erosketakop d-flex'>
                <p>Erosketa kopurua:</p>
                <p>0</p>
            </div>
            <div className='erosketakop d-flex'>
                <p>Salketa kopurua:</p>
                <p>0</p>
            </div>
            <div className='erosketakop d-flex'>
                <p>Balorazio kopurua:</p>
                <p>0</p>
            </div>
            <div className='erosketakop d-flex'>
                <p>Komentario kopurua:</p>
                <p>0</p>
            </div>
            <div className='erosketakop d-flex'>
                <p>Bataz besteko balorazioa:</p>
                <p>0.00</p>
            </div>
        </div>
    </div>
    </div>

  );
};
