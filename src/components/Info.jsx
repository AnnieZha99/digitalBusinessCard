export default function Info() {
    const openEmail = () => {
    window.location.href = 'mailto:yz337@cornell.edu';
     };

    const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/annie-zha-b7a9a3193/', '_blank');
    };
    
    return (
        <>
        <img src="src\assets\Headshot.jpg" alt="Annie Zha" className="myImage" />
        <h1 className="myName">Annie Zha</h1>
        <p className="myTitle">Systems Engineer / Software Developer</p>
        <p className="myWebsite">+1 607-592-8675</p>
        <div className="myButtons">
            <button className="myEmailButton"  onClick={openEmail}>
                <span class="btn-content">
                    <img src="src\assets\Mail.png" alt="Email Icon" className="emailIcon" />
                    Email
                </span>
            </button>
            <button className="myLinkedInButton" onClick={openLinkedIn}>
                <span class="btn-content">
                    <img src="src\assets\linkedin.png" alt="LinkedIn Icon" className="linkedinIcon" />
                    <span>LinkedIn</span>
                </span>
            </button>
        </div>
        
        </>
    )
}