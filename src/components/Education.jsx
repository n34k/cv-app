import "../styles/InputSection.css"
import InputGroup from "./InputGroup";
import Button from "./Button";
import AddButton from "./AddButton";
import PropTypes from 'prop-types';
import { useState } from "react";

function Education({ updateFormData, formData }) {
    const [inputValues, setInputValues] = useState({
        university: '',
        degree: '',
        major: '',
        GPA: '',
        startDate: '',
        endDate: '',

        university2: '',
        degree2: '',
        major2: '',
        GPA2: '',
        startDate2: '',
        endDate2: ''
    });

    const [savedStates, setSavedStates] = useState({ 
        university: false,
        degree: false,
        major: false,
        GPA: false,
        startDate: false,
        endDate: false,

        university2: false,
        degree2: false,
        major2: false,
        GPA2: false,
        startDate2: false,
        endDate2: false,
    });

    const [addAnother, setAddAnother] = useState(false)

     const handleInputChange = (fieldName, value) => {
        setInputValues((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const handleSave = () => {
        formData.education[0].university = inputValues.university;
        formData.education[0].degree = inputValues.degree;
        formData.education[0].major = inputValues.major;
        formData.education[0].GPA = inputValues.GPA;
        formData.education[0].startDate = inputValues.startDate;
        formData.education[0].endDate = inputValues.endDate;

        formData.education[1].university = inputValues.university2;
        formData.education[1].degree = inputValues.degree2;
        formData.education[1].major = inputValues.major2;
        formData.education[1].GPA = inputValues.GPA2;
        formData.education[1].startDate = inputValues.startDate2;
        formData.education[1].endDate = inputValues.endDate2;

        updateFormData();
        
        setSavedStates({
          university: true,
          degree: true,
          major: true,
          GPA: true,
          startDate: true,
          endDate: true,

          university2: true,
          degree2: true,
          major2: true,
          GPA2: true,
          startDate2: true,
          endDate2: true,
        });
    }

    const handleEdit = () => {
        setSavedStates({
            university: false,
            degree: false,
            major: false,
            GPA: false,
            startDate: false,
            endDate: false,

            university2: false,
            degree2: false,
            major2: false,
            GPA2: false,
            startDate2: false,
            endDate2: false
        }) 
    }

    const [inputBoxes, setDisplayInputBoxes] = useState("flex");

    const toggleInputBoxes = () => {
        setDisplayInputBoxes((prevDisplay) => (prevDisplay === "flex" ? "none" : "flex"));
    }

    const addEducation = () => {
        setAddAnother(true)
        handleEdit()
    }

    const clear = () => {
        setAddAnother(false)

        setSavedStates({
            university: '',
            degree: '',
            major: '',
            GPA: '',
            startDate: '',
            endDate: '',

            university2: '',
            degree2: '',
            major2: '',
            GPA2: '',
            startDate2: '',
            endDate2: ''
        })

        setInputValues({
            university: '',
            degree: '',
            major: '',
            GPA: '',
            startDate: '',
            endDate: '',

            university2: '',
            degree2: '',
            major2: '',
            GPA2: '',
            startDate2: '',
            endDate2: ''
        })

        updateFormData()
    }

    return (
        <div className="inputSection">
            <AddButton className="addButton" addTitle={"Education"} onClick={toggleInputBoxes}/>
            <div className="inputBoxes" style={{display: inputBoxes}} >
                <h3>Education 1:</h3>
                <InputGroup
                    inputTitle="University:"
                    inputType="text"
                    value={inputValues.university}
                    onChange={(value) => handleInputChange('university', value)}
                    saved={savedStates.university}
                />
                <InputGroup
                    inputTitle="Degree:"
                    inputType="text"
                    value={inputValues.degree}
                    onChange={(value) => handleInputChange('degree', value)}
                    saved={savedStates.degree}
                />
                <InputGroup
                    inputTitle="Major:"
                    inputType="text"
                    value={inputValues.major}
                    onChange={(value) => handleInputChange('major', value)}
                    saved={savedStates.major}
                />
                <InputGroup
                    inputTitle="GPA:"
                    inputType="number"
                    value={inputValues.GPA}
                    onChange={(value) => handleInputChange('GPA', value)}
                    saved={savedStates.GPA}
                />
                <InputGroup
                    inputTitle="Start Date:"
                    inputType="month"
                    value={inputValues.startDate}
                    onChange={(value) => handleInputChange('startDate', value)}
                    saved={savedStates.startDate}
                />
                <InputGroup
                    inputTitle="End Date:"
                    inputType="month"
                    value={inputValues.endDate}
                    onChange={(value) => handleInputChange('endDate', value)}
                    saved={savedStates.endDate}
                />
                {savedStates.university ? <div> <Button buttonDesc="Edit" onClick={handleEdit} /> 
                {addAnother ? <Button buttonDesc={"Clear"} onClick={clear}/> : <Button buttonDesc="Add Another" onClick={addEducation}/>} </div> 
                : <Button buttonDesc="Save" onClick={handleSave}/> }  
            </div>

            {addAnother ? 
            <div className="inputBoxes" style={{display: inputBoxes}} >
                {addAnother ? <h3>Education 2:</h3> : ''}
                <InputGroup
                    inputTitle="University:"
                    inputType="text"
                    value={inputValues.university2}
                    onChange={(value) => handleInputChange('university2', value)}
                    saved={savedStates.university2}
                />
                <InputGroup
                    inputTitle="Degree:"
                    inputType="text"
                    value={inputValues.degree2}
                    onChange={(value) => handleInputChange('degree2', value)}
                    saved={savedStates.degree2}
                />
                <InputGroup
                    inputTitle="Major:"
                    inputType="text"
                    value={inputValues.major2}
                    onChange={(value) => handleInputChange('major2', value)}
                    saved={savedStates.major2}
                />
                <InputGroup
                    inputTitle="GPA:"
                    inputType="number"
                    value={inputValues.GPA2}
                    onChange={(value) => handleInputChange('GPA2', value)}
                    saved={savedStates.GPA2}
                />
                <InputGroup
                    inputTitle="Start Date:"
                    inputType="month"
                    value={inputValues.startDate2}
                    onChange={(value) => handleInputChange('startDate2', value)}
                    saved={savedStates.startDate2}
                />
                <InputGroup
                    inputTitle="End Date:"
                    inputType="month"
                    value={inputValues.endDate2}
                    onChange={(value) => handleInputChange('endDate2', value)}
                    saved={savedStates.endDate2}
                />
                {savedStates.university ? <div> <Button buttonDesc="Edit" onClick={handleEdit} /> 
                {addAnother ? <Button buttonDesc={"Clear"} onClick={clear}/> : <Button buttonDesc="Add Another" onClick={addEducation}/>} </div> 
                : <Button buttonDesc="Save" onClick={handleSave}/> }
            </div> : ''}
        </div>
    )}

Education.propTypes = {
    updateFormData: PropTypes.func,
    formData: PropTypes.object
  };

export default Education;