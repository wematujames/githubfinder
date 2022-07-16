import React from "react";

const Loader = () => {
	return (
		<section className="loader-container">
			<div className="loader">
				<div className="preloader-wrapper big active center-align">
					<div className="spinner-layer spinner-blue-only">
						<div className="circle-clipper left">
							<div className="circle"></div>
						</div>
						<div className="gap-patch">
							<div className="circle"></div>
						</div>
						<div className="circle-clipper right">
							<div className="circle"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Loader;
