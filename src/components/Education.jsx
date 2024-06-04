import "../styles/InputSection.css"
import InputGroup from "./InputGroup";
import Button from "./Button";
import AddButton from "./AddButton";
import PropTypes from 'prop-types';
import { useState } from "react";

function Education({ updateFormData, formData }) {
    let educationIndex = 0;
    const [inputValues, setInputValues] = useState({
        university: '',
        degree: '',
        major: '',
        GPA: '',
        startDate: '',
        endDate: ''
    });

    const handleInputChange = (fieldName, value) => {
        setInputValues((prevData) => ({ ...prevData, [fieldName]: value }));
      };

    const [savedStates, setSavedStates] = useState({ 
        university: false,
        degree: false,
        major: false,
        GPA: false,
        startDate: false,
        endDate: false
    });

    const handleSave = () => {
        formData.education[educationIndex].university = inputValues.university;
        formData.education[educationIndex].degree = inputValues.degree;
        formData.education[educationIndex].major = inputValues.major;
        formData.education[educationIndex].GPA = inputValues.GPA;
        formData.education[educationIndex].startDate = inputValues.startDate;
        formData.education[educationIndex].endDate = inputValues.endDate;

        updateFormData();
        
        setSavedStates({
          university: true,
          degree: true,
          major: true,
          GPA: true,
          startDate: true,
          endDate: true,
        });
        console.log(formData.education[educationIndex]);
    }

    const handleEdit = () => {
        setSavedStates({
          university: false,
          degree: false,
          major: false,
          GPA: false,
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
            <AddButton className="addButton" addTitle={"Education"} onClick={toggleInputBoxes}
            />
            <div className="inputBoxes" style={{display: inputBoxes}} >
                <InputGroup
                inputTitle="University"
                inputType="text"
                value={inputValues.university}
                onChange={(value) => handleInputChange('university', value)}
                saved={savedStates.university}
                />
                <InputGroup
                inputTitle="Degree"
                inputType="text"
                value={inputValues.degree}
                onChange={(value) => handleInputChange('degree', value)}
                saved={savedStates.degree}
                />
                <InputGroup
                inputTitle="Major"
                inputType="text"
                value={inputValues.major}
                onChange={(value) => handleInputChange('major', value)}
                saved={savedStates.major}
                />
                <InputGroup
                inputTitle="GPA"
                inputType="number"
                value={inputValues.GPA}
                onChange={(value) => handleInputChange('GPA', value)}
                saved={savedStates.GPA}
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
                {savedStates.university ? <div> <Button buttonDesc="Edit" onClick={handleEdit} /> <Button buttonDesc="Add Another" /> </div> : <Button buttonDesc="Save" onClick={handleSave} />}
            </div>
        </div>
    )
    
}

Education.propTypes = {
    updateFormData: PropTypes.func,
    formData: PropTypes.object
  };

export default Education;