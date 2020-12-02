import React, {useState,useEffect} from 'react';
import './App.css';
import  Reglas from './Reglas.js';
import ResultadoGlobal from './ResultadoGlobal';
import SelectorDeJugada from './SelectorDeJugada';

function VsApp(){
    
  const [jugada,setJugada]= useState()
  const jugadas = [ {nombre:"Piedra",ganaA:["Lagarto","Tijera"]},
                    {nombre:"Papel",ganaA:["Piedra","Spock"]},
                    {nombre:"Tijera",ganaA:["Lagarto","Papel"]},
                    {nombre:"Lagarto",ganaA:["Spock","Papel"]},
                    {nombre:"Spock",ganaA:["Tijera","Piedra"]}]
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
    // matriz  de resultado. buscar
    if(esEmpate){
      setResultado("Empate!! Vuelve a jugar para ganar ;)")
      setclaseSegunResultado("alert-warning")
    }else if(ganoPartida){
      setResultado("Ganaste!! Podrás hacerlo de nuevo? ;)")
      setGanadasJugador(ganadasJugador+1)
      setclaseSegunResultado("alert-success")
    }else{
      setResultado("Perdiste, una lástima :( Lo intentas de nuevo?")
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
            <SelectorDeJugada jugadas={jugadas} handleOnClick={handleOnClick}/>
          </div>
          {inicioPartida && <div class={"alert "+ claseSegunResultado} role="alert">
            <p><strong>Jugada elegida</strong>: {jugada}.</p> <p><strong>Jugada de la app</strong>: {jugadaApp.nombre}.</p> <p>{resultado}.</p>
            </div>}
          {noEligioJugada && <div class="alert alert-warning" role="alert">Tiene que elegir una jugada</div>}
          {!inicioPartida && <button type="button" class="btn btn-info" onClick={jugar}>Jugar!</button>}
          {inicioPartida && <button type="button" class="btn btn-info" onClick={reset}>Volver a jugar</button>}
        </div>
        <div className="resultado">
          <ResultadoGlobal ganadasJugador={ganadasJugador} ganadasApp={ganadasApp} />
          <Reglas/>
        </div>

        
        
    </>
  );
}

export default VsApp;