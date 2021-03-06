import React, {useState,useEffect} from 'react';
import './App.css';
import  Reglas from './Reglas.js';
import ResultadoGlobal from './ResultadoGlobal';
import SelectorDeJugada from './SelectorDeJugada';

function VsJugador({nombreJug1,nombreJug2}){
    
  const [jugadaJugador1,setJugadaJugador1]= useState()
  const jugadas = [ {nombre:"Piedra",ganaA:["Lagarto","Tijera"]},
                    {nombre:"Papel",ganaA:["Piedra","Spock"]},
                    {nombre:"Tijera",ganaA:["Lagarto","Papel"]},
                    {nombre:"Lagarto",ganaA:["Spock","Papel"]},
                    {nombre:"Spock",ganaA:["Tijera","Piedra"]}]
  const [eligieronLosDos,setEligieronLosDos] = useState(false)
  const [jugadaJugador2,setJugadaJugador2]= useState()
  const [noEligioJugada,setNoEligioJugada] = useState(false)
  const [resultado,setResultado] = useState()
  const [ganadasApp,setGanadasApp] = useState(0)
  const [ganadasJugador,setGanadasJugador] = useState(0)
  const [claseSegunResultado,setclaseSegunResultado] =  useState()

  const [jugador1ConfirmoJugada,setJugador1ConfirmoJugada] = useState(false)

  const [nombreJugador1,setNombreJugador1] = useState(nombreJug1)
  const [nombreJugadorEligiendo,setNombreJugadorEligiendo] = useState(nombreJug1)
  const [nombreJugador2,setNombreJugador2] = useState(nombreJug2)
  
  const handleOnClick = (event) =>{
    if(jugador1ConfirmoJugada){
        let jugada = event.target.value
        setJugadaJugador2(filterJugada(jugada))
    }else{
        let jugada = event.target.value
        setJugadaJugador1(filterJugada(jugada))
    }
    console.log(jugadaJugador1)
    console.log(jugadaJugador2)
  }

  const filterJugada= (jugada) => {
      return jugadas.filter(elem => elem.nombre == jugada)[0]

  }

  const disableEnableInputs = () =>{
    let inputs = document.getElementsByClassName("form-check-input")
    Array.from(inputs).forEach((input)=>{
      input.disabled = !(input.disabled)
    })
  }

  const setResultadoPartida= (jugadaDeApp) => {
    let esEmpate = jugadaJugador1.nombre == jugadaDeApp.nombre
    let ganoPartida = !jugadaDeApp.ganaA.some(elem => elem == jugadaJugador1.nombre)
    // matriz  de resultado. buscar
    if(esEmpate){
      setResultado("Empate!!")
      setclaseSegunResultado("alert-primary")
    }else if(ganoPartida){
      setResultado("Gano " + nombreJugador1)
      setGanadasJugador(ganadasJugador+1)
      setclaseSegunResultado("alert-primary")
    }else{
      setResultado("Gano " + nombreJugador2)
      setGanadasApp(ganadasApp+1)
      setclaseSegunResultado("alert-primary")
    }
  }
  
  const jugar = (event) =>{
      setEligieronLosDos(true)
      disableEnableInputs()// creo que no va
      setNoEligioJugada(false)
      setResultadoPartida(jugadaJugador2)
      
  }

  const cambiarAJugador2 = (event) =>{
    let jugador1AcabaDeElegirJugada = !!jugadaJugador1
    if(jugador1AcabaDeElegirJugada)  {
        setNoEligioJugada(false)
        borrarSeleccionJugador()
        setJugador1ConfirmoJugada(true)
        setNombreJugadorEligiendo(nombreJugador2)
    }else{
        setNoEligioJugada(true)
    } 
    
      
  }

  const borrarSeleccionJugador = () => {
    let inputs = document.getElementsByClassName("form-check-input")
        Array.from(inputs).forEach((input)=>{
          input.checked = false
        })
  }

  const reset = (event) =>{
    setJugadaJugador1()
    setJugadaJugador2()
    setEligieronLosDos(false)
    setJugador1ConfirmoJugada(false)
    borrarSeleccionJugador()
    disableEnableInputs()
  }
  return (
    <>
        <div className="juego card text-white bg-dark mb-3" >
          <div className="card-header"><h3>Juega piedra, papel, tijera, lagarto, spock</h3></div>
            <div className="card-body">
            <h5 className="card-title">{"Selecciona tu jugada " + nombreJugadorEligiendo}</h5>  
            <SelectorDeJugada jugadas={jugadas} handleOnClick={handleOnClick}/>
            </div>

          {eligieronLosDos && <div class={"alert "+ claseSegunResultado} role="alert">
            <p><strong>Jugada de {nombreJugador1}</strong>: {jugadaJugador1.nombre}.</p> <p><strong>Jugada de {nombreJugador2}</strong>: {jugadaJugador2.nombre}.</p> <p>{resultado}.</p>
            </div>}
          {noEligioJugada && <div class="alert alert-warning" role="alert">Tiene que elegir una jugada</div>}
          {!eligieronLosDos && !jugador1ConfirmoJugada && <button type="button" class="btn btn-info" onClick={cambiarAJugador2} disabled={!jugadaJugador1}>Confirmar Jugada </button>}
          {!eligieronLosDos && !!jugador1ConfirmoJugada && <button type="button" class="btn btn-info" onClick={jugar} disabled={!jugadaJugador2}>Confirmar Jugada</button>}
          {eligieronLosDos && <button type="button" class="btn btn-info" onClick={reset}>Volver a jugar</button>}
        </div>
        <div className="resultado">
          <ResultadoGlobal ganadasJugador={ganadasJugador} ganadasApp={ganadasApp} nombreJugador1={nombreJugador1} nombreJugador2={nombreJugador2} />
          <Reglas/>
        </div>

        
        
    </>
  );
}

export default VsJugador;