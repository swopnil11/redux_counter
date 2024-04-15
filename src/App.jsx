import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {addCounter, removeCounter, incrementByAmount} from './slice/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch(removeCounter())}>-</button>
      <h2 style={{display: "inline-block"}}>{count}</h2>
      <button onClick={() => dispatch(addCounter())}>+</button>
    </div>
  )
}

export default App
