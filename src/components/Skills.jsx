import { FaCode, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'SQL']
    },
    {
      icon: <FaLaptopCode />,
      title: 'Frontend',
      skills: ['React.js', 'HTML', 'CSS', 'Bootstrap']
    },
    {
      icon: <FaCode />,
      title: 'Backend',
      skills: ['Spring Boot', 'Flask', 'REST API Design']
    },
    {
      icon: <FaDatabase />,
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB']
    },
    {
      icon: <FaTools />,
      title: 'Tools & Others',
      skills: ['Git/GitHub', 'Docker', 'Jenkins', 'Linux', 'Postman', 'Data Structures & Algorithms', 'OOP', 'Debugging', 'Testing', 'Agile/Scrum']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

