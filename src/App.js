
import React, {useState,useEffect} from 'react';
import './App.css';
import  reglas from './reglas.jpg';


function App() {
  const [piedraSelected,setPiedraSelect]= useState(false)
  const [papelSelected,setPapelaSelect]= useState(false)
  const [tijeraSelected,setTijeraSelect]= useState(false)

  const handleOnClick = (event) =>{
   
    setPiedraSelect(!piedraSelected)
    console.log(this.name)
    
  }
  
  return (
    <>
      
        <div>
          <img src={reglas} className="reglas" alt="reglas del juego"/>
        </div>
        <div class="juego card text-white bg-dark mb-3" >
          <div class="card-header"><h3>Juega piedra,papel,tijera,lagarto,spock</h3></div>
            <div class="card-body">
              <h5 class="card-title">Selecciona tu jugada!</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="piedra"/>
                <label class="form-check-label" for="inlineRadio1">Piedra</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="papel"/>
                <label class="form-check-label" for="inlineRadio1">Papel</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="tijera"/>
                <label class="form-check-label" for="inlineRadio1">Tijera</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="lagarto"/>
                <label class="form-check-label" for="inlineRadio1">Lagarto</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="spock"/>
                <label class="form-check-label" for="inlineRadio1">Spock</label>
              </div>
          </div>
        </div>

        <div className="juego">
          
        </div>
      
    </>
  );
}

export default App;
