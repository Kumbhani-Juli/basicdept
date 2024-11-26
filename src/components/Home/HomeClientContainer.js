import React from "react";
import "../../assets/styles/home/homeclientcontainer.css";
import client1 from "../../assets/images/home/home-feature1.webp";
import client2 from "../../assets/images/home/home-feature2.webp";
import client3 from "../../assets/images/home/home-feature3.webp";
import client4 from "../../assets/images/home/home-feature4.webp";
import client5 from "../../assets/images/home/home-feature5.webp";

const HomeClientContainer = () => {
	const clientData = [
		{
			img: client1,
			title: "Google",
			description:
				"Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership ",
		},
		{
			img: client2,
			title: "KFC",
			description:
				"An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership ",
		},
		{
			img: client3,
			title: "Wilson",
			description:
				"A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history. Read our full case study ",
		},
		{
			img: client4,
			title: "AT&amp;T",
			description:
				"Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services.",
		},
		{
			img: client5,
			title: "Patagonia",
			description:
				"Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study ",
		},
	];
	return (
		<>
			{" "}
			<hr />
			<div className="home-client-container">
				<h1>Featured Engagement</h1>
				<div className="home-client-body">
					{clientData.map((item, index) => (
						<div className="home-client-content" key={index}>
							<img src={item?.img} />
							<h1>{item?.title}</h1>
							<p>{item?.description}</p>
						</div>
					))}{" "}
				</div>
			</div>
		</>
	);
};

export default HomeClientContainer;
