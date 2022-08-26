import { useState } from 'react';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import Card from '../UI/Card';

const Expenses = ({ items }) => {
  const [filteredYear, setfilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (itemsToFilter) =>
      itemsToFilter.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
