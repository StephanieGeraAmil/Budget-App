
import './App.css';
import React, { useEffect, useState } from 'react'
import ExpenseList from './Components/ExpenseList';
import ExpenseForm from './Components/ExpenseForm';

import { v4 as uuidv4 } from 'uuid';
const inExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car payment", amount: 400 },
  { id: uuidv4(), charge: "credit card bill", amount: 1200 }
]

const initialExpenses = JSON.parse(localStorage.getItem('expenses')) ? JSON.parse(localStorage.getItem('expenses')) : inExpenses

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [alert, setAlert] = useState({ show: false })
  //edit logic
  const [edit, setEdit] = useState(false)
  const [idToEdit, setIdToEdit] = useState("")

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => { setAlert({ show: false }) }, 3000)
  }


  //local storage
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  },
    [expenses])


  return (
    <div>

 
       <div className='App'>
        <ExpenseForm expenses={expenses} setexpense={setExpenses} alert={alert} handlealert={handleAlert} edit={edit} setedit={setEdit} idtoedit={idToEdit} />
        <ExpenseList expenses={expenses} setexpenses={setExpenses} handlealert={handleAlert} setedit={setEdit} itemtoedit={(setIdToEdit)} />
      </div>
      <div className="result">
      <h3>Total :
        <span className="total">${expenses.reduce((acc, curr) => {
          return (acc += parseInt(curr.amount));
        }, 0)}</span></h3>
    </div>
    </div>
  );
}

export default App;
