import  { useState } from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';
import InputGroup from './InputGroup';
import Button from './Button';

function PersonalDetails({ formData, onSave, handleInputChange }) {
  const [inputBoxes, setDisplayInputBoxes] = useState('flex');
  const toggleInputBoxes = () => {
    setDisplayInputBoxes((prevDisplay) => (prevDisplay === 'flex' ? 'none' : 'flex'));
  };  

  const handleSave = () => {
    onSave();
  };

  return (
    <div className="inputSection">
      <AddButton className="addButton" onClick={toggleInputBoxes} addTitle={'Personal Information'} />
      <div className="inputBoxes" style={{ display: inputBoxes }}>
        <InputGroup
            inputTitle="First Name" 
            inputType="text" value={formData.firstName} 
            onChange={(value) => handleInputChange('firstName', value)} 
        />
        <InputGroup 
            inputTitle="Last Name" 
            inputType="text" value={formData.lastName} 
            onChange={(value) => handleInputChange('lastName', value)} 
        />
        <InputGroup inputTitle="Email" 
            inputType="email" 
            value={formData.email} 
            onChange={(value) => handleInputChange('email', value)}
        />
        <InputGroup 
            inputTitle="Phone Number" 
            inputType="phone" 
            value={formData.number} 
            onChange={(value) => handleInputChange('number', value)} 
        />
        <InputGroup 
            inputTitle="Link"
            inputType="url" 
            value={formData.link} 
            onChange={(value) => handleInputChange('link', value)} 
        />
        <Button buttonDesc="Save" onClick={handleSave} />
      </div>
    </div>
  );
}

PersonalDetails.propTypes = {
  formData: PropTypes.object,
  onSave: PropTypes.func,
  handleInputChange: PropTypes.func
};

export default PersonalDetails;
