import Jugada from "./Jugada";

function SelectorDeJugada({jugadas,handleOnClick}){
    return(
        <>
          <div className="card-header"><h3>Juega piedra, papel, tijera, lagarto, spock</h3></div>
              <div className="card-body">
              <h5 className="card-title">Selecciona tu jugada!</h5>
              
              {
              jugadas.map(elem =>
                <Jugada nombreJugada={elem.nombre} handleOnClick={handleOnClick}/>
              )
              }
            </div>  
            
        </>
    );
}

export default SelectorDeJugada;