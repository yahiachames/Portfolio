import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4} className='resume-left-col'>
            <div style={{ textAlign: "center" }}>
              <img
                src='https://cdn4.iconfinder.com/data/icons/people-avatar-1-2/512/7-512.png'
                alt='avatar'
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}> Chameseddine Yahia </h2>
            <h4 style={{ color: "grey" }}> Research and development engineer </h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              My name is chames yahia, i'm 22 years old, i have a bachelor degree from the
higher institute of technology and communication, i'm obsessed with new
technologies and AI (artificial intelligence), during my studies i was a team
leader in the iset microsoft 'com club, and web/mobile instructor for 2 years
and now i'm a machine learning engineer for 1 year, i like to lead and i like to
make people succeed, i've got a competitive personality, hard working and a
real creativity mixed with mathematical logic{" "}
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Tunisia,Ain zaghouan 2043 </p>
            <h5>Phone</h5>
            <p>+21650652481</p>
            <h5>Email</h5>
            <p>yahiachames@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2018}
              schoolName='BACCALAUREATE MATHEMATICS'
              schoolDescription="Les Berges du Lac High School"
            />

            <Education
              startYear={2018}
              endYear={2021}
              schoolName='higher institute of information and communication technologies'
              schoolDescription="MANAGEMENT OF INFORMATION AND COMMUNICATION
TECHNOLOGIES
- final year of graduation: 2021
COURSES
Management/ web/ mobile développement / Marketing / Business
Intelligence/ data science / big data"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              jobName='internship developer react and GraphQL 1 month'
              jobDescription="- create GraphQl Apis
- integrate GraphQL with react
- replace redux with GraphQL using Apollo"
              startYear={2019}
              endYear={2019}
            />
             <Experience
              jobName='part-time web instructor'
              jobDescription="GoMyCode -
              JANUARY 2019 - (2 YEARS)
              instruct students to learn web development ( html/css/js)
instruct students to learn Front-End web development ReactJS
instruct Students to learn Back-End with NodeJS"
              startYear={2019}
              endYear={2021}
            />
                         <Experience
              jobName='internship Ai developer 4 months'
              jobDescription="HANDWRITTEN APPLICATION(PYTHON,DJANGO,DEEPLEARNING,
LINUX , DOCKER , TESSERACT-OCR , OPENCV)"
              startYear={2021}
              endYear={2021}
            />
                                     <Experience
              jobName='Research and development engineer'
              jobDescription="TENSORFLOW, KERAS, PYTORCH , NLP , CNN , RNN , PYTHON , DJANGO"
              startYear={2021}
              endYear={2022}
            />


            <h2>Skills</h2>
                        <Skills skill='python' progress={70} />
                          <Skills skill='django' progress={70} />
                                                    <Skills skill='docker' progress={80} />
                                                     <Skills skill='tensorflow' progress={60} />
                                                      <Skills skill='opencv' progress={60} />



            <Skills skill='JavaScript' progress={80} />
            <Skills skill='HTML' progress={80} />
            <Skills skill='CSS' progress={65} />
            <Skills skill='ReactJs' progress={85} />
             <Skills skill='ReactNative' progress={85} />
            <Skills skill='NodeJs' progress={65} />
            <Skills skill='ExpressJs' progress={65} />
            <Skills skill='MongoDB' progress={85} />
             <Skills skill='Arabic' progress={100} />
              <Skills skill='French' progress={85} />
               <Skills skill='English' progress={85} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutUs;
