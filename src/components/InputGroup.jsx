import PropTypes from 'prop-types';
import '../styles/InputGroup.css';

function InputGroup({ inputTitle, inputType, value, onChange, saved }) {
  const inputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className='inputBox'>
      <h4 style={{ textDecoration: 'underline' }}>{inputTitle}</h4>
        {saved ? <div className='savedInfo'>{value}</div> : <input
          className='input'
          type={inputType}
          value={value}
          onChange={inputChange}
        />}
    </div>
  );
}

InputGroup.propTypes = {
  inputTitle: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  saved: PropTypes.bool
};

export default InputGroup;
