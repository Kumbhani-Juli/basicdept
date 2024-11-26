import React from "react";
import "../assets/styles/career.css";
import careerImg from "../assets/images/career.webp";

const Career = () => {
	return (
		<>
			<div className="row mx-0 career-container">
				<div className="col-md-6  career-left">
					<div className="career-title">
						<h1>Make</h1>
						<h1>Dope Sh*t.</h1>
						<h1>● Get Paid.</h1>
					</div>
					<div className="career-body">
						Make great work.
						<br />
						Work with great people.
						<br />
						BASIC/DEPT®, Inc 10 - 24©
					</div>
				</div>

				<div className="col-md-6  career-right">
					<div className="career-img-content">
						<img src={careerImg} alt="Career" className="img-fluid" />
						<div className="meta">
							<span>Openings (00)</span>
							<span>Offices (08)</span>
						</div>
					</div>{" "}
					<div className="career-intro-content">
						<p>
							As part of Dept, we operate offices across the world. We’re always
							looking to connect with individuals who want to make the best work
							of their lives with the world’s greatest brands. If you’re
							interested in working with us or learning more, drop us a note,
							portfolio link, or résumé. We’ll take anything you’ve got.
						</p>
						<h3>●</h3>
					</div>
					<button type="button">Apply Here</button>
				</div>
			</div>
		</>
	);
};

export default Career;
