import React from 'react'
import Output from '../components/Output'
import { useState } from 'react'
import Button from '../components/Button';

const Calculator = () => {
    const [value , setValue] = useState("");

    const takeInput = (text)=>{
        setValue(value + text);
    }

    const allClear = ()=>{
      setValue("");
    }
    const clear = ()=>{
      setValue(value.substring(0 , value.length -1));
    }

    const calculate = ()=>{
      setValue(eval(value));
    }
  return (
   <div>
    <Output value = {value}/>
    <div>
    <Button title ="1" func={takeInput}/>
    <Button title ="2" func={takeInput}/>
    <Button title ="3" func={takeInput}/>
    <Button title ="+" func={takeInput}/>
    <Button title ="AC" func={allClear}/>
    <Button title ="C" func={clear}/>
    
    </div>
    <div>
    <Button title ="4" func={takeInput}/>
    <Button title ="5" func={takeInput}/>
    <Button title ="6" func={takeInput}/>
    <Button title ="-" func={takeInput}/>
    <Button title ="/" func={takeInput}/>
    <Button title ="%" func={takeInput}/>
    
    </div>
    <div>
    <Button title ="7" func={takeInput}/>
    <Button title ="8" func={takeInput}/>
    <Button title ="9" func={takeInput}/>
    <Button title ="0" func={takeInput}/>
    <Button title ="*" func={takeInput}/>
    <Button title ="=" func={calculate}/>
    
    </div>
   </div>
  )
}

export default Calculator