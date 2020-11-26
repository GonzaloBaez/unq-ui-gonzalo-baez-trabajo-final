const { default: SelectorDeJugada } = require("./SelectorDeJugada")

function Jugada({nombreJugada,handleOnClick}){
    return(
        <>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id={"inlineRadio1"+ nombreJugada} value={"" + nombreJugada} onClick={handleOnClick}/>
                <label className="form-check-label" for={"inlineRadio1"+nombreJugada}>{nombreJugada}</label>
            </div> 
        </>
    );
}

export default Jugada;