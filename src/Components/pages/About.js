import "./About.css"

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Our Podcast</h1>
        <p className="hero-text">Exploring fascinating stories and conversations that matter</p>
      </div>
      
      <div className="about-content">
        <div className="content-section">
          <h2>Our Show</h2>
          <p>Welcome to our weekly podcast where we dive deep into compelling stories, interview fascinating guests, and explore topics that spark curiosity and conversation. Each episode brings you authentic discussions and unique perspectives.</p>
        </div>
        
        <div className="content-section">
          <h2>Meet The Hosts</h2>
          <p>We're a team of passionate storytellers and conversation starters who love to explore new ideas and share them with our listeners. Our diverse backgrounds help us bring unique perspectives to every episode.</p>
        </div>
        
        <div className="content-section">
          <h2>What We Cover</h2>
          <p>Our episodes feature a wide range of engaging content:</p>
          <ul>
            <li>In-depth Interviews with Industry Leaders</li>
            <li>Deep Dives into Trending Topics</li>
            <li>Behind-the-scenes Stories</li>
            <li>Listener Questions and Discussions</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Authenticity</h3>
              <p>Real conversations, real stories</p>
            </div>
            <div className="value-item">
              <h3>Curiosity</h3>
              <p>Always learning, always exploring</p>
            </div>
            <div className="value-item">
              <h3>Community</h3>
              <p>Building connections through storytelling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;