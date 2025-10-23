import "./Contact.css";

function Contact() {
  const teamMembers = [
    {
      name: "Jason Jerald Seva",
      fbLink: "https://www.facebook.com/JellyFishnugget",
      role: "Manager",
    },
    {
      name: "Dhan Louise Cordova",
      fbLink: "https://www.facebook.com/dhanlouise.v.cordova",
      role: "IT Specialist",
    },
    {
      name: "Neo Artillo",
      fbLink: "https://www.facebook.com/neo.artillo",
      role: "Technical Support",
    },
    {
      name: "Klienth Christian Britania",
      fbLink: "https://www.facebook.com/klienthchristian.britania",
      role: "Show Host",
    },
    {
      name: "Daniel Britanico",
      fbLink: "https://www.facebook.com/daniel.mar10brits",
      role: "Technical Support",
    },
    {
      name: "Gabgab Degala",
      fbLink: "https://www.facebook.com/Gabgab.degala",
      role: "Technical Support",
    },
    {
      name: "Charles Encarguis",
      fbLink: "https://www.facebook.com/charles.encarguis.9",
      role: "Script Writer",
    },
    {
      name: "Alex Enecito",
      fbLink: "https://www.facebook.com/alex.enecito",
      role: "Technical Support",
    },
    {
      name: "Siyan Earl",
      fbLink: "https://www.facebook.com/siyan.earl.2025",
      role: "Technical Support",
    },
    {
      name: "Johnlee Loyola",
      fbLink: "https://www.facebook.com/johnlee.loyola.2025",
      role: "Show Host",
    },
    {
      name: "Vince Orcajada",
      fbLink: "https://www.facebook.com/vince.orcajada.974593",
      role: "Guest",
    },
    {
      name: "Kazoto Tempess",
      fbLink: "https://www.facebook.com/kazoto.tempess",
      role: "Script Writer",
    },
  ];

  return (
    <div className="team-container">
      <div className="contact-info-card">
        <h1 className="podcast-title">XDD Podcast</h1>
        <div className="contact-info">
          <div className="contact-item">
            <span>📧 Email:</span>
            <a href="mailto:aiandus@gmail.com" style={{ color: "white" }}>
              aiandus@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span>📱 Phone:</span>
            <a href="tel:09949721850" style={{ color: "white" }}>
              09949721850
            </a>
          </div>
        </div>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="member-card">
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <a
                href={member.fbLink}
                className="fb-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;