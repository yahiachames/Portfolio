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
            <h2 style={{ paddingTop: "2em" }}> Chames Yahia </h2>
            <h4 style={{ color: "grey" }}> Developer </h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              On sait depuis longtemps que travailler avec du texte lisible et
              contenant du sens est source de distractions, et empêche de se
              concentrer sur la mise en page elle-même. L'avantage du Lorem
              Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.'{" "}
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
              startYear={2019}
              endYear={2021}
              schoolName='My First University'
              schoolDescription="Contrairement à une opinion répandue, 
                le Lorem Ipsum n'est pas simplement du texte aléatoire. 
                Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans."
            />

            <Education
              startYear={2021}
              endYear={2023}
              schoolName='My Second University'
              schoolDescription="Contrairement à une opinion répandue, 
                le Lorem Ipsum n'est pas simplement du texte aléatoire. 
                Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              jobName='Full Stack MERN junior Dev'
              jobDescription="Contrairement à une opinion répandue, 
                le Lorem Ipsum n'est pas simplement du texte aléatoire. 
                Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans."
              startYear={2018}
              endYear={2019}
            />

            <h2>Skills</h2>
            <Skills skill='JavaScript' progress={45} />
            <Skills skill='HTML' progress={80} />
            <Skills skill='CSS' progress={65} />
            <Skills skill='ReactJs' progress={85} />
            <Skills skill='NodeJs' progress={65} />
            <Skills skill='ExpressJs' progress={65} />
            <Skills skill='MongoDB' progress={85} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutUs;
