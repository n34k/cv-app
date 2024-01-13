import "../styles/InputSection.css"
import InputGroup from "./InputGroup";
import Button from "./Button";
import AddButton from "./AddButton";
import { useState } from "react";

function Experience() {
    const [inputBoxes, setDisplayInputBoxes] = useState("flex");
    const toggleInputBoxes = () => {
        setDisplayInputBoxes((prevDisplay) => (prevDisplay === "flex" ? "none" : "flex"));
    }

    return (
        <div className="inputSection">
            <AddButton className="addButton" onClick={toggleInputBoxes} addTitle={"Work Experience"}
            />
            <div className="inputBoxes" style={{display: inputBoxes}}>
                <InputGroup
                    inputTitle="Job Title"
                    inputType= "text"
                />
                <InputGroup
                    inputTitle="Description"
                    inputType="text"
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

export default Experience;