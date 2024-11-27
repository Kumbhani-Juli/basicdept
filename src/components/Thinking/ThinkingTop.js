import React from "react";
import "../../assets/styles/Thinking/thinkingtop.css";
const ThinkingTop = () => {
	return (
		<>
			<div className="thinking-top-container">
				<div className="thinking-top-title">
					<h1>Thinking</h1>
					<span>●</span>
				</div>
				<div className="thinking-top-content">
					<div className="thinking-top-intro">
						<h3>Brandbeats®</h3>
						<p>
							Brandbeats® is our agency podcast garnering over 45,000+ listens
							per episode where we discuss industry happenings for 30 minutes as
							well as provide ten tracks of curated music. Our conversations are
							a candid exploration of design topics, branding trends, and
							experiences we’re noticing in culture.
						</p>
					</div>
					<div className="thinking-top-intro">
						<h3>Applied®</h3>
						<p>
							Applied® is our panel series and thought-leadership platform where
							we share perspectives and tactics related to strategy, design, and
							technology. The content is raw and driven by honest observations
							and guided questions that use culture to explain why trends exist
							and how they impact business and tech.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ThinkingTop;
