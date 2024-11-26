import React from "react";
import newsarrow from "../../assets/images/home/news-arrow.svg";
import "../../assets/styles/home/homenewscontainer.css";
import news1 from "../../assets/images/home/news1.webp";
import news2 from "../../assets/images/home/news2.webp";
import news3 from "../../assets/images/home/news3.webp";
import news4 from "../../assets/images/home/news4.webp";
import news5 from "../../assets/images/home/news5.webp";
import news6 from "../../assets/images/home/news6.webp";
import news7 from "../../assets/images/home/news7.webp";
import news8 from "../../assets/images/home/news8.webp";
import news9 from "../../assets/images/home/news9.webp";
import news10 from "../../assets/images/home/news10.webp";
const HomeNewsContainer = () => {
	const newsData = [
		{
			img: news1,
			title: "Tomorrow’s shopper: Five ways brands can reach Gen Alpha today",
			span: "Press 10.11.24",
		},
		{
			img: news2,
			title: "Generation Alpha: Say hello to tomorrow’s shopper ",
			span: "Press 7.22.24",
		},
		{
			img: news3,
			title:
				"No longer the affordable option, QSRs look to connect with culture",
			span: "Press 10.11.24",
		},
		{
			img: news4,
			title: "The Future of Fashion and AI at Glossy's Ecommerce Summit",
			span: "Press 6.13.24",
		},
		{
			img: news5,
			title: "Retail’s new playground: where physical meets digital",
			span: "Press 6.3.24",
		},
		{
			img: news6,
			title:
				"Gen Alpha, the beta test for how brands can reach a new generation",
			span: "Press 5.8.24",
		},
		{
			img: news7,
			title: "New Projects on the Podium for the 28th Webby Awards",
			span: "Press 4.24.24",
		},
		{
			img: news8,
			title: "What Sofia Coppola Can Teach Us About Shifting Culture",
			span: "Press 4.18.24",
		},
		{
			img: news9,
			title: "The 28TH Annual Webby Awards Nods Are In",
			span: "Press 4.4.24",
		},
		{
			img: news10,
			title: "Are snacks the new meals in QSR?",
			span: "Press 3.20.24",
		},
	];
	return (
		<>
			<div className="home-news-container">
				<div className="home-news-title">
					<h1>Featured News</h1>
					<button>view all</button>
				</div>
				{newsData.map((item, index) => (
					<div className="row mx-0 home-news-content" key={index}>
						<div className="col-md-4  home-news-left-box">
							<img src={item?.img} className="img-fluid" />
						</div>
						<div className="col-md-8  home-news-right-box">
							<div className="home-news-top-right-content">
								<h5>{item?.title}</h5>
								<img src={newsarrow} />
							</div>
							<span>{item?.span}</span>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default HomeNewsContainer;
