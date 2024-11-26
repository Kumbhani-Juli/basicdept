import React from "react";
import "../../assets/styles/home/homespotlight.css";
import video from "../../assets/images/home/home-spotlight.mp4";
const HomeSpotlight = () => {
	return (
		<>
			<div className="row mx-0 home-spotlight">
				<div className="col-md-6 p-2 home-spotlight-left">
					<h1>BASIC/DEPT® helps brands ● connect w/ culture</h1>
					<span>
						<p>Adweek Agency Spotlight</p>
						<button>about us</button>
					</span>
				</div>{" "}
				<div className="col-md-6 p-2 home-spotlight-right">
					<video
						src={video}
						preload="metadata"
						className="responsive-video"
						autoPlay
						muted
						loop
					></video>
				</div>
			</div>
		</>
	);
};

export default HomeSpotlight;
