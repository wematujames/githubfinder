import React from "react";

const Loader = () => {
	return (
		<section className="loader-container">
			<div className="loader">
				<div class="preloader-wrapper big active center-align">
					<div class="spinner-layer spinner-blue-only">
						<div class="circle-clipper left">
							<div class="circle"></div>
						</div>
						<div class="gap-patch">
							<div class="circle"></div>
						</div>
						<div class="circle-clipper right">
							<div class="circle"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Loader;
