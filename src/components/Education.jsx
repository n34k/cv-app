import "../styles/InputSection.css"
import InputGroup from "./InputGroup";
import Button from "./Button";
import AddButton from "./AddButton";
import { useState } from "react";

function Education() {
    const [inputBoxes, setDisplayInputBoxes] = useState("flex");
    const toggleInputBoxes = () => {
        setDisplayInputBoxes((prevDisplay) => (prevDisplay === "flex" ? "none" : "flex"));
    }
    return (
        <div className="inputSection">
            <AddButton className="addButton" addTitle={"Education"} onClick={toggleInputBoxes}
            />
            <div className="inputBoxes" style={{display: inputBoxes}} >
                <InputGroup
                inputTitle="University"
                inputType="text"
                />
                <InputGroup
                inputTitle="Degree"
                inputType="text"
                />
                <InputGroup
                inputTitle="Major"
                inputType="text"
                />
                <InputGroup
                inputTitle="GPA"
                inputType="number"
                />
                <InputGroup
                inputTitle="Start Date"
                inputType="month"
                />
                <InputGroup
                inputTitle="End Date"
                inputType="month"
                />
                <Button
                    buttonDesc="Save"
                />
            </div>
        </div>
    )
    
}

export default Education;