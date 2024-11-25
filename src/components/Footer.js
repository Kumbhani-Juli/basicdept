import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../assets/styles/footer.css";
const Footer = () => {
	const FooterData = [
		{
			title: "Social",
			contentLists: [
				{ content: "Instagram" },
				{ content: "Twitter" },
				{ content: "LinkedIn" },
				{ content: "Facebook" },
			],
		},
		{
			title: "initiatives",
			contentLists: [
				{ content: "Applied" },
				{ content: "Brandbeats" },
				{ content: "Moves" },
				{ content: "B®/Good" },
			],
		},
		{
			title: "offices",
			contentLists: [
				{ content: "San Diego – CA " },
				{ content: "New York – NY" },
				{ content: "Bay Area – CA" },
				{ content: "St. Louis – MO" },
				{ content: "London – EN" },
				{ content: "Berlin – GE" },
				{ content: "Argentina – AR" },
			],
		},
	];
	return (
		<>
			<div className="footer-container">
				<div className="row mx-0 footer-content">
					<div className="col-md-6 footer-content-left">
						<h1>b/d®</h1>
						<h2>Stay in the know</h2>
						<div className="footer-content-left-input">
							<input type="text" placeholder="Email Address" />
							<FontAwesomeIcon
								icon={faArrowRight}
								className="footer-right-icon"
							/>
						</div>
					</div>

					<div className="col-md-6 footer-content-right">
						{" "}
						<p className="">
							We collaborate with ambitious brands and people. Let's build.
						</p>
						<div className="footer-content-right-box">
							{FooterData?.map((item, index) => (
								<div className="footer-content-right-box-body" key={index}>
									<h2>{item?.title}</h2>
									{item?.contentLists?.map((data, index) => (
										<p key={index}>{data?.content}</p>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
