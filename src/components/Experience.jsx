import "../styles/InputSection.css"
import InputGroup from "./InputGroup";
import Button from "./Button";
import AddButton from "./AddButton";
import PropTypes from 'prop-types';
import { useState } from "react";

function Experience({ updateFormData, formData }) {
    const [inputValues, setInputValues] = useState({
        jobName: '',
        description: '',
        startDate: '',
        endDate: '',

        jobName2: '',
        description2: '',
        startDate2: '',
        endDate2: ''
    });

    const [savedStates, setSavedStates] = useState({ 
        jobName: false,
        description: false,
        startDate: false,
        endDate: false,

        jobName2: false,
        description2: false,
        startDate2: false,
        endDate2: false
    });

    const [addAnother, setAddAnother] = useState(false)

    const handleInputChange = (fieldName, value) => {
        setInputValues((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const handleSave = () => {
        formData.experience[0].jobName = inputValues.jobName;
        formData.experience[0].description = inputValues.description;
        formData.experience[0].startDate = inputValues.startDate;
        formData.experience[0].endDate = inputValues.endDate;

        formData.experience[1].jobName = inputValues.jobName2;
        formData.experience[1].description = inputValues.description2;
        formData.experience[1].startDate = inputValues.startDate2;
        formData.experience[1].endDate = inputValues.endDate2;

        updateFormData();
        
        setSavedStates({
          jobName: true,
          description: true,
          startDate: true,
          endDate: true,

          jobName2: true,
          description2: true,
          startDate2: true,
          endDate2: true,
        });
    }

    const handleEdit = () => {
        setSavedStates({
          jobName: false,
          description: false,
          startDate: false,
          endDate: false,

          jobName2: false,
          description2: false,
          startDate2: false,
          endDate2: false
        })
    }

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
            jobName: '',
            description: '',
            startDate: '',
            endDate: '',

            jobName2: '',
            description2: '',
            startDate2: '',
            endDate2: ''
        })

        setInputValues({
            jobName: '',
            description: '',
            startDate: '',
            endDate: '',

            jobName2: '',
            description2: '',
            startDate2: '',
            endDate2: ''
        })

        updateFormData()
    }

    return (
        <div className="inputSection">
            <AddButton className="addButton" onClick={toggleInputBoxes} addTitle={"Work Experience"}
            />
            <h3>Experience 1:</h3>
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
             </div>
             {addAnother ? <h3>Experience 2:</h3> : ''}

             {addAnother ? 
             <div className="inputBoxes" style={{display: inputBoxes}}>
             <InputGroup
                 inputTitle="Job Title"
                 inputType= "text"
                 value={inputValues.jobName2}
                 onChange={(value) => handleInputChange('jobName2', value)}
                 saved={savedStates.jobName2}
             />
             <InputGroup
                 inputTitle="Description"
                 inputType="text"
                 value={inputValues.description2}
                 onChange={(value) => handleInputChange('description2', value)}
                 saved={savedStates.description2}
             />
             <InputGroup
                 inputTitle="Start Date"
                 inputType="month"
                 value={inputValues.startDate2}
                 onChange={(value) => handleInputChange('startDate2', value)}
                 saved={savedStates.startDate2}
             />
             <InputGroup
                 inputTitle="End Date"
                 inputType="month"
                 value={inputValues.endDate2}
                 onChange={(value) => handleInputChange('endDate2', value)}
                 saved={savedStates.endDate2}
             />
          </div>
             : ''}
             {savedStates.jobName ? <div> <Button buttonDesc="Edit" onClick={handleEdit} /> 
             {addAnother ? <Button buttonDesc={"Clear"} onClick={clear}/> : <Button buttonDesc="Add Another" onClick={addProject}/>} </div> 
            : <Button buttonDesc="Save" onClick={handleSave}/> }
        </div>
    ) 
}

Experience.propTypes = {
    updateFormData: PropTypes.func,
    formData: PropTypes.object
  };

export default Experience;