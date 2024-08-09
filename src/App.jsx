import './App.css'
import React, {useState} from 'react'

export default function App() {
  const [ecran, setEcran] = useState('')
  const oclick = (e) =>{
    const value = e.target.value;

    if(value === 'AC'){
      setEcran('')
    }else if(value === '='){
      try{
        setEcran(eval(ecran).toString())
      }catch(error){
        setEcran('error')
      }
    }else{
      setEcran(ecran + value)
    }
  }

  return (
    <>
    <h1 className='text-center text-2xl m-3 text-white'>Ma calculatrice</h1>
      <div className='cadre w-96 mx-auto bg-indigo-300 m-4 p-3 border-solid border-2 border-indigo-600 rounded '>
        <div className='ecran '>
          <input type="text" name="" id="ecran" value={ecran} className='h-24 text-2xl text-right pr-2 w-full bg-white-200 border-solid rounded border-2 border-indigo-600' />
        </div>
        <div className='border-solid rounded mt-3 border-2 border-indigo-600'>
          <div className='clavier'>
            <button value="1" onClick={oclick}>1</button>
            <button value="2" onClick={oclick}>2</button>
            <button value="3" onClick={oclick}>3</button>
            <button value="+" onClick={oclick}>+</button>
            <button value="4" onClick={oclick}>4</button>
            <button value="5" onClick={oclick}>5</button>
            <button value="6" onClick={oclick}>6</button>
            <button value="-" onClick={oclick}>-</button>
            <button value="7" onClick={oclick}>7</button>
            <button value="8" onClick={oclick}>8</button>
            <button value="9" onClick={oclick}>9</button>
            <button value="*" onClick={oclick}>*</button>
            <button value="AC" onClick={oclick}>AC</button>
            <button value="/" onClick={oclick}>/</button>
            <button value="0" onClick={oclick}>0</button>
            <button value="=" onClick={oclick}>=</button>
          </div>
        </div>
      </div>
    </>
  )
}