import React, { useState } from 'react'

function Calculator() {
    const[number,setNumber]= useState(0)

    const getByDisplayValue = ()=>{

    }
    const getByoperator = ()=>{

    }
    const handleOnClear =()=>{

    }
    const Calculate = () =>{

    }
  return (
    <>
    <div>
        <h2>Calculator</h2>
        <div className="input">
<input type="text" placeholder={number} className='display' id='result'/>
</div>
<div className="row">
<button onClick={getByDisplayValue('1')}>1</button>
<button onClick={getByDisplayValue('2')}>2</button>
<button onClick={getByDisplayValue('3')}>3</button>
<button onClick={getByoperator('+')}>+</button>
</div>
<div className="row">
<button onClick={getByDisplayValue('4')}>4</button>
<button onClick={getByDisplayValue('5')}>5</button>
<button onClick={getByDisplayValue('6')}>6</button>
<button onClick={getByoperator('-')}>-</button>
</div>
<div className="row">
<button onClick={getByDisplayValue('7')}>7</button>
<button onClick={getByDisplayValue('8')}>8</button>
<button onClick={getByDisplayValue('9')}>9</button>
<button onClick={getByoperator('/')}>/</button>
</div>
<div className="row">
<button onClick={handleOnClear()}>C</button>
<button onClick={getByoperator('*')}>*</button>
<button onClick={getByDisplayValue('0')}>0</button>
<button onClick={Calculate()}>=</button>
</div>

    </div>
    </>
  )
}

export default Calculator