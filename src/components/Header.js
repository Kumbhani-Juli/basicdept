import React, { useState, useEffect } from "react";
import headerlogo from "../assets/images/header-logo.svg";
import headerslider from "../assets/images/header-menu.svg";
import SliderImg1 from "../assets/images/header-slider/sliderimg1.webp";
import SliderImg2 from "../assets/images/header-slider/sliderimg2.webp";
import SliderImg3 from "../assets/images/header-slider/sliderimg3.webp";
import SliderImg4 from "../assets/images/header-slider/sliderimg4.webp";
import SliderImg5 from "../assets/images/header-slider/sliderimg5.webp";
import "../assets/styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronCircleRight,
	faChevronRight,
	faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Header = ({ backgroundColor, Color, filter }) => {
	const [showSlider, setShowSlider] = useState(false);
	const [slidesPerView, setSlidesPerView] = useState(3);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const SideBarData = [
		{
			title: "B/D® JAMS",
			description: "It's a vibe",
			year: "©2022",
			image: SliderImg1,
		},
		{
			title: "Applied® ",
			description: "Thoughts & Perspectives",
			year: "©2020",
			image: SliderImg2,
		},
		{
			title: "Moves®",
			description: "Our New HQ",
			year: "©2019",
			image: SliderImg3,
		},
		{
			title: "Crafted®",
			description: "Creative Community",
			year: "©2019",
			image: SliderImg4,
		},
		{
			title: "Brandbeats®",
			description: "Podcast Series",
			year: "©2017",
			image: SliderImg5,
		},
	];
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setSlidesPerView(1);
			} else {
				setSlidesPerView(3);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const toggleSlider = () => {
		setShowSlider(!showSlider);
		document.body.classList.toggle("no-scroll", !showSlider);
	};
	return (
		<div
			className="header-container"
			style={{
				backgroundColor: backgroundColor,
				color: Color,
			}}
		>
			<Link to="/">
				<img
					src={headerlogo}
					alt="Logo"
					className="header-logo"
					style={{ filter: filter }}
				/>
			</Link>
			<nav
				className={`header-container-nav ${
					isMenuOpen ? "header-nav-open" : ""
				}`}
			>
				<ul>
					<Link
						to="/work"
						onClick={() => setIsMenuOpen(false)}
						style={{ color: Color, textDecoration: "none" }}
					>
						{" "}
						<li>Work</li>
					</Link>
					<Link
						to="/about"
						onClick={() => setIsMenuOpen(false)}
						style={{ color: Color, textDecoration: "none" }}
					>
						{" "}
						<li>About</li>
					</Link>
					<Link
						to="/news"
						onClick={() => setIsMenuOpen(false)}
						style={{ color: Color, textDecoration: "none" }}
					>
						<li>News</li>
					</Link>
					<Link
						to="/thinking"
						onClick={() => setIsMenuOpen(false)}
						style={{ color: Color, textDecoration: "none" }}
					>
						{" "}
						<li>Thinking</li>
					</Link>
					<Link
						to="/contact"
						onClick={() => setIsMenuOpen(false)}
						style={{ color: Color, textDecoration: "none" }}
					>
						<li>Contact</li>{" "}
					</Link>
					<Link
						to="/career"
						onClick={() => setIsMenuOpen(false)}
						style={{ color: Color, textDecoration: "none" }}
					>
						<li>Careers</li>
					</Link>
					<li
						className="sidebar-mobile-button"
						onClick={() => {
							setShowSlider(!showSlider);
							setIsMenuOpen(false);
						}}
					>
						initiatives
						<FontAwesomeIcon icon={faChevronRight} />
					</li>
				</ul>
			</nav>
			<div className="header-slider">
				<img
					src={headerslider}
					alt="slider Icon"
					onClick={toggleSlider}
					className="header-slider-icon"
				/>
				{showSlider && (
					<div className="header-slider-container">
						<div className="header-slider-header">
							<p>
								(5)internal works
								<br />
								©24 c/o BASIC/DEPT®
							</p>
							<p>
								A collection of internal project and initiatives under the
								<br />
								BASIC/DEPT® brand.
							</p>
							<FontAwesomeIcon
								icon={faCircleXmark}
								className="header-slider-close"
								onClick={toggleSlider}
							/>
						</div>
						<div className="header-slider-content">
							<Swiper
								spaceBetween={0}
								slidesPerView={slidesPerView}
								pagination={{ clickable: true }}
							>
								{SideBarData.map((item, index) => (
									<SwiperSlide key={index}>
										<div className="header-slider-box">
											<span className="slider-number">{index + 1}</span>
											<img src={item.image} alt={item.title} />
											<div className="header-slider-box-body">
												<div className="header-slider-box-body-left">
													<h1>{item.title}</h1>
													<p>{item.description}</p>
												</div>
												<div className="header-slider-box-body-right">
													<span>{item.year}</span>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div className="header-slider-footer">
							<h2>BASIC/DEPT®, INC</h2>
						</div>
					</div>
				)}
			</div>
			<button
				className="menu-toggle-button"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				{isMenuOpen ? "Close" : "Menu"}
			</button>
		</div>
	);
};

export default Header;
