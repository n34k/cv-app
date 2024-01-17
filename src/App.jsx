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
        <Education/>
        <Experience/>
        <Projects/>
        <Skills/>
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
