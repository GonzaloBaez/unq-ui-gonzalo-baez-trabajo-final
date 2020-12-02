import React, {useState,useEffect} from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

function Home(){
    let history = useHistory();

    const irVsApp = (event) => {
        history.push("/vsApp")
    }

    const irVsJugador = (event) => {
        history.push("/JvJ")
    }

    return(
        <>
            <div className="juego card text-white bg-dark mb-3" >
          <div className="card-header"><h3>Juega piedra, papel, tijera, lagarto, spock</h3></div>
            <div className="card-body">
                <button type="button" class="btn btn-info" onClick={irVsApp} >Jugar Contra la App</button>
                <button type="button" class="btn btn-info" onClick={irVsJugador} >Jugar Contra un amigo</button>
            </div>
        </div>
        </>
    );
}
export default Home;