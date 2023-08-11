import React,{useState} from 'react'
import BudjetComponent from "./BudjetComponent";
import Expenses from "./Expenses";
import AddExpense from "./AddExpense";
import "./body.css";

const Body = () => {
  
  const expensesItems =[];
  const [expense, setexpense] = useState([
    { id: 12, title: 'shopping', cost: 40 },
		{ id: 13, title: 'holiday', cost: 400 },
		{ id: 14, title: 'car service', cost: 50 },
	])



  const deleteExp = (id) =>{
    const newArr = expense.filter((item)=> item.id !== id)
    setexpense(newArr)
    ontype()
  }

  const addNewExpense = (newObj) =>{
  expensesItems.push(newObj, ...expense)
  setexpense(expensesItems)

  ontype()
}

 const ontype = () =>{
  var total=0;
    expense.map(item=>
      Number(total += item.cost))  
  return total
  } 
return (
<div className="mainDiv">
<BudjetComponent ontype = {ontype}/>
<Expenses expense={expense} deleteExp={deleteExp} />
<AddExpense addNewExpense ={addNewExpense}/>
</div>
  )
}

export default Body