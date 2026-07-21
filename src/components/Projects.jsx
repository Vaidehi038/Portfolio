import { FaExternalLinkAlt, FaCode } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Bounce Tales',
      technologies: ['Embedded C', 'SJ2 Board'],
      description: [
        'Published the project on the SJSU Socialledge platform, documenting design choices, implementation details, and test evidence for public review',
        'Implemented event-driven game logic in Embedded C using timers, interrupts, and a modular state-machine architecture',
        'Instrumented firmware with UART logs to debug timing bugs and verify state transitions under rapid input patterns',
        'Tested edge cases (fast input, timing drift, repeated resets) and stabilized behavior through iterative fixes and validation runs',
        'Verified hardware-software interactions by validating peripheral responses, input handling, and timing behavior across execution conditions'
      ],
      link: 'http://socialledge.com/sjsu/index.php/F24:_Bounce_Tales',
      isPublished: true
    },
    {
      title: 'Online Art Gallery',
      technologies: ['React.js', 'PHP', 'MySQL', 'Bootstrap'],
      description: [
        'Built a responsive marketplace UI in React.js for browsing, searching, and listing artwork using reusable components',
        'Implemented backend integration in PHP with database-backed listings and authentication flows using MySQL',
        'Developed an auction-style workflow with structured validation and clear status updates to reduce failed submissions',
        'Improved UX with better form handling, error messaging, and consistent loading/empty states for common user actions'
      ],
      link: '#'
    },
    {
      title: 'Blood Donation Management System',
      technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
      description: [
        'Developed a web system for donor/recipient management with clean CRUD flows and role-based pages',
        'Designed relational tables and queries in MySQL to support searchable donor records and request tracking',
        'Improved usability with client-side validation and clearer error messaging for common form and input issues',
        'Streamlined navigation and page flows to reduce friction for key actions (create requests, search donors, update statuses)'
      ],
      link: '#'
    },
    {
      title: 'TAX Intelligence Chatbot',
      technologies: ['Python', 'Flask', 'LangChain', 'Transformers'],
      description: [
        'Built Flask backend routes supporting a front-end Q&A interface powered by retrieval-based model responses',
        'Refined response quality by improving retrieval logic and validating behaviors using structured test queries and edge-case prompts',
        'Implemented modular utility functions for preprocessing, formatting, and response post-processing to improve maintainability',
        'Added basic evaluation checks (repeatable question sets, error handling, fallback messages) to make responses more reliable'
      ],
      link: '#'
    },
    {
      title: 'Trading Journal App',
      technologies: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL'],
      description: [
        'Built a trading journal web app to log day trades, tag each trade with a strategy, and analyze performance across strategies and time periods.',
        'Implemented a Node.js/Express REST API and designed a PostgreSQL schema for trades, strategies, and performance summaries.',
        'Developed analytics queries to compute per-strategy and overall metrics (profit/loss, win vs. loss trends) for daily and monthly views.',
        'Created a responsive React + Vite UI with filters and summary views to explore strategy effectiveness over time.'
      ],
      link: 'https://github.com/Vaidehi038/Trading-Journal'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <FaCode className="section-icon" />
          Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.isPublished && (
                  <span className="project-badge">Published</span>
                )}
              </div>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="project-description">
                {project.description.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project <FaExternalLinkAlt />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

