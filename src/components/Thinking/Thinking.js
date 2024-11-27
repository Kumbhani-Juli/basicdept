import React from "react";
import ThinkingTop from "./ThinkingTop";
import HomeNewsContainer from "../Home/HomeNewsContainer";

const Thinking = () => {
	const thinkingFilterData = [
		{ title: "view all" },
		{ title: "breandbeats" },
		{ title: "applied" },
	];
	return (
		<div style={{ backgroundColor: "#272624", color: "#f9cdcd" }}>
			<ThinkingTop />
			<HomeNewsContainer thinkingFilterData={thinkingFilterData} />
		</div>
	);
};

export default Thinking;
