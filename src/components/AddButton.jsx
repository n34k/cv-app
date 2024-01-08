import "../styles/AddButton.css"
import plus from "../assets/plus.png"
import PropTypes from 'prop-types';

function AddButton({addTitle}) {
    
    return (
        <div className="addBox">
            <h4>Add {addTitle}</h4>
            <img src={plus} alt="Add" />
        </div>
    )
}

AddButton.propTypes = {
    addTitle: PropTypes.string
}

export default AddButton