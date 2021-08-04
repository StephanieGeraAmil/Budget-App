import React from 'react';
import Item from './ExpenseItem'
import { MdDelete } from 'react-icons/md'
const ExpenseList = ({ expenses, setexpenses, handlealert, setedit, itemtoedit }) => {
    //clear all items
    const clearAllExpenses = () => {
        setexpenses([])
        handlealert({
            type: 'danger', text: `Deleted all Items`
        })
    }

    return (<>
        <ul className='list'>
            {expenses.map((e) => <Item key={e.id} id={e.id} charge={e.charge} amount={e.amount} expenses={expenses} setexpenses={setexpenses} handlealert={handlealert} setedit={setedit} itemtoedit={itemtoedit} />)}
        </ul>
        {expenses.length > 0 && <button className='btn' onClick={clearAllExpenses} >clear expenses<MdDelete className='btn-icon' /></button>}
    </>)
};
export default ExpenseList;