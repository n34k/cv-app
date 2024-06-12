import PersonalDetails from "./components/PersonalDetails"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Resume from "./components/Resume"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./styles/App.css"
import { useState } from 'react';
import Button from "./components/Button"

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

  const saveResume = () => {
    const content = document.getElementById('resume');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight() + 25; // Adding an inch (25.4 mm) to height

    html2canvas(content, {
      scale: 2, // Increase scale for better quality
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Adjust height to ensure content fits within PDF page
        const adjustedHeight = imgHeight > pdfHeight ? pdfHeight : imgHeight;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, adjustedHeight);
        pdf.save('resume.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF: ', error);
      });
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Get Resume</h1>
      </div>
      <div className="middle">

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
          <Button buttonDesc={"Save as PDF"} onClick={saveResume}></Button>
        </div>
        <div className="resumeSection">
          <Resume
            formData={formData}
          />
        </div>

      </div>
      <div className="footer">
        <h3>Made by Nick Davis</h3>
      </div>
    </div>
  )
}

export default App
