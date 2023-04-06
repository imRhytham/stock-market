const Loader = ({ open }) => {
	if (!open) return null;
	return (
		<div className='loader'>
			<div className='loader-inner'></div>
			<style jsx>{`
				.loader {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100%;
					z-index: 50;
				}
				.loader-inner {
					border: 5px solid #f3f3f3;
					border-radius: 50%;
					border-top: 5px solid #3498db;
					width: 40px;
					height: 40px;
					-webkit-animation: spin 2s linear infinite;
					animation: spin 2s linear infinite;
				}
				@-webkit-keyframes spin {
					0% {
						-webkit-transform: rotate(0deg);
					}
					100% {
						-webkit-transform: rotate(360deg);
					}
				}
				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
			`}</style>
		</div>
	);
};

export default Loader;
