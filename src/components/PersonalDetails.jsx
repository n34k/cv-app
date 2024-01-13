import "../styles/InputSection.css"
import PropTypes from 'prop-types';
import AddButton from "./AddButton";
import Button from "./Button";
import InputGroup from "./InputGroup";
import { useState } from "react";

function PersonalDetails({firstName, lastName, email, number, link}) {
    const [inputBoxes, setDisplayInputBoxes] = useState("flex");
    const toggleInputBoxes = () => {
        setDisplayInputBoxes((prevDisplay) => (prevDisplay === "flex" ? "none" : "flex"));
    }

    return (
        <div className="inputSection">
            <AddButton className="addButton" onClick={toggleInputBoxes} addTitle={"Personal Information"}
            />
            <div className="inputBoxes" style={{display: inputBoxes}}>
                <InputGroup
                    inputTitle="First Name"
                    inputType= "text"
                    value={firstName}
                />
                <InputGroup
                    inputTitle="Last Name"
                    inputType="text"
                    value={lastName}
                />
                <InputGroup
                    inputTitle="Email"
                    inputType="email"
                    value={email}
                />
                <InputGroup
                    inputTitle="Phone Number"
                    inputType="phone"
                    value={number}
                />
                <InputGroup
                    inputTitle="Link"
                    inputType="url"
                    value={link}
                />
                <Button
                    buttonDesc="Save"
                />
             </div>
        </div>
    )
}

PersonalDetails.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    link: PropTypes.string,
    number: PropTypes.string
}

export default PersonalDetails