import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => { // adding prop as an argument 
// function that takes in the form data object adds a id. passess this data to another
// custom prop(function) so the data can be passed to the parent when onAddEcpense prop is used.
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),

    };
    props.onAddExpense(expenseData);

  };


  return (
    <div className="new-expense">
     {/* create custom prop, pass onSaveExpenseDataHandler function as pointer
     recieve data from the child(ExpenseForm)*/}
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
