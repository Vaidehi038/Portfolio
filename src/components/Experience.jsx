import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Saar Healthcare',
      location: 'Ahmedabad, India',
      period: 'Feb 2023 - May 2023',
      achievements: [
        'Shipped full-stack product updates by building React.js components and integrating them with Java / Spring Boot services',
        'Improved UI responsiveness and maintainability through component refactoring, clearer state handling, and reusable UI patterns',
        'Created and validated REST API request/response flows; resolved payload mismatches, auth failures, and validation errors using Postman and logs',
        'Supported data consistency across the application by fixing SQL Server query issues and improving reliability of backend workflows',
        'Worked in an Agile/Scrum setup with designers and engineers; delivered iterative releases and tracked changes via Git',
        'Used Docker-based environments to keep development reproducible and reduce setup issues across machines/teams',
        'Added lightweight testing/debugging checks (controlled test cases, structured logging, edge-case validation) to reduce regressions during releases'
      ]
    },
    {
      title: 'Data Analyst Intern',
      company: 'INFOLABZ IT SERVICES PVT. LTD',
      location: 'Ahmedabad, India',
      period: 'Jun 2022 - Jul 2022',
      achievements: [
        'Automated repetitive reporting and data-prep tasks using Python, improving workflow speed and reducing manual errors',
        'Built and evaluated baseline regression models; improved prediction quality by 30% through feature cleanup and iterative tuning',
        'Integrated automation runs with Jenkins to standardize execution, maintain repeatability, and reduce manual reruns',
        'Queried and cleaned structured datasets using SQL, ensuring consistent inputs for modeling and reporting dashboards',
        'Validated outputs with sanity checks and documented assumptions, metrics, and results to support team handoff',
        'Collaborated with the team to review results, triage anomalies, and iterate on data quality fixes in short cycles'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          <FaBriefcase className="section-icon" />
          Experience
        </h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <div className="experience-meta">
                  <span className="experience-period">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                  <span className="experience-location">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>
              </div>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

