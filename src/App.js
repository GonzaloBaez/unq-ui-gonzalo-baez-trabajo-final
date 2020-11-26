
import React, {useState,useEffect, useDebugValue} from 'react';
import './App.css';
import  reglas from './reglas.jpg';


function App() {
  const [jugada,setJugada]= useState()
  const [jugadas,setJugadas] = useState([{nombre:"piedra",ganaA:["lagarto","tijera"]},
                                        {nombre:"papel",ganaA:["piedra","spoke"]},
                                        {nombre:"tijera",ganaA:["lagarto","papel"]},
                                        {nombre:"lagarto",ganaA:["spock","papel"]},
                                        {nombre:"spock",ganaA:["tijeras","piedra"]}])
  const [inicioPartida,setInicioPartida] = useState(false)
  const [jugadaApp,setJugadaApp]= useState()
  const [noEligioJugada,setNoEligioJugada] = useState(false)
  
  const numeroAleatorio = () =>{
    return Math.floor(Math.random() * (jugadas.length))
  }
  const handleOnClick = (event) =>{
    let jugada = event.target.value
    setJugada(jugada)
  }

  const disableEnableInputs = () =>{
    let inputs = document.getElementsByClassName("form-check-input")
    Array.from(inputs).forEach((input)=>{
      input.disabled = !(input.disabled)
    })
  }
  
  const jugar = (event) =>{
    let eligioJugada = !!jugada
    if(eligioJugada){
      let numAleatorio = numeroAleatorio()
      let jugadaAleatoriaApp = jugadas[numAleatorio]
      setJugadaApp(jugadaAleatoriaApp)
      setInicioPartida(true)
      disableEnableInputs()
      setNoEligioJugada(false)
    }else{
      setNoEligioJugada(true)
    }
  }

  const reset = (event) =>{
    setJugadaApp()
    setInicioPartida(false)
    disableEnableInputs()
  }
  return (
    <>
      
        <div>
          <img src={reglas} className="reglas" alt="reglas del juego"/>
        </div>
        <div className="juego card text-white bg-dark mb-3" >
          <div className="card-header"><h3>Juega piedra, papel, tijera, lagarto, spock</h3></div>
            <div className="card-body">
              <h5 className="card-title">Selecciona tu jugada!</h5>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="piedra" onClick={handleOnClick}/>
                <label className="form-check-label" for="inlineRadio1">Piedra</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="papel" onClick={handleOnClick}/>
                <label className="form-check-label" for="inlineRadio1">Papel</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="tijera" onClick={handleOnClick}/>
                <label className="form-check-label" for="inlineRadio1">Tijera</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="lagarto" onClick={handleOnClick}/>
                <label className="form-check-label" for="inlineRadio1">Lagarto</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="spock" onClick={handleOnClick}/>
                <label className="form-check-label" for="inlineRadio1">Spock</label>
              </div>   
          </div>
          {inicioPartida && <div class="alert alert-info" role="alert">Jugada elegida: {jugada}, jugada app: {jugadaApp}</div>}
          {noEligioJugada && <div class="alert alert-warning" role="alert">Tiene que elegir una jugada</div>}
          {!inicioPartida && <button type="button" class="btn btn-info" onClick={jugar}>Jugar!</button>}
          {inicioPartida && <button type="button" class="btn btn-info" onClick={reset}>Volver a jugar</button>}
        </div>
        
        <div className="juego">
          
        </div>
      
    </>
  );
}

export default App;
