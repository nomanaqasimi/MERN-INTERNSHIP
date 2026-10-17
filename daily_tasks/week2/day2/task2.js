const expenses = [
{ category: "Food", amount: 300 },
{ category: "Transport", amount: 150 },
{ category: "Shopping", amount: 400 },
];
const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
console.log(`Total expenses: ${totalExpenses}`);