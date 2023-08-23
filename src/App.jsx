import { useDispatch, useSelector } from "react-redux"
import { increment , decrement } from "./store/reducers/numberSlice"
import { userIncrement,userDecrement } from "./store/reducers/userSlice" 
import Laptop from "./components/Laptop"

function App() {
  
  const usetDispatch = useDispatch()
  const numberDispatch = useDispatch()
  const number = useSelector(store => store.numberSlice)
  const users = useSelector(store => store.userSlice.NOU)

  console.log(number)
  return(
    <>
      
      <div className="container">
        <button onClick={() => usetDispatch(userIncrement(1))}>INCREMENT USER by One</button>
        <button onClick={() => usetDispatch(userDecrement(-1))}>DECREMENT USER by One</button>
        <h3> Number Of Users: {users}</h3>
      </div>

      
      <div className="container">
        <button
        onClick={() => numberDispatch(increment(3))}
        >Increment
        
        </button>
        <button
        onClick={() => numberDispatch(decrement(1000))}
        >Decrement</button>
        
        <h1>{number.number}</h1>
      </div>

      <div className="container">
        <Laptop />
      </div>
    </>
  )

}

export default App
