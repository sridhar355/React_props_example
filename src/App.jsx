import { useState } from "react";
import Card from "./Card";


function App() {
  // var count = 10;
  const [count, setCount] = useState(0)

  function increaseCount(){
    setCount(count+1)
  }
  var names = [{name:"A"},{name:"B"},{name:"C"},{name:"D"}]
  // var a = [<Card name="A"/>,<Card name="B"/>,<Card name="C"/>,<Card name="D" />,]

  var a = names.map((item,index) => {
    return <Card name={item.name}/>
  })
  return (
    <>
      <div>
        {/* <h1>Count is : {count}</h1>
        <button onClick={increaseCount}>Increase Count</button> */}
        {a}
        
      </div>
    </>
  )
}

export default App
