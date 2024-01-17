import  { useState } from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';
import InputGroup from './InputGroup';
import Button from './Button';

function PersonalDetails({  updateFormData }) {
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    number: '',
    link: '',
  });

  const handleInputChange = (fieldName, value) => {
    setInputValues((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  const [inputBoxes, setDisplayInputBoxes] = useState('flex');

  const toggleInputBoxes = () => {
    setDisplayInputBoxes((prevDisplay) => (prevDisplay === 'flex' ? 'none' : 'flex'));
  };  

  const handleSave = () => {
    updateFormData({
      firstName: inputValues.firstName,
      lastName: inputValues.lastName,
      address: inputValues.address,
      email: inputValues.email,
      number: inputValues.number,
      link: inputValues.link
    });
  };

  return (
    <div className="inputSection">
      <AddButton className="addButton" onClick={toggleInputBoxes} addTitle={'Personal Information'} />
      <div className="inputBoxes" style={{ display: inputBoxes }}>
        <InputGroup
            inputTitle="First Name" 
            inputType="text" 
            value={inputValues.firstName}
            onChange={(value) => handleInputChange('firstName', value)} 
        />
        <InputGroup 
            inputTitle="Last Name" 
            inputType="text" 
            value={inputValues.lastName} 
            onChange={(value) => handleInputChange('lastName', value)} 
        />
         <InputGroup 
            inputTitle="Address" 
            inputType="text" 
            value={inputValues.address} 
            onChange={(value) => handleInputChange('address', value)} 
        />
        <InputGroup 
            inputTitle="Email" 
            inputType="email" 
            value={inputValues.email} 
            onChange={(value) => handleInputChange('email', value)}
        />
        <InputGroup 
            inputTitle="Phone Number" 
            inputType="phone" 
            value={inputValues.number} 
            onChange={(value) => handleInputChange('number', value)} 
        />
        <InputGroup 
            inputTitle="Link"
            inputType="url" 
            value={inputValues.link} 
            onChange={(value) => handleInputChange('link', value)} 
        />
        <Button buttonDesc="Save" onClick={handleSave} />
      </div>
    </div>
  );
}

PersonalDetails.propTypes = {
  updateFormData: PropTypes.func
};

export default PersonalDetails;
