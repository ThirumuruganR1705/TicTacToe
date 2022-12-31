import React from 'react';
import { useState} from 'react';
import Computer from './Computer';
import Multiplayer from './Multiplayer';
import HomeContext from './store/homeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

    let [hider,setHider]=useState("one");
    let [value,setValue]=useState("")

    let modes = [{id:"1",value:"computer"},{id:"2",value:"Multiplayer"}];

    let modeHandler=(e)=>{
        setValue(e.target.value);
        setHider("two");
    }
    let getHome=()=>{
        setHider("one");
    }
    const homeContext={home:getHome}
    return ( 
        <HomeContext.Provider value={homeContext} >
            <div className="container">
                <div style={{display:hider==="one"?"block":"none"}}>
                    <h1 className='text-center'>Playing Mode</h1>
                    <div className='modeBtns'>
                        {modes.map((arr)=>
                        <button id={arr.value} key={Math.random()} className='modeBtn mx-2 p-2' value={arr.id} onClick={modeHandler}>{arr.value}</button>
                        )}
                    </div>
                </div>
                {(hider==="two" && value==="1") && <Computer value={value}/>}
                {(hider==="two" && value==="2") && <Multiplayer/>}
            </div>

        </HomeContext.Provider>
     );
}

export default App;