import React from 'react';

function Starter(props) {

    let StarterBtns=[{id:1,value:"X",name:"Player X"},{id:2,value:"O",name:"Player O"}]

    let SelectorFunc=(e)=>{
        props.selectorHandler(e.target.value,"two");
    }

    return ( 
        <div>
            <h3>Which You Want To Be ?</h3>
            <div className='StarterBtn'>
                {StarterBtns.map((arr)=>
                <button key={Math.random()}className='Sbtn' value={arr.value} onClick={SelectorFunc}>{arr.name}</button>
                )}
            </div>
        </div>
     );
}

export default Starter;