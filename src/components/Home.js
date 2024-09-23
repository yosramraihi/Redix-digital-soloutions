import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import backgroundImage from '../images/Team.jpeg';
import reviewImage from '../images/review.webp';
import specialist1 from '../images/khlaf.PNG';
import specialist2 from '../images/Fares.jpeg';
import specialist3 from '../images/Yosra.jpeg';
import specialist4 from '../images/Abrar.jpeg'; 
import specialist5 from '../images/Pexa.png'; 
import specialist6 from '../images/Aziz belkhir.jpeg'
import specialist7 from '../images/Aweb.jpeg'
import specialist8 from '../images/Moemen.jpeg'
import specialist9 from '../images/Ghassen.jpeg'




import PortfolioItem from './PortfolioItem';


import projectVideo1 from '../videos/Escalope + Jus .mp4';
import projectVideo2 from '../videos/Jwejem.mp4';
import projectVideo3 from '../videos/Chevrette.mp4';
import projectVideo4 from '../videos/Cornet Frita Is The Best Plan.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faBullhorn, faVideo } from '@fortawesome/free-solid-svg-icons';
import { CustomPrevArrow, CustomNextArrow } from './CustomArrows';
import Contact from './Contact';

const Home = ({ offerRef, contactRef, aboutRef, portfolioRef }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <main className="main-content" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h2>Perfect IT Solutions For Your Business</h2>
        <button className="cta-btn" onClick={() => portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })}>Discover More</button>
      </main>

      <section ref={offerRef} className="offer-section">
        <h2>What We Offer?</h2>
        <div className="card-container">
          <div className="card">
            <FontAwesomeIcon icon={faLaptopCode} size="2x" />
            <h3>IT Services</h3>
            <p>Providing comprehensive IT solutions, from custom web development to full-stack applications, tailored to meet your business needs.</p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faBullhorn} size="2x" />
            <h3>Marketing Services</h3>
            <p>Enhance your brand's visibility and engagement with targeted digital marketing strategies, and social media campaigns.</p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faVideo} size="2x" />
            <h3>AudioVisual Services</h3>
            <p>Creating high-quality audiovisual content, from promotional videos to corporate presentations, designed to captivate and communicate your message effectively.</p>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <h2>Our Clients reviews</h2>
        <div className="reviews-wrapper">
          <div className="review-circle">
            <img src={reviewImage} alt="Client" />
          </div>
          <div className="reviews-container">
            <div className="review-card">
              <p>"The IT services provided were exceptional. Our website has never been better!"</p>
              <p className="client-name">- CEO, Tech Innovators</p>
            </div>
            <div className="review-card">
              <p>"Their marketing strategies helped boost our sales significantly. Highly recommend!"</p>
              <p className="client-name">- Marketing Director, Bright Future Inc.</p>
            </div>
            <div className="review-card">
              <p>"Amazing audiovisual content that really captured our brand's message. Great work!"</p>
              <p className="client-name">- Creative Director, Vision Media</p>
            </div>
          </div>
        </div>
      </section>



      <section ref={portfolioRef} className="portfolio-section">
  <h2>Our Portfolio</h2>
  <Slider {...sliderSettings} className="portfolio-slider">
  <PortfolioItem
    videoSrc={projectVideo1}
    
  />
  <PortfolioItem
    videoSrc={projectVideo2}
   
  />
    <PortfolioItem
    videoSrc={projectVideo3}
 
  />
    <PortfolioItem
    videoSrc={projectVideo4}
    
  />
  
</Slider>
</section>

      <section className="specialists-section">
  <h2>Meet Our Specialists</h2>
  <Slider {...sliderSettings}>
    <div className="specialist-card">
      <img src={specialist1} alt="Khlaf Hamza" />
      <h3>Khlaf Hamza</h3>
      <p>CEO</p>
      <div className="description">
        <p>Khlaf Hamza is the visionary CEO leading our company to new heights.</p>
      </div>
    </div>
    <div className="specialist-card">
      <img src={specialist5} alt="Jeridi Yassine" />
      <h3>Jeridi Yassine</h3>
      <p>CTO</p>
      <div className="description">
        <p>Jeridi Yassine oversees the daily operations, ensuring everything runs smoothly.</p>
      </div>
    </div>
    <div className="specialist-card">
      <img src={specialist8} alt="Moemen" />
      <h3>Moemen</h3>
      <p>Graphic Designer</p>
      <div className="description">
        <p>Abidly Abrar creates stunning visuals that captivate and inspire.</p>
      </div>
    </div>
    <div className="specialist-card">
      <img src={specialist2} alt="Mraihi Fares" />
      <h3>Mraihi Fares</h3>
      <p>Fullstack-developer</p>
      <div className="description">
        <p>Mraihi Fares is the technical mastermind behind our innovative solutions.</p>
      </div>
    </div>
    <div className="specialist-card">
      <img src={specialist3} alt="Mraihi Yosra" />
      <h3>Mraihi Yosra</h3>
      <p>UX/UI Designer Front-end Developer</p>
      <div className="description">
        <p>Mraihi Yosra designs user-friendly interfaces and crafts engaging front-end experiences.</p>
      </div>
    </div>
    <div className="specialist-card">
      <img src={specialist4} alt="Abidly Abrar" />
      <h3>Abidly Abrar</h3>
      <p>Graphic Designer</p>
      <div className="description">
        <p>Abidly Abrar creates stunning visuals that captivate and inspire.</p>
      </div>
    </div>
    <div className="specialist-card">
      <img src={specialist6} alt="Aziz Belkhir" />
      <h3>Aziz Belkhir</h3>
      <p>Graphic Designer</p>
      <div className="description">
        <p>Abidly Abrar creates stunning visuals that captivate and inspire.</p>
      </div>
    </div>
    <div className="specialist-card">
      <img src={specialist7} alt="Aweb" />
      <h3>Aweb</h3>
      <p>Graphic Designer</p>
      <div className="description">
        <p>Abidly Abrar creates stunning visuals that captivate and inspire.</p>
      </div>
    </div>
    <div className="specialist-card">
      <img src={specialist9} alt="Ghassen" />
      <h3>Ghassen</h3>
      <p>Graphic Designer</p>
      <div className="description">
        <p>Abidly Abrar creates stunning visuals that captivate and inspire.</p>
      </div>
    </div>
  </Slider>
</section>

      <section ref={aboutRef} className="about-section">
        <div className="about-container">
          <div className="about-image"></div>
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              At Redix Digital Solutions, we are committed to driving innovation and delivering exceptional digital experiences. Our multidisciplinary team of experts combines creativity and technology to offer a comprehensive range of services, including IT solutions, digital marketing, and audiovisual production.
            </p>
            <p>
              With a client-centric approach, we tailor our strategies to meet the unique needs of each business, ensuring impactful results and lasting partnerships. Our mission is to empower businesses in the digital age, helping them grow and thrive in an ever-evolving landscape.
            </p>
            <p>
              Trust Redix Digital Solutions to be your partner in success, delivering quality, reliability, and excellence in every project we undertake.
            </p>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="contact-section">
        <Contact />
      </section>
    </div>
  );
};

export default Home;

