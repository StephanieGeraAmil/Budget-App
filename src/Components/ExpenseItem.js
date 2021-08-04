import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
const ExpenseItem
    = ({ id, charge, amount, expenses, setexpenses, handlealert, setedit, itemtoedit }) => {
        //edit button
        const editExpense = () => {
            setedit(true)
            itemtoedit(id)
        }

        //delete expense
        function deleteExpense(id) {
            setexpenses(expenses.filter((obj) => obj.id !== id))
            handlealert({
                type: 'danger', text: `Item Deleted`
            })
        }

        return (<li className='item' id={id}>
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">${amount}</span>

            </div>
            <div>
                <button className="edit-btn" aria-label="edit button" onClick={() => { editExpense(id) }}><MdEdit /></button>
                <button className="clear-btn" aria-label="delete button" onClick={() => { deleteExpense(id) }}><MdDelete /></button>
            </div>

        </li>)
    };
export default ExpenseItem
    ;