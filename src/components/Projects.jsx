import "../styles/InputSection.css"
import InputGroup from "./InputGroup";
import Button from "./Button";
import AddButton from "./AddButton";
import PropTypes from 'prop-types';
import { useState } from "react";

function Projects({ updateFormData, formData} ) {
    let projectIndex = 0
    const [inputValues, setInputValues] = useState({
        projectTitle: '',
        projectDescription: ''
    });

    const [savedStates, setSavedStates] = useState({
        projectTitle: '',
        projectDescription: ''
    });

    const handleInputChange = (fieldName, value) => {
        setInputValues((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const handleSave = () => {
        formData.projects[projectIndex].projectTitle = inputValues.projectTitle;
        formData.projects[projectIndex].projectDescription = inputValues.projectDescription;
       

        updateFormData();

        setSavedStates({
            projectTitle: true,
            projectDescription: true
        });
    };

    const handleEdit = () => {
        setSavedStates({
            projectTitle: false,
            projectDescription: false
        });
    };

    const [inputBoxes, setDisplayInputBoxes] = useState("flex");
    const toggleInputBoxes = () => {
        setDisplayInputBoxes((prevDisplay) => (prevDisplay === "flex" ? "none" : "flex"));
    }

    return (
        <div className="inputSection">
            <AddButton className="addButton" onClick={toggleInputBoxes} addTitle={"Projects"}
            />
            <div className="inputBoxes" style={{display: inputBoxes}}>
                <InputGroup
                    inputTitle="Project Title"
                    inputType= "text"
                    value={inputValues.projectTitle}
                    onChange={(value) => handleInputChange('projectTitle', value)}
                    saved={savedStates.projectTitle}
                />
                <InputGroup
                    inputTitle="Description"
                    inputType="text"
                    value={inputValues.projectDescription}
                    onChange={(value) => handleInputChange('projectDescription', value)}
                    saved={savedStates.projectDescription}
                />
                {savedStates.projectTitle ? <div> <Button buttonDesc="Edit" onClick={handleEdit} /> <Button buttonDesc="Add Another" /> </div> : <Button buttonDesc="Save" onClick={handleSave} />}
             </div>
        </div>
    ) 
}

Projects.propTypes = {
    updateFormData: PropTypes.func,
    formData: PropTypes.object
  };

export default Projects;