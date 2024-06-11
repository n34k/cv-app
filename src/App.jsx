import PersonalDetails from "./components/PersonalDetails"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Resume from "./components/Resume"
import "./styles/App.css"
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      number: '',
      link: '',
      education: [{university: '', degree: '', major: '', GPA: '', startDate: '', endDate: ''},
                  {university: '', degree: '', major: '', GPA: '', startDate: '', endDate: ''}],
      projects: [{projectTitle: '', projectDescription: ''},
                 {projectTitle: '', projectDescription: ''}],
      experience: [{jobName: '', description: '', startDate: '', endDate: ''},
                   {jobName: '', description: '', startDate: '', endDate: ''},
                   {jobName: '', description: '', startDate: '', endDate: ''}],
      skills: ''
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <div className="app">
      <div className="inputs">
        <PersonalDetails
          formData={formData}
          updateFormData={updateFormData}
        />
        <Education
          formData={formData}
          updateFormData={updateFormData}
        />
        <Experience
          formData={formData}
          updateFormData={updateFormData}
        />
        <Projects
          formData={formData}
          updateFormData={updateFormData}
        />
        <Skills
          formData={formData}
          updateFormData={updateFormData}
        />
      </div>
      <div>
        <Resume
          formData={formData}
        />
      </div>
    </div>
  )
}

export default App
