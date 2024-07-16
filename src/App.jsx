import { useEffect, useMemo, useState } from 'react'
import './App.css'


function App() { //we use usememo so that the re rendering again dosent happen when we click the counter button

  const [counter,setCounter] = useState(0);
  const [inputValue,setInputValues] = useState(1);
  //const [finalValue,setFinalValue] = useState(0);
  

  let count = useMemo(() => { //this stops the re-rendering  when the counter button is clicked and only works when the inputValue changes and therefore that is the work of sideHOoks
    let finalCount = 0 ;
    for(let i = 0 ; i <= inputValue ; i++){
      finalCount = finalCount + i;
    }
    return finalCount;
  } , [inputValue]);

  //useEffect(() => { //this is another approach which causes two re renders but it is acceptable , we have to understand the useEffect() only very nicely bcoz it is the most used and useMemo is not used a lot
    //let count = 0;
    //for(let i = 0 ; i <=inputValue ; i++){
      //count = count+ i;
    //}
    //setFinalValue(count)
  //},[inputValue])

  return <div>
    <input onChange={(e) => {
      setInputValues(e.target.value); //e.target.value gives you the actual value inside the input box 
    }} placeholder={"FInd sum from 1 to n"}></input>
    <br />
    sum from 1 to {inputValue} is {count} //now you see here the state is changed the current input value is there that is we updated the setInputValues to the new one that is the e.target.values that is what it is taking as input
    <br />
    <button onClick={() => { //when we click on the button then the code runs again from the start then the state variable changes and then it renders again (this is a issue) we clear this by using useMEMO
      setCounter(counter + 1);
    }}>counter {counter}</button> 
  </div>
}  

export default App
