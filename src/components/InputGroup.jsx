import PropTypes from 'prop-types';
import '../styles/InputGroup.css'

function InputGroup({inputTitle, inputType}) {
    return (
        <div className='inputBox'>
            <h4>{inputTitle}</h4>
            <input className='input' type={inputType}></input>
        </div>
    )
}

InputGroup.propTypes = {
    inputTitle: PropTypes.string,
    inputType: PropTypes.string,
};

export default InputGroup