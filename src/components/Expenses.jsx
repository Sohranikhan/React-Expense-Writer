
import "./expenses.css";
const expenses = ({expense,deleteExp}) => {
   
    return (
    <div className="center expDiv">
        <h2>Expenses</h2>
        <input type="text" className="searchInput" placeholder="Type to search.." />
<div className="itemMain">
        {expense.map((item)=>(

            <div className="item" key={item.id}>
                <h3>{item.title}</h3>
                <div className="buttonDiv">
                <h4>${item.cost}</h4>
                <button onClick={()=>deleteExp(item.id)}>Delete</button>
                </div>
            </div>
        )
        )}
        </div>
    </div>
  )
}

export default expenses