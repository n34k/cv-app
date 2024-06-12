import PropTypes from 'prop-types';

import '../styles/Resume.css';

function Resume({ formData }) {

  return (
    <div className='container'>
      <div id="resume" className="resume">
        <div className="personalInfo">
          <h3 className="name">{formData.firstName} {formData.lastName}</h3>
          <p className="email">{formData.email} {formData.email && formData.number ? '|' : ''} {formData.number} {formData.link === '' ? '' : '|'} <a href={formData.link}>{formData.link}</a></p>
          <p className="city">{formData.address}</p>
        </div>
        <div className="Education">
          {formData.education[0].university ? <h3 className="sectionTitle">Education</h3> : ''}
          {formData.education.map((education, index) => (
            <div key={index}>
              <div className="top">
                <p className="name">{education.university}</p>
                <p>{education.startDate} {education.startDate === '' ? '' : '-'} {education.endDate}</p>
              </div>
              <div className="bottom">
                <p>{education.degree}{education.major === '' ? '' : ','} {education.major}{education.GPA === '' ? '' :', GPA: '} {education.GPA}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="Experience">
          {formData.experience[0].jobName ? <h3 className="sectionTitle">Work Experience</h3> : ''}
          {formData.experience.map((experience, index) => (
            <div key={index}>
              <div className="top">
                <p className="name">{experience.jobName}</p>
                <p>{experience.startDate} {experience.startDate === '' ? '' : '-'} {experience.endDate}</p>
              </div>
              <div className="bottom">
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="Projects">
          {formData.projects[0].projectTitle ? <h3 className="sectionTitle">Projects</h3> : ''}
          {formData.projects.map((project, index) => (
            <div key={index}>
              <div className="top">
                <p className="name">{project.projectTitle}</p>
              </div>
              <div className="bottom">
                <p>{project.projectDescription}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="skills">
          {formData.skills ? <h3 className="sectionTitle">Skills</h3> : ''}
          <p className="city">{formData.skills}</p>
        </div>
      </div>
    </div>
  );
}

Resume.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default Resume;
