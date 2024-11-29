import React from "react";
import "../../assets/styles/about/aboutteam.css";
import team from "../../assets/images/about/team1.webp";
import team2 from "../../assets/images/about/team2.webp";
import team3 from "../../assets/images/about/team3.webp";
import team4 from "../../assets/images/about/team4.webp";
import team5 from "../../assets/images/about/team5.webp";
import team6 from "../../assets/images/about/team6.webp";
import team7 from "../../assets/images/about/team7.webp";
import team8 from "../../assets/images/about/team8.webp";
import team9 from "../../assets/images/about/team9.webp";
import team10 from "../../assets/images/about/team10.webp";

const AboutTeam = () => {
	const teamData = [
		{
			img: team,
			name: "Laura Tron SVP, Clients",
		},
		{
			img: team2,
		},
		{
			img: team3,
			name: "Andrew YanoscikVP, Creative",
		},
		{
			img: team4,
		},
		{
			img: team5,
			name: "Ryan Parkhurst VP, Strategy",
		},
		{
			img: team6,
		},
		{
			img: team7,
			name: "KC Haiker VP, Growth",
		},
		{
			img: team8,
		},
		{
			img: team9,
			name: "Matt Faulk Founder & Partner",
		},
		{
			img: team10,
		},
	];
	return (
		<>
			<div className="about-team-container">
				<div className="row mx-0 about-team-content">
					<div className="col-md-4 about-team-left-content">
						<h1>Team & Leadership</h1>
					</div>{" "}
					<div className="col-md-8 about-team-right-content">
						<p>
							We’re 120+ individuals from across the world driven by bold ideas
							and diverse perspectives. Craft, service, and efficiency drive us
							forward and we see our agency as a place for our shared values to
							collide.
						</p>
					</div>
				</div>
				<div className="about-team-image-container">
					{teamData.map((item, index) => (
						<div className="about-team-image" key={index}>
							<img src={item?.img} alt="Team" className="img-fluid" />
							<p>{item?.name}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default AboutTeam;
