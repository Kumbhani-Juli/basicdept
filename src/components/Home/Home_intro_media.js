import React from "react";
import video from "../../assets/images/home/home-intro-bgvideo.mp4";
const Home_intro_media = () => {
	return (
		<>
			<div className="home_intro_media_container">
				<video
					src={video}
					autoPlay
					loop
					muted
					style={{
						width: "100%",
						position: "relative",
						height: "100vh",
						zIndex: "0",
						objectFit: "cover",
					}}
				></video>
			</div>
		</>
	);
};

export default Home_intro_media;
