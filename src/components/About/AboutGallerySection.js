import React, { useState, useEffect } from 'react';
import '../../assets/styles/about/aboutGallerySection.css';
import sectionImg1 from '../../assets/images/about/galleryImgs/sectionImg1.webp';
import sectionImg2 from '../../assets/images/about/galleryImgs/sectionImg2.webp';
import sectionImg3 from '../../assets/images/about/galleryImgs/sectionImg3.webp';
import sectionImg4 from '../../assets/images/about/galleryImgs/sectionImg4.webp';

const AboutGallerySection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize on mount

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const galleryData = [
        { sectionImg: sectionImg1, top: '10px', right: '480px', zIndex: 2 },
        { sectionImg: sectionImg2, top: '220px', right: '350px', zIndex: 3 },
        { sectionImg: sectionImg3, top: '100px', right: '200px', zIndex: 1 },
        { sectionImg: sectionImg4, top: '330px', right: '-10px', zIndex: 0 },
    ];

    return (
        <div className='about-page-gallery-section-container'>
            <div className='about-page-gallery-section-content'>
                {galleryData.map((data, index) => (
                    <div key={index}>
                        <img
                            src={data.sectionImg}
                            className={`img-fluid position-absolute ${isMobile ? '' : 'hover-transition'}`}
                            alt='section-img'
                            style={{
                                top: data.top,
                                right: data.right,
                                zIndex: hoveredIndex === index ? 100 : data.zIndex,
                                transform: hoveredIndex === index && !isMobile ? 'scale(1.1)' : 'scale(1)',
                            }}
                            onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutGallerySection;
