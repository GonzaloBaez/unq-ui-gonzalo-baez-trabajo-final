import Jugada from "./Jugada";

function SelectorDeJugada({jugadas,handleOnClick}){
    return(
        <> 
              {
              jugadas.map(elem =>
                <Jugada nombreJugada={elem.nombre} handleOnClick={handleOnClick}/>
              )
              }
            
        </>
    );
}

export default SelectorDeJugada;