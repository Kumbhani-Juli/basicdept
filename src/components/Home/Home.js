import React from "react";
import Home_intro_media from "./Home_intro_media";
import HomeIntroAwards from "./HomeIntroAwards";
import HomeOverviewContainer from "./HomeOverviewContainer";
import HomeCasestudiesContainer from "./HomeCasestudiesContainer";
import HomeClientContainer from "./HomeClientContainer";
import HomeSpotlight from "./HomeSpotlight";
import HomeNewsContainer from "./HomeNewsContainer";

const Home = () => {
	return (
		<>
			<Home_intro_media />
			<HomeIntroAwards />
			<HomeOverviewContainer />
			<HomeCasestudiesContainer />
			<HomeClientContainer />
			<HomeSpotlight />
			<HomeNewsContainer />
		</>
	);
};

export default Home;
