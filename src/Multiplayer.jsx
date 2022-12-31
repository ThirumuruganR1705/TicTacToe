import React, { useState } from 'react';
import './index.css';
import Box from './Box';
import WinningPage from './WinningPage';
import Starter from './Starter';

function Multiplayer(){

    let [hider,setHider]=useState("");
    let [check,setCheck]=useState({status:"one",check:""});
    let [winner,setWinner]=useState("");
    let [data,setData]=useState([]);
    let [count,setCount]=useState({Xcount:0,Ocount:0});
    

    // Selector Handler

    let selectorHandler=(value,stt)=>{
        setCheck({status:stt,check:value});
    }



    




    let Handler=(value,stt)=>{
        if (value==="X"){
            setWinner("Player X Won The Game");
        }
        else if (value==="O"){
            setWinner("Player O Win The Game");
        }
        else {
            setWinner("Match Die");
        }
        setCheck({status:stt});
        // if (value==="X Won The Game"){
        //     setCount({Xcount:count.Xcount+1,Ocount:count.Ocount})
        // }
        // else if (value==="O Won The Game"){
        //     setCount({Ocount:count.Ocount+1,Xcount:count.Xcount})
        // }
    }

    // Replay Handler

    let replayHandler=(value)=>{
        setCheck({status:value});
    }




    
    

    

    return(
        <div>
            {/* <div className='count'>
                <div>
                    player X <br></br>
                    {count.Xcount}
                </div>
                <div>
                    player O <br></br>
                    {count.Ocount}
                </div>
            </div> */}
            
            <div className='main'>
            
                <div style={{display:(check.status==="one")?"block":"none"}} className='Select'>
                    <Starter selectorHandler={selectorHandler}/>
                </div>
                        
                {check.status==="two" && <Box starter={check.check} mode="multiplayer" Handler={Handler}/>}
            
                {check.status==="three" && <WinningPage winner={winner} replayHandler={replayHandler} BoxArr={data}/>}
            </div>
        </div>
    )
}



export default Multiplayer;