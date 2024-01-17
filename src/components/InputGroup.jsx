import PropTypes from 'prop-types';
import '../styles/InputGroup.css';

function InputGroup({ inputTitle, inputType, value, onChange }) {
  const inputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className='inputBox'>
      <h4>{inputTitle}</h4>
      <input
        className='input'
        type={inputType}
        value={value}
        onChange={inputChange}
      />
    </div>
  );
}

InputGroup.propTypes = {
  inputTitle: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default InputGroup;
