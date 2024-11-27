import React, { useState } from "react";
import newsarrow from "../../assets/images/home/news-arrow.svg";
import "../../assets/styles/home/homenewscontainer.css";
import newsData from "../../Data/NewsData";
import thinkingData from "../../Data/ThinkingData";

const HomeNewsContainer = ({ FilterData, thinkingFilterData }) => {
	const [selectedNews, setSelectedNews] = useState(
		FilterData?.[0] || thinkingFilterData?.[0] || null
	);

	const selectedNewsData = FilterData
		? selectedNews?.title.toLowerCase() === "view all"
			? newsData
			: newsData?.filter(
					(item) =>
						item?.type.toLowerCase() === selectedNews?.title.toLowerCase()
			  )
		: thinkingFilterData
		? selectedNews?.title.toLowerCase() === "view all"
			? thinkingData
			: thinkingData?.filter(
					(item) =>
						item?.type.toLowerCase() === selectedNews?.title.toLowerCase()
			  )
		: null;

	return (
		<>
			<div className="home-news-container">
				<div className="home-news-container">
					{FilterData ? (
						<div className="home-news-filter-data">
							{FilterData?.map((item, index) => (
								<div
									key={index}
									className="filter-item"
									style={{ cursor: "pointer" }}
								>
									<input
										type="radio"
										id={`filter-${index}`}
										name="filter"
										value={item?.title}
										checked={selectedNews?.title === item?.title}
										onChange={() => setSelectedNews(item)}
									/>
									<label htmlFor={`filter-${index}`}>{item?.title}</label>
								</div>
							))}
						</div>
					) : thinkingFilterData ? (
						<div className="home-news-filter-data">
							{thinkingFilterData?.map((item, index) => (
								<div
									key={index}
									className="filter-item"
									style={{ cursor: "pointer" }}
								>
									<input
										type="radio"
										id={`filter-thinking-${index}`}
										name="filter"
										value={item?.title}
										checked={selectedNews?.title === item?.title}
										onChange={() => setSelectedNews(item)}
									/>
									<label htmlFor={`filter-thinking-${index}`}>
										{item?.title}
									</label>
								</div>
							))}
						</div>
					) : (
						<div className="home-news-title">
							<h1>Featured News</h1>
							<button>view all</button>
						</div>
					)}
				</div>

				{FilterData ? (
					<>
						{selectedNewsData?.map((item, index) => (
							<div className="row mx-0 home-news-content" key={index}>
								<div className="col-md-4 home-news-left-box">
									<img
										src={item?.img}
										className="img-fluid"
										alt={item?.title}
									/>
								</div>
								<div className="col-md-8 home-news-right-box">
									<div className="home-news-top-right-content">
										<h5>{item?.title}</h5>
										<img src={newsarrow} alt="arrow icon" />
									</div>
									<span>{item?.span}</span>
								</div>
							</div>
						))}
					</>
				) : thinkingFilterData ? (
					<>
						{selectedNewsData?.map((item, index) => (
							<div
								className="row mx-0 home-news-content"
								style={{ borderColor: item?.borderColor }}
								key={index}
							>
								<div className="col-md-4 home-news-left-box">
									<img
										src={item?.img}
										className="img-fluid"
										alt={item?.title}
									/>
								</div>
								<div className="col-md-8 home-news-right-box">
									<div className="home-news-top-right-content">
										<h5>{item?.title}</h5>
										<img
											src={newsarrow}
											alt="arrow icon"
											style={{
												filter:
													"invert(85%) sepia(15%) saturate(300%) hue-rotate(310deg) brightness(100%) contrast(90%)",
											}}
										/>
									</div>
									<span>{item?.span}</span>
								</div>
							</div>
						))}
					</>
				) : (
					<>
						{newsData
							?.filter((item) => item?.title.toLowerCase() === "press")
							.map((item, index) => (
								<div className="row mx-0 home-news-content" key={index}>
									<div className="col-md-4 home-news-left-box">
										<img
											src={item?.img}
											className="img-fluid"
											alt={item?.title}
										/>
									</div>
									<div className="col-md-8 home-news-right-box">
										<div className="home-news-top-right-content">
											<h5>{item?.title}</h5>
											<img src={newsarrow} alt="arrow icon" />
										</div>
										<span>{item?.span}</span>
									</div>
								</div>
							))}
					</>
				)}
			</div>
		</>
	);
};

export default HomeNewsContainer;
