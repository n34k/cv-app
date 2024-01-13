import PropTypes from 'prop-types';
import '../styles/InputGroup.css'

function InputGroup({inputTitle, inputType, value}) {
    return (
        <div className='inputBox'>
            <h4>{inputTitle}</h4>
            <input 
                className='input' 
                type={inputType}>
                value={value}
            </input>
        </div>
    )
}

InputGroup.propTypes = {
    inputTitle: PropTypes.string,
    inputType: PropTypes.string,
    value: PropTypes.string
};

export default InputGroup