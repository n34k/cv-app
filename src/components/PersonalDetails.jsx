import "../styles/InputSection.css"
import Button from "./Button";
import InputGroup from "./InputGroup";

function PersonalDetails() {
    return (
        <div className="inputSection">
            <h3>Personal Information</h3>
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
                buttonDesc="Submit"
            />
         </div>   
    )
}

export default PersonalDetails