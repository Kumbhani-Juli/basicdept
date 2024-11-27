import news1 from "../assets/images/home/news1.webp";
import news2 from "../assets/images/home/news2.webp";
import news3 from "../assets/images/home/news3.webp";
import news4 from "../assets/images/home/news4.webp";
import news5 from "../assets/images/home/news5.webp";
import news6 from "../assets/images/home/news6.webp";
import news7 from "../assets/images/home/news7.webp";
import news8 from "../assets/images/home/news8.webp";
import news9 from "../assets/images/home/news9.webp";
import news10 from "../assets/images/home/news10.webp";

import event1 from "../assets/images/news/event1.webp";
import event2 from "../assets/images/news/event2.webp";
import event3 from "../assets/images/news/event3.webp";
import event4 from "../assets/images/news/event4.webp";
import event5 from "../assets/images/news/event5.webp";
import event6 from "../assets/images/news/event6.webp";
import event7 from "../assets/images/news/event7.webp";
import event8 from "../assets/images/news/event8.webp";
import event9 from "../assets/images/news/event9.webp";
import event10 from "../assets/images/news/event10.webp";

import awards1 from "../assets/images/news/award1.webp";
import awards2 from "../assets/images/news/award2.webp";
import awards3 from "../assets/images/news/award3.webp";
import awards4 from "../assets/images/news/award4.webp";
import awards5 from "../assets/images/news/award5.webp";
import awards from "../assets/images/news/award6.webp";
import awards6 from "../assets/images/news/award7.webp";
import awards7 from "../assets/images/news/award8.webp";
import awards8 from "../assets/images/news/award9.webp";
import awards9 from "../assets/images/news/award10.webp";
import awards10 from "../assets/images/news/event5.webp";

import work1 from "../assets/images/news/work1.webp";
import work2 from "../assets/images/news/work2.webp";
import work3 from "../assets/images/news/work3.webp";
import work4 from "../assets/images/news/work4.webp";
import work5 from "../assets/images/news/work5.webp";
import work6 from "../assets/images/news/work6.webp";
import work7 from "../assets/images/news/work7.webp";
import work8 from "../assets/images/news/work8.webp";
import work9 from "../assets/images/news/work9.webp";
import work10 from "../assets/images/news/work10.webp";

