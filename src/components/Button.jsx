import PropTypes from 'prop-types';
import "../styles/Button.css"

function Button({buttonDesc}) {
    return (
        <button className='button'>{buttonDesc}</button>
    )
}

Button.propTypes = {
    buttonDesc: PropTypes.string
}

export default Button