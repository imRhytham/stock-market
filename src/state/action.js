import { SET_LOADING, SET_ERROR, SET_NIFTY_FIFTY_STOCKS } from './reducer';
import axios from 'axios';

const setLoading = (loading) => ({
	type: SET_LOADING,
	payload: loading,
});

export const getNiftyFiftyStocks = async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await axios.get(
			'https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY+50',
			{
				headers: {
					'x-rapidapi-key':
						'5ed9d1f5dcmsh6cac4cc691db857p19aac9jsnf8ae57cce611',
					'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com',
				},
			}
		);
		dispatch({
			type: SET_NIFTY_FIFTY_STOCKS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: SET_ERROR,
			payload: error,
		});
	} finally {
		dispatch(setLoading(false));
	}
};
