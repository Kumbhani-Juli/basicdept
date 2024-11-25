import React from "react";
import award1 from "../../assets/images/home/home-award1.svg";
import award2 from "../../assets/images/home/home-award2.svg";
import award3 from "../../assets/images/home/home-award3.svg";
import "../../assets/styles/home/homeintroaward.css";
const HomeIntroAwards = () => {
	const awardsData = [
		{ img: award1, title: "Design and Branding Agency of the Year" },
		{ img: award2, title: "Agency of the Year" },
		{
			img: award3,
			title: "Digital Innovation Agency of the Year Finalist",
		},
	];
	return (
		<>
			<div className="row mx-0 home-intro-award-container">
				{awardsData.map((item, index) => (
					<div className="col-md-4 col-4 home-intro-award-box" key={item}>
						<div className="home-intro-award-box-img">
							{" "}
							<img src={item?.img} />
						</div>

						<h1>{item?.title}</h1>
					</div>
				))}
			</div>
		</>
	);
};

export default HomeIntroAwards;
