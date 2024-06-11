import "../styles/Resume.css"
import PropTypes from 'prop-types';

function Resume({formData}) {
    console.log(formData.education)
    return (
        <div className="resume">
            <div className="personalInfo">
                <h3 className="name">{formData.firstName} {formData.lastName}</h3>
                <p className="city">{formData.address}</p>
                <p className="email">{formData.email} | {formData.number} {formData.link === '' ? '' : '|'} <a href="https://n34k.github.io/homepage/">{formData.link}</a></p>
            </div>
            <div className="Education">
                <h3 className="sectionTitle">Education</h3>   
                {formData.education.map((education, index) => (
                <div key={index}>
                    <div className="top">
                        <p className="name">{education.university}</p> 
                        <p>{education.startDate} {education.startDate === '' ? '' : '-'} {education.endDate} </p>
                    </div>
                    <div className="bottom">
                        <p>{education.degree}{education.major === '' ? '' : ','} {education.major}{education.GPA === '' ? '' :', GPA: '} {education.GPA}</p>
                    </div>
                </div>
                ))}
            </div>
            <div className="Experience">
                <h3 className="sectionTitle">Work Experience</h3>   
                    {formData.experience.map((experience, index) => (
                    <div key={index}>
                        <div className="top">
                            <p className="name">{experience.jobName}</p> 
                            <p>{experience.startDate} {experience.startDate === '' ? '' : '-'} {experience.endDate} </p>
                        </div>
                        <div className="bottom">
                            <p>{experience.description}</p>
                        </div>
                    </div>
                    ))}
            </div>
            <div className="Projects">
                <h3 className="sectionTitle">Projects</h3>   
                    {formData.projects.map((projects, index) => (
                    <div key={index}>
                        <div className="top">
                            <p className="name">{projects.projectTitle}</p> 
                        </div>
                        <div className="bottom">
                            <p>{projects.projectDescription}</p>
                        </div>
                    </div>
                    ))}
            </div>
            <div className="skills">
                <h3 className="sectionTitle">Skills</h3>
                    <p className="city">{formData.skills}</p>
            </div>

            
        </div>
    );
}

Resume.propTypes = {
    formData: PropTypes.func
}

export default Resume;