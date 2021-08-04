import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdSend } from 'react-icons/md';
import Alert from './Alert';
const ExpenseForm = ({ expenses, setexpense, alert, handlealert, edit, setedit, idtoedit }) => {
    /// ************** state values ******************
    const [charge, setCharge] = useState("")
    const [amount, setAmount] = useState("")



    const fillfields = () => {
        if (edit) {
            const expenseBeingEdited = expenses.find((obj) => obj.id === idtoedit);
            setCharge(expenseBeingEdited.charge);
            setAmount(expenseBeingEdited.amount);
        } else {
            setCharge('');
            setAmount('');
        }

    }
    useEffect(fillfields, [edit, idtoedit])

    const handleSubmit = e => {
        e.preventDefault()
        if (charge !== "" && amount > 0) {
            setexpense([...expenses, { id: uuidv4(), charge, amount }])
            setCharge("")
            setAmount("")
            //alert
            handlealert({ type: 'success', text: "item added" })
        } else {
            handlealert({
                type: 'danger', text: `charge can't be empty and 
             amount has to be bigger than zero  ` })
        }
    };
    const handleEdit = e => {
        e.preventDefault()
        if (charge !== "" && amount > 0) {
            setexpense(expenses.map(obj => obj.id === idtoedit ? { ...obj, charge: charge, amount: amount } : obj))
            setCharge("")
            setAmount("")
            handlealert({ type: 'success', text: "item edited" })
            setedit(false)
        } else {
            handlealert({
                type: 'danger', text: `charge can't be empty and 
             amount has to be bigger than zero  ` })
        }

    }


    /// **************  functionality ******************
    return (
        <div>
            {alert.show && <Alert type={alert.type} text={alert.text}></Alert>}

            <form onSubmit={edit ? handleEdit : handleSubmit}>
                <div className="form-center">
                    <div className="form-group">
                       
                        <input id="charge" name="charge" placeholder="Charge" type="text" className="form-control" onChange={(e) => { setCharge(e.target.value) }} value={charge} />
                    </div>
                    <div className="form-group">
                      
                        <input id="amount" name="amount" placeholder="Amount" type="number" className="form-control" onChange={(e) => { setAmount(e.target.value) }} value={amount} />
                    </div>



                </div>
                <button type="submit" className="btn">{edit ? 'Edit' : 'Submit'}<MdSend className='btn-icon' /></button>
            </form>
        </div>)
};
export default ExpenseForm;