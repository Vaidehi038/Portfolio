import { FaGraduationCap } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'M.S. in Computer Engineering',
      institution: 'San Jose State University',
      location: 'San Jose, CA',
      period: 'Jan 2024 - Dec 2025',
      status: 'Completed'
    },
    {
      degree: 'B.E. in Information Technology',
      institution: 'Gujarat Technological University',
      location: 'Gujarat, India',
      period: 'May 2019 - Jun 2023',
      status: 'Completed'
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">
          <FaGraduationCap className="section-icon" />
          Education
        </h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <p className="education-location">{edu.location}</p>
                <p className="education-period">{edu.period}</p>
                <span className={`education-status ${edu.status === 'In Progress' ? 'in-progress' : 'completed'}`}>
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

