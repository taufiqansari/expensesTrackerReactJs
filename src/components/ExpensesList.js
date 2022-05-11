import React from "react";
import "./ExpensesList.css";
import ExpensesItem from "./ExpensesItem";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((items) => (
        <ExpensesItem
          key={items.id}
          title={items.title}
          price={items.price}
          date={items.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
