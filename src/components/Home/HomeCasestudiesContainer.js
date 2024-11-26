import React from "react";
import "../../assets/styles/home/homecasestudiescontainer.css";
import case1 from "../../assets/images/home/home-overview1.webp";
import case2 from "../../assets/images/home/home-overview2.webp";
import video1 from "../../assets/images/home/home-overview3.mp4";
import "../../assets/styles/home/homecasestudiescontainer.css";
const HomeCasestudiesContainer = () => {
	const caseStudiesData = [
		{
			img: case1,
			title: "Patagonia",
			description:
				"An eCommerce experience driven by Patagonia’s brand mission",
		},
		{
			img: case2,
			title: "Wilson",
			description: "A century-old sports brand finding its place in culture",
		},
		{
			video: video1,
			title: "Google Store",
			description:
				"An eCommerce experience helping Google bring its hardware to people across the globe",
		},
	];
	return (
		<>
			<div className="row mx-0 case-studies-container">
				{caseStudiesData.map((item, index) => (
					<div className="col-md-4 case-studies-content" key={index}>
						<div className="case-studies-img">
							{item?.img && <img src={item?.img} />}
							{item?.video && (
								<video
									src={item?.video}
									preload="metadata"
									poster="path-to-your-poster-image.jpg"
									className="responsive-video"
									autoPlay
									muted
									loop
								></video>
							)}
						</div>

						<h1>{item?.title}</h1>
						<p>{item?.description}</p>
					</div>
				))}{" "}
			</div>{" "}
		</>
	);
};

export default HomeCasestudiesContainer;
