const Loader = ({ open }) => {
	if (!open) return null;
	return (
		<div className='loader'>
			<div className='loader-inner'></div>
			<style jsx>{`
				.loader {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 100%;
					height: 100vh;
					z-index: 50;
					overflow: hidden;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					background-color: rgba(128, 128, 128, 0.5);
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
