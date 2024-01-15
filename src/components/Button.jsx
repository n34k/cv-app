import PropTypes from 'prop-types';
import "../styles/Button.css"

function Button({buttonDesc, onClick}) {
    return (
        <button className='button' onClick={onClick}>{buttonDesc}</button>
    )
}

Button.propTypes = {
    buttonDesc: PropTypes.string,
    onClick: PropTypes.func
}

export default Button