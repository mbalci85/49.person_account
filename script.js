// 1.
// Create an object called personAccount. With the properties; “firstName” (string), “lastName” (string), “incomes” (array), “expenses” (array) and with the methods “totalIncome”, “totalExpense”, “addIncome”, “addExpenses” and “accountInfo”.

// 2.
// “totalIncome” method calculating all “incomes”.

// 3.
// “totalExpense” method calculating all “expenses”.

// 4.
// “addIncome” method adds new incomes.

// 5.
// “addExpense” method adds new expenses.

// 6.
// “accountInfo” method returns a string that shows the total profit of the person.

// 7.
// Give some default income and expenses first.
// Add some incomes and expenses by using related methods:
// “He has total income : 3150$”
// See your total incomes and expenses by using related methods.

// 8.
// Print this user accounts info in to the console.
// Example output: “Bruce Brown has total 260$ profit today”

const personAccount = {
	firstName: 'Mustafa',
	lastName: 'Balci',
	incomes: [100, 150, 250],
	expenses: [150, 100, 200],
	totalIncome() {
		return `${this.firstName} ${
			this.lastName
		} has total income: ${this.incomes.reduce(
			(acc, value) => acc + value,
			0,
		)}`;
	},
	totalExpense() {
		return `${this.firstName} ${
			this.lastName
		} has total expenses: ${this.expenses.reduce(
			(acc, value) => acc + value,
			0,
		)}`;
	},
	addIncome(income) {
		return this.incomes.push(income);
	},
	addExpenses(expense) {
		return this.expenses.push(expense);
	},
	accountInfo() {
		return `${this.firstName} ${this.lastName} has total ${
			this.incomes.reduce((acc, value) => acc + value, 0) -
			this.expenses.reduce((acc, value) => acc + value, 0)
		} profit today`;
	},
};

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());

personAccount.addIncome(200);
personAccount.addExpenses(100);

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
