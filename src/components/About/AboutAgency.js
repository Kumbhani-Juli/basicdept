import React from "react";
import agency from "../../assets/images/header-logo.svg";
import "../../assets/styles/about/aboutagency.css";
const AboutAgency = () => {
	const agencyData = [
		{
			title: "People",
			span: "120+",
			description:
				"We're a world-class team of diverse individuals who are here to do great work as well as be great to work with.",
		},
		{
			title: "Global Reach",
			span: "28",
			description:
				"As part of Dept, we have 28 offices and 1,500+ people across the world dedicated to delivering the best design, strategy, and technology services to our client partners.",
		},
		{
			title: "Years ",
			span: "10",
			description:
				"While we’re proud of our history and our accomplishments, we’re loyal to our future and not our past.",
		},
		{
			title: "Growth",
			span: "168%",
			description:
				"As Adweek’s 18th fastest growing agency, we’ve strengthened our company with new leadership, talent, and clients the past two years. We’re hiring btw",
		},
		{
			title: "Services",
			span: "05",
			description:
				"Strategy. Brand Experience. Digital Experience. Content. Technology. We’re uniquely built to build brands that matter in culture.",
		},
		{
			title: "Ranking",
			span: "01",
			description:
				"Within the mobile and website related categories, no other agency has been recognized by the Webby Awards more than us the past four years. Explore our work.",
		},
	];
	return (
		<>
			<div className="about-agency-container">
				<div className="agency-image">
					<img src={agency} alt="Agency" className="img-fluid" />
				</div>
				<div className="row mx-0 agency-section">
					<div className="col-md-4 agency-left-section">
						<h1>
							Agency <br />
							Snapshot
						</h1>
					</div>{" "}
					<div className="col-md-8 agency-right-section">
						{agencyData.map((item, index) => (
							<div className="agency-right-content-body" key={index}>
								<span>{item?.title}</span>
								<h1>{item?.span}</h1>
								<p>{item?.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutAgency;
