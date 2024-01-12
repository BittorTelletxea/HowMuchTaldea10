import "../style/estiloa.css"
export const Zeregin = () => {
    return (
      <div className="zeregin bg-black" /*style={{
        background: '#3E5151',
        background: '-webkit-linear-gradient(to left, #DECBA4, #3E5151)',
        background: 'linear-gradient(to left, #3f57c9, #000)',
        border:'1px Solid black'
    }}*/>
        <div className="">
            <div>
                <h2 className="text-white">ZER EGITEN DUGU?</h2>
            </div>
            <div className="kontent mt-4  w-90 d-flex ">
                <div className="mr-4 w-75">
                    <p className="text-white">How Much-en zure edozein produktu tasatzen ahal da, zure produktuen karateristikak sartu beharko dituzu eta hauek adituen bitartez tasatuko da eta prezioa bidali egingo da. Hau tasatu eta gero produktua saltzeko aukera izanen duzu edo tasaziorik nahi ez izanen gero beste usuarioen produktuak erosten ahal dituzu.</p>
                </div> 
                    <button
                        className="botoi btn btn-outline-primary rounded-pill mt-5"
                        style={{
                            borderWidth: '2px',
                            width: '150px'
                        }}
                    > Tasatu nahi dut </button>
                </div>
            </div>
        </div>
    
      
    );
  };
  