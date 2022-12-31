import React, { useState,useEffect } from 'react';

let Box=(props)=>{
      
    // let {starter}=props;
    useEffect(()=>{
        setTimeout(()=>{
            if (props.mode==="1" && sem ){
                if (!((BoxArr[0].pin!=="" && BoxArr[1].pin!=="" && BoxArr[2].pin!=="" && BoxArr[3].pin!=="" && BoxArr[4].pin!=="" && BoxArr[5].pin!=="" && BoxArr[6].pin!=="" && BoxArr[7].pin!=="" && BoxArr[8].pin!=="" )))
                {
                    if (check!==props.starter){
                        SystemPlay();
                    }
                }
            }
            if ((BoxArr[0].pin==="X" && BoxArr[1].pin==="X" && BoxArr[2].pin==="X" )|| (BoxArr[3].pin==="X" && BoxArr[4].pin==="X" && BoxArr[5].pin==="X") || (BoxArr[6].pin==="X" && BoxArr[7].pin==="X" && BoxArr[8].pin==="X") || (BoxArr[0].pin==="X" && BoxArr[3].pin==="X" && BoxArr[6].pin==="X") || (BoxArr[1].pin==="X" && BoxArr[4].pin==="X" && BoxArr[7].pin==="X") || (BoxArr[2].pin==="X" && BoxArr[5].pin==="X" && BoxArr[8].pin==="X") || (BoxArr[0].pin==="X" && BoxArr[4].pin==="X" && BoxArr[8].pin==="X") || (BoxArr[2].pin==="X" && BoxArr[4].pin==="X" && BoxArr[6].pin==="X" )){
                props.Handler("X","three");
            }
            else if ((BoxArr[0].pin==="O" && BoxArr[1].pin==="O" && BoxArr[2].pin==="O" )|| (BoxArr[3].pin==="O" && BoxArr[4].pin==="O" && BoxArr[5].pin==="O") || (BoxArr[6].pin==="O" && BoxArr[7].pin==="O" && BoxArr[8].pin==="O") || (BoxArr[0].pin==="O" && BoxArr[3].pin==="O" && BoxArr[6].pin==="O") || (BoxArr[1].pin==="O" && BoxArr[4].pin==="O" && BoxArr[7].pin==="O") || (BoxArr[2].pin==="O" && BoxArr[5].pin==="O" && BoxArr[8].pin==="O") || (BoxArr[0].pin==="O" && BoxArr[4].pin==="O" && BoxArr[8].pin==="O") || (BoxArr[2].pin==="O" && BoxArr[4].pin==="O" && BoxArr[6].pin==="O" )){
                props.Handler("O","three");
            }
            else if (BoxArr[0].pin!=="" && BoxArr[1].pin!=="" && BoxArr[2].pin!=="" && BoxArr[3].pin!=="" && BoxArr[4].pin!=="" && BoxArr[5].pin!=="" && BoxArr[6].pin!=="" && BoxArr[7].pin!=="" && BoxArr[8].pin!=="" ){
                props.Handler("Died","three");
            }
        },500);
    });
    
    let [BoxArr,setBoxArr]=useState([{value:1,pin:""},{value:2,pin:""},{value:3,pin:""},{value:4,pin:""},{value:5,pin:""},{value:6,pin:""},{value:7,pin:""},{value:8,pin:""},{value:9,pin:""}]);
    let [check,setCheck]=useState(props.starter);
    let [sem,setSem]=useState(true);

    let NormalPlay=(e)=>{
        if (BoxArr[e.target.id-1].pin===""){
            // e.target.value=check;
            e.target.innerText=check;
            const updatedArr=BoxArr;
            const index=e.target.id-1;
            updatedArr[index]={...BoxArr[index],pin:check};
            setBoxArr(updatedArr);
            if (check==="X"){
                setCheck("O");
            }
            else{
                setCheck("X");
            }
        }
    }


    // System Play Function
    let setFunc=(ind)=>{
            let newArr=BoxArr;
                newArr[ind]={value:BoxArr[ind].value,pin:check}
                setBoxArr(newArr);
                if (check==="X"){
                    setCheck("O");
                }
                else{
                    setCheck("X");
                }
    }


    let SystemPlay=()=>{
        if(BoxArr[4].pin===""){
            setFunc(4);
            return;
        }
        else if ((((BoxArr[1].pin!=="" && BoxArr[1].pin!==props.starter) && (BoxArr[2].pin!=="" && BoxArr[2].pin!==props.starter)) || ((BoxArr[3].pin!=="" && BoxArr[3].pin!==props.starter) && (BoxArr[6].pin!=="" && BoxArr[6].pin!==props.starter)) || ((BoxArr[4].pin!=="" && BoxArr[4].pin!==props.starter) && (BoxArr[8].pin!=="" && BoxArr[8].pin!==props.starter))) &&  BoxArr[0].pin===""){
            setFunc(0);
            return;
        }
        else if ((((BoxArr[0].pin!=="" && BoxArr[0].pin!==props.starter) && (BoxArr[2].pin!=="" && BoxArr[2].pin!==props.starter)) || ((BoxArr[5].pin!=="" && BoxArr[5].pin!==props.starter) && (BoxArr[8].pin!=="" && BoxArr[8].pin!==props.starter))) && BoxArr[1].pin===""){
            setFunc(1);
            return;
        }
        else if ((((BoxArr[1].pin!=="" && BoxArr[1].pin!==props.starter) && (BoxArr[0].pin!=="" && BoxArr[0].pin!==props.starter)) || ((BoxArr[4].pin!=="" && BoxArr[4].pin!==props.starter) && (BoxArr[6].pin!=="" && BoxArr[6].pin!==props.starter)) || ((BoxArr[5].pin!=="" && BoxArr[5].pin!==props.starter) && (BoxArr[8].pin!=="" && BoxArr[8].pin!==props.starter))) && BoxArr[2].pin===""){
            setFunc(2);
            return;
        }
        else if ((((BoxArr[0].pin!=="" && BoxArr[0].pin!==props.starter) && (BoxArr[6].pin!=="" && BoxArr[6].pin!==props.starter)) || ((BoxArr[4].pin!=="" && BoxArr[4].pin!==props.starter) && (BoxArr[5].pin!=="" && BoxArr[5].pin!==props.starter))) && BoxArr[3].pin===""){
            setFunc(3);
            return;
        }
        else if ((((BoxArr[8].pin!=="" && BoxArr[8].pin!==props.starter) && (BoxArr[2].pin!=="" && BoxArr[2].pin!==props.starter)) || ((BoxArr[4].pin!=="" && BoxArr[4].pin!==props.starter) && (BoxArr[3].pin!=="" && BoxArr[3].pin!==props.starter))) && BoxArr[5].pin===""){
            setFunc(5);
            return;
        }
        else if ((((BoxArr[0].pin!=="" && BoxArr[0].pin!==props.starter) && (BoxArr[3].pin!=="" && BoxArr[3].pin!==props.starter)) || ((BoxArr[4].pin!=="" && BoxArr[4].pin!==props.starter) && (BoxArr[2].pin!=="" && BoxArr[2].pin!==props.starter)) || ((BoxArr[7].pin!=="" && BoxArr[7].pin!==props.starter) && (BoxArr[8].pin!=="" && BoxArr[8].pin!==props.starter))) && BoxArr[6].pin===""){
            setFunc(6);
            return;
        }
        else if ((((BoxArr[4].pin!=="" && BoxArr[4].pin!==props.starter) && (BoxArr[1].pin!=="" && BoxArr[1].pin!==props.starter)) || ((BoxArr[6].pin!=="" && BoxArr[6].pin!==props.starter) && (BoxArr[8].pin!=="" && BoxArr[8].pin!==props.starter))) && BoxArr[7].pin===""){
            setFunc(7);
            return;
        }
        else if ((((BoxArr[5].pin!=="" && BoxArr[5].pin!==props.starter) && (BoxArr[2].pin!=="" && BoxArr[2].pin!==props.starter)) || ((BoxArr[7].pin!=="" && BoxArr[7].pin!==props.starter) && (BoxArr[6].pin!=="" && BoxArr[6].pin!==props.starter)) || ((BoxArr[4].pin!=="" && BoxArr[4].pin!==props.starter) && (BoxArr[0].pin!=="" && BoxArr[0].pin!==props.starter))) && BoxArr[8].pin===""){
            setFunc(8);
            return;
        }
        else if ((BoxArr[1].pin===props.starter && BoxArr[2].pin===props.starter && BoxArr[0].pin==="") || (BoxArr[3].pin===props.starter && BoxArr[6].pin===props.starter && BoxArr[0].pin==="") || (BoxArr[4].pin===props.starter && BoxArr[8].pin===props.starter && BoxArr[0].pin==="") )
        {
            setFunc(0);
            return;
        }
        else if ((BoxArr[0].pin===props.starter && BoxArr[2].pin===props.starter && BoxArr[1].pin==="") || (BoxArr[4].pin===props.starter && BoxArr[7].pin===props.starter && BoxArr[1].pin==="") ){
            setFunc(1);
            return;
        }
        else if ((BoxArr[1].pin===props.starter && BoxArr[0].pin===props.starter && BoxArr[2].pin==="") || (BoxArr[4].pin===props.starter && BoxArr[6].pin===props.starter && BoxArr[2].pin==="") || (BoxArr[5].pin===props.starter && BoxArr[8].pin===props.starter && BoxArr[2].pin==="") )
        {
            setFunc(2);
            return;
        }
        else if ((BoxArr[0].pin===props.starter && BoxArr[6].pin===props.starter && BoxArr[3].pin==="") || (BoxArr[4].pin===props.starter && BoxArr[5].pin===props.starter && BoxArr[3].pin==="") )
        {
            setFunc(3);
            return;
        }
        else if ((BoxArr[0].pin===props.starter && BoxArr[8].pin===props.starter && BoxArr[4].pin==="") || (BoxArr[2].pin===props.starter && BoxArr[6].pin===props.starter && BoxArr[4].pin==="") || (BoxArr[1].pin===props.starter && BoxArr[7].pin===props.starter && BoxArr[4].pin==="") || (BoxArr[3].pin===props.starter && BoxArr[5].pin===props.starter && BoxArr[4].pin==="") )
        {
            setFunc(4);
            return;
        }
        else if ((BoxArr[2].pin===props.starter && BoxArr[8].pin===props.starter && BoxArr[5].pin==="") || (BoxArr[4].pin===props.starter && BoxArr[3].pin===props.starter && BoxArr[5].pin==="") )
        {
            setFunc(5);
            return;
        }
        else if ((BoxArr[3].pin===props.starter && BoxArr[0].pin===props.starter && BoxArr[6].pin==="") || (BoxArr[7].pin===props.starter && BoxArr[8].pin===props.starter && BoxArr[6].pin==="") || (BoxArr[4].pin===props.starter && BoxArr[2].pin===props.starter && BoxArr[6].pin==="") )
        {
            setFunc(6);
            return;
        }
        else if ((BoxArr[1].pin===props.starter && BoxArr[4].pin===props.starter && BoxArr[7].pin==="") || (BoxArr[8].pin===props.starter && BoxArr[6].pin===props.starter && BoxArr[7].pin===""))
        {
            setFunc(7);
            return;
        }
        else if ((BoxArr[4].pin===props.starter && BoxArr[0].pin===props.starter && BoxArr[8].pin==="") || (BoxArr[7].pin===props.starter && BoxArr[6].pin===props.starter && BoxArr[8].pin==="") || (BoxArr[5].pin===props.starter && BoxArr[2].pin===props.starter && BoxArr[8].pin==="") )
        {
            setFunc(8);
            return;
        }
           
        else {
            let ind=Math.floor(Math.random()*9);

            if (BoxArr[ind].pin===""){
                setFunc(ind);
            }
            else{
                SystemPlay();
            }
        }
    }

    let dummy=(e)=>{     
        // Normal Playing Function
        NormalPlay(e);
    }

    return(
        <div>
            <div className='BoardPage'>
                <h2 className='title'>Now {check} Turn</h2>
                <br/>
                <div className='Board mt-3'>
                    {BoxArr.map((arr)=>
                    <button className="box"  key={Math.random()} id={arr.value} onClick={dummy}  >{arr.pin}</button>
                    )}
                </div>
            </div>
        </div>
    )

}

export default Box;