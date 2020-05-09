import React, {Component} from 'react';

class Resume extends Component {
    render() {

        if (this.props.data) {
            var skillmessage = this.props.data.skillmessage;
            var education = this.props.data.education.map(function (education) {
                return <div key={education.school}><h3>{education.school}</h3>
                    <p className="info">{education.major} | {education.minor}<span>&bull;</span><em
                        className="date">{education.graduated}<br/>
                        <span>{education.program}</span><br/><span className="gpa">{education.gpa}</span></em>
                    </p>
                    <p>{education.description}</p>
                    </div>
                })

            var experience = this.props.data.experience.map(function (experience) {
                return <div key={experience.company}><h3>{experience.company}</h3>
                    <p className="info">{experience.title}<span>&bull;</span> <em
                        className="date">{experience.years}</em></p>
                    <p>{experience.description}</p>
                </div>
            })

            var leadership = this.props.data.leadership.map(function (leadership) {
                return <div key={leadership.activity}><h3>{leadership.activity}</h3>
                    <p className="info">{leadership.title}
                        <span>&bull;</span><em className="date">{leadership.location}</em>
                        <span>&bull;</span> <em className="date">{leadership.years}</em></p>
                    <p>{leadership.description}</p></div>
            })

            var skills = this.props.data.skills.map(function (skills) {
                var className = 'bar-expand ' + skills.name.toLowerCase();
                return <li key={skills.name}><span style={{width: skills.level}}
                                                   className={className}></span><em>{skills.name}</em></li>
            })
        }

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row experience">
                    <div className="three columns header-col">
                        <h1><span>Experience</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {experience}
                    </div>
                </div>

                <div className="row leadership">
                    <div className="three columns header-col">
                        <h1><span>Leadership</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {leadership}
                    </div>
                </div>


                {/*<div className="row skill">*/}
                {/*    <div className="three columns header-col">*/}
                {/*        <h1><span>Skills</span></h1>*/}
                {/*    </div>*/}
                {/*    <div className="nine columns main-col">*/}
                {/*        <p>{skillmessage}</p>*/}
                {/*        <div className="bars">*/}
                {/*            <ul className="skills">{skills}</ul>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        );
    }
}

export default Resume;
