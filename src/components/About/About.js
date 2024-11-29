import React from "react";
import AboutTop from "../About/AboutTop";
import AboutAgency from "./AboutAgency";
import AboutCapablitites from "./AboutCapablitites";
import AboutAward from "./AboutAward";
import AboutTeam from "./AboutTeam";
import AboutGallerySection from "./AboutGallerySection";
const About = () => {
	return (
		<div>
			<AboutTop />
			<AboutGallerySection />
			<AboutAgency />
			<AboutCapablitites />
			<AboutAward />
			<AboutTeam />
		</div>
	);
};

export default About;
