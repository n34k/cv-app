import "../styles/Resume.css"

function Resume({formData}) {
    return (
        <div className="resume">
            <div className="personalInfo">
                <p className="name">{formData.firstName} {formData.lastName}</p>
                <p className="city">{formData.address}</p>
                <p className="email">{formData.email} | {formData.number} {formData.link === '' ? '' : '|'} <a href="https://n34k.github.io/homepage/">{formData.link}</a></p>
            </div>
            
        </div>
    );
}

export default Resume;