const StockCard = ({ data }) => {
	return (
		<div className='card'>
			<div className='card-body'>
				<h5 className='card-title'>{data.symbol}</h5>
				<p>Qty: {data.totalTradedVolume}</p>
			</div>
			<div className='price-container'>
				<p className='card-text'>₹{data.lastPrice.toFixed(2)}</p>
				<div className='price'>
					<p className={data.change >= 0 ? 'text-plus' : 'text-negative'}>
						{`(${data.change.toFixed(2)})`}
						<span> {data.pChange}%</span>
					</p>
				</div>
			</div>
			<style jsx>{`
				.card {
					width: 30vw;
					height: 7vh;
					margin-left: 1rem;
					padding: 0.5rem;
					background-color: #f8f9fa;
					border-bottom: 1px solid #ccc;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}
				.card-title {
					font-size: 1.5rem;
				}
				.price-container {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
				}
				.price {
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
				}

				.text-plus {
					color: #4ca7a2;
				}
				.text-negative {
					color: #f05a5a;
				}

				@media (max-width: 768px) {
					.card {
						width: 75vw;
						margin-left: 0;
					}
				}

				@media (max-width: 480px) {
					.card {
						width: 100vw;
						margin-left: 0;
					}
				}
			`}</style>
		</div>
	);
};

export default StockCard;
