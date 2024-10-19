
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,reset ,incrementByAmount} from './features/counter/counterSlice'
import { useState } from 'react'

function App() {
  const [amount,setAmount]=useState(0)

  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  
  function handleIncrement(){
dispatch(increment())
  }

  function handleDecrement()
  {
dispatch(decrement())
  }
  function handleReset()
  {
    dispatch(reset())
  }

  function handleIncAmntClk()
  {
    dispatch(incrementByAmount(amount))
  }



  return (
    <>
      <div className='container'>
         
<button onClick={handleIncrement}>+</button>
<p>Count:{count}</p>
<button onClick={handleDecrement}>-</button>
        </div><br />
        <div>
        <button onClick={handleReset}>Reset</button>

        </div>
        <input
         type="number"
         value={amount
               } 
         placeholder='enter val'
         onChange={(e)=>setAmount(e.target.value)}
     
         />
         <button onClick={handleIncAmntClk}> Inc my amount</button>
    </>
  )
}

export default App
