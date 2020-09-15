import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('Should render Expense Dashboard page correctly', () => {
	const wrapper = shallow(<ExpenseDashboardPage />);
	expect(wrapper).toMatchSnapshot();
});