const newsData = [
	{
		img: news1,
		title: "Tomorrow’s shopper: Five ways brands can reach Gen Alpha today",
		type: "Press",
		span: "Press 10.11.24",
	},
	{
		img: news2,
		title: "Generation Alpha: Say hello to tomorrow’s shopper ",
		type: "Press",
		span: "Press 7.22.24",
	},
	{
		img: news3,
		title: "No longer the affordable option, QSRs look to connect with culture",
		type: "Press",
		span: "Press 10.11.24",
	},
	{
		img: news4,
		title: "The Future of Fashion and AI at Glossy's Ecommerce Summit",
		type: "Press",
		span: "Press 6.13.24",
	},
	{
		img: news5,
		title: "Retail’s new playground: where physical meets digital",
		type: "Press",
		span: "Press 6.3.24",
	},
	{
		img: news6,
		title: "Gen Alpha, the beta test for how brands can reach a new generation",
		type: "Press",
		span: "Press 5.8.24",
	},
	{
		img: news7,
		title: "New Projects on the Podium for the 28th Webby Awards",
		type: "Press",
		span: "Press 4.24.24",
	},
	{
		img: news8,
		title: "What Sofia Coppola Can Teach Us About Shifting Culture",
		type: "Press",
		span: "Press 4.18.24",
	},
	{
		img: news9,
		title: "The 28TH Annual Webby Awards Nods Are In",
		type: "Press",
		span: "Press 4.4.24",
	},
	{
		img: news10,
		title: "Are snacks the new meals in QSR?",
		type: "Press",
		span: "Press 3.20.24",
	},
	{
		img: event1,
		title: "The Future of Fashion and AI at Glossy's Ecommerce Summit",
		type: "Events",
		span: "Events 6.13.24",
	},
	{
		img: event2,
		title:
			"Dave Lucas of BASIC/DEPT® leads panel discussion on inclusive design at MACH Haus NYC",
		type: "Events",
		span: "Events 3.11.24",
	},
	{
		img: event3,
		title: "Are snacks the new meals in QSR?",
		type: "Events",
		span: "Events 3.20.24",
	},
	{
		img: event4,
		title: "ACCESSIBILITY WINS AT ANTHEM AWARDS",
		type: "Events",
		span: "Events 2.1.23",
	},
	{
		img: event5,
		title: "The Future of AI-Powered Commerce",
		type: "Events",
		span: "Events 11.15.23",
	},
	{
		img: event6,
		title: "Are snacks the new meals in QSR?",
		type: "Events",
		span: "Events 3.20.23",
	},
	{
		img: event7,
		title:
			"Ryan Parkhurst moderates talk on “The art and science of brand purpose and creativity”",
		type: "Events",
		span: "Events 6.5.24",
	},
	{
		img: event8,
		title: "BASIC recognized with 2020 Star Award for Technology by KFC",
		type: "Events",
		span: "Events 8.2.21",
	},
	{
		img: event9,
		title:
			"B®2020: A Retrospective Through the Lenses of Culture, Community, and Craft",
		type: "Events",
		span: "Events 1.11.21",
	},
	{
		img: event10,
		title:
			"JP Burcks Offers His Perspective During Vitals, a Design Event Hosted by The Webby Awards",
		type: "Events",
		span: "Events 11.20.20",
	},
	{
		img: awards1,
		title: "New Projects on the Podium for the 28th Webby Awards",
		type: "awards",
		span: "Awards 4.24.24",
	},
	{
		img: awards2,
		title: "The 28TH Annual Webby Awards Nods Are In",
		type: "Awards",
		span: "Awards 4.4.24",
	},
	{
		img: awards3,
		title: "ACCESSIBILITY WINS AT ANTHEM AWARDS",
		type: "Awards",
		span: "Awards 2.1.24",
	},
	{
		img: awards4,
		title: "BASIC/DEPT® is the 27th Webby Awards: Agency of the Year",
		type: "Awards",
		span: "Awards 4.25.243",
	},
	{
		img: awards5,
		title:
			"BASIC/DEPT® secures 19 Nominations for the 27th Annual Webby Awards",
		type: "Awards",
		span: "Awards 4.4.23",
	},
	{
		img: awards,
		title:
			"BASIC/DEPT® is Ad Age’s A-List Design & Branding Agency of the Year",
		type: "Awards",
		span: "Awards 3.13.23",
	},
	{
		img: awards6,
		title: "DEPT® Wins Lovie's Agency of the Year",
		type: "Awards",
		span: "Awards 11.9.22",
	},
	{
		img: awards7,
		title: "B/D® JAMS EARNS AWWWARDS SITE OF THE MONTH",
		type: "Awards",
		span: "Awards 10.22.22",
	},
	{
		img: awards8,
		title: "DEPT® Takes Global Network of the Year at 26th Annual Webby Awards",
		type: "Awards",
		span: "Awards 4.27.22",
	},
	{
		img: awards9,
		title: "BASIC® Earns 12 Nominations in 26th Annual Webby Awards",
		type: "Awards",
		span: "Awards 4.5.22",
	},
	{
		img: awards10,
		title:
			"Patagonia Recognized for Environmental Impact at The Inaugural Anthem Awards",
		type: "Awards",
		span: "Awards 2.25.22",
	},
	{
		img: work1,
		title: "ACCESSIBILITY WINS AT ANTHEM AWARDS",
		type: "Work",
		span: "Work 2.1.24",
	},
	{
		img: work2,
		title: "Introducing REV by LYFT",
		type: "Work",
		span: "Work 3.28.23",
	},
	{
		img: work3,
		title: "A Fresh Collab with Brixton Just in Time for Spring",
		type: "Work",
		span: "Work 4.14.22",
	},
	{
		img: work4,
		title:
			"BASIC® and Webex Champion “Hybrid Collaboration” As Next Evolution of Workplace Culture",
		type: "Work",
		span: "Work 8.19.21",
	},
	{
		img: work5,
		title:
			"BASIC® Partners with Patagonia to Redefine Its eCommerce Experience",
		type: "Work",
		span: "Work 3.8.21",
	},
	{
		img: work6,
		title:
			"B®2020: A Retrospective Through the Lenses of Culture, Community, and Craft",
		type: "Work",
		span: "Work 1.11.21",
	},
	{
		img: work7,
		title: "Figma Selects BASIC® as Preferred Agency Partner",
		type: "Work",
		span: "Work 10.12.20",
	},
	{
		img: work8,
		title: "San Diego Design Week and BASIC® Craft a Kinetic Brand Identity",
		type: "Work",
		span: "Work 9.22.20",
	},
	{
		img: work9,
		title: "Desktop Metal and BASIC® Bring 3D Printing to the Forefront",
		type: "Work",
		span: "Work 8.3.21",
	},
	{
		img: work10,
		title: "Introducing FUTUREMOOD, the World’s First Subversive Eyewear Brand",
		type: "Work",
		span: "Work 3.20.24",
	},
];
export default newsData;
