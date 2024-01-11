import "../styles/InputSection.css"
import AddButton from "./AddButton";
import Button from "./Button";
import InputGroup from "./InputGroup";
import { useState } from "react";

function PersonalDetails() {
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
                />
                <InputGroup
                    inputTitle="Last Name"
                    inputType="text"
                />
                <InputGroup
                    inputTitle="Email"
                    inputType="email"
                />
                <InputGroup
                    inputTitle="Phone Number"
                    inputType="phone"
                />
                <Button
                    buttonDesc="Save"
                />
             </div>
        </div>
    )
}

export default PersonalDetails