import "../styles/AddButton.css"
import plus from "../assets/plus.png"
import minus from "../assets/minus.png"
import PropTypes from 'prop-types';
import { useState } from 'react';

function AddButton({addTitle, onClick}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
        onClick();
    };

    return (
        <div className="addBox" onClick={handleClick}>
            <h3>Add {addTitle}</h3>
            <img src={isExpanded ? plus : minus} alt={isExpanded ? "Add" : "Close"} />
        </div>
    )
}

AddButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    addTitle: PropTypes.string
}

export default AddButton
