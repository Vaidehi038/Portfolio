import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              Hi, I'm <span className="highlight">Vaidehi Gandhi</span>
            </h1>
            <h2 className="home-subtitle">Computer Engineering Graduate</h2>
            <p className="home-description">
              Passionate software developer with experience in full-stack development, 
              data analysis, and embedded systems. Recently completed M.S. in Computer 
              Engineering from San Jose State University. Always eager to learn and build 
              innovative solutions.
            </p>
            <div className="home-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
            <div className="home-social">
              <a 
                href="https://github.com/Vaidehi038" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/vaidehigandhi" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:vaidehigandhi870@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a 
                href="tel:+16694998327"
                aria-label="Phone"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

