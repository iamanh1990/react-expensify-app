import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set the default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};

	const state = expensesReducer(expenses, action);
	expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('Should not remove expense if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};

	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
	const expense = {
		id: '4',
		description: 'water bill',
		amount: 1540,
		createdAt: 0,
		note: ''
	};

	const action = {
		type: 'ADD_EXPENSE',
		expense
	};

	const state = expensesReducer(expenses, action);
	expect(state).toEqual([ ...expenses, expense ]);
});

test('Should edit an expense by id', () => {
	const amount = 12900;

	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: {
			amount
		}
	};

	const state = expensesReducer(expenses, action);
	expect(state[1].amount).toBe(12900);
});

test('Should not edit an expense if id not found', () => {
	const amount = 12900;

	const action = {
		type: 'EDIT_EXPENSE',
		id: -1,
		updates: {
			amount
		}
	};

	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});
