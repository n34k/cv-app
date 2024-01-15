import "../styles/Resume.css"

function Resume({formData}) {
    return (
        <div className="resume">
            <p>{formData.firstName} {formData.lastName}</p>
        </div>
    );
}

export default Resume;