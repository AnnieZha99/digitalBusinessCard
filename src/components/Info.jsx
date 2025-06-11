export default function Info() {
    return (
        <>
        <img src="src\assets\Headshot.jpg" alt="Annie Zha" className="myImage" />
        <h1 className="myName">Annie Zha</h1>
        <p className="myTitle">Systems Engineer / Software Developer</p>
        <p className="myWebsite">yz337@cornell.edu</p>
        <div className="myButtons">
            <button className="myEmailButton">
                <span class="btn-content">
                    <img src="src\assets\Mail.png" alt="Email Icon" className="emailIcon" />
                    Email
                </span>
            </button>
            <button className="myLinkedInButton">
                <span class="btn-content">
                    <img src="src\assets\linkedin.png" alt="LinkedIn Icon" className="linkedinIcon" />
                    <span>LinkedIn</span>
                </span>
            </button>
        </div>
        
        </>
    )
}