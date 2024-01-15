import PropTypes from 'prop-types';
import '../styles/InputGroup.css';

function InputGroup({ inputTitle, inputType, value, onChange }) {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className='inputBox'>
      <h4>{inputTitle}</h4>
      <input
        className='input'
        type={inputType}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

InputGroup.propTypes = {
  inputTitle: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputGroup;
