//Set filter text
export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

//Sort by amount
export const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

//Sort by date
export const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

//Set Startdate
export const setStartDate = (startDate = undefined) => ({
	type: 'SET_START_DATE',
	startDate
});

//SetEndDate
export const setEndDate = (endDate = undefined) => ({
	type: 'SET_END_DATE',
	endDate
});
