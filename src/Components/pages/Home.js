import "./Home.css";
import Carousel from "./carousel/Carousel.js";
import img1 from "./images/banner.jpg";
import img2 from "./images/poster.png";
import img3 from "./images/idk.jpg";
const link2 = "https://youtube/odh9IGeADCc"
const link1 = "https://www.facebook.com/share/v/19hMXd9hVu/"

export default function Home() {
  const slides = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="carousel-wrapper">
          <div className="carousel-text">
            <h1>AI and Us</h1>
            <p>Stay curious. Stay critical. Stay XDD.</p>
          </div>
          <Carousel images={slides} interval={4000} />
        </div>
      </div>

      <p className="tagline">"Serious talks with the real world"</p>
      
      <div className="about">
        <h1 className="about-title">See us in depth</h1>
      </div>

      <div className="grid-container">
        <div className="column">
          <h1 className="column-title">ABOUT</h1>
          <p className="column-text">The XDD Podcast is your weekly dive into the fascinating, funny, and sometimes frightening world of artificial intelligence. Hosted by curious minds who love exploring how machines think (and sometimes outthink us), we break down complex AI topics into real conversations anyone can enjoy.</p>
        </div>
        <div className="column">
          <h1 className="column-title">EPISODES</h1>
          <p className="column-text">Each episode blends expert insight, casual discussion, and a dash of humor to make complex AI topics accessible and engaging. Whether you’re curious about the latest breakthroughs, concerned about the ethics of automation, or just love geeking out over futuristic tech — XDD Podcast is your go-to space for all things AI.</p>
        </div>
        <div className="column">
          <h1 className="column-title">CONTACT US</h1>
          <p className="column-text">Your thoughts, ideas, and feedback mean a lot to us — they help shape the conversations and insights we bring to every episode.
          Whether you’d like to collaborate, suggest a topic, share your expertise as a guest, or inquire about sponsorship opportunities, our team is always ready to connect. We believe that meaningful discussions about AI come from diverse perspectives — researchers, creators, students, and everyday tech users alike.</p>
        </div>
      </div>

      <div className="video-section">
        <h2 className="video-title">Watch Our Episodes</h2>
        <div className="video-container">
          <div className="episode">
            <h3 className="episode-title">Episode 1: Introduction to AI</h3>
            <a href={link1} >
            <img src={img2} alt="Redirect Image"  className="video-container" />
             </a>
            <p className="video-description">
              In our debut episode, we explore the fundamentals of AI technology, discussing its impact on our daily lives and what the future holds.
            </p>
          </div>
          
          <div className="episode">
            <h3 className="episode-title">Episode 2: AI in Practice</h3>
            <a href={link2} >
            <img src={img3} alt="Redirect Image"  className="video-container"/>
            </a>
            <p className="video-description">
              Our second episode dives deeper into practical applications of AI, featuring real-world examples and expert insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


