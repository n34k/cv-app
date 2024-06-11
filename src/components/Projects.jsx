import "../styles/InputSection.css"
import InputGroup from "./InputGroup";
import Button from "./Button";
import AddButton from "./AddButton";
import PropTypes from 'prop-types';
import { useState } from "react";

function Projects({ updateFormData, formData} ) {
    const [inputValues, setInputValues] = useState({
        projectTitle: '',
        projectDescription: '',

        projectTitle2: '',
        projectDescription2: ''
    });

    const [savedStates, setSavedStates] = useState({
        projectTitle: '',
        projectDescription: '',

        projectTitle2: '',
        projectDescription2: ''
    });

    const [addAnother, setAddAnother] = useState(false)

    const handleInputChange = (fieldName, value) => {
        setInputValues((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const handleSave = () => {
        formData.projects[0].projectTitle = inputValues.projectTitle;
        formData.projects[0].projectDescription = inputValues.projectDescription;

        formData.projects[1].projectTitle = inputValues.projectTitle2;
        formData.projects[1].projectDescription = inputValues.projectDescription2;
       

        updateFormData();

        setSavedStates({
            projectTitle: true,
            projectDescription: true,

            projectTitle2: true,
            projectDescription2: true
        });
    };

    const handleEdit = () => {
        setSavedStates({
            projectTitle: false,
            projectDescription: false,

            projectTitle2: false,
            projectDescription2: false
        })
    };

    const [inputBoxes, setDisplayInputBoxes] = useState("flex");

    const toggleInputBoxes = () => {
        setDisplayInputBoxes((prevDisplay) => (prevDisplay === "flex" ? "none" : "flex"));
    }

    const addProject = () => {
        setAddAnother(true)
        handleEdit()
    }

    const clear = () => {
        setSavedStates({
            projectTitle: '',
            projectDescription: '',
    
            projectTitle2: '',
            projectDescription2: ''
        })

        setInputValues({
            projectTitle: '',
            projectDescription: '',
    
            projectTitle2: '',
            projectDescription2: ''
        })

        updateFormData()
    }

    return (
        <div className="inputSection">
            <AddButton className="addButton" onClick={toggleInputBoxes} addTitle={"Projects"}
            />
            <h3>Project 1:</h3>
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
             </div>

             {addAnother ? <h3>Education 2:</h3> : ''}

             {addAnother ?
             <div className="inputBoxes" style={{display: inputBoxes}}>
                <InputGroup
                    inputTitle="Project Title"
                    inputType= "text"
                    value={inputValues.projectTitle2}
                    onChange={(value) => handleInputChange('projectTitle2', value)}
                    saved={savedStates.projectTitle2}
                />
                <InputGroup
                    inputTitle="Description"
                    inputType="text"
                    value={inputValues.projectDescription2}
                    onChange={(value) => handleInputChange('projectDescription2', value)}
                    saved={savedStates.projectDescription2}
                />
          </div> 
             : ''}
             {savedStates.projectTitle ? <div> <Button buttonDesc="Edit" onClick={handleEdit} /> 
             {addAnother ? <Button buttonDesc={"Clear"} onClick={clear}/> : <Button buttonDesc="Add Another" onClick={addProject}/>} </div> 
            : <Button buttonDesc="Save" onClick={handleSave}/> }
        </div>
    ) 
}

Projects.propTypes = {
    updateFormData: PropTypes.func,
    formData: PropTypes.object
  };

export default Projects;