import React,{useState} from 'react'
import "./budjetComponent.css";
const BudjetComponent = ({ontype}) => {

const [budjet, setbudjet] = useState(0)
const [condition, setcondition] = useState(true)
// const [ctrl, setctrl] = useState(0)
const calcSpend = (e) =>{
  setbudjet(e.target.value)
}
const handleBtn = () =>{
  setcondition((condition)=> !condition)
}

return (
    <div className="main">
<h1>My Budjet Planner</h1>
<div className="expense">

<div className="budjetDiv">
  <span>Budjet:</span>
  <input className="budjetInput" type="number" value={budjet} onChange={calcSpend} 
  disabled = {condition?"disabled":""} />
  <button className="budjetEditBtn" onClick={handleBtn}>{condition?"Edit":"Done"}</button>
</div>
<div className="budjetDiv">
  <span>Remaining: {Number(budjet-ontype())}</span>
</div>
<div className="budjetDiv">
  <span>Total Spend: {Number(ontype())}$</span>
</div>

</div>
</div>
  )
}

export default BudjetComponent