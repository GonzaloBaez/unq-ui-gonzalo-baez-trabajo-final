import React, {useState,useEffect} from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import './Jvj.css';
import VsJugador from './VsJugador';

function JvJ(){
    let history = useHistory();
    
    const [nombreJugador1,setNombreJugador1] = useState()
    const [nombreJugador2,setNombreJugador2] = useState() 
    const [cargarJuego,setCargarJuego] = useState(false) 

    const empezarJuego= () =>{
        setCargarJuego(true)
    }

    const cambiarNombreJugador1 = (event) =>{
        setNombreJugador1(event.target.value.trim())
        
    }

    const cambiarNombreJugador2 = (event) =>{
        setNombreJugador2(event.target.value.trim())
        
    }
    

    

    return(
        <>
            {
            !cargarJuego && 
            <div className="juego card text-white bg-dark mb-3" >
            <div className="card-header"><h3>Juega piedra, papel, tijera, lagarto, spock</h3></div>
                <div className="card-body">
                    <h5 className="card-title">Ingresa el nombre de los jugadores</h5>  
                    <div class="input">
                        <input type="text"   class="form-control" placeholder="Nombre Jugador 1" value={nombreJugador1} onChange={cambiarNombreJugador1} maxLength="10"/>
                        <input type="text"   class="form-control" placeholder = "Nombre Jugador 2" value={nombreJugador2} onChange={cambiarNombreJugador2}  maxLength="10"/>
                        { (nombreJugador1 == nombreJugador2) &&<div class="alert alert-warning" role="alert">Los nombres no pueden ser iguales</div>}
                        <button type="button" class="btn btn-info" onClick={empezarJuego} disabled={((!nombreJugador1 || !nombreJugador2) || (nombreJugador1 == nombreJugador2)) }>Comenzar!</button>
                    </div>
                </div>
            </div>
            }
            {
                cargarJuego && <VsJugador nombreJug1={nombreJugador1} nombreJug2={nombreJugador2}/>
            }
        </>
    );
}
export default JvJ;