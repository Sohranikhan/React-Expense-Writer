import React,{useState} from 'react'
import "./addExpDiv.css";
const AddExpense = ({addNewExpense}) => {

  const [title, settitle] = useState('')
  const [cost, setcost] = useState(0)
  const logSubmit = (e) =>{
    e.preventDefault();
    addNewExpense({
      id: Math.floor(Math.random()*999),
      title:title,
      cost:Number(cost)
    });
    settitle('')
    setcost(0)
  }
  return (
    <div className="addExpDiv">
        <h2>Add Expense</h2>
        <form onSubmit={logSubmit}>
            <label htmlFor="Expence Title">Expence Title:</label>
            <input type="text" placeholder="Expence Title" value={title} onChange={(e)=> settitle(e.target.value)} />
            <label htmlFor="">Cost:</label>
            <input type="text" placeholder="Cost: $" value={cost} onChange={(e)=>setcost(e.target.value)} />
            <button type="submit">Add</button>
        </form>
        
    </div>
  )
}

export default AddExpense