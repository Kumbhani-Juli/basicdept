import React from "react";
import "../../assets/styles/contact/contactoffice.css";
import img from "../../assets/images/contact/offices1.webp";
import img2 from "../../assets/images/contact/offices2.webp";
import img3 from "../../assets/images/contact/offices3.webp";
import img4 from "../../assets/images/contact/offices4.webp";
import img5 from "../../assets/images/contact/offices5.webp";
import img6 from "../../assets/images/contact/offices6.webp";
import img7 from "../../assets/images/contact/offices7.webp";
import img8 from "../../assets/images/contact/offices8.webp";
const ContactOffice = () => {
	const ContactOfficeData = [
		{
			img: img,
			title: "San Diego",
			time: "8:09 PM PST",
			address: "350 Tenth Ave Suite 700",
			city: "San Diego, CA 92101",
		},
		{
			img: img2,
			title: "New York",
			time: "11:44 PM EST",
			address: "36 E 20th St #6",
			city: "New York, NY 10003",
		},
		{
			img: img3,
			title: "Bay Area",
			time: "8:44 PM PST",
			address: "*The location of this office",
			city: "is undisclosed.",
		},
		{
			img: img4,
			title: "St. Louis",
			time: "10:45 PM CST",
			address: "4814 Washington Blvd Studio 240",
			city: "St. Louis, Missouri 63108",
		},
		{
			img: img5,
			title: "Amsterdam",
			time: "5:46 AM CET",
			address: "Generaal Vetterstraat 66",
			city: "1059 BW Amsterdam",
		},
		{
			img: img6,
			title: "London",
			time: "4:46 AM GMT",
			address: "Floor 9 & 10, Featherstone Building",
			city: "66 City Rd, London EC1Y 2AL, United Kingdom",
		},
		{
			img: img7,
			title: "Berlin",
			time: "5:47 AM CET",
			address: "Hagelberger Str. 53-54",
			city: "10965 Berlin",
		},
		{
			img: img8,
			title: "Argentina",
			time: "1:47 AM AST",
			address: "Garay 1802, B7600 Mar del Plata",
			city: "Provincia de Buenos Aires, Argentina",
		},
	];
	return (
		<>
			<div className="row mx-0 contact-office-container">
				<div className="col-md-3 contact-left-content">
					<h1>Offices</h1>
				</div>
				<div className="col-md-9 contact-right-content-intro">
					{ContactOfficeData.map((item, index) => (
						<div className="contact-right-content-body" key={index}>
							<div className="contact-right-img">
								<img src={item?.img} className="img-fluid" />
							</div>
							<div className="contact-right-meta">
								<p>{item?.title}</p>
								<p>{item?.time}</p>
							</div>
							<h1>{item?.address}</h1>
							<h2>{item?.city}</h2>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ContactOffice;
