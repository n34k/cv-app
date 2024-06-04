import "../styles/InputSection.css"
import InputGroup from "./InputGroup";
import Button from "./Button";
import AddButton from "./AddButton";
import PropTypes from 'prop-types';
import { useState } from "react";

function Experience({ updateFormData, formData }) {
    let experienceIndex = 0;
    const [inputValues, setInputValues] = useState({
        jobName: '',
        description: '',
        startDate: '',
        endDate: ''
    });

    const handleInputChange = (fieldName, value) => {
        setInputValues((prevData) => ({ ...prevData, [fieldName]: value }));
      };

    const [savedStates, setSavedStates] = useState({ 
        jobName: false,
        description: false,
        startDate: false,
        endDate: false
    });

    const handleSave = () => {
        formData.experience[experienceIndex].jobName = inputValues.jobName;
        formData.experience[experienceIndex].description = inputValues.description;
        formData.experience[experienceIndex].startDate = inputValues.startDate;
        formData.experience[experienceIndex].endDate = inputValues.endDate;

        updateFormData();
        
        setSavedStates({
          jobName: true,
          description: true,
          startDate: true,
          endDate: true,
        });
        console.log(formData.experience[experienceIndex]);
    }

    const handleEdit = () => {
        setSavedStates({
          jobName: false,
          description: false,
          startDate: false,
          endDate: false
        })
    }

    const [inputBoxes, setDisplayInputBoxes] = useState("flex");

    const toggleInputBoxes = () => {
        setDisplayInputBoxes((prevDisplay) => (prevDisplay === "flex" ? "none" : "flex"));
    }

    return (
        <div className="inputSection">
            <AddButton className="addButton" onClick={toggleInputBoxes} addTitle={"Work Experience"}
            />
            <div className="inputBoxes" style={{display: inputBoxes}}>
                <InputGroup
                    inputTitle="Job Title"
                    inputType= "text"
                    value={inputValues.jobName}
                    onChange={(value) => handleInputChange('jobName', value)}
                    saved={savedStates.jobName}
                />
                <InputGroup
                    inputTitle="Description"
                    inputType="text"
                    value={inputValues.description}
                    onChange={(value) => handleInputChange('description', value)}
                    saved={savedStates.description}
                />
                <InputGroup
                inputTitle="Start Date"
                inputType="month"
                value={inputValues.startDate}
                onChange={(value) => handleInputChange('startDate', value)}
                saved={savedStates.startDate}
                />
                <InputGroup
                inputTitle="End Date"
                inputType="month"
                value={inputValues.endDate}
                onChange={(value) => handleInputChange('endDate', value)}
                saved={savedStates.endDate}
                />
                 {savedStates.jobName ? <div> <Button buttonDesc="Edit" onClick={handleEdit} /> <Button buttonDesc="Add Another" /> </div> : <Button buttonDesc="Save" onClick={handleSave} />}
             </div>
        </div>
    ) 
}

Experience.propTypes = {
    updateFormData: PropTypes.func,
    formData: PropTypes.object
  };

export default Experience;