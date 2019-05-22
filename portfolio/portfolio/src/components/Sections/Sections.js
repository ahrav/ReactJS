import React from 'react'
import Section from './Section/Section'

const sections = props => {
    return (
        <React.Fragment>
            <Section>
                <section id="one" className="wrapper spotlight style1">
                    <div className="inner">
                        <img className="image" src="images/profile.jpeg" alt="" />
                        <div className="content">
                            <h2 className="major">About Me</h2>
                            <p>I am a full-stack engineer that loves to code. I primarily work with Python/Django on the back-end and ReactJS on the front-end. I want to help build things that will make a difference.</p>
                        </div>
                    </div>
                </section>
            </Section>
            <Section>
                <section id="two" className="wrapper alt spotlight style2">
                    <div className="inner">
                        <img className="image" src="images/django.jpeg" alt="" />
                        <div className="content">
                            <h2 className="major">Jr. Software Engineer at SonoSim</h2>
                            <p>I lead a project in order to restructure our entire Django infrastructure. I also developed a handful of user management tools in order to increase efficiency. Converted a user management application from Javascript to ReactJS. Complete user migration overhaul in order to remove dependency on a third part LMS provider.</p>
                        </div>
                    </div>
                </section>
            </Section>
            <Section>
                <section id="three" className="wrapper spotlight style3">
                    <div className="inner">
                        <img className="image" src="images/react.png" alt="" />
                        <div className="content">
                            <h2 className="major">QA Engineer</h2>
                            <p>Created automated test scripts using Sikuli, Tesseract and Postman. Improved QA efficiency from 100% manual testing to 40% manual testing through automation tools. Incorporated behavioral driven development to illustrate project features and requirements to increase efficiency and consistency of testing.</p>
                        </div>
                    </div>
                </section>
            </Section>
      </ React.Fragment>
    )
}

export default sections