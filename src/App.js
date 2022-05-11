import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpenses";

const Dummy__Data = [
  {
    id: "e1",
    title: "Car Insaurance",
    price: "246.74",
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "Home Loan",
    price: "300.74",
    date: new Date(2022, 5, 15),
  },
  {
    id: "e3",
    title: "Toilet Paper",
    price: "50.74",
    date: new Date(2021, 10, 12),
  },
  {
    id: "e4",
    title: "Wooden Desk",
    price: "464.56",
    date: new Date(2021, 7, 26),
  },
];
function App() {
  const [items, setItems] = useState(Dummy__Data);
  const addExpenseHandler = (expense) => {
    setItems((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={items} />
    </div>
  );
}

export default App;
