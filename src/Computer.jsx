import React from 'react';
import Box from './Box';
import Starter from './Starter';
import {useState} from 'react';
import WinningPage from './WinningPage';

function Computer(props) {

    let [hider,setHider]=useState("");
    let [check,setCheck]=useState({status:"one",check:""});
    let [winner,setWinner]=useState("");
    

    // Selector Handler

    let selectorHandler=(value,stt)=>{
        setCheck({status:stt,check:value});
    }

    let Handler=(value,stt)=>{
        if (value === "X" || value === "O"){
            if (value===check.check){
                setWinner("You Win");
            }
            else {
                setWinner("You Lost");
            }
        }
        else {
            setWinner("Match Die");
        }
        setCheck({status:stt});
    }

    // Replay Handler

    let replayHandler=(value)=>{
        setCheck({status:value});
    }


    return ( 
        <div>
            {check.status==="one" && <Starter selectorHandler={selectorHandler} mode={check.status}/>}
            {check.status==="two" && <Box starter={check.check} mode="1" Handler={Handler}/>}
            {check.status==="three" && <WinningPage replayHandler={replayHandler} winner={winner}/> }
        </div>
     );
}

export default Computer;