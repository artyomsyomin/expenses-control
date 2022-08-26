import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  };

  const editingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} cancelEditing={cancelEditingHandler}/>
      )}
      {!isEditing && <button onClick={editingHandler}>Add new expense</button>}
    </div>
  );
};

export default NewExpense;
