import  { useState } from 'react';
import PropTypes from 'prop-types';
import InputGroup from './InputGroup';
import Button from './Button';
import AddButton from './AddButton';

function Skills({ updateFormData }) {
    const [inputValues, setInputValues] = useState({
        skills: ''
    });

    const [savedStates, setSavedStates] = useState({
        skills: false
    });

    const handleInputChange = (fieldName, value) => {
        setInputValues((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const handleSave = () => {
        updateFormData({
            skills: inputValues.skills
        });

        setSavedStates({
            skills: true
        });
    };

    const handleEdit = () => {
        setSavedStates({
            skills: false
        });
    };

    const [inputBoxes, setDisplayInputBoxes] = useState('flex');

    const toggleInputBoxes = () => {
        setDisplayInputBoxes((prevDisplay) => (prevDisplay === 'flex' ? 'none' : 'flex'));
    };

    return (
        <div className="inputSection">
            <AddButton className="addButton" onClick={toggleInputBoxes} addTitle={'Skills'} />
            <div className="inputBoxes" style={{ display: inputBoxes }}>
                <InputGroup
                    inputTitle="Skills:"
                    inputType="text"
                    value={inputValues.skills}
                    onChange={(value) => handleInputChange('skills', value)}
                    saved={savedStates.skills}
                />
                {savedStates.skills ? (
                    <Button buttonDesc="Edit" onClick={handleEdit} />
                ) : (
                    <Button buttonDesc="Save" onClick={handleSave} />
                )}
            </div>
        </div>
    );
}

Skills.propTypes = {
    updateFormData: PropTypes.func
};

export default Skills;