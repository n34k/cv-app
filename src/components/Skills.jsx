import "../styles/InputSection.css"
import InputGroup from "./InputGroup";
import Button from "./Button";
import AddButton from "./AddButton";
import { useState } from "react";

function Skills() {
    const [inputBoxes, setDisplayInputBoxes] = useState("flex");
    const toggleInputBoxes = () => {
        setDisplayInputBoxes((prevDisplay) => (prevDisplay === "flex" ? "none" : "flex"));
    }

    return (
        <div className="inputSection">
            <AddButton className="addButton" onClick={toggleInputBoxes} addTitle={"Skills"}
            />
            <div className="inputBoxes" style={{display: inputBoxes}}>
                <InputGroup
                    inputTitle="Skills"
                    inputType= "text"
                />
                <Button
                    buttonDesc="Save"
                />
             </div>
        </div>
    ) 
}

export default Skills;