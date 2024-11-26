import React from "react";
import overviewImg from "../../assets/images/home/overview.svg";
import "../../assets/styles/home/homeoverviewcontainer.css";
const HomeOverviewContainer = () => {
	return (
		<>
			<div className="row mx-0 home-overview-container">
				<hr />
				<div className="col-md-6 p-0">
					<div className="home-overview-content">
						{" "}
						<p className="home-overview-text">
							BASIC/DEPT® is a global branding and digital design agency
							building products, services, and eCommerce experiences that turn
							cultural values into company value.
						</p>
						<button className="overview-button">See the Work</button>
					</div>
				</div>
				<div className="col-md-6 p-0">
					<div className="home-overview-image">
						<img src={overviewImg} />
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeOverviewContainer;
