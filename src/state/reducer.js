export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_NIFTY_FIFTY_STOCKS = 'SET_NIFTY_FIFTY_STOCKS';

const initialState = {
	loading: false,
	error: null,
	niftyFiftyStocks: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case SET_NIFTY_FIFTY_STOCKS:
			return {
				...state,
				niftyFiftyStocks: action.payload,
			};
		default:
			return state;
	}
}
