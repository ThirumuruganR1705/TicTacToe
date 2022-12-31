import React from 'react';
import { useState,useContext } from 'react';
import HomeContext from './store/homeContext';
function WinningPage(props) {

    const homeContext=useContext(HomeContext)
    let replay=()=>{
        props.replayHandler("one");
    }


    // let replay=()=>{
    //     window.location.reload();
    // }

    return ( 
        <div>
            <h1>{props.winner}</h1><br></br>
            <div className='wBtns'>
                <button className='wBtn' onClick={replay}>Replay</button><br></br>
                <button className='wBtn' onClick={()=>homeContext.home()}>Main Menu</button>
            </div>
        </div>
     );
}

export default WinningPage;