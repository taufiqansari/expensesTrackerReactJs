import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filterExpenses = props.items.filter((items) => {
    return items.date.getFullYear().toString() === filterYear;
  });
  return (
    <Card>
      <div className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart items={filterExpenses} />
        <ExpensesList items={filterExpenses} />
      </div>
    </Card>
  );
}
export default Expenses;
