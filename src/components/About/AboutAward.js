import React from "react";
import "../../assets/styles/about/aboutaward.css";
const AboutAward = () => {
	return (
		<>
			<div className="about-award-container">
				{" "}
				<div className="row mx-0 about-award-content">
					<div className="col-md-4 about-award-left-content">
						<h1>Awards</h1>
					</div>{" "}
					<div className="col-md-8 about-award-right-content">
						<h1>
							While results are what matter most, we believe awards bring value
							and recognition to organizations as well as individuals.
						</h1>
						<button>Full Awards List</button>
					</div>
				</div>
				<div className="about-award-title">
					<h1>Webby Awards/145</h1>
					<h1>Adweek/01</h1>
					<h1>Awwwards/28</h1>
					<h1>D&AD/01</h1>
					<h1>One Show/05</h1>
					<h1>The FWA/09</h1>
					<h1>Comm Arts/04</h1>
				</div>
			</div>
		</>
	);
};

export default AboutAward;
