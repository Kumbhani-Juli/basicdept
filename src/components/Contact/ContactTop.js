import React from "react";
import contactTop from "../../assets/images/contact/careertop.webp";
import "../../assets/styles/contact/contacttop.css";
const ContactTop = () => {
	return (
		<div>
			<div className="row mx-0 contact-top-container">
				<div className="col-md-6 contact-left">
					<img src={contactTop} className="img-fluid" />
				</div>{" "}
				<div className="col-md-6 contact-right">
					<div className="contact-right-title">
						{" "}
						<h1>
							B/D
							<br />
							Contact
						</h1>
					</div>

					<p>
						Easy to understand.
						<br /> Impossible to ignore.™
						<br /> BASIC/DEPT®, Inc 10 - 24©
					</p>
					<div className="contact-right-box">
						<div className="contact-icon">●</div>
						<div className="contact-right-body">
							<div className="contact-right-content">
								<h1>New Business</h1>
								<a href="#">biz@basicagency.com</a>
							</div>
							<div className="contact-right-content">
								<h1>Press</h1>
								<a href="#">biz@basicagency.com</a>
							</div>
						</div>
						<div className="contact-right-body">
							<div className="contact-right-content">
								<h1>General</h1>
								<a href="#">hi@basicagency.com</a>
							</div>
							<div className="contact-right-content">
								<h1>Join Us</h1>
								<a href="#">recruitment@basicagency.com (Various Openings)</a>
							</div>
							<button>Apply Now </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactTop;
