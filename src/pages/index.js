import Head from 'next/head';
import { useEffect, useReducer } from 'react';
import { getNiftyFiftyStocks } from '@/state/action';
import reducer from '@/state/reducer';
import Loader from '@/components/Loader';
import StockCard from '@/components/StockCard';

const initialState = {
	loading: false,
	error: null,
	niftyFiftyStocks: [],
};

export default function Home() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { loading, error, niftyFiftyStocks } = state;

	useEffect(() => {
		getNiftyFiftyStocks(dispatch);
		const interval = setInterval(() => {
			getNiftyFiftyStocks(dispatch);
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (error) {
			alert(error);
		}
	}, [error]);

	return (
		<>
			<style jsx>{`
				.main {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					min-height: 100vh;
					background: #ededed;
				}
				h1 {
					font-size: 2rem;
					font-weight: 600;
					margin-top: 2rem;
					line-height: 1.15;
				}
				.container {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					align-items: center;
					margin-top: 3rem;
					width: 100%;
				}
			`}</style>
			<Head>
				<title>Stock Market</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='main'>
				<Loader open={loading} />
				<h1>Stocks</h1>
				<div className='container'>
					{niftyFiftyStocks?.map((stock) => (
						<StockCard data={stock} key={stock.identifier} />
					))}
				</div>
			</main>
		</>
	);
}
