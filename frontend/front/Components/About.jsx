import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://typeset.io/resources/content/images/size/w600/2021/10/research-methodology.jpg" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    Forget cluttered shelves and paper files; library systems are transforming how educators and students access and manage academic resources. These digital platforms are like personalized knowledge hubs, packed with features that elevate the learning and research experience within an academic community.<br/>
                        <br/>
                        Our team of dedicated developers and researchers is passionate about revolutionizing the academic experience through innovative technology. With a deep understanding of the challenges faced by educators and students in accessing and managing academic resources, we embarked on a journey to create a cutting-edge Library System. Our mission is to empower users with seamless access to knowledge, enhance collaboration between learners and experts, and ultimately elevate the academic journey for all stakeholders.<br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
