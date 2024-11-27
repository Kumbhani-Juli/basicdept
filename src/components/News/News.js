import React from "react";
import NewsTop from "./NewsTop";
import HomeNewsContainer from "../Home/HomeNewsContainer";

const News = () => {
	const newsFilterData = [
		{ title: "view all" },
		{ title: "press" },
		{ title: "events" },
		{ title: "awards" },
		{ title: "Work" },
	];
	return (
		<div>
			<NewsTop />
			<HomeNewsContainer FilterData={newsFilterData} />
		</div>
	);
};

export default News;
