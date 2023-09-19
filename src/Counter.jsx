import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)
    const [text,setText]= useState("")

    function increment() {

        setCount(count+1)
        console.log('helo')
        
    }
    function changeText(param){

            setText(param)
    }

    return ( <div className='counter'>


        <p>{count}</p>
        
        

        <button onClick={( )=> increment()}>+</button>

<br />
        <input  type="text" onChange={(e)=>changeText(e.target.value) } />


        <p> {text}</p>
       
        
       
    </div> );

}

export default  Counter;