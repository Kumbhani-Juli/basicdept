import React from "react";
import "../../assets/styles/work/workbottom.css";
import services1 from "../../assets/images/work/services1.webp";
import serviceData from "../../Data/ServiceData";
const WorkBottom = () => {
	return (
		<>
			<div className="work-bottom-container">
				<div className="work-bottom-tab-container">
					<ul>
						<li>services</li>
						<li>industries</li>
						<li>all work</li>
					</ul>
					<p>
						The work we create lives at the intersection of clarity and surprise
						and positions brands in culture through shared values and ideals.
					</p>
				</div>
				{serviceData?.map((data, index) => (
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
			</div>
		</>
	);
};

export default WorkBottom;
