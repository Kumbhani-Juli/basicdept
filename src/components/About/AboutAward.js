import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../../assets/styles/about/aboutaward.css";

// Import award images
import sectionImg1 from '../../assets/images/about/awardImgs/sectionImg1.webp';
import sectionImg2 from '../../assets/images/about/awardImgs/sectionImg2.webp';
import sectionImg3 from '../../assets/images/about/awardImgs/sectionImg3.webp';
import sectionImg4 from '../../assets/images/about/awardImgs/sectionImg4.webp';
import sectionImg5 from '../../assets/images/about/awardImgs/sectionImg5.webp';
import sectionImg6 from '../../assets/images/about/awardImgs/sectionImg6.webp';
import sectionImg7 from '../../assets/images/about/awardImgs/sectionImg7.webp';

const AboutAward = () => {
  const awardsData = [
    { title: "Webby Awards/145", img: sectionImg1 },
    { title: "Adweek/01", img: sectionImg2 },
    { title: "Awwwards/28", img: sectionImg3 },
    { title: "D&AD/01", img: sectionImg4 },
    { title: "One Show/05", img: sectionImg5 },
    { title: "The FWA/09", img: sectionImg6 },
    { title: "Comm Arts/04", img: sectionImg7 },
  ];

  return (
    <div className="about-award-container">
      <div className="row mx-0 about-award-content">
        <div className="col-md-4 about-award-left-content">
          <h1>Awards</h1>
        </div>
        <div className="col-md-8 about-award-right-content">
          <h1>
            While results are what matter most, we believe awards bring value and recognition to organizations as well as individuals.
          </h1>
          <button>Full Awards List</button>
        </div>
      </div>

      <div className="about-award-title">
        {awardsData.map((award, index) => (
          <OverlayTrigger
            key={index}
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${index}`} className="award-tooltip">
                <img src={award.img} alt={award.title} className="tooltip-img" />
              </Tooltip>
            }
          >
            <h1 className="award-title">{award.title}</h1>
          </OverlayTrigger>
        ))}
      </div>
    </div>
  );
};

export default AboutAward;
