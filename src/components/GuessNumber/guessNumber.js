import React ,{useState} from 'react'
import './guessnumber.css'
export function GuessNumber(){
   
    const [number,setnumber]=useState()
    function handleNumber(event){
          setnumber(event.target.value)
    }
    function Submission(){
        const randomNumber=Math.floor(Math.random()*10)+20
        if(number<randomNumber){
            alert(' you guessed a smaller number .')
        }
        if(number>randomNumber){
            alert('you guessed a bigger number')
        }
        if(number==randomNumber){
            alert('Congratualation you guess right number')
        }
    }
    return (
       <div className='parent'>
        <input type="number" onChange={handleNumber} className='number'/>
        <button onClick={Submission} class='btnstyle'>submit</button>
        
       </div>
    )
}