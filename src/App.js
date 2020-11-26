
import React, {useState,useEffect, useDebugValue} from 'react';
import './App.css';
import  reglas from './reglas.jpg';


function App() {
  const [jugada,setJugada]= useState()
  const [jugadas,setJugadas] = useState([{nombre:"Piedra",ganaA:["Lagarto","Tijera"]},
                                        {nombre:"Papel",ganaA:["Piedra","Spoke"]},
                                        {nombre:"Tijera",ganaA:["Lagarto","Papel"]},
                                        {nombre:"Lagarto",ganaA:["Spock","Papel"]},
                                        {nombre:"Spock",ganaA:["Tijeras","Piedra"]}])
  const [inicioPartida,setInicioPartida] = useState(false)
  const [jugadaApp,setJugadaApp]= useState()
  const [noEligioJugada,setNoEligioJugada] = useState(false)
  const [resultado,setResultado] = useState()
  const [ganadasApp,setGanadasApp] = useState(0)
  const [ganadasJugador,setGanadasJugador] = useState(0)
  const [claseSegunResultado,setclaseSegunResultado] =  useState()
  
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

  const setResultadoPartida= (jugadaDeApp) => {
    let esEmpate = jugada == jugadaDeApp.nombre
    let ganoPartida = !jugadaDeApp.ganaA.some(elem => elem == jugada)
    if(esEmpate){
      setResultado("Empate!! Vuelve a jugar para ganar ;)")
      setclaseSegunResultado("alert-warning")
    }else if(ganoPartida){
      setResultado("Ganaste!! Podras hacerlo de nuevo? ;)")
      setGanadasJugador(ganadasJugador+1)
      setclaseSegunResultado("alert-success")
    }else{
      setResultado("Perdiste, una lastima :( Lo intentas de nuevo?")
      setGanadasApp(ganadasApp+1)
      setclaseSegunResultado("alert-danger")
    }
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
      setResultadoPartida(jugadaAleatoriaApp)
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
        <div className="juego card text-white bg-dark mb-3" >
          <div className="card-header"><h3>Juega piedra, papel, tijera, lagarto, spock</h3></div>
            <div className="card-body">
              <h5 className="card-title">Selecciona tu jugada!</h5>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Piedra" onClick={handleOnClick}/>
                <label className="form-check-label" for="inlineRadio1">Piedra</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Papel" onClick={handleOnClick}/>
                <label className="form-check-label" for="inlineRadio1">Papel</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Tijera" onClick={handleOnClick}/>
                <label className="form-check-label" for="inlineRadio1">Tijera</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Lagarto" onClick={handleOnClick}/>
                <label className="form-check-label" for="inlineRadio1">Lagarto</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Spock" onClick={handleOnClick}/>
                <label className="form-check-label" for="inlineRadio1">Spock</label>
              </div>   
          </div>
          {inicioPartida && <div class={"alert "+ claseSegunResultado} role="alert">
            <p><strong>Jugada elegida</strong>: {jugada}.</p> <p><strong>Jugada app</strong>: {jugadaApp.nombre}.</p> <p>{resultado}.</p>
            </div>}
          {noEligioJugada && <div class="alert alert-warning" role="alert">Tiene que elegir una jugada</div>}
          {!inicioPartida && <button type="button" class="btn btn-info" onClick={jugar}>Jugar!</button>}
          {inicioPartida && <button type="button" class="btn btn-info" onClick={reset}>Volver a jugar</button>}
        </div>
        
        <div className="resultado">
          <table class="table table-sm table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Ganadas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Jugador</th>
                <td>{ganadasJugador}</td>
              </tr>
              <tr>
                <th scope="row">App</th>
                <td>{ganadasApp}</td>
              </tr>
            </tbody>
          </table>

          <div className="reglas">
            <div class="card text-white bg-secondary mb-3">
              <div class="card-header"><h5 class="card-title">Reglas</h5></div>
              <div class="card-body">
                
                <p class="card-text">- Tijeras cortan Papel.</p>
                <p class="card-text">- Papel tapa a Pieda.</p>
                <p class="card-text">- Piedra aplasta a Lagarto.</p>
                <p class="card-text">- Lagarto envenena a Spock.</p>
                <p class="card-text">- Spock rompe Tijeras.</p>
                <p class="card-text">- Tijeras decapitan lagarto.</p>
                <p class="card-text">- Lagarto devora Papel.</p>
                <p class="card-text">- Papel desautoriza Spock.</p>
                <p class="card-text">- Spock vaporiza Piedra.</p>
                <p class="card-text">- Piedras aplasta a Tijeras.</p>
              </div>
            </div>
          </div>
        </div>

        
        
    </>
  );
}

export default App;
