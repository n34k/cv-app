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
    email: '',
    number: '',
    link: '',
  });
  
  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
  };
  
  const handleSave = () => {
    console.log('Saved:', formData);
    
  };


  return (
    <div className="app">
      <div className="inputs">
        <PersonalDetails
          formData={formData}
          handleInputChange={handleInputChange}
          onSave={handleSave}
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
