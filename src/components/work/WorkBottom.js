import React, { useState } from "react";
import "../../assets/styles/work/workbottom.css";
import services1 from "../../assets/images/work/services1.webp";
import serviceData from "../../Data/ServiceData";
import { tab } from "@testing-library/user-event/dist/tab";
import { data } from "react-router-dom";
const WorkBottom = () => {
	const tabData = [
		{ title: "services" },
		{ title: "industries" },
		{ title: "all work" },
	];
	const [tabTitle, settabTitle] = useState(tabData[0]?.title);
	const selectedserviceData =
		tabTitle.toLowerCase() === "all work"
			? serviceData
			: serviceData.filter(
				(data) => data?.type.toLowerCase() === tabTitle.toLowerCase()
			);

	const allWorkFilterData = [
		{
			title: "services",
			contentData: [
				{ title: "Branded eCommerce" },
				{ title: "Customer Experience Strategy" },
				{ title: "Branding + Advertising" },
				{ title: "Websites + Platforms" },
				{ title: "Digital Products + Services" },
			],
		},
		{
			title: "industries",
			contentData: [
				{ title: "Retail + eCommerce" },
				{ title: "Consumer Culture" },
				{ title: "Non-Profit" },
				{ title: "Software + Technology" },
			],
		},
	];
	const [allWorkFilterTitle, setAllWorkFilterTitle] = useState(null);
	const allWorkFilterDataIndex = serviceData.filter(
		(data) => data?.title.toLowerCase() === allWorkFilterTitle
	);
	return (
		<>
			<div className="work-bottom-container">
				<div className="work-bottom-tab-container">
					<ul>
						{tabData?.map((data, index) => (
							<li key={index}
								style={{
									borderBottom: data?.title?.toLowerCase() === tabTitle?.toLowerCase() ? '1px solid' : '',
								}} onClick={() => settabTitle(data?.title)}>
								{data?.title}
							</li>
						))}
					</ul>

					<p>
						The work we create lives at the intersection of clarity and surprise
						and positions brands in culture through shared values and ideals.
					</p>
				</div>
				{tabTitle.toLowerCase() !== "all work" && (
					<>
						{" "}
						{selectedserviceData?.map((data, index) => (
							<div className="row mx-0 work-bottom-content" key={index}>
								<div className="col-md-4 work-bottom-left-content">
									<h1>{data?.title}</h1>
									<p>{data?.description}</p>
									{data?.button && <button>{data?.button}</button>}
								</div>
								<div className="col-md-8 work-bottom-right-content">
									{data?.contentData?.map((item, index) => (
										<div className="work-bottom-box" key={index}>
											<img src={item?.image} className="img-fluid" />
											<div className="work-bottom-intro">
												<h1>{item?.title}</h1>
												<p>{item?.description}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</>
				)}
				{tabTitle.toLowerCase() === "all work" && (
					<div className="row mx-0 work-bottom-all-work-container">
						<div className="col-md-4 work-bottom-all-work-left-content">
							{allWorkFilterData?.map((data, index) => (
								<div
									className="work-bottom-all-work-left-content-body"
									key={index}
								>
									<h1>{data?.title}</h1>

									{data?.contentData?.map((item, idx) => (
										<div
											key={idx}
											className="work-bottom-all-work-left-content-body-list"
										>
											{" "}
											<input
												type="radio"
												name={`radioGroup-${index}`}
												value={item?.title}
												className="mx-2"
												checked={item?.title.toLowerCase() === allWorkFilterTitle}
												onChange={() =>
													setAllWorkFilterTitle(item?.title.toLowerCase())
												}
											/>
											<label
												style={{ textTransform: "uppercase", fontWeight: 600 }}
											>
												{item?.title}
											</label>
										</div>
									))}
								</div>
							))}
						</div>
						<div className="col-md-8 work-bottom-all-work-right-content">
							{allWorkFilterTitle === null ? (
								<>
									{serviceData?.map((data, index) => (
										<div
											className="work-bottom-all-work-right-content-body"
											key={index}
										>
											{data?.contentData?.map((item, idx) => (
												<div className="work-bottom-box" key={idx}>
													<img src={item?.image} className="img-fluid" />
													<div className="work-bottom-intro">
														<h1>{item?.title}</h1>
														<p>{item?.description}</p>
													</div>
												</div>
											))}
										</div>
									))}
								</>
							) : allWorkFilterDataIndex?.length > 0 ? (
								<>
									{allWorkFilterDataIndex?.map((data, index) => (
										<div
											className="work-bottom-all-work-right-content-body"
											key={index}
										>
											{data?.contentData?.map((item, idx) => (
												<div className="work-bottom-box" key={idx}>
													<img src={item?.image} className="img-fluid" />
													<div className="work-bottom-intro">
														<h1>{item?.title}</h1>
														<p>{item?.description}</p>
													</div>
												</div>
											))}
										</div>
									))}
								</>
							) : (
								<div className="no-data-message">
									<h2 style={{ textAlign: "center", marginTop: "4rem" }}>
										No data available
									</h2>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default WorkBottom;
